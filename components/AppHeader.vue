<template>
  <nav
    :class="`${
      initialClass ? 'absolute' : 'sticky bg-gray-800 py-4'
    } top-0 w-full px-6 py-4 transition-all duration-500 z-[999]`"
  >
    <div class="flex justify-between items-center container">
      <NuxtLink to="/"
        >
        <img
          src="~/assets/images/logo.png"
          class="w-[145px] h-[45px] hidden sm:inline-block"
          width="145"
          height="45"
      />
      <img
          src="~/assets/images/icon.png"
          class="w-[32px] h-auto sm:hidden"
          width="32"
          height="36"
      />
   </NuxtLink>
      <ul class="flex gap-x-4">
        <li>
          <font-awesome-icon
            icon="fa-brands fa-linkedin-in"
            class="text-white"
          />
        </li>
        <li>
          <font-awesome-icon icon="fa-brands fa-twitter" class="text-white" />
        </li>
        <li>
          <font-awesome-icon icon="fa-brands fa-instagram" class="text-white" />
        </li>
      </ul>
    </div>
  </nav>
</template>
<script setup>
const initialClass = ref(true);

onBeforeMount(() => {
  if (window !== undefined) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 600) {
        initialClass.value = false;
      } else {
        initialClass.value = true;
      }
    });
  }
});
onBeforeUnmount(() => {
  if(window !== undefined){
   window.removeEventListener("scroll");
  }
});
</script>
