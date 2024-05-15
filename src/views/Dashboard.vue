<script setup>
import {useUserStore} from '../stores/user.js'
import { useTaskStore } from '../stores/task.js'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import AddTask from '../components/AddTask.vue'
import TaskCard from '../components/TaskCard.vue'
import NavBar from '../components/NavBar.vue'


const router = useRouter();
const userStore = useUserStore();
const taskStore = useTaskStore();
const {tasks} = storeToRefs(taskStore);

// function signOut(){
//     userStore.signOut()
//     router.push({ path: '/auth' });
// }

</script>

<template>
    <NavBar></NavBar>
    <section>
    <!-- <button @click="signOut">Sign Out</button> -->
   <AddTask></AddTask>
    <div v-if="!tasks">
        <p>No tasks availables</p>
    </div>
    <div class="task-target">
            <div class="card" v-for="task in tasks" :key="task.id">
                <TaskCard :task="task"></TaskCard>
            </div>
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
    
    box-shadow: 0 0 40px #fff2 ;
    margin: 1px;
    padding: 15px;
    
}
.task-target { 
margin: 50px;
display: flex;
flex-wrap: wrap;
justify-content: space-around;
gap: 20px;
}
</style>