<script setup>
import { ref } from 'vue';
import SignUp from '../components/SignUp.vue'
import SignIn from '../components/SignIn.vue'

const hasUser = ref(true);

function toggleUser(){
    hasUser.value = !hasUser.value;
}

</script>

<template>
<section>
    <article v-if="!hasUser">
        <SignUp ></SignUp>
        <button @click="toggleUser">I have an account</button>
    </article>
    <article v-if="hasUser">
        <SignIn ></SignIn>
        <button @click="toggleUser">Create an account</button>
    </article> 
</section> 
</template>

<style scoped>
button{
    display: block;
    margin: 0 auto;
    margin-top: 0px;
}
</style>