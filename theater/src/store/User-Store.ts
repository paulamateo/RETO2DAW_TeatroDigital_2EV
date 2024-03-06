import { defineStore } from "pinia";
import { reactive } from "vue";

export interface User {
    userId: number,
    userName: string;
    userLastname: string,
    email: string,
    password: string,
    phoneNumber: string,
    isAdmin: boolean
}

export const useUsersStore = defineStore('users', () => {
    const users = reactive<User[]>([])

    const getAllUsers = async () => {
        try {
            const response = await fetch('http://localhost:8001/User')
            const data = await response.json();
            data.forEach((user : User) => { 
                users.push(user);
            });
        }catch (error) {
            console.log('Error displaying users: ', error);
        }
    }

    const getAdminUsers = () => {
        return users.filter(user => user.isAdmin);
    };
    
    return { users, getAllUsers, getAdminUsers };
})
