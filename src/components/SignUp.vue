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
    <div class="block1">
    <img class="image_app" src="../assets/images/check_list.png" alt="check_list">
    <h2>Welcome to Task</h2>
</div>
<form @submit.prevent="signUp">
        <h2>Register</h2>
        <fieldset>
            <legend>Basic Information</legend>
        <div class="form_input">
            <label for="nombre">Email</label>
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
                <button type="submit">Sign Up</button>
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