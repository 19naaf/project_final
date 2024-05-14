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
async function doneTask (){
    await taskStore.updateTask(props.task.id, innerTask.value.title, innerTask.value.description, innerTask.value.is_complete)
    await taskStore.fetchTasks();
    innerTask.value.is_complete = true;
}
async function noTask (){
    await taskStore.updateTask(props.task.id, innerTask.value.title, innerTask.value.description, innerTask.value.is_complete)
    await taskStore.fetchTasks();
    innerTask.value.is_complete = false;
}
</script>

<template>
    <h3>Title: 
        <span @dblclick="()=> isEditableTitle=true" v-if="!isEditableTitle">{{ task.title }}</span>
        <input @dblclick="()=> isEditableTitle=false" v-if="isEditableTitle" type="text" v-model="innerTask.title">
    </h3>
    <p>Description: 
        <span @dblclick="()=> isEditableDescription=true" v-if="!isEditableDescription">{{ task.description }}</span>
        <input @dblclick="()=> isEditableDescription=false" v-if="isEditableDescription" type="text" v-model="innerTask.description">
    </p>
    <p>Task Completed? 
        
        <button @click="updateAndFetch(innerTask.is_complete=true)">Yes</button>
        
        <button @click="updateAndFetch(innerTask.is_complete=false)">No</button>


        {{ props.task.is_complete }}</p>


    <button @click="taskStore.deleteTask(task.id)"> Delete Task</button>
    <button class="modify" @click="updateAndFetch"> Apply Change</button>
    </template>


<style scoped>
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
    bottom: 0%; /* Posiciona el tooltip arriba del botón */
    left: 240%;
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
</style>
