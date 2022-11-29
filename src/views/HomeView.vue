<template>
    <CartDrawerCard />
    
    <CartCard />

    <div class="filter">
            <h2>Filters:</h2>
            <button @click="setOrder('priceAsc')"><span>Price</span><b>&uarr;</b></button>
            <button @click="setOrder('default')">Default</button>
            <button @click="setOrder('priceDesc')"><span>Price</span><b>&darr;</b></button>
        </div>
    <div class="productWrapper">
        <ProductCard v-for="product in filterProduct"
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

<script setup>

    import { ref, reactive, computed } from 'vue';
  
    import ProductCard from '@/components/ProductCard.vue';
    import CartCard from '@/components/CartCard.vue';
    import CartDrawerCard from '@/components/CartDrawerCard.vue';
    import SortFilterVue from '../components/SortFilter.vue';

    import { useProductStore } from '@/stores/productStore.js'

    const productStore = useProductStore();

    productStore.fetchProduct();

    
    // function setOrder(val) {
    //     order.value = 'test';
    // }
    const orderRef = ref('default');

    const order = reactive({val: 'default'});

    const productList = productStore.products;

    const sortDefault = computed(() => productStore.list);

    const sortAscending = computed(() => {
        return sortDefault.value.sort( ( a, b) => a.price > b.price ? 1 : -1);
    });

    const sortDescending = computed(() => {
        return sortDefault.value.sort( ( a, b) => a.price < b.price ? 1 : -1);
    })

    const filterProduct = computed(() => {
        
        if(order.val === 'priceAsc') {
            console.log(sortAscending.value)
            return sortAscending.value;

        } else if (order.val === 'priceDesc') {
            console.log(sortDescending.value)
            return sortDescending.value;
        } 
           return productStore.products;
        

        // const sortProduct = prod.sort( (a , b) => a.price > b.price ? 1 : -1);
        // console.log(sortProduct);

    })

    const setOrder = (val) => {
        order.val = val;
        orderRef.value = val;
    }


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
