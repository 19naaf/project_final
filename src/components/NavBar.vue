<script setup>

import { useRouter } from 'vue-router'
import { useUserStore } from '../stores/user.js'

const router = useRouter()
const userStore = useUserStore()


</script>

<template>
    <nav class="nav-bar">
    <div>
      <img src="../assets/images/check_list2.png" alt="">
    </div>
    <ul>
      <li class="li"><router-link to="/">Tasks</router-link></li>
      <button @click="userStore.signOut">Sign Out</button>
    </ul>
  </nav>
</template>

<style scoped>
.nav-bar{
  width: 100%;
    height: 10vh;
    display: flex;
    text-decoration: none;
    background-color: #f3f3f3;
    justify-content: center;
    align-items: center;
  
}
.li{
  list-style: none;
  display: inline-block;
  margin: 2rem;
  text-decoration: none;
  
}
a {
    text-decoration: none; 
    color: black;
}
img{
  width: 50px;
  height: 60px;
  
}

</style>