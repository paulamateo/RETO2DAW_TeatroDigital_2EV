<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { format } from 'date-fns';
import { useShowsStore } from '../../store/Show-Store'; // Ajusta esta ruta según corresponda
import { es } from 'date-fns/locale';



const currentDate = ref(new Date());
const currentMonth = computed(() => currentDate.value.getMonth());
const currentYear = computed(() => currentDate.value.getFullYear());

const getDaysInMonth = (year: number, month: number) => {
  return new Date(year, month + 1, 0).getDate();
};

const getFirstDayOfMonth = (year: number, month: number) => {
  const firstDay = new Date(year, month, 1).getDay();
  return firstDay === 0 ? 6 : firstDay - 1;
};

const weeks = computed(() => {
  const days: Array<{ day: number; isCurrentMonth: boolean; date: string }> = [];
  const daysInMonth = getDaysInMonth(currentYear.value, currentMonth.value);
  const firstDayOfMonth = getFirstDayOfMonth(currentYear.value, currentMonth.value);

  for (let i = firstDayOfMonth; i > 0; i--) {
    const day = new Date(currentYear.value, currentMonth.value, -i + 1);
    days.push({
      day: day.getDate(),
      isCurrentMonth: false,
      date: format(day, 'yyyy-MM-dd')
    });
  }

  for (let i = 1; i <= daysInMonth; i++) {
    const day = new Date(currentYear.value, currentMonth.value, i);
    days.push({
      day: i,
      isCurrentMonth: true,
      date: format(day, 'yyyy-MM-dd')
    });
  }

  const extraDaysToAdd = (7 - days.length % 7) % 7;
  for (let i = 1; i <= extraDaysToAdd; i++) {
    const day = new Date(currentYear.value, currentMonth.value + 1, i);
    days.push({
      day: day.getDate(),
      isCurrentMonth: false,
      date: format(day, 'yyyy-MM-dd')
    });
  }

  return Array.from({ length: days.length / 7 }, (_, i) => days.slice(i * 7, i * 7 + 7));
});

const formattedMonth = computed(() => {
  return format(currentDate.value, 'MMMM yyyy', { locale: es });
});


const goToPreviousMonth = () => {
  currentDate.value = new Date(currentYear.value, currentMonth.value - 1, 1);
};

const goToNextMonth = () => {
  currentDate.value = new Date(currentYear.value, currentMonth.value + 1, 1);
};

const store = useShowsStore();

onMounted(async () => {
  await store.getAllShows();
});

const showsForDay = (date: string) => {
  return store.shows.filter(show => {
    return format(new Date(show.date), 'yyyy-MM-dd') === date;
  });
};
</script>

<template>
  <div class="container-calendar-events">
    <div class="calendar-container" id="calendar-container">
      <div class="month-header">
        <h3>{{ formattedMonth }}</h3>
        <div class="month-navigation">
         <button @click="goToPreviousMonth">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="arrow" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
            </svg>
          </button>
          <button @click="goToNextMonth">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="arrow" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
            </svg>
          </button>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>L</th>
            <th>M</th>
            <th>X</th>
            <th>J</th>
            <th>V</th>
            <th>S</th>
            <th>D</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(week, index) in weeks" :key="index">
            <td v-for="day in week" :key="day.date" :class="{ 'other-month': !day.isCurrentMonth }">
              {{ day.day }}
              <div v-for="show in showsForDay(day.date)" :key="show.showId" class="show-info">
                <RouterLink :to="{ path: '/Shows/' + show.showId }">
                <div class="title-table">{{ show.title }}</div>
                </RouterLink>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.img-table {
  width: 100%;
  height: auto;
}

.title-table {
  background-color: #b0802c;
  font-size: 10px;
  color: white;
  margin: 0;
  padding: 5px;
  cursor: pointer;
  margin-top: 5px;
}

.current-day {
  background-color: #b20000;
  color: white;
}

.other-month {
  color: #d3d3d3;
} 

.weekday-panel::first-letter {
  text-transform: uppercase;
}

.weekday-panel {
  text-align: center;
  margin-bottom: 15px;
}

.info-panel {
  display: flex;
  font-size: 13px;
}
.info-panel p {
  margin: 0;
  margin-top: 15px;
}

.show-item {
  position: relative;
  padding: 20px;
  border: 1px solid #cfcfcf;
  border-radius: 8px;
  margin-bottom: 10px;
  box-sizing: border-box;
}


.image-container {
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
}

.img-events-panel {
  max-width: 100%;
  height: auto;
}

.no-events {
  font-size: 12px;
  text-align: center;
  border: 1px solid #cfcfcf;
  border-radius: 8px;
  padding: 10px;
}

.arrow {
  cursor: pointer;
  margin-right: 5px;
}

.shows-list {
  display: flex;
  align-items: center;
}

.show-line {
  height: 3px;
  background-color: #b0802c;
  position: absolute;
  left: 0;
  right: 0;
  margin-top: 5px;
  width: 70%;
  margin-left: auto;
  margin-right: auto;
}

.next-month-day, .prev-month-day {
  color: #ccc;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  position: relative;
  padding: 15px;
  text-align: center;
  border: 1px solid #cfcfcf;
  width: 14.28%; /* Aproximadamente 100% dividido por 7 para distribuir equitativamente el ancho entre los días de la semana */
  min-width: 100px;
}

th {
  background-color: black;
  color: white;
  border: 1px solid black;
  font-size: 12px;
}



.day-cell-content {
  display: flex;
  flex-direction: column;
}

span {
  font-weight: bold;
  margin-bottom: 5px;
}

.month-header {
  font-family: "GothamBook", sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  text-align: center;
  padding: 20px;
  background-color: #b20000;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.month-header h3 {
  margin: 0;
}

.month-navigation {
  display: flex;
  justify-content: center;
  align-items: center;
}


.container-calendar-events {
  margin: 40px 20px;
}

.calendar-container {
  width: 100%;
  overflow: hidden;
  font-size: 10px;
}

.date-panel {
  width: 100%;
  margin-top: 40px;
}

.info-panel__name {
  font-weight: 600;
  padding-left: 20px;
  text-transform: uppercase;
}


@media (min-width: 990px) {
  #calendar-container {
    font-size: 14px;
  }
}
@media (min-width: 1090px) {
  .info-panel {
    display: flex;
  }
}



</style>