<script setup>

import { ref } from 'vue';
import {useUserStore} from '../stores/user.js'



const userStore = useUserStore();

const email = ref('')
const password = ref('')
const confirm_password = ref('')



function signUp(){
    if(password.value === confirm_password.value){
        userStore.signUp(email.value,password.value)
        setTimeout(function() {
            location.reload();
            alert('Usuario creado con exito!');
        }, 3000);
     } else { 
        alert('Passwords no coinciden!')
    }
}
</script>

<template>
<form @submit.prevent="signUp">
        <h2>Registrarse</h2>
        <fieldset>
            <legend>INFORMACION BASICA</legend>
        <div class="form_input">
            <label for="nombre">Correo Electronico</label>
            <input v-model="email" type="email" placeholder="email@example.com" id="email">
        </div>
            <div class="form_input">
                <label for="correo">Password</label>
                <input v-model="password" type="password" placeholder="password" id="password">
            </div>
            <div class="form_input">
                <label for="correo">Confirm Password</label>
                <input v-model="confirm_password" type="password" placeholder="password" id="confirm_password">
            </div>
            <div>
                <button type="submit">Registrarse</button>
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