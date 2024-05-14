<script setup>
import { useTaskStore } from '../stores/task.js'
import { ref } from 'vue'


const taskStore = useTaskStore();
const title = ref('');
const description = ref('');

async function addTask(){
    await taskStore.addTask(title.value, description.value)
    title.value = ''
    description.value = ''
    await taskStore.fetchTasks();
}

</script>

<template>
    <form @submit.prevent="addTask">
        <h2>Add Task</h2>
        <fieldset>
            <legend>Basic Information</legend>
        <div class="form_input">
            <label for="nombre">Title : </label>
            <input v-model="title" type="text" placeholder="Title task here..." id="title">
        </div>
            <div class="form_input">
                <label for="texto">Description : </label>
            <textarea v-model="description" placeholder="Description..." id="texto"></textarea>
            </div>
            <div>
            <button type="submit">Add</button>
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
</style>