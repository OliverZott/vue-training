<script setup lang="ts">
import { ref } from 'vue';

defineProps<{ msg: string }>();

const count = ref(0);
const myMsg = ref('My Text :)');
const booleanInput =ref('');

// Attribute binding via v-bind:class or shorthand :class
const titleClass = ref('title');

// Event listener for the button click
function incrementCount(val: number) {
    count.value = count.value + val;
}

const inputText = ref('');

function showInputText(e: Event) {
    inputText.value = e.target.value;
}

function isTrue() {
    try {
        const parsed = JSON.parse(booleanInput.value)
        return parsed;
    } catch {
        return !!booleanInput.value;  // if parsing fails, string is truthy/falsy
    }
}

</script>

<template>

    <!-- component props -->
    <h1>{{ msg }}</h1>

    <!-- attribute binding -->
    <h2 :class="titleClass">{{ myMsg }}</h2>

    <!-- Event handler -->
    <div class="card">
        <button type="button" @click="incrementCount(3)">count is {{ count }}</button>
    </div>

    <!-- two-way binding -->
    <input type="text" v-model="myMsg" />

    <!-- one-way binding + eventhandler for updating -->
    <input type="text" :value="inputText" @input="showInputText" placeholder="Type here" />
    <p>{{ inputText }}</p>


    <!-- Conditional rendering -->
    <input type="text" v-model="booleanInput"></input>
    <p v-if="isTrue()">yeay, true 😊</p>
    <p v-else>Oh no, false 😢</p>
</template>

<style scoped>
.title {
    color: #ee1313;
}
</style>
