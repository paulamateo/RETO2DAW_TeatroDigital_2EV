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
            // data.forEach((user : User) => { 
            //     users.push(user);
            // });
            users.splice(0, users.length, ...data);
        }catch (error) {
            console.log('Error displaying users: ', error);
        }
    }

    const getAdminUsers = () => {
        return users.filter(user => user.isAdmin);
    };

    const addUserToDatabase = async (nombre: string, apellidos: string, email: string, contrasena: string, telefono: string, rol: boolean) => {
        try {
            const user = {
                userId: 0,
                userName: nombre,
                userLastname: apellidos,
                email: email,
                password: contrasena,
                phoneNumber: telefono,
                isAdmin: rol 
            }
            const response = await fetch("http://localhost:8001/User", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(user),
            });
            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }else {
                console.log('OPERATION SUCCESSFULLY COMPLETED');
            }
        }catch (error) {
            console.log('Error to create user: ', error);
        }
    }

    const deleteUserToDatabase = async (userId: number) => {
        try {
            const response = await fetch(`http://localhost:8001/User/${userId}`, {
                method: 'DELETE'
            });
            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }else {
                console.log('OPERATION SUCCESSFULLY COMPLETED');
            }
        }catch (error) {
            console.log('Error to delete user: ', error);
        }
    }

    const updateUserToDatabase = async (userId: number, nombre: string, apellidos: string, email: string, contrasena: string, telefono: string, rol: boolean) => {
        try {
            const user = {
                userId: userId,
                userName: nombre,
                userLastname: apellidos,
                email: email,
                password: contrasena,
                phoneNumber: telefono,
                isAdmin: rol 
            }
            const response = await fetch(`http://localhost:8001/User/${userId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(user),
            });
            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }else {
                console.log('OPERATION SUCCESSFULLY COMPLETED');
            }
        }catch (error) {
            console.log('Error to update user: ', error);
        }
    }

    const LoginToPanelAdmin = async (email: string, password: string) => {
        try {
            const response = await fetch('http://localhost:8001/User/Login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: email, password: password }),
            });
            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }else {
                console.log('OPERATION SUCCESSFULLY COMPLETED');
                return true; 
            }
        }catch (error) {
            console.log('Error to validate user admin: ', error);
            return false;
        }
    }




    // if (response.ok) {
    //     const data = await response.json();
    //     console.log('Inicio de sesión exitoso:', data);
    //     loginError.value = false;
    // } else {
    //     loginError.value = true;
    // }
    // };



    return { users, getAllUsers, getAdminUsers, addUserToDatabase, deleteUserToDatabase, updateUserToDatabase, LoginToPanelAdmin };
})
