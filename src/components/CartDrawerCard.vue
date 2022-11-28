<template>
    <div class="cartDrawer" :class="cartStore.cartDrawer"> 
        <div class="cartDrawer__head">
            <h2 class="cartDrawer__title"> Cart</h2>
            <div class="closeDrawer" @click="cartStore.closeCartDrawer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M23 20.168l-8.185-8.187 8.185-8.174-2.832-2.807-8.182 8.179-8.176-8.179-2.81 2.81 8.186 8.196-8.186 8.184 2.81 2.81 8.203-8.192 8.18 8.192z"/></svg></div>
        </div>
      
        <div v-for="item in cartStore.cartData" class="cartProduct">
            <div class="cartMedia">
                <img class="mediaImg"  :src="item.image" />
            </div>
            <div class="cartBody">
                <h2 class="cartBody__title">{{ item.title }}</h2>
                <h3 class="cartBody__price"> ${{ item.price }}</h3>
            </div>
            <!-- <div @click="cartStore.addToCart(productID)">Qty</div> -->
        </div>
        <div class="cartTotal"><span>Total Amount:</span> <span>${{cartStore.cartTotal}}</span></div>
    </div>
</template>

<script setup>
import { useCartStore } from '@/stores/cartStore.js';

const cartStore = useCartStore();

</script>

<style scoped>
.cartDrawer {
    position: fixed;
    width: 300px;
    height: 100vh;
    top: 0;
    background-color: aliceblue;
    overflow-y: scroll;
    box-shadow: 1px 2px 5px 2px;
}

.closeDrawer {
    cursor: pointer;
    z-index: 9;
    text-align: right;
    padding: 5px 10px;
}
.cartDrawer.open {
    right: 0;
    z-index: 1;
}
.cartDrawer.close {
    right: -320px;
}

.cartDrawer__head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
}

.cartProduct {
    display: grid;
    grid-template-columns: 0.40fr 1fr;
    grid-column-gap: 10px;
    padding: 10px;
    border-bottom: 1px solid gray;
    margin-bottom: 20px;
}

.cartBody {
    padding-left: 10px;
}

h2,h3 {
    font-size: 16px;
    font-weight: 600;
}

.cartDrawer__title {
    font-size: 24px;
    font-weight: 800;
}

.cartTotal {
    display: flex;
    justify-content: space-between;
    padding: 10px;
}

span {
    font-size: 18px;
    font-weight: 700;
}

.cartBody__title {
    border-bottom: 1px solid rgb(230, 229, 229);
    padding-bottom: 10px;
    margin-bottom: 10px;
}

.cartBody__price {
    text-align: right;
    font-weight: 700;
}
</style>