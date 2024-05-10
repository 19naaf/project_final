// /store/task.js
import { defineStore } from 'pinia'
import { supabase } from '../supabase'
import { useUserStore } from './user'
import { ref } from 'vue'

const taskArray = ref(null)

export const useTaskStore = defineStore('tasks', {
  state: () => ({
    tasks: null
  }),
  actions: {
    async fetchTasks() {
      const { data: tasks } = await supabase
        .from('tasks')
        .select('*')
        .eq('user_id', useUserStore().user.id)
        .order('id', { ascending: false })
      this.tasks = tasks
    },

    async addTask(title, description) {
      // console.log(useUserStore().user.id);
      const { data, error } = await supabase.from('tasks').insert([
        {
          user_id: useUserStore().user.id,
          title: title,
          is_complete: false,
          description: description
        }
      ])
    },
    async deleteTask(taskId) {
      const { error } = await supabase.from('tasks').delete().eq('id', taskId)
      if (!error) {
        // Actualiza la lista de tareas después de eliminar
        await this.fetchTasks()
      } else {
        console.error('Error deleting task:', error.message)
      }
    },
    async updateTask(taskId, title, description, isComplete) {
      const { error } = await supabase
        .from('tasks')
        .update({
          user_id: useUserStore().user.id,
          title: title,
          is_complete: isComplete,
          description: description
        })
        .eq('id', taskId)

      if (!error) {
        // Actualiza la lista de tareas después de eliminar
        await this.fetchTasks()
      } else {
        console.error('Error updating task:', error.message)
      }
    }
  }
})
