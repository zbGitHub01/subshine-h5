import { createRouter, createWebHistory } from "vue-router";

/**
 * meta
 * @fixed 是否固定header
 * @hiddenInput 是否隐藏底部表单
 * */

const routes = [
  {
    path: "/",
    redirect: "/home",
    component: () => import("@/layout/index.vue"),
    children: [
      {
        path: "/home",
        name: "Home",
        component: () => import("@/views/home/index.vue"),
        meta: { title: "首页" },
      },
      {
        path: "/purchase",
        name: "Purchase",
        component: () => import("@/views/business/Purchase.vue"),
        meta: { title: "资产收购" },
      },
      {
        path: "/appraisal",
        name: "Appraisal",
        component: () => import("@/views/business/Appraisal.vue"),
        meta: { title: "资产评估服务" },
      },
      {
        path: "/loan",
        name: "Loan",
        component: () => import("@/views/business/Loan.vue"),
        meta: { title: "贷后全流程服务" },
      },
      {
        path: "/services",
        name: "Services",
        component: () => import("@/views/business/Services.vue"),
        meta: { title: "数据服务" },
      },
      {
        path: "/sumeru",
        name: "Sumeru",
        component: () => import("@/views/business/Sumeru.vue"),
        meta: { title: "须弥系统" },
      },
      {
        path: "/news",
        name: "News",
        component: () => import("@/views/news/index.vue"),
        meta: { title: "新闻资讯", hiddenInput: true },
      },
      {
        path: "/news-detail",
        name: "NewsDetail",
        component: () => import("@/views/news/Detail.vue"),
        meta: { title: "新闻详情",fixed:true, hiddenInput: true },
      },
      {
        path: "/debt",
        name: "Debt",
        component: () => import("@/views/debt/index.vue"),
        meta: { title: "债务查询" },
      },
      {
        path: "/about",
        name: "About",
        component: () => import("@/views/about/index.vue"),
        meta: { title: "关于东岸" },
      },
      {
        path: "/contact",
        name: "Contact",
        component: () => import("@/views/contact/index.vue"),
        meta: { title: "联系我们", hiddenInput: true },
      },
    ],
  },
  {
    path: "/sunshine",
    redirect: "/homePage",
    component: () => import("@/views/sunshine/index.vue"),
    children: [
      {
        path: "/homePage",
        name: "HomePage",
        component: () => import("@/views/sunshine/homePage/index.vue"),
      },
      {
        path: "/details",
        name: "Details",
        component: () => import("@/views/sunshine/details/index.vue"),
      },
      {
        path: "/signup",
        name: "Signup",
        component: () => import("@/views/sunshine/details/sign/index.vue"),
      },
    ]
  },
  {
    path: "/sunshine",
    children: [
      {
        path: "/intro",
        name: "Intro",
        component: () => import("@/views/sunshine/details/intro/index.vue"),
      }
    ]
  },
  {
    path: "/sunshine",
    children: [
      {
        path: "/activity",
        name: "Activity",
        component: () => import("@/views/sunshine/details/activity/index.vue"),
      }
    ]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

export default router;
