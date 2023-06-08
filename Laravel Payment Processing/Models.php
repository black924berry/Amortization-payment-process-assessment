<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    public function amortizations()
    {
        return $this->hasMany(Amortization::class);
    }

    public function wallet()
    {
        return $this->belongsTo(Wallet::class);
    }

    public function promoter()
    {
        return $this->belongsTo(Promoter::class);
    }
}
