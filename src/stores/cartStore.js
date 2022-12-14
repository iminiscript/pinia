import { defineStore } from 'pinia'

import { useProductStore } from './productStore.js'


export const useCartStore = defineStore({
	id: 'cartStore',
	state: () => ({
		cartProducts: {},
		cartDrawer: 'close',
	}),

	actions: {
		addToCart(state) {
	
			if(this.cartProducts[state]) {
				this.cartProducts[state].qty++
			} else {
				this.cartProducts[state] = {
					productid: state,
					qty: 1
				}
			}

			this.cartDrawer = 'open';

		},

		removeFromCart(state) {
			this.cartProducts[state].qty--
			
			if(this.cartProducts[state].qty === 0) {
				delete this.cartProducts[state]
			}

		},

		closeCartDrawer(){
			this.cartDrawer = 'close';
		},

		openCartDrawer() {
			this.cartDrawer = 'open';
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
				//console.log(Object.keys(this.cartProducts));
				//console.log(productsData.products[id]);
				return acc + productsData.products[id].price * this.cartProducts[id].qty }, 0);
				// console.log(totalPrice);
				const roundOff = Math.round(totalPrice);
				return	roundOff;
			
		},

		cartData() {
			const productsData = useProductStore();
			
			return Object.keys(this.cartProducts).map(id => {
				const productInCart = this.cartProducts[id]

				// console.log(productInCart);

				const data = {
					id: productInCart.productid,
					image:productsData.products[productInCart.productid]?.image,
					title:productsData.products[productInCart.productid]?.title,
					qty:productInCart.qty,
					price: Math.round(productInCart.qty * productsData.products[productInCart.productid]?.price),

				}

				return data;
				
			
			});

		}
	}
})
  