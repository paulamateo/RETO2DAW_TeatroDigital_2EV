import { defineStore } from 'pinia';
import { reactive } from "vue";

export interface User {
    userId: number,
    userName: string,
    userLastname: string,
    email: string,
    password: string,
    phoneNumber: string,
    isAdmin: boolean
}

export const useAdminRolStore = defineStore('users', () => {
    const users = reactive<User[]>([])

    const validateAdmin = async (email: string, password: string) => {
        try {
            const response = await fetch("http://localhost:8001/AuthenticateAdmin");
            const data = await response.json();
            return data;
        }catch (error) {
            console.log('Error to authenticate admin: ', error);
            return [];
        }
    }

    return { users, validateAdmin };

});