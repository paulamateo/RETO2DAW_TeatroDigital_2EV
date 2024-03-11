import { defineStore } from "pinia";
import { reactive } from "vue";
import { format } from 'date-fns';


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

    const formatDate = (date: Date) => {
        return format(new Date(date), 'dd/MM/yyyy');
    };

    const getAllSessions = async () => {
        try {
            const response = await fetch(`http://localhost:8001/Session`)
            const data = await response.json();
            sessions.splice(0, sessions.length, ...data);
        }catch (error) {
            console.log('Error displaying sessions: ', error);
        }
    }

    const getAllSessionsbyShow = async (showId: string) => {
        try {
            const response = await fetch(`http://localhost:8001/Show/${showId}/Session`)
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
            const response = await fetch("http://localhost:8001/Session", {
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
            const response = await fetch(`http://localhost:8001/Session/${sessionId}`, {
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
            const response = await fetch(`http://localhost:8001/Session/${sessionId}`, {
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
   
    return { sessions, getAllSessions, getAllSessionsbyShow, formatDate, addSessionToDatabase, deleteSessionToDatabase, updateSessionToDatabase };
})