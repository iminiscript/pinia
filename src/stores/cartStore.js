import { defineStore } from 'pinia'

import { useProductStore } from './productStore.js'


export const useCartStore = defineStore({
	id: 'cartStore',
	state: () => ({
		cartProducts: {
			
		}
	}),

	actions: {
		addToCart(state) {
			//console.log(state);
			//console.log(this.cartProducts);
			
			if(this.cartProducts[state]) {
				this.cartProducts[state].qty++
			} else {
				this.cartProducts[state] = {
					productid: state - 1,
					qty: 1
				}
			}
		} 
	},

	getters: {
		cartCount() {
			const count = Object.keys(this.cartProducts).reduce((acc, id) => acc + this.cartProducts[id].qty, 0);
			return count;
			
			// console.log(this.cartProducts)
			//  const userKeys = Object.keys(this.cartProducts);
			//  console.log("🚀 ~ userKeys", userKeys);
			

			// const count =  user.reduce((acc, id) => {
			// 	acc + this.cartProducts[id]
			// }, 0);

			// console.log(count);

			
			// console.log("🚀 ~ user", user);
			
			//const test = user.map(qty => Number(qty))
			//const total = Number(user.reduce((x, y) => x + y, 0))
			//console.log(test)
			
		},

		cartTotal() {
			const productsData = useProductStore();
			//console.log(productsData);
			
			const totalPrice = Object.keys(this.cartProducts).reduce((acc, id) => {
				console.log(Object.keys(this.cartProducts));
				console.log(productsData.products[0][id]);
				return acc + productsData.products[0][id].price * this.cartProducts[id].qty }, 0);
				console.log(totalPrice);
			
		},

		cartData() {
			const productsData = useProductStore();
			
			return Object.keys(this.cartProducts).map(id => {
				const productInCart = this.cartProducts[id]

				// console.log(productInCart);

				const data = {
					id: productInCart.productid,
					image:productsData.products[0][productInCart.productid].image,
					title:productsData.products[0][productInCart.productid].title,
					qty:productInCart.qty,
					price: productInCart.qty * productsData.products[0][productInCart.productid].price,

				}

				return data;
				
			
			});

		}
	}
})
  