<script setup lang="ts">
    import { onMounted } from 'vue'
    import { useSessionsStore } from '../../store/Session-Store'
    import PopUp_CreateSession from './PopUp-CreateSession.vue'
    import PopUp_DeleteSession from './PopUp-DeleteSession.vue'
    import PopUp_UpdateSession from './PopUp-UpdateSession.vue'
    const store = useSessionsStore();

    onMounted(() => {
        store.getAllSessions();
    });
</script>


<template>
    <div class="container-button">
        <div>
            <PopUp_CreateSession />
        </div>
    </div>
    <div class="sessions-cards sessions-cards--grid">
        <div class="session-card__item" v-for="session in store.sessions" :key="session.sessionId">
            <div class="session-card__id">
                <p>#{{ session.sessionId }}</p>
            </div>
            <img class="session-card__img" :src="session.poster" alt="{{ session.title }}">
            <div class="session-card__content">
                <p class="session-card__title">{{ session.title }}</p>
                <div class="session-card__data">
                    <div class="session-card__hour">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-smartwatch" viewBox="0 0 16 16">
                            <path d="M9 5a.5.5 0 0 0-1 0v3H6a.5.5 0 0 0 0 1h2.5a.5.5 0 0 0 .5-.5z"/>
                            <path d="M4 1.667v.383A2.5 2.5 0 0 0 2 4.5v7a2.5 2.5 0 0 0 2 2.45v.383C4 15.253 4.746 16 5.667 16h4.666c.92 0 1.667-.746 1.667-1.667v-.383a2.5 2.5 0 0 0 2-2.45V8h.5a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5H14v-.5a2.5 2.5 0 0 0-2-2.45v-.383C12 .747 11.254 0 10.333 0H5.667C4.747 0 4 .746 4 1.667M4.5 3h7A1.5 1.5 0 0 1 13 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 3 11.5v-7A1.5 1.5 0 0 1 4.5 3"/>
                        </svg>
                        <p>{{ session.hour }}h</p>
                    </div>
                    <div class="session-card__date">
                        <p>{{ store.formatDate(session.date) }}</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-calendar-week" viewBox="0 0 16 16">
                            <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z"/>
                            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>
                        </svg>
                    </div>
                </div>
                <div class="session-card__data">
                    <div class="session-card__hour">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-nvme" viewBox="0 0 16 16">
                            <path d="M1.5 4.5A.5.5 0 0 1 2 4h13.5a.5.5 0 0 1 .5.5V7a.5.5 0 0 1-.5.5.5.5 0 0 0 0 1 .5.5 0 0 1 .5.5v2.5a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5h-1A.5.5 0 0 1 0 11V7.5A.5.5 0 0 1 .5 7h1a.25.25 0 0 0 0-.5h-1A.5.5 0 0 1 0 6V5a.5.5 0 0 1 .5-.5zm1 .5a.5.5 0 0 1-.5.5h-.5a1.25 1.25 0 1 1 0 2.5H1v2.5h1a.5.5 0 0 1 .5.5H15V9.415a1.5 1.5 0 0 1 0-2.83V5z"/>
                            <path d="M4 6.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5zM5 7v2h1V7zm3-.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5zM9 7v2h3V7z"/>
                        </svg>
                        <p>{{ session.totalSeats }} asientos</p>
                    </div>
                    <div class="session-card__date">
                        <p>{{ session.notes }}</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-card-heading" viewBox="0 0 16 16">
                        <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z"/>
                        <path d="M3 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5m0-5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5z"/>
                        </svg>
                    </div>
                </div>
                <div class="session-card__buttons">
                    <div>
                        <PopUp_UpdateSession :sessionId="session.sessionId.toString()"/>
                    </div>
                    <div>
                        <PopUp_DeleteSession :sessionId="session.sessionId.toString()"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
    .container-button {
        display: flex;
    }

    .session-card__buttons {
        display: flex;
        justify-content: center;
        margin-top: 20px;
        gap: 10px;
    }

    .session-card__item {
        background-color: white;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        font-size: 12px;
        position: relative;
        border-radius: 20px;
    }

    .session-card__img {
        width: 100%;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }

    .session-card__content {
        margin: 20px;
    }

    .session-card__title {
        text-transform: uppercase;
        text-align: center;
        margin-bottom: 10px;
        font-weight: 800;
    }

    .session-card__id {
        position: absolute;
        background-color: #f9fafb;
        color: #363740;
        padding: 8px;
        border-radius: 50%;
        font-size: 10px;
        right: 0;
        margin: 10px 10px 0 0;
        height: 30px;
        width: 30px;
        text-align: center;
    }

    .session-card__hour svg {
        margin-right: 8px;
    }

    .session-card__hour {
        display: flex;
        align-items: center;
        color: #363740;
        font-size: 10px;
    }

    .session-card__date {
        display: flex;
        align-items: center;
        color: #363740;
        font-size: 10px;
    }

    .session-card__date svg {
        margin-left: 10px;
    }

    .session-card__data {
        display: flex;
        justify-content: space-between;
    }

    .v-btn--size-default {
        min-width: 20px;
    }

    @media (min-width: 650px) {
        .sessions-cards {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 15px;
            margin-top: 20px;
        }
    }

    @media (min-width: 900px) {
        .sessions-cards {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 15px;
        }
    }

    @media (min-width: 1290px) {
        .sessions-cards {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 15px;
        }
    }

    @media (min-width: 1300px) {
        .sessions-cards {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            gap: 15px;
        }
    }

    @media (min-width: 1500px) {
        .sessions-cards {
            display: grid;
            grid-template-columns: repeat(6, 1fr);
            gap: 15px;
        }
    }

    @media (min-width: 800px) {
        .container-button {
            display: flex;
            justify-content: flex-end;
        }
    }
</style>./AdminPanel/PopUp-UpdateSession.vue./AdminPanel/PopUp-CreateSession.vue./AdminPanel/PopUp-DeleteSession.vue../../store/Session-Store