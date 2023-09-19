<script setup lang="ts">
    const props = defineProps<{
        list: string[]
    }>();
</script>

<template>
    <div class="wordList">
        <ul>
            <template v-for="word in list">
                <li>{{ word }}</li>
            </template>
        </ul>
    </div>
</template>

<style scoped>
.wordList {
    /* display: flex; */
    margin-top: 10px;
    font-size: 2.5rem;
    color: rgb(100,170,100);
    /* flex-wrap: wrap;         */
    /* padding: 1rem; */
    background-color: blue;
    /* width: v-bind("boardWidth") */
    ul {
        list-style-type: decimal;
    }
}

@media (min-width: 1024px) {
    .board {
    text-align: left;
    }
}
</style>
