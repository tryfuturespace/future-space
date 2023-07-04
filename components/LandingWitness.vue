<template>
  <section class="px-6 py-20">
    <div class="container">
      <h2
        class="text-center text-gray-700 text-4xl font-bold mb-4"
        data-aos="fade-up"
        data-aos-once="true"
      >
        Kindly witness it firsthand.
      </h2>
      <p
        class="max-w-[500px] mb-10 text-gray-500 text-center text-sm mx-auto"
        data-aos="fade-up"
        data-aos-once="true"
      >
        Viewers are shown to be 300% more engaged with a future space 3D virtual
        tour than they are with 2D imagery.
      </p>

      <!-- <div
        data-aos="zoom-in"
        data-aos-once="true"
        id="viewer"
        class="w-full h-[400px] sm:h-[600px] mx-auto max-w-[1000px]"
      ></div> -->
      <div
        data-aos="zoom-in"
        data-aos-once="true"
        id="panorama"
        class="w-full h-[400px] mx-auto max-w-[800px]"
      ></div>
    </div>
  </section>
</template>
<script setup>
import { Viewer } from "@photo-sphere-viewer/core";
import Image from "~/assets/images/property.png";
import Sitting from "~/assets/images/sitting.png";
import Kitchen from "~/assets/images/kitchen.png";

const viewer = ref(null);
const parabellum = ref(null);
onBeforeMount(() => {
  // viewer.value = new Viewer({
  //   container: document.querySelector("#viewer"),
  //   panorama: Image,
  //   panoData: {
  //     fullWidth: 2280,
  //     fullHeight: 1164,
  //     croppedWidth: 2280,
  //     croppedHeight: 1164,
  //     croppedX: 24,
  //     croppedY: 0,
  //     poseHeading: 0, // 0 to 360
  //     posePitch: 0, // -90 to 90
  //     poseRoll: 0, // -180 to 180
  //   },
  // });
  parabellum.value = pannellum.viewer("panorama", {
    autoLoad: true,
    hotSpotDebug: false,
    default: {
      firstScene: "sitting",
      sceneFadeDuration: 1000,
    },

    scenes: {
      sitting: {
        title: "Sitting room",
        hfov: 110,
        pitch: -3,
        yaw: 117,
        type: "equirectangular",
        panorama: Sitting,
        hotSpots: [
          {
            pitch: 32.51359419587959,
            yaw: 73.31898451120176,
            cssClass: "custom-hotspot",
            type: "scene",
            text: "Kitchen",
            sceneId: "kitchen",
            
          },
        ],
      },
      // Pitch: 32.51359419587959, Yaw: 73.31898451120176, Center Pitch: 38.65361875219251, Center Yaw: 56.117326749209305, HFOV: 110
      kitchen: {
        title: "Kitchen",
        hfov: 120,
        yaw: 5,
        type: "equirectangular",
        panorama: Kitchen,
        hotSpots: [
          {
            pitch: -0.4217384420504516,
            yaw: -165.663568683694,
            cssClass: "custom-hotspot",
            type: "scene",
            text: "Sitting",
            sceneId: "sitting",
            targetYaw: -23,
            targetPitch: 2,
          },
        ],
      },
    },
  });
});
</script>
<style>
.custom-hotspot {
  height: 40px;
  width: 40px;
  background: white;
  border: 5px solid rgba(10, 222, 148, 1);
  border-radius: 50%;
}
</style>
