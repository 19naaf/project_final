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
    <h3>Titulo: 
        <span @dblclick="()=> isEditableTitle=true" v-if="!isEditableTitle">{{ task.title }}</span>
        <input @dblclick="()=> isEditableTitle=false" v-if="isEditableTitle" type="text" v-model="innerTask.title">
    </h3>
    <p>Descripcion: 
        <span @dblclick="()=> isEditableDescription=true" v-if="!isEditableDescription">{{ task.description }}</span>
        <input @dblclick="()=> isEditableDescription=false" v-if="isEditableDescription" type="text" v-model="innerTask.description">
    </p>
    <p>Tarea completada? 
        
        <button @click="updateAndFetch(innerTask.is_complete=true)">Si</button>
        
        <button @click="updateAndFetch(innerTask.is_complete=false)">No</button>


        {{ props.task.is_complete }}</p>


    <button @click="taskStore.deleteTask(task.id)"> Eliminar</button>
    <button @click="updateAndFetch"> Modificar</button>
    </template>


<style scoped>
</style>
