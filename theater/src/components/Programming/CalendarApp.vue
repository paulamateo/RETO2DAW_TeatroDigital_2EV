<template>
    <div>
      <div id="calendar-container">
        <!-- Aquí se generará el calendario -->
        <table v-if="calendar" class="calendar">
          <thead>
            <tr>
              <th v-for="day in daysOfWeek" :key="day">{{ day }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in calendar" :key="row[0].toLocaleDateString()">
              <td v-for="day in row" :key="day.toLocaleDateString()" @click="handleDayClick(day)">
                <div class="day-cell" :class="{ 'prev-month-day': day.getMonth() !== currentMonth, 'current-day': isCurrentDay(day), 'next-month-day': day.getMonth() !== currentMonth }">
                  <span class="day-number">{{ day.getDate() }}</span>
                  <div v-if="showsByDate[day.toISOString()]" class="shows-list">
                    <div v-for="show in showsByDate[day.toISOString()]" :key="show.id" class="show-line">
                      {{ show.name }}
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div id="date-panel">
        <!-- Aquí se mostrarán los detalles del día seleccionado -->
        <div v-if="selectedDate">
          <h3>{{ selectedDate.toDateString() }}</h3>
          <div v-if="selectedShows && selectedShows.length > 0">
            <div v-for="show in selectedShows" :key="show.id">
              <div>{{ show.name }}</div>
              <div>{{ show.scene }}</div>
              <hr>
            </div>
          </div>
          <div v-else>
            No hay espectáculos para este día.
          </div>
        </div>
        <div v-else>
          Seleccione un día para ver los espectáculos.
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue';
  
  const calendarContainer = ref<HTMLElement | null>(null);
  const datePanel = ref<HTMLElement | null>(null);
  const currentDate = new Date();
  const currentMonth = ref(currentDate.getMonth() + 1);
  const currentYear = ref(currentDate.getFullYear());
  const calendar = ref<Date[][]>([]);
  const daysOfWeek = ref<string[]>(['L', 'M', 'X', 'J', 'V', 'S', 'D']);
  const showsByDate = ref<Record<string, any[]>>({});
  const selectedDate = ref<Date | null>(null);
  const selectedShows = ref<any[]>([]);
  
  const generateCalendar = (year: number, month: number) => {
    const firstDayOfMonth = new Date(year, month - 1, 1).getDay();
    const daysInMonth = new Date(year, month, 0).getDate();
  
    const newCalendar: Date[][] = [];
    let row: Date[] = [];
  
    let dayCounter = 1;
  
    for (let i = 0; i < 5; i++) {
      row = [];
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < firstDayOfMonth) {
          const prevMonthDays = new Date(year, month - 1, 0).getDate();
          const prevMonthDay = prevMonthDays - (firstDayOfMonth - 1 - j) + 1;
          row.push(new Date(year, month - 2, prevMonthDay));
        } else if (dayCounter <= daysInMonth) {
          row.push(new Date(year, month - 1, dayCounter));
          dayCounter++;
        } else {
          row.push(new Date(year, month, dayCounter - daysInMonth));
          dayCounter++;
        }
      }
      newCalendar.push(row);
    }
  
    calendar.value = newCalendar;
  };
  
  // const fetchShows = () => {
  //   fetch('http://localhost:3000/shows')
  //     .then(response => response.json())
  //     .then(data => {
  //       const showsData = data.map((show: any) => ({
  //         id: show.id,
  //         name: show.title,
  //         date: new Date(show.date),
  //         scene: show.scene
  //       }));
  
  //       showsData.forEach(show => {
  //         const dayKey = show.date.toISOString();
  //         if (!showsByDate.value[dayKey]) {
  //           showsByDate.value[dayKey] = [];
  //         }
  //         showsByDate.value[dayKey].push(show);
  //       });
  //     })
  //     .catch(error => console.error('Error:', error));
  // };
  
  // const handleDayClick = (day: Date) => {
  //   selectedDate.value = day;
  //   selectedShows.value = showsByDate.value[day.toISOString()] || [];
  // };
  
  // const isCurrentDay = (day: Date) => {
  //   return day.toDateString() === currentDate.toDateString();
  // };
  
  // onMounted(() => {
  //   fetchShows();
  //   generateCalendar(currentYear.value, currentMonth.value);
  // });
  </script>
  
  <style>
  .day-cell {
    padding: 8px;
    cursor: pointer;
  }
  
  .prev-month-day, .next-month-day {
    color: lightgray;
  }
  
  .current-day {
    background-color: lightblue;
  }
  
  .shows-list {
    margin-top: 4px;
  }
  
  .show-line {
    margin-bottom: 4px;
  }
  </style>
  