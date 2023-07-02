<template>
  <section class="px-6 py-20">
    <div class="container">
      <h2
        class="text-center text-gray-700 text-4xl font-bold mb-4"
        data-aos="fade-up"
        data-aos-once="false"
      >
        Kindly witness it firsthand.
      </h2>
      <p
        class="max-w-[500px] mb-10 text-gray-500 text-center text-sm mx-auto"
        data-aos="fade-up"
        data-aos-once="false"
      >
        Viewers are shown to be 300% more engaged with a future space 3D virtual
        tour than they are with 2D imagery.
      </p>

      <div
        data-aos="zoom-in"
        data-aos-once="false"
        id="viewer"
        class="w-full h-[400px] sm:h-[600px] mx-auto max-w-[1000px]"
      ></div>
    </div>
  </section>
</template>
<script setup>
import { Viewer } from "@photo-sphere-viewer/core";
import Image from "~/assets/images/property.png";

const viewer = ref(null);
onBeforeMount(() => {
  viewer.value = new Viewer({
    container: document.querySelector("#viewer"),
    panorama: Image,
    panoData: {
      fullWidth: 2280,
      fullHeight: 1164,
      croppedWidth: 2280,
      croppedHeight: 1164,
      croppedX: 24,
      croppedY: 0,
      poseHeading: 0, // 0 to 360
      posePitch: 0, // -90 to 90
      poseRoll: 0, // -180 to 180
    },
  });
});
</script>
