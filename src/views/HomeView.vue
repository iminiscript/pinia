<template>
    <div>
      <CartDrawerCard />
      <CartCard />
  
      <div class="filter">
        <h2>Filters:</h2>
        <button @click="setOrder('priceAsc')"><span>Price</span><b>&uarr;</b></button>
        <button @click="setOrder('default')">Default</button>
        <button @click="setOrder('priceDesc')"><span>Price</span><b>&darr;</b></button>
      </div>
  
      <div class="productWrapper">
        <ProductCard
          v-for="product in filterProduct"
          :key="product.id"
          :name="product.title"
          :image="product.image"
          :price="'$' + product.price"
          :category="product.category"
          :desc="product.description"
          :productID="product.id"
        />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, reactive, computed } from 'vue';
  import ProductCard from '@/components/ProductCard.vue';
  import CartCard from '@/components/CartCard.vue';
  import CartDrawerCard from '@/components/CartDrawerCard.vue';
  
  import { useProductStore } from '@/stores/productStore.js';
  
  const productStore = useProductStore();
  productStore.fetchProduct();
  
  const order = ref('default');
  
  const sortAscending = computed(() =>
    [...productStore.list].sort((a, b) => a.price - b.price)
  );
  
  const sortDescending = computed(() =>
    [...productStore.list].sort((a, b) => b.price - a.price)
  );
  
  const filterProduct = computed(() => {
    if (order.value === 'priceAsc') {
      console.log('Ascending:', sortAscending.value);
      return sortAscending.value;
    } else if (order.value === 'priceDesc') {
      console.log('Descending:', sortDescending.value);
      return sortDescending.value;
    }
    return [...productStore.list];
  });
  
  const setOrder = (val) => {
    order.value = val;
  };
  </script>
  

<style scoped>
.productWrapper {
    max-width: 1280px;
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 50px;
}

.header {
    display: flex;
    align-items: flex-end;
}

.filter {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    max-width: 50%;
    column-gap: 10px;
    margin: 40px 0;
    text-align: center;
}

.filter button {
    padding: 10px;
    font-size: 18px;
    color: white;
    border: 1px solid;
    background-color: black;
    text-align: center;
    display: flex;
    justify-content: space-around;
    margin: 0 20px;

}
b {
    font-weight: 800;
}
</style>
