<template>
    <div>
        <div class="cartHeader">
            <h1>Cart {{ cartStore.cartCount }}</h1>
            <h2>Total Amount ${{cartStore.cartTotal}}</h2>
            
        </div>
    </div>
</template>

<script setup>

import { useCartStore } from '@/stores/cartStore.js';

const cartStore = useCartStore();

</script>

<style scoped>

</style>