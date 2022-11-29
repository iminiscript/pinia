import { defineStore } from 'pinia'

export const useProductStore = defineStore({
	id: 'productStore',
	state: () => ({
		products: {},
		ids: []
	}),

	actions: {
		 async fetchProduct() {
			const respons  = await fetch('https://fakestoreapi.com/products');
			console.log(respons);
			const res = await respons.json();
			// for (const iterator of res) {
			// 	iterator.id = iterator.id - 1 
			// }
			//this.products.push(res);

			this.ids = res.map(product => {
				this.products[product.id] = product
				return product.id
			})
		}
	},

	getters: {
		list(){
			return this.ids.map(i => this.products[i])
		}
	}
})