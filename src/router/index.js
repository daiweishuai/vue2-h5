import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/home/index.vue";
import Order from "@/views/order/index.vue";
import Mime from "@/views/mime/index.vue";
import Classifica from "@/views/classifica/index.vue";
import commodityDetail from "@/views/commodityDetail/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "home",
    component: Home,
  },
  {
    path: "/order",
    name: "home",
    component: Order,
  },
  {
    path: "/mime",
    name: "home",
    component: Mime,
  },
  {
    path: "/classifica",
    name: "classifica",
    component: Classifica,
  },
  {
    path: "/commodityDetail",
    name: "commodityDetail",
    component: commodityDetail,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
