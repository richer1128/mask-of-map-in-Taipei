import { createRouter, createWebHashHistory } from "vue-router";
// import NavbarBox from "@/components/NavbarBox.vue"
const routes = [
//     {
//         path: "/accountInformationPage", component: () => import("./views/accountInformationPage.vue"),
//     },
//     {
//       path: "/accountRevisePage", component: () => import("./views/accountRevisePage.vue"),
//   }, {
//     path: "/checkCodePage", component: () => import("./views/checkCodePage.vue"),
// }, {
//   path: "/donateFoodInformationPage", component: () => import("./views/donateFoodInformationPage.vue"),
// }, {
//   path: "/emailCheckPage", component: () => import("./views/emailCheckPage.vue"),
// }, {
//   path: "/forgotPasswordPage", component: () => import("./views/forgotPasswordPage.vue"),
// }, {
//   path: "/loginPage", component: () => import("./views/loginPage.vue"),
// }, {
//   path: "/logoutPage", component: () => import("./views/logoutPage.vue"),
// }, {
//   path: "/newPasswordPage", component: () => import("./views/newPasswordPage.vue"),
// }, {
//   path: "/petAdoptionInformationPage", component: () => import("./views/petAdoptionInformationPage.vue"),
// }, {
//   path: "/returnPage", component: () => import("./views/returnPage.vue"),
// },
// {
//   path: "/", component: () => import("./views/loginPage.vue"),
// },
]
export default createRouter({
    history: createWebHashHistory(),
    routes
});