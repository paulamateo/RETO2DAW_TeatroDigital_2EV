// stores/authStore.ts
import { defineStore } from 'pinia';

// Definición de la interfaz para los datos del usuario
interface UserData {
  email: string;
  // Agrega aquí cualquier otro campo relevante que maneje tu aplicación, como nombre, roles, etc.
}

export const useAuthStore = defineStore('auth', {
  // Estado inicial
  state: () => ({
    isAuthenticated: false,
    userData: null as UserData | null,
  }),

  // Acciones para modificar el estado
  actions: {
    login(userData: UserData) {
      this.isAuthenticated = true;
      this.userData = userData;
      // Opcional: almacenar el estado de autenticación en localStorage o sessionStorage
    },

    logout() {
      this.isAuthenticated = false;
      this.userData = null;
      // Opcional: limpiar el almacenamiento local o de sesión
    },

    // Opcional: método para verificar el estado de autenticación desde el almacenamiento local o de sesión
    checkAuth() {
      // Implementación de la lógica para verificar y restaurar el estado de autenticación si es necesario
    }
  }
});
