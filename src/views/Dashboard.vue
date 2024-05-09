<script setup>
import {useUserStore} from '../stores/user.js'
import { useTaskStore } from '../stores/task.js'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'


const router = useRouter();
const userStore = useUserStore();
const taskStore = useTaskStore();
const title = ref('');
const description = ref('');
const {tasks} = storeToRefs(taskStore);

function signOut(){
    userStore.signOut()
    router.push({ path: '/auth' });
}
function addTask(){
    taskStore.addTask(title.value, description.value)
    title.value = ''
    description.value = ''
    taskStore.fetchTasks();
}

taskStore.fetchTasks();
</script>

<template>
    <section>
    <h1>Componente Dashboard</h1>
    <button @click="signOut">Desconectar</button>
    <form @submit.prevent="addTask">
        <h2>Registrar Tarea</h2>
        <fieldset>
            <legend>INFORMACION BASICA</legend>
        <div class="form_input">
            <label for="nombre">Titulo : </label>
            <input v-model="title" type="text" placeholder="titulo de su tarea aqui..." id="title">
        </div>
            <div class="form_input">
                <label for="texto">Descripcion: </label>
            <textarea v-model="description" placeholder="Descripcion..." id="texto"></textarea>
            </div>
            <div>
                <button type="submit">Registrar</button>
            </div>
        </fieldset>
    </form>
    <div v-if="!tasks">
        <p>no hay tareas almacenadas</p>
    </div>
    <div>
        <ul>
            <li class="card" v-for="task in tasks" :key="task.id">
                <h3>Tarea: {{task.title}}</h3>
                <p>Descripcion: {{task.description}}</p>
                <p>ref id: {{task.id}}</p>
            </li>
        </ul>
    </div>
</section>
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
    max-width: 500px;
    margin: auto;
    box-shadow: 0 0 55px #fff2 ;
    margin-top: 50px;
    border-radius: 8px;
    font-size: 16px;
    margin-bottom: 40px;
}
.form_input{
    padding: 6px 20px ;
}
input, textarea{
    width: 100%;
    box-sizing: border-box;
    padding: 6px 8px;
    border: 1px solid #666;
    box-shadow: 0 0 15px #0003 ;
    background-color: transparent;
    border-radius: 4px;
    color: #eee;
    /* resize: none; para evitar que cambien de tamaño y escribir lo de abajo */
}
textarea{
    min-width: 100%;
    resize: none;
    min-width: 30px;
    min-height: 60px;
    font-family: sans-serif;
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
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 20px;
}
.card{
    border: solid 1px #666;
}
</style>