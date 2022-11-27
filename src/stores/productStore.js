import { defineStore } from 'pinia'

export const useProductStore = defineStore({
	id: 'productStore',
	state: () => ({
		products: []
	}),

	actions: {
		 async fetchProduct() {
			
			this.product = await fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => this.products.push(json))

			console.log(this.products[0])
		}
	}
})
  