<template>
  <LandingBanner />
  <LandingUnique />
  <LandingProperty />
  <LandingLooking />
  <LandingCta />
  <LandingWitness />
</template>
<script setup>
import AOS from 'aos'
import 'aos/dist/aos.css'

onMounted(() => {
  AOS.init()
})

useHead({
  title: "FutureSpace |  Redefining your real estate journey",
  meta: [
    { name: "description", content: "Redefining your real estate journey" },
    {
      name: "og:title",
      content: "FutureSpace |  Redefining your real estate journey",
    },
    { name: "og:description", content: "Redefining your real estate journey" },
    { name: "og:image", content: "https://futurespace.com/images/logo.png" },
  ],
});
</script>
