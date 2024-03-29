import { defineStore } from "pinia";
import { reactive } from "vue";
import { apiUrl } from '@/env';

export interface Session {
    sessionId: number,
    hour: string,
    totalSeats: number,
    notes: string,
    showId: number,
    title: string,
    poster: string,
    date: Date,
    seats: []
}

export const useSessionsStore = defineStore('sessions', () => {
    const sessions = reactive<Session[]>([])

    const getAllSessions = async () => {
        try {
            const response = await fetch(`${apiUrl}/Session`)
            const data = await response.json();
            sessions.splice(0, sessions.length, ...data);
        }catch (error) {
            console.log('Error displaying sessions: ', error);
        }
    }

    const getAllSessionsbyShow = async (showId: string) => {
        try {
            const response = await fetch(`${apiUrl}/Show/${showId}/Session`)
            const data = await response.json();
            sessions.splice(0, sessions.length, ...data);
        }catch (error) {
            console.log('Error displaying sessions by show: ', error);
        }
    }

    const addSessionToDatabase = async (obraId: number, hora: string, asientos: number, notas: string) => { 
        try {
            const session = {
                sessionId: 0,
                showId: obraId,
                hour: hora,
                totalSeats: asientos,
                notes: notas
            }
            const response = await fetch(`${apiUrl}/Session`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(session),
            });
            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }else {
                console.log('OPERATION SUCCESSFULLY COMPLETED');
            }
        }catch (error) {
            console.log('Error to create session: ', error);
        }
    }

    const deleteSessionToDatabase = async (sessionId: number) => {
        try {
            const response = await fetch(`${apiUrl}/Session/${sessionId}`, {
                method: 'DELETE'
            });
            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }else {
                console.log('OPERATION SUCCESSFULLY COMPLETED');
            }
        }catch (error) {
            console.log('Error to delete session: ', error);
        }
    }

    const updateSessionToDatabase = async (sessionId: number, hora: string, asientos: number, notas: string) => {
        try {
            const session = {
                sessionId: sessionId,
                hour: hora,
                totalSeats: asientos,
                notes: notas
            }
            const response = await fetch(`${apiUrl}/Session/${sessionId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(session),
            });
            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }else {
                console.log('OPERATION SUCCESSFULLY COMPLETED');
            }
        }catch (error) {
            console.log('Error to update session: ', error);
        }
    }
   
    return { sessions, getAllSessions, getAllSessionsbyShow, addSessionToDatabase, deleteSessionToDatabase, updateSessionToDatabase };
})