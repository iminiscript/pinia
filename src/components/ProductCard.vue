<template>
    <div class="product">
        <div class="media">
            <img class="mediaImg"  :src="image" />
        </div>
        <div class="product__body">
            <h2>{{ name }}</h2>
            <h3> {{ price }}</h3>
            <h3>{{ category }}</h3>
            <p> {{ descChar }}</p>
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
}

.mediaImg {
    max-width: 150px;
}
</style>