import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  routes:[
    {
      src:'/',
      dest: '/Pages/Home'
    },
    {
      src:'/about',
      dest: '/Pages/About'
    },
    {
      src:'/services',
      dest: '/Pages/Services'
    },
    {
      src:'/contact',
      dest: '/Pages/ContactUs'
    },
    {
      src:'/actuality',
      dest: '/Pages/Actuality'
    },
  ]
};

export default nextConfig;
