<template>
    <div class="cartDrawer" :class="cartStore.cartDrawer"> 
        <div class="cartDrawer__head">
            <h2 class="cartDrawer__title"> Cart</h2>
            <div class="closeDrawer" @click="cartStore.closeCartDrawer"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M23 20.168l-8.185-8.187 8.185-8.174-2.832-2.807-8.182 8.179-8.176-8.179-2.81 2.81 8.186 8.196-8.186 8.184 2.81 2.81 8.203-8.192 8.18 8.192z"/></svg></div>
        </div>
      
        <div v-for="item in cartStore.cartData" class="cartProduct">
            <div class="cartMedia">
                <img class="mediaImg"  :src="item.image" />
            </div>
            <div class="cartBody">
                <h2 class="cartBody__title">{{ item.title }}</h2>
                <div class="cartBody__content">
                    <div class="cartBody__qty">
                        <div class="cartBody__qtyBtn" @click="cartStore.removeFromCart(item.id)">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"><path d="M0 10h24v4h-24z"/></svg>
                        </div>
                        <div class="cartBody__qtyCount">{{ item.qty }}</div>
                        <div class="cartBody__qtyBtn" @click="cartStore.addToCart(item.id)">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"><path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/></svg>
                        </div>
                    </div>
                    <h3 class="cartBody__price"> ${{ item.price }}</h3>
                </div>
            </div>
        </div>
        <div class="cartTotal"><span>Total Amount:</span> <span>${{cartStore.cartTotal}}</span></div>
    </div>
</template>

<script setup>
import { useCartStore } from '@/stores/cartStore.js';

const cartStore = useCartStore();

// import { useProductStore } from '@/stores/productStore.js'

// const productStore = useProductStore();

</script>

<style scoped>
.cartDrawer {
    position: fixed;
    width: 300px;
    height: 100vh;
    top: 0;
    background-color: #fff;
    overflow-y: scroll;
    box-shadow: 1px 2px 5px 2px;
    z-index: 1;
    transition: all ease-in-out 500ms;
}

.closeDrawer {
    cursor: pointer;
    z-index: 9;
    text-align: right;
    padding: 5px 10px;
}
.cartDrawer.open {
    right: 0;
}
.cartDrawer.close {
    right: -320px;
}

.cartDrawer__head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    background-color: aliceblue;
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


.cartDrawer__title {
    font-size: 24px;
    font-weight: 800;
}

.cartTotal {
    display: flex;
    justify-content: space-between;
    padding: 10px;
}

.cartTotal span {
    font-size: 22px;
    font-weight: 700;
}

.cartBody__title {
    border-bottom: 1px solid;
    padding-bottom: 10px;
    margin-bottom: 14px;
    font-size: 14px;
    font-weight: 700;
}

.cartBody__content {
    display: flex;
    justify-content: space-between;
}

.cartBody__qty {
    display: grid;
    border: 2px solid;
    width: 80px;
    grid-template-columns: 1fr 1fr 1fr;
    text-align: center;
    align-items: center;

}

.cartBody__qtyCount {
    border-left: 2px solid;
    border-right: 2px solid;
    font-size: 16px;
    font-weight: 700;
}

.cartBody__price {
    font-weight: 700;
    font-weight: 18px;
}

.cartBody__qtyBtn svg {
    position: relative;
    top: 2px;
}
</style>