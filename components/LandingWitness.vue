<template>
  <section class="px-6 py-20">
    <div class="container">
      <h2 class="text-center text-gray-700 text-4xl font-bold mb-4" data-aos="fade-up" data-aos-once="false">
        Kindly witness it firsthand.
      </h2>
      <p class="max-w-[500px] mb-10 text-gray-500 text-center text-sm mx-auto" data-aos="fade-up" data-aos-once="false">
        Viewers are shown to be 300% more engaged with a future space 3D virtual
        tour than they are with 2D imagery.
      </p>

      <div class="h-[550px]" data-aos="zoom-in" data-aos-once="false">
        <img
          alt=""
          src="~/assets/images/prop.webp"
          width="1000"
          height="550"
          class="w-full h-full object-contain"
        />
      </div>
    </div>
  </section>
</template>
<script setup>
import Icon from "~/assets/images/hand.svg";
const content = [
  {
    title: "Online payment",
    text: "Guests can easily make payments online, 24/7. This saves you time and money on processing fees.",
    img: Icon,
  },
  {
    title: "Online payment",
    text: "Guests can easily make payments online, 24/7. This saves you time and money on processing fees.",
    img: Icon,
  },
  {
    title: "Online payment",
    text: "Guests can easily make payments online, 24/7. This saves you time and money on processing fees.",
    img: Icon,
  },
];
</script>
