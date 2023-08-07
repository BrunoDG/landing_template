import Aos from "aos";

export default defineNuxtPlugin((nuxtApp) => {
  if (typeof window !== "undefined") {
    nuxtApp.Aos = Aos.init({
      delay: 200
    });
  }
});
