<script setup>
import {ref} from 'vue'
const navBar = ref (['Home', 'Task', 'Log Out']);
</script>

<template>
  <section>
    <nav class="nav-bar" >
        <ul>
            <li class="li" v-for="element in navBar" :key="element">{{ element }}</li>
        </ul>
    </nav>
  </section>
</template>

<style scoped>
.nav-bar{
  width: 100%;
  display: flex;
  justify-content: center;
}
.li{
  list-style: none;
  display: inline-block;
  margin: 2rem;
}
</style>