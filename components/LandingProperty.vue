<template>
  <section class="px-6 py-20">
    <div class="container grid lg:grid-cols-2 gap-x-4 h-full">
      <AppCard :content="content" />
      <div class="relative p-3" data-aos="zoom-in" data-aos-once="false">
        <img
          :src="content.data[indexes].img"
          alt="image"
          width="500"
          height="700"
          class="w-full h-[400px] lg:h-[700px] relative z-10 rounded-lg object-cover"
        />
        <div
          class="absolute bg-[rgba(10,222,148,1)] w-40 h-40 rounded-tl-lg top-0 left-0"
        />
      </div>
    </div>
  </section>
</template>
<script setup>
import Image1 from "~/assets/images/2.png";
import Image2 from "~/assets/images/4.png";
import Image3 from "~/assets/images/5.png";
const indexes = ref(0);
provide("indexes", indexes);
const content = {
  title: "Property owners of short-let apartments",
  text: "Do you own or manage one or more apartments for Shortlets looking for a more efficient and effective way to manage your properties? Check out FutureSpace",
  data: [
    {
      title: "Guest screening",
      text: "Our comprehensive guest tenant screening process enables you to verify the qualifications and responsibility of your guests, thereby minimizing the potential for property damage and noise disturbances.",
      img: Image1,
    },

    {
      title: "Maintenance requests",
      text: "Tenants can easily submit maintenance requests online. This helps you to keep track of maintenance issues and ensure that they are resolved promptly.",
      img: Image2,
    },
    {
      title: "Property reports",
      text: "Our property reports provide you with valuable insights into your business, such as guest trends, occupancy rates, and maintenance costs. This information can help you to make informed decisions about your property management strategy.",
      img: Image3,
    },
  ],
};
</script>
