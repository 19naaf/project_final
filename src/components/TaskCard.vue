<script setup>
import { useTaskStore } from '../stores/task.js'
import { ref } from 'vue'

const taskStore = useTaskStore();

const props = defineProps({
    task: Object
});

const isEditableTitle = ref(false);
const isEditableDescription = ref(false);
const innerTask = ref(props.task);


async function updateAndFetch(){
    await taskStore.updateTask(props.task.id, innerTask.value.title, innerTask.value.description, innerTask.value.is_complete)
    await taskStore.fetchTasks();
    isEditableTitle.value = false;
    isEditableDescription.value = false;
}
// async function doneTask (){
//     await taskStore.updateTask(props.task.id, innerTask.value.title, innerTask.value.description, innerTask.value.is_complete)
//     await taskStore.fetchTasks();
//     innerTask.value.is_complete = true;
// }
// async function noTask (){
//     await taskStore.updateTask(props.task.id, innerTask.value.title, innerTask.value.description, innerTask.value.is_complete)
//     await taskStore.fetchTasks();
//     innerTask.value.is_complete = false;
// }
</script>

<template>
    <h3 :class="{ underlined: props.task.is_complete }">Title: 
        <span @dblclick="()=> isEditableTitle=true" v-if="!isEditableTitle">{{ task.title }}</span>
        <input @dblclick="()=> isEditableTitle=false" v-if="isEditableTitle" type="text" v-model="innerTask.title">
    </h3>
    <p :class="{ underlined: props.task.is_complete }">Description: 
        <span @dblclick="()=> isEditableDescription=true" v-if="!isEditableDescription">{{ task.description }}</span>
        <input @dblclick="()=> isEditableDescription=false" v-if="isEditableDescription" type="text" v-model="innerTask.description">
    </p>
    <p>Task Completed ? 
        
        

        <img class="icon_check" src="../assets/images/check.png" @click="updateAndFetch(innerTask.is_complete=true)">
        
        <img class="icon_check2" src="../assets/images/check_x.png" @click="updateAndFetch(innerTask.is_complete=false)">
        
    </p>
        


        {{ props.task.is_complete }}


    <button @click="taskStore.deleteTask(task.id)"> Delete Task</button>
    <button class="modify" @click="updateAndFetch"> Apply Change</button>
    </template>


<style scoped>

h3,p{
    color: rgba(255, 255, 255, 0.8);
}


button{
    margin: 0 10px;
    margin-bottom: 10px;
}
.modify {
    position: relative; /* Necesario para posicionar el pseudo-elemento */
}
.modify::after {
    content: ' First double click on title or description !!'; /* Texto de la leyenda */
    position: absolute;
    top:  180%; /* Posiciona el tooltip arriba del botón */
    left: 50%;
    transform: translateX(-50%);
    background-color: black;
    color: white;
    padding: 5px;
    border-radius: 5px;
    white-space: nowrap;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s;
}
.modify:hover::after {
    opacity: 1;
}
.icon_check{
    width: 25px;
    height: 25px;
    cursor: pointer;
    margin-left: 20px;
}
.icon_check2{
    width: 21px;
    height: 21px;
    cursor: pointer;
    margin-left: 30px;
}
.underlined {
    text-decoration: line-through;
}
</style>
