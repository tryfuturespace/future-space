<template>
  <footer class="bg-[rgba(33,35,50)] px-6 py-20">
    <div class="container">
      <button
        class="mb-10 w-[256px] h-[46px] mx-auto relative active:scale-95 outline-none block group transition-all duration-300"
      >
        <div
          class="bg-white w-full border-[3px] border-black px-12 py-2 block z-20 relative"
        >
          Join waitlist
        </div>
        <div
          class="bg-[rgba(10,222,148,1)] absolute bottom-0 left-0 group-hover:translate-x-1 group-hover:translate-y-1 transition-all duration-300 w-full h-full z-10"
        ></div>
      </button>
      <p class="max-w-[380px] text-sm lg:text-lg text-center mx-auto text-gray-400 mb-6">
        Join FutureSpace today to experience a new era of property management
        and house hunting!
      </p>
      <div class="mx-auto mb-10">
        <ul class="flex gap-x-6 justify-center">
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
            <font-awesome-icon
              icon="fa-brands fa-instagram"
              class="text-white"
            />
          </li>
        </ul>
      </div>
      <div class="flex items-center justify-between flex-col lg:flex-row gap-6">
        <NuxtLink to="/"
          ><img
            src="~/assets/images/logo.png"
            class="w-[145px] h-[45px]"
            width="145"
            height="45"
        /></NuxtLink>
        <span class="block text-gray-400 text-sm">
          &copy; {{ new Date().getFullYear() }} FutureSpace inc. All rights
          reserved
        </span>
      </div>
    </div>
  </footer>
</template>
