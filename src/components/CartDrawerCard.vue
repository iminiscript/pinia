<template>
    <div class="cartDrawer"> 
        <div v-for="item in cartStore.cartData" class="cartProduct">
            <div class="cartMedia">
                <img class="mediaImg"  :src="item.image" />
            </div>
            <div class="cartBody">
                <h2>{{ item.title }}</h2>
                <h3> {{ item.price }}</h3>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useCartStore } from '@/stores/cartStore.js';

const cartStore = useCartStore();

</script>

<style scoped>
img {
    max-width: 100%;
    height: auto;
}

.media {
    text-align: center;
}

.mediaImg {
    max-width: 150px;
}
</style>