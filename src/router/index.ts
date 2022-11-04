import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import EncodeMsg from "@/views/EncodeMsg.vue";
import DecodeMsg from "@/views/DecodeMsg.vue";
import DecodedKeysFinalDetails from "@/views/DecodedKeysFinalDetails.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/decode",
      name: "decode",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: DecodeMsg, // () => import("../views/AboutView.vue"),
    },
    {
      path: "/encode",
      name: "encode",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: EncodeMsg,
    },
    {
      path: "/decoded-key-details",
      name: "decoded-key-details",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: DecodedKeysFinalDetails,
    },
  ],
});

export default router;
