<script setup lang="ts">
    import { format } from 'date-fns';
    import { usePurchasesStore } from '../../store/Purchase-Store'
    import { onMounted } from 'vue';
    const store = usePurchasesStore();

    const formatDate = (date: Date) => {
        return format(new Date(date), 'dd/MM/yyyy');
    };

    onMounted(() => {
        store.getAllPurchases();
    });

</script>

<template>
    <table>
        <thead>
            <tr>
                <th>
                    <div class="table__header-content">
                        <p>{{ $t("ListPurchases.tab1") }}</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-short" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4"/>
                        </svg>
                    </div>
                </th>
                <th class="table__header-content--visibility-date">
                    <div class="table__header-content">
                        <p>{{ $t("ListPurchases.tab2") }}</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-short" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4"/>
                        </svg>
                    </div>
                </th>
                <th class="table__header-content--visibility-show">
                    <div class="table__header-content">
                        <p>{{ $t("ListPurchases.tab3") }}</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-short" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4"/>
                        </svg>
                    </div>
                </th>
                <th class="table__header-content--visibility-session">
                    <div class="table__header-content">
                        <p>{{ $t("ListPurchases.tab4") }}</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-short" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4"/>
                        </svg>
                    </div>
                </th>
                <th class="table__header-content--visibility-seats">
                    <div class="table__header-content">
                        <p>{{ $t("ListPurchases.tab5") }}</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-short" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4"/>
                        </svg>
                    </div>
                </th>
                <th class="table__header-content--visibility-name">
                    <div class="table__header-content">
                        <p>{{ $t("ListPurchases.tab6") }}</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-short" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4"/>
                        </svg>
                    </div>
                </th>
                <th class="table__header-content--visibility-email">
                    <div class="table__header-content">
                        <p>{{ $t("ListPurchases.tab7") }}</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-short" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4"/>
                        </svg>
                    </div>
                </th>  
                <th class="table__header-content--visibility-phone">
                    <div class="table__header-content">
                        <p>{{ $t("ListPurchases.tab8") }}</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-short" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4"/>
                        </svg>
                    </div>
                </th>
                <th class="table__header-content--visibility-price">
                    <div class="table__header-content">
                        <p>{{ $t("ListPurchases.tab9") }}</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-short" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4"/>
                        </svg>
                    </div>
                </th>
            </tr>
        </thead>
 
        <tbody id="row" v-for="purchase in store.purchases" :key="purchase.purchaseId" >
            <th>{{ purchase.purchaseId }}</th>
            <th>{{ formatDate(purchase.datePurchase) }}</th>
            <th class="table__header-content--visibility-show">{{ purchase.title }}</th>
            <th>{{ purchase.sessionId }}</th>
            <th>{{ purchase.reservedSeats.map(seat => seat.seatIdReserved).join(', ') }}</th>
            <th class="table__header-content--visibility-name"><strong>{{ purchase.buyerName }}</strong></th>
            <th class="table__header-content--visibility-email">{{ purchase.buyerEmail }}</th>
            <th class="table__header-content--visibility-phone">{{ purchase.buyerPhone }}</th>
            <th class="table__header-content--visibility-price">{{ purchase.totalPrice }}€</th>
        </tbody>
    </table>
</template>

<style scoped>
    .table-genre__icon {
        display: flex;
        align-items: center;
    }

    .v-btn--size-default {
        min-width: 20px;
    }
    
    .buttons-actions-panel__item--delete {
        background-color: #D03A3A;
        margin-right: 10px;
        color: white;
        width: 40px;
    }

    .container-button {
        display: flex;
    }

    .button-create-element__content {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0px 15px;
    }

    .button-create-element__content svg {
        margin-right: 7px;
    }

    .table-genre {
        display: flex;
        align-items: center;
        background-color: #F9FAFB;
        color: #363740;
        padding: 8px;
        border-radius: 20px;
    }

    .table-genre svg {
        margin-left: 5px;
        margin-right: 10px;
        color: #363740;
    }

    tr {
        border-bottom: 1px solid #EAECF0;
    }

    tr:last-child {
        border-bottom: none;
    }
    
    table {
        width: 100%;
        font-size: 12px;
        margin-top: 20px;
        border-collapse: collapse;
        font-family: 'Inter', sans-serif;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    thead {
        background-color: #F9FAFB;
        padding: 20px;
        color: #8A92A6;
    }

    thead th {
        border: none;
        padding: 10px;
        font-weight: 400;
    }

    thead th:first-child {
        border-top-left-radius: 10px;
    }

    thead th:last-child {
        border-top-right-radius: 10px;
    }

    .table__header-content {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    tbody {
        background-color: white;
        border: 1px solid #EAECF0;
    }

    tbody th {
        font-weight: 400;
        padding: 10px;
    }

    .buttons-actions-panel {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .buttons-actions-panel__item {
        color: white;
        padding: 10px;
        border-radius: 5px;
        cursor: pointer;
        display: flex;
        align-items: center;
    }

    .buttons-actions-panel__item--delete {
        background-color: #D03A3A;
    }

    .buttons-actions-panel__item--update {
        background-color: #0DBF3F;
        margin-right: 10px;
    }

    .table-row__showtitle {
        display: flex;
        align-items: center;
        justify-content: left;
    }

    .table-row__showtitle_img {
        border-radius: 50%;
        width: 30px;
        height: 30px;
    }

    .table-row__showtitle_text {
        text-align: left;
        margin-left: 15px;
    }

    .table-row__showtitle_text p {
        margin: 0;
    }

    @media (max-width: 1130px) {
        .table__header-content--visibility-price {
            display: none;
        }
    }

    @media (max-width: 1060px) {
        .table__header-content--visibility-phone {
            display: none;
        }
    }

    @media (max-width: 900px) {
        .table__header-content--visibility-email {
            display: none;
        }
    }

    @media (max-width: 800px) {
        .table__header-content--visibility-name {
            display: none;
        }
    }

    @media (max-width: 670px) {
        .table__header-content--visibility-show {
            display: none;
        }
    }
</style>