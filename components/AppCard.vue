<template>
  <div class="lg:px-10 lg:py-10" data-aos="fade-up" data-aos-once="true">
    <h3 class="text-3xl font-medium mb-2 text-gray-700" >{{ content.title }}</h3>
    <p class="mb-10 text-[15px] text-gray-500" >{{ content.text }}</p>
    <div>
      <div
        v-for="(n, idx) in content.data"
        :class="`${
          indexes === idx ? 'shadow-[0px_3px_8px_0px_rgba(0,0,0,0.1)] min-h-[160px]' : ''
        }  rounded-lg p-6 mb-4 cursor-pointer `"
       
      >
        <div @mouseenter="handleIndex(idx)"
          :class="`flex justify-between mb-3 items-center transition-all duration-300 ${
            indexes === idx ? '' : ''
          }`"
        >
          <h5 class="text-xl font-medium">{{ n.title }}</h5>
          <button >
            <font-awesome-icon
              v-if="indexes === idx"
              icon="fa-solid fa-minus"
              class="text-[rgba(10,222,148,1)]"
            />
            <font-awesome-icon
              v-else
              icon="fa-solid fa-plus"
              class="text-[rgba(10,222,148,1)]"
            />
          </button>
        </div>
        <div v-show="indexes === idx" class="transition-all duration-300">
          <p class="text-base text-[#373F41]">
            {{ n.text }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
defineProps(["content"]);
const indexes = inject("indexes");

function handleIndex(value) {
  indexes.value = value;
}
</script>
