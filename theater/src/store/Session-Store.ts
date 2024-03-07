import { defineStore } from "pinia";
import { reactive } from "vue";

export interface Session {
    sessionId: number,
    hour: string,
    totalSeats: number
}

//GET ALL SESSIONS FOR A SHOW
export const useSessionsStore = defineStore('sessions', () => {
    const sessions = reactive<Session[]>([])

    const getAllSessions = async (showId: string) => {
        try {
            const response = await fetch(`http://localhost:8001/Show/${showId}/Session`)
            const data = await response.json();
            sessions.splice(0, sessions.length, ...data);
        }catch (error) {
            console.log('Error displaying sessions: ', error);
        }
    }
    
    return { sessions, getAllSessions };
})
