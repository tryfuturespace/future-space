<template>
  <div class="lg:px-10 lg:py-10">
    <h3 class="text-3xl font-medium mb-2 text-gray-700" data-aos="fade-up" data-aos-once="false">{{ content.title }}</h3>
    <p class="mb-10 text-[15px] text-gray-500" data-aos="fade-up" data-aos-once="false">{{ content.text }}</p>
    <div>
      <div
        v-for="(n, idx) in content.data"
        :class="`${
          indexes === idx ? 'shadow-[0px_3px_8px_0px_rgba(0,0,0,0.1)]' : ''
        }  rounded-lg p-4 mb-4`"
        data-aos="fade-up" data-aos-once="false"
      >
        <div
          :class="`flex justify-between items-center ${
            indexes === idx ? 'mb-4' : ''
          }`"
        >
          <h5 class="text-[15px] font-medium">{{ n.title }}</h5>
          <button @click="handleIndex(idx)">
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
        <div v-if="indexes === idx" class="transition-all duration-500">
          <p class="text-sm text-gray-500">
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
