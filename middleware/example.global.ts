export default defineNuxtRouteMiddleware(async (to, from) => {
    if (process.server) return; // run only on client
   
    // redirect from index to about page
    if (to.path === "/") {
       return navigateTo("/about");
    }
 });
 