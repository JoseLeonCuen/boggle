<script setup lang="ts">
    const props = defineProps<{
        text: string
    }>();
</script>

<template>
  <div class="">
    <h1 class="title">{{ text }}</h1>
  </div>
</template>

<style scoped>
.title {
  line-height: 1.5;
  font-size: 3rem;
  color: rgb(100, 200, 100);
  font-weight:bolder;
  text-align: center;
}
@media (min-width: 1024px) {
  .letter {
    text-align: left;
  }
}
</style>
