// /store/user.js
 
import { defineStore } from 'pinia';
import { supabase } from '../supabase';
 
export const useUserStore = defineStore('user', {
  state: () => ({
    user: null,
  }),
 
  actions: {
    async fetchUser () {
      const {data, error} = await supabase.auth.getUser();
      this.user = data.user
    },
    async signUp (email, password) {
      const { user, error } = await supabase.auth.signUp({
        email: email,
        password: password
      });
      if (error) throw error;
      if (user) this.user = user;
    },
    async signInWithPassword (email, password) {
      const { user, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password
      });
      if (error) throw error;
      if (user) this.user = user;
    },
    async signOut() {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
    },
    persist: {
      enabled: true,
      strategies: [
        {
          key: 'user',
          storage: localStorage
        }
      ]
    },
 }
});