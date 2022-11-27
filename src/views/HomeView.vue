<script setup>
  
    import ProductCard from '@/components/ProductCard.vue';
    import CartCard from '@/components/CartCard.vue';
    import CartDrawerCard from '@/components/CartDrawerCard.vue';

    import { useProductStore } from '@/stores/productStore.js'

    const productStore = useProductStore();

    productStore.fetchProduct();

</script>

<template>
    <div class="header">
        <CartCard />
        <CartDrawerCard />

    </div>
    <div class="productWrapper">
        <ProductCard v-for="product in productStore.products[0]"
        :key="product.id"
        :name="product.title"
        :image="product.image"
        :price="'$' + product.price"
        :category="product.category"
        :desc="product.description"
        :productID="product.id"
        />

    </div>
</template>

<style scoped>
.productWrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 50px;
}

.header {
    display: flex;
    align-items: flex-end;
}
</style>
