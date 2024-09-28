import { defineStore } from "pinia";
import { signIn, signUp, getUserData } from "../services/authService";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: null as null | { email: string },
    token: null as string | null,
    isAuthenticated: false,
  }),
  actions: {
    async signIn(credentials: { email: string; password: string }) {
      const response = await signIn(credentials.email, credentials.password);
      if (response.data.token) {
        this.token = response.data.token;
        this.isAuthenticated = true;
        this.user = { email: credentials.email };
      }
    },
    async signUp(credentials: { email: string; password: string }) {
      const response = await signUp(credentials.email, credentials.password);
      if (response.data.token) {
        this.token = response.data.token;
        this.isAuthenticated = true;
        this.user = { email: credentials.email };
      }
    },
    async fetchUser(userId: number) {
      const response = await getUserData(userId);
      this.user = response.data.data;
    },
    logOut() {
      this.token = null;
      this.isAuthenticated = false;
      this.user = null;
    },
  },
});
