// /store/task.js
import { defineStore } from "pinia";
import { supabase } from "../supabase";
import { useUserStore } from "./user";
import { ref } from "vue";

const taskArray = ref(null);

export const useTaskStore = defineStore("tasks", {
  state: ()=>({
    tasks: null,
  }),
  actions:{
    async fetchTasks () {
      const { data: tasks } = await supabase
        .from("tasks")
        .select("*")
        .order("id", { ascending: false });
      this.tasks = tasks;
    },
  
    async addTask (title, description){
      console.log(useUserStore().user.id);
      const { data, error } = await supabase.from("tasks").insert([
        {
          user_id: useUserStore().user.id,
          title: title,
          is_complete: false,
          description: description,
        },
      ]);
    }
  }
});