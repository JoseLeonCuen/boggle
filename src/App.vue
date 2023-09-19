<script setup lang="ts">
  import Title from './components/Title.vue'
  import Game from "./components/Game.vue";
  import InputBar from "./components/InputBar.vue";
</script>

<template>
  <header>
    <Title text="BOGGLE" />
  </header>

  <main>
    <div class="gameWrapper">
      <Game :size="4"/>
    </div>
  </main>
</template>

<style scoped>
.gameWrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
