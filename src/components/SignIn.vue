<script setup>

import { ref } from 'vue';
import {useUserStore} from '../stores/user.js'
import { useRouter } from 'vue-router'


const userStore = useUserStore();
const router = useRouter();

const email = ref('')
const password = ref('')


function signIn(email,password){
    userStore.signInWithPassword(email,password)
    router.push({ path: '/' });
}

</script>

<template>
<div class="block1">
    <img class="image_app" src="../assets/images/check_list.png" alt="check_list">
    <h2>Welcome to Task</h2>
</div>
<form @submit.prevent="signIn(email,password)">
    <h2>Sign In</h2>  
    <fieldset>
        <legend>Basic Information</legend>
    <div class="form_input">
        <label for="nombre">Email </label>
        <input v-model="email" type="email" placeholder="email@example.com" id="emailSignIn">
    </div>
        <div class="form_input">
            <label for="correo">Password</label>
            <input v-model="password" type="password" placeholder="password" id="passwordSignIn">
        </div>
        <div>
            <button type="submit">Sign In</button>
        </div>
    </fieldset>
</form>
</template>


<style scoped>
.block1{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    
}

.image_app{
    width: 150px;
    height: 200px;
    text-align: center;
    margin-bottom: 0;
    margin-top: 30px;
    
}
h2{
    text-align: center;
    margin: 0;
    margin-bottom: 10px;
    text-transform: uppercase;
    font-weight: 100;
    font-size: 22px;
    padding: 10px;

}
form{
    background-color: transparent;
    padding: 20px 0px;
    max-width: 450px;
    margin: auto;
    box-shadow: 0 0 55px #fff2 ;
    margin-top: 0px;
    border-radius: 8px;
    font-size: 16px;
    margin-bottom: 20px;
}
.form_input{
    padding: 6px 20px ;
}
input{
    width: 100%;
    box-sizing: border-box;
    padding: 6px 8px;
    border: 1px solid #666;
    box-shadow: 0 0 15px #0003 ;
    background-color: transparent;
    border-radius: 4px;
    color: #eee;
}
label{
    font-size: 0.88em;
    line-height: 2;
}

fieldset{
    border-radius: 5px;
    border: 1px solid #666;
    padding: 1px 8px 20px 6px;
    margin: 20px;
}
legend{
    padding: 0 6px;
    color: #777;
}
button{
    margin: 20px;
}
</style>