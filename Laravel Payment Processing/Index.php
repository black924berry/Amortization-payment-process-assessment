<? php

namespace App\Services;

use App\Models\Amortization;
use App\Models\Payment;
use Carbon\Carbon;
use Illuminate\Support\Facades\Mail;

class PaymentService {
    public function processPaymentsBeforeDate(Carbon $date) {
        $amortizations = Amortization:: where('schedule_date', '<=', $date)
            -> where('state', '!=', 'paid')
            ->with (['project', 'project.wallet', 'project.promoter', 'payments'])
        -> get();

        foreach($amortizations as $amortization) {
            $project = $amortization -> project;
            $walletBalance = $project -> wallet -> balance;
            $totalAmount = $amortization -> amount;

            if ($amortization -> schedule_date < Carbon:: now()) {
                $this -> sendDelayedPaymentEmails($project -> promoter, $amortization);
                $this -> sendDelayedPaymentEmailsToProfiles($amortization);
            }

            if ($walletBalance >= $totalAmount) {
                $this -> processPayment($amortization, $project);
                $this -> markAmortizationAsPaid($amortization);
            }
        }
    }

    private function sendDelayedPaymentEmails($promoter, $amortization) {
        // Send email to promoter notifying about delayed payment
        Mail:: to($promoter -> email) -> send(new DelayedPaymentEmail($promoter, $amortization));
    }

    private function sendDelayedPaymentEmailsToProfiles($amortization) {
        // Send email to profiles associated with the payment
        foreach($amortization -> payments as $payment) {
            $profile = $payment -> profile;
            Mail:: to($profile -> email) -> send(new DelayedPaymentEmail($profile, $amortization));
        }
    }

    private function processPayment($amortization, $project) {
        $wallet = $project -> wallet;
        $paymentAmount = $amortization -> amount;

        $wallet -> balance -= $paymentAmount;
        $wallet -> save();

        Payment:: create([
            'amortization_id' => $amortization -> id,
            'amount' => $paymentAmount,
            'profile_id' => $project -> profile_id,
            'state' => 'paid',
        ]);
    }

    private function markAmortizationAsPaid($amortization) {
        $amortization -> state = 'paid';
        $amortization -> save();
    }
}