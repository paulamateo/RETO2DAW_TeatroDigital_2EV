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

//GET ALL SHOWS
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

    const filteredShows = computed(() => {
        return shows.filter((show) => show.title.toLowerCase().includes(searchTerm.value.toLowerCase()));
    });

    return { shows, getAllShows, filteredShows, searchTerm, getShowByTitle };
})

//GET SHOW BY ID
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