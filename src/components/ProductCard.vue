<template>
    <div class="product">
        <div class="media">
            <img class="mediaImg"  :src="image" />
        </div>
        <div class="product__body">
            <h2 class="product__name">{{ name }}</h2>
            <h3 class="product__price"> {{ price }}</h3>
            <h3 class="product__cat">{{ category }}</h3>
            <p class="product__desc"> {{ descChar }}</p>
        </div>
        <button @click="cartStore.addToCart(productID)">Add To Cart</button>
    </div>
</template>

<script setup>
import { useCartStore } from '@/stores/cartStore.js';

const cartStore = useCartStore();

import { computed } from '@vue/reactivity';

const props = defineProps({
   image: String,
   name: String,
   price: Number,
   desc: String,
   category: String,
   productID: Number,
});

const descChar = computed(() => {
    return props.desc.slice(0, 50) + '...';
})

</script>

<style scoped>
img {
    max-width: 100%;
    height: auto;
}

.media {
    text-align: center;
    min-height: 250px;
    display: flex;
}

.mediaImg {
    max-width: 150px;
    margin: auto;
    max-height: 220px;
}

button {
    background-color: black;
    color: aliceblue;
    padding: 9px 10px;
    border-color: black;
    border-radius: 2px;
    min-width: 200px;
    font-size: 18px;
    font-weight: 600;
}
.product {
    padding: 10px;
    margin-bottom: 20px;
}
.product__body {
    padding: 20px 0; 
}

.product__name {
    font-size: 18px;
    font-weight: 600;
    min-height: 70px;
    border-bottom: 1px solid;
    padding-bottom: 10px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
}

.product__cat {
    font-size: 16px;
    text-transform: uppercase;
    font-weight: 600;
}
.product__price {
    font-size: 18px;
    font-weight: 700;
}

.product__desc {
    font-size: 14px;
    font-weight: 500;
}
</style>