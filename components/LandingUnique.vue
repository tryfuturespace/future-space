<template>
  <section class="px-6 py-20">
    <div class="container">
      <h2 class="text-center text-gray-700 text-4xl font-bold mb-14" data-aos="fade-up" data-aos-once="false">
        What makes us unique?
      </h2>

      <div class="flex flex-col lg:flex-row gap-10 justify-center" data-aos="fade-up" data-aos-once="false">
        <div
          v-for="n in content"
          :key="n"
          class="p-8 lg:p-10 rounded-xl bg-white shadow-[0px_5px_15px_0px_rgba(0,0,0,0.1)] w-full max-w-[345px] mx-auto"
        >
          <img
            alt=""
            :src="n.img"
            width="45"
            height="45"
            class="block mb-5 mx-auto lg:mx-0"
          />
          <h3 class="text-center lg:text-left mb-1 text-xl font-medium text-gray-700">{{ n.title }}</h3>
          <p class="text-center lg:text-left text-[15px] text-gray-400">{{ n.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import Icon from "~/assets/images/hand.svg"
const content = [
  {
    title: "Online payment",
    text: "Guests can easily make payments online, 24/7. This saves you time and money on processing fees.",
    img:Icon,
  },
  {
    title: "Online payment",
    text: "Guests can easily make payments online, 24/7. This saves you time and money on processing fees.",
    img:Icon,
  },
  {
    title: "Online payment",
    text: "Guests can easily make payments online, 24/7. This saves you time and money on processing fees.",
    img: Icon,
  },
];
</script>
