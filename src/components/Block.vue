<script setup lang="ts">
    const props = defineProps<{
        letter: string;
        isSelected?: boolean;
    }>();
    import { getRandomLetter } from "../utils/utils";
    // const letter = getRandomLetter();
    const className = props.isSelected ? "letter selected" : "letter";
</script>

<template>
  <div class="">
    <p :class="className">{{ letter }}</p>
  </div>
</template>

<style scoped>
.letter {
    display: flex;
    position: relative;
    place-content: center;
    margin: 5px;
    font-size: 3rem;
    font-weight: bold;
    color: rgb(150,170,120);
    background-color: white;
    line-height: 4.2rem;
    width: 70px;
    height: 70px;
    border: 3px solid rgb(100,170,100);
    border-radius: 15px;
    /* TRYING DEPTH EFFECT */
    /* border: 3px solid rgb(230,230,230); */
    /* border-radius: 50%; */
    transition: 
    color 1s,
    border-color 1s;
}

 /* DEPTH EFFECT */
/* .letter:after {
  content: "";
  position: absolute;
  top: -3px;
  border-radius: 15px;
  border: 3px solid rgb(100,170,100);
  background-image: linear-gradient(to right, white, rgb(230,230,230));
  width: 70px;
  height: 70px;
  z-index: -1;
} */

.selected {
    border-color: rgb(100,100,150);
    color: rgb(100,100,150);
}


@media (min-width: 1024px) {
  .letter {
    text-align: left;
  }
}
</style>
