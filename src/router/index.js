import Vue from "vue";
import VueRouter from "vue-router";
import AppHome from "@/components/AppHome.vue";
import Ad from "@/components/Ads/Ad.vue";
import AdList from "@/components/Ads/AdList.vue";
import newAd from "@/components/Ads/NewAd.vue";
import Login from "@/components/Auth/Login.vue";
import Registration from "@/components/Auth/Registration.vue";
import Orders from "@/components/User/Orders.vue";

Vue.use(VueRouter);

const routes = [
  { path: "", name: "home", component: AppHome },
  { path: "/ad/:id", name: "ad", component: Ad },
  { path: "/list", name: "adlist", component: AdList },
  { path: "/new", name: "newad", component: newAd },
  { path: "/login", name: "login", component: Login },
  { path: "/registration", name: "registration", component: Registration },
  { path: "/orders", name: "orders", component: Orders },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
