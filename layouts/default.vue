<script lang="ts" setup></script>

<template>
  <main class="flex flex-col min-h-screen">
  <AppHeader />
   <div class="flex-1">
    <slot />
   </div>
    <AppFooter/>
  </main>
</template>

<style scoped></style>
