<script setup lang="ts">
    const props = defineProps<{
    letters: string[]
    }>()
    import Block from "./Block.vue";

    const boardSize: number = Math.sqrt(props.letters.length);
    const boardWidth: string = ((boardSize * 5) + 2) + "rem";
</script>

<template>
    <div class="board">
    <template v-for="letter in letters">
        <Block :letter="letter" />
    </template>
    </div>
</template>

<style scoped>
.board {
    display: flex;
    flex-wrap: wrap;        
    padding: 1rem;
    
    width: v-bind("boardWidth")
}

@media (min-width: 1024px) {
    .board {
    text-align: left;
    }
}
</style>
