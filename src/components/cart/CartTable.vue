<template>
    <table class="w-full border-collapse">
        <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>Delete one</th>
            <th>Price per Bottle</th>
        </tr>
        <tr v-for='(data, name) in store.grouped' :key="data">
            <td>{{ name }}</td>
            <td>{{ data.length }}</td>
            <td><button @click="deleteItem(data)">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48">
                        <mask id="ipTDeleteTwo0">
                            <g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4">
                                <path fill="#555" d="M14 11L4 24l10 13h30V11H14Z" />
                                <path d="m21 19l10 10m0-10L21 29" />
                            </g>
                        </mask>
                        <path fill="#ff8787" d="M0 0h48v48H0z" mask="url(#ipTDeleteTwo0)" />
                    </svg>
                </button></td>
            <td>₦{{ data[0].price }}</td>
        </tr>
        <tr>
            <th colspan="3">Total</th>
            <td class="font-bold text-[1.4rem]">₦{{ store.totalPriceOfItems }}</td>
        </tr>
    </table>
</template>

<script setup>
import { useStore } from '../../store/cart';
import { useToast } from '../../store/toast';
const store = useStore()
const toast = useToast()

const deleteItem = (data) => {
    store.deleteItem(data[0].id)
    toast.addToast("Item deleted!", "info")
}
</script>

<style scoped>
td,
th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
}

tr:nth-child(even) {
    background-color: #685454;
    color: #fff;
}
</style>