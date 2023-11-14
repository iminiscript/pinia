<template>
    <div class="filter">
        <h1>Test</h1>
        {{ test }}
        <h1>setOrder</h1>
        {{ setOrder}}
        <div class="filter">
            <button @click="setOrder('priceAsc')">Assensing</button>
            <button @click="setOrder('default')">Default</button>
            <button @click="setOrder('priceDesc')">Desecing</button>
            <p>{{ order.val }} button <br/>{{ orderRef }}</p>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive , computed } from 'vue';
import { useProductStore } from '@/stores/productStore.js';
    
    const productStore = useProductStore();

    const order = reactive({val: 'default'});

    const orderRef = ref('default');

    const productList = productStore.products;

    const sortDefault = () => productStore.list;

    const sortAscending = () => {
        return sortDefault.value.sort( ( a, b) => a.price > b.price ? 1 : -1);
    };

    const sortDescending = () => {
        return sortDefault.value.sort( ( a, b) => a.price < b.price ? 1 : -1);
    };

    const test = computed(() => {
        return sortAscending.value;
    })

    const setOrder = (val) => {
        order.val = val;
        orderRef.value = val;
        
        if(order.val === 'priceAsc') {
            console.log('console.log(sortAscending.value)');
            console.log(sortAscending.value)
            return sortAscending.value;

        } else if (order.val === 'priceDesc') {
            console.log('console.log(sortDescending.value)');
            console.log(sortDescending.value)
            return sortDescending.value;
        } 
           return productStore.products;
        

        // const sortProduct = prod.sort( (a , b) => a.price > b.price ? 1 : -1);
        // console.log(sortProduct);

    };



</script>

<style scoped>

</style>