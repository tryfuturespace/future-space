<template>
  <section class="px-6 py-20">
    <div class="container grid lg:grid-cols-2 h-full gap-x-4">
      <div class="relative p-3 order-2 lg:order-1" data-aos="zoom-in" data-aos-once="true">
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
      <AppCard :content="content" class="order-1 lg:order-2" />
    </div>
  </section>
</template>
<script setup>
import Image1 from "~/assets/images/6.png";
import Image2 from "~/assets/images/3.png";
import Image3 from "~/assets/images/1.png";

const indexes = ref(0);
provide("indexes", indexes);
const content = {
  title: "Are you looking for your next vacation rental apartment?",
  text: "Finding the perfect short-stay rental for you should be a manageable task. FutureSpace simplifies the house-hunting process, making it an enjoyable experience from start to finish.",
  data: [
    {
      title: "Extensive properly listing",
      text: "Explore a vast database of high-quality property listings tailored to your preferences. FutureSpace platform offers comprehensive details, including property features, images, and virtual tours, ensuring you have all the information you need to make informed decisions.",
      img: Image1,
    },

    {
      title: "Advanced Search Filters",
      text: "Narrow down your search effortlessly with our advanced search filters. Specify a location, price range, property type, and other criteria to find properties that match your exact requirements. Save your searches for future reference and receive email alerts for new listings that match your preferences.",
      img: Image2,
    },
    {
      title: "Secure Online Applications",
      text: " Apply for your desired property directly through FutureSpace. Our streamlined application process saves you time and effort. Submit your application, provide the necessary documentation, and track its progress—all within our secure and user-friendly platform.",
      img: Image3,
    },
  ],
};
</script>
