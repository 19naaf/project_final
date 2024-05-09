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
<form @submit.prevent="signIn(email,password)">
    <h2>Iniciar Sesion</h2>
    <fieldset>
        <legend>INFORMACION BASICA</legend>
    <div class="form_input">
        <label for="nombre">Correo Electronico</label>
        <input v-model="email" type="email" placeholder="email@example.com" id="emailSignIn">
    </div>
        <div class="form_input">
            <label for="correo">Password</label>
            <input v-model="password" type="password" placeholder="password" id="passwordSignIn">
        </div>
        <div>
            <button type="submit">Entrar</button>
        </div>
    </fieldset>
</form>
</template>


<style scoped>
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
    margin-top: 100px;
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