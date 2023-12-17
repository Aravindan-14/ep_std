import { Script } from "vm";

let baseURL = "http://localhost:5000/api/buy";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@nuxt-alt/http"],

  app: {
    head: {
      title: "Eyam Poosu",
      link: [
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css",
        },
        { rel: "icon", type: "image/x-icon", href: "/ep.png" },
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css",
        },
      ],
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js",
        },
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js",
        },
      ],
    },
  },
  http: {
    baseURL,
    credentials: "omit",
    browserBaseURL: baseURL,
  },
});
