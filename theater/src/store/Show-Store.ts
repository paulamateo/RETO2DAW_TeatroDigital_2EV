import { defineStore } from "pinia";
import { reactive, computed, ref } from "vue";
import { format } from "date-fns";

export interface Show {
    showId: number,
    title: string,
    author: string,
    director: string,
    genre: string,
    age: number,
    date: Date,
    length: string,
    price: number,
    poster: string,
    banner: string,
    scene: string,
    overview: string
}

export const useShowsStore = defineStore('shows', () => {
    const shows = reactive<Show[]>([])
    const searchTerm = ref('');

    const getAllShows = async () => {
        try {
            const response = await fetch('http://localhost:8001/Show')
            const data = await response.json();
            shows.splice(0, shows.length, ...data);
            return data;
        }catch (error) {
            console.log('Error displaying shows: ', error);
            return [];
        }
    }

    const getShowByTitle = async (title: string) => {
        try {   
            const response = await fetch(`http://localhost:8001/Show/ByName/${title}`);
            const data = await response.json();
            return data;
        }catch (error) {
            console.log('Error displaying show by title: ', error);
            return [];
        }
    }

    const addShowToDatabase = async (titulo: string, autor: string, director: string, genero: string, edad: number, fecha: Date, duracion: string, precio: number, posterFile: string, bannerFile: string, sceneFile: string, resena: string) => {
        try {
            const show = {
                showId: 0,
                title: titulo,
                author: autor,
                director: director,
                genre: genero,
                age: edad,
                date: fecha,
                length: duracion,
                price: precio,
                poster: posterFile,
                banner: bannerFile,
                scene: sceneFile,
                overview: resena
            }
            const response = await fetch("http://localhost:8001/Show", {
                method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(show),
            });
            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }else {
                console.log('OPERATION SUCCESSFULLY COMPLETED');
            }
        }catch (error) {
            console.log('Error to create show: ', error);
        }
    }

    const deleteShowToDatabase = async (showId: number) => {
        try {
            const response = await fetch(`http://localhost:8001/Show/${showId}`, {
                method: 'DELETE'
            });
            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }else {
                console.log('OPERATION SUCCESSFULLY COMPLETED');
            }
        }catch (error) {
            console.log('Error to delete show: ', error);
        }
    }

    const updateShowToDatabase = async (showId: number, titulo: string, autor: string, director: string, genero: string, edad: number, fecha: Date, duracion: string, precio: number, posterFile: string, bannerFile: string, sceneFile: string, resena: string) => {
        try {
            const show = {
                showId: showId,
                title: titulo,
                author: autor,
                director: director,
                genre: genero,
                age: edad,
                date: fecha,
                length: duracion,
                price: precio,
                poster: posterFile,
                banner: bannerFile,
                scene: sceneFile,
                overview: resena
            }
            const response = await fetch(`http://localhost:8001/Show/${showId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(show),
            });
            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }else {
                console.log('OPERATION SUCCESSFULLY COMPLETED');
            }
        }catch (error) {
            console.log('Error to update show: ', error);
        }
    }
    
    const filteredShows = computed(() => {
        return shows.filter((show) => show.title.toLowerCase().includes(searchTerm.value.toLowerCase()));
    });

    const searchShow = async (title: string) => {
        try {
            const response = await fetch(`http://localhost:8001/Show/ByName/${title}`);
            if (!response.ok) {
                throw new Error('Show not found');
            }
            const show = await response.json();
            window.location.href = `/Shows/${show.showId}`;
        }catch (error) {
            alert('No se ha encontrado la obra.');
        }
    }

    return { shows, getAllShows, filteredShows, searchTerm, getShowByTitle, addShowToDatabase, deleteShowToDatabase, updateShowToDatabase, searchShow };
})

export const useShowByIdStore = defineStore('showById', () => {
    const state = reactive<{ show: Show }>({
        show: {
            showId: 0,
            title: '',
            author: '',
            director: '',
            genre: '',
            age: 0,
            date: new Date(),
            length: '',
            price: 0,
            poster: '',
            banner: '',
            scene: '',
            overview: ''
        }
    });

    const getShowById = async (showId: string) => {
        try {
            const response = await fetch(`http://localhost:8001/Show/${showId}`);
            const data = await response.json();
            Object.assign(state.show, { ...data, date: formatDate(data.date) });
        } catch (error) {
            console.error('Error displaying show: ', error);
        }
    };

    const formatDate = (date: string | Date): string => {
        return format(new Date(date), 'dd/MM/yyyy');
    };

    return { ...state, getShowById };
});