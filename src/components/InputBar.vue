<script setup lang="ts">
    import { ref, type Ref } from "vue";
    
    const props = defineProps<{
      onAdd: (word: string) => void
    }>();

    // let inputValue: Ref<string> = ref("");
    let inputValue: string = "";

    function handleSubmit(event: Event) {
        console.log("CONST VAL:::", inputValue);
        props.onAdd(inputValue);
        inputValue = "";
    }
</script>

<template>
  <form @submit.prevent="handleSubmit" class="form">
    <input
      autofocus
      class="input"
      v-model="inputValue"
    />
    <input
      class="submitButton"
      type="submit"
      value="OK"
      @keyup.enter="handleSubmit"
    />
  </form>
</template>

<style>
.form {
    display: flex;
    margin-top: 10px;
    width: 100%;
    height: 72px;
}
.input {
    padding: 10px;
    font-size: 2rem;
    font-weight: bold;
    text-transform: uppercase;
    /* border: 2px solid rgb(100,170,100); */
    color: rgb(150,170,120);
    border-radius: 15px;
    width: 80%;
}

.submitButton {
    background-color: rgb(100,200,100);
    border: none;
    color: white;
    font-size: 2rem;
    border-radius: 1rem;
    margin-left: 1rem;
    width: 20%;
}

@media (min-width: 1024px) {
  .letter {
    text-align: left;
  }
}
</style>
