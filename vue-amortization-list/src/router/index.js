import { createRouter, createWebHistory } from "vue-router";
import { AmortizationPage, Home } from "../pages";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      {
        path: "amortization",
        name: "AmortizationPage",
        component: AmortizationPage,
      },
      {
        path: "/",
        redirect: "/amortization",
      },
    ],
  },
];

const router = createRouter({ history: createWebHistory(), routes });
export default router;
