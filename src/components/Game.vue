<script setup lang="ts">
    const props = defineProps<{
      size: number
    }>();
    
    // import { ref, type Ref } from "vue";
    import Board from "./Board.vue";
    import InputBar from "./InputBar.vue";
    import WordList from "./WordList.vue";
    import { getRandomLetter } from "@/utils/utils";
    import { addWord } from "@/utils/wordUtils";


    const matrixSize: number = props.size * props.size;

    let wordList: string[] = [];
    let letters: string[] = [];

    for (let i=0; i < matrixSize; i ++) {
      letters.push(getRandomLetter());
    }

    function considerWord(word: string): void {
      const uppercaseWord = word.toUpperCase();
      console.log("WORD:::", uppercaseWord);
      wordList = addWord(wordList, uppercaseWord);
    }
</script>

<template>
  <div class="game">
        <Board :letters="letters" />
        <InputBar :onAdd="considerWord"/>
        <WordList :list="wordList" />
  </div>
</template>

<style scoped>
.game {
  display:flex;
  flex-direction: column;
  align-items: center;
  width:75%;
}

@media (min-width: 1024px) {
  .game {
    width: 100%;
  }
}
</style>
