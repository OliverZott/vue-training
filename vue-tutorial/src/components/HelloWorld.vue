<script setup lang="ts">
import { ref } from 'vue';

defineProps<{ msg: string }>();

const count = ref(0);
const myMsg = ref('My Text :)');

// Attribute binding via v-bind:class or shorthand :class
const titleClass = ref('title');

const isTrue = ref(0);

// Event listener for the button click
function incrementCount(val: number) {
    count.value = count.value + val;
}

const inputText = ref('');

function showInputText(e: Event) {
    inputText.value = e.target.value;
}


</script>

<template>
    <h1>{{ msg }}</h1>
    <h2 :class="titleClass"> {{ myMsg }} </h2>

    <!--    Event handler-->
    <div class="card">
        <button type="button" @click="incrementCount(3)">count is {{ count }}</button>
    </div>

    <!-- two-way binding -->
    <input type="text" v-model="myMsg" />
    <input type="text" :value="inputText" @input="showInputText" placeholder="Type here" />
    <p>{{ inputText }}</p>

    <!--    Conditional rendering-->
    <p v-if="isTrue">True</p>
    <p v-else>False</p>

</template>

<style scoped>
.title {
    color: #ee1313;
}
</style>
