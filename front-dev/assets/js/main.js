// Vue.component('product',{
//     props: {
//         premium: {
//             type: Boolean,
//             required: true
//         }
//     },
//     template: `
//         <div class="product">
//         <div class="product-image">
//             <img v-bind:src="image">
//         </div>
//             <h1>{{ title }}</h1>
//             <p v-if="inStock > 10">In Stock</p>
//             <p v-else-if="inStock <= 10 && inStock > 0">Almost solt out!</p>
//             <p v-else 
//                 class="out-of-stock">Out of Stock</p>
//             <p>Shipping {{ shipping }}</p>
//             <ul>
//                 <li v-for="detail in details">{{ detail }}</li>
//             </ul>

//             <div v-for="(variant, index) in variants" 
//                 :key="variant.variantId"
//                 class="color-box"
//                 :style="{backgroundColor: variant.variantColor}"
//                 @mouseover="updateProduct(index)"
//                 >
//             </div>

//             <button v-on:click="addToCart" 
//                     :disable="!inStock"
//                     :class="{ disabledButton: !inStock }"
//                     >Add to Cart</button>

//             <button @click="removeFromCart">
//                   Remove from cart </button>

//             <product-review @review-submitted="addReview"></product-review>
        
//         </div>
//     `,
//     data() {
//         return {
//             product: 'Socks',
//             brand: 'Vue Mastery',
//             selectedVariant: 0,
//             details: ["80% cotton", "20% polyester", "Gender-neutral"],
//             variants: [
//                 {
//                     variantId: 2234,
//                     variantColor: "green",
//                     variantImage: 'https://cd.shoppub.com.br/macboot/media/cache/38/12/381296b02c844811e5cf26a2a784d908.jpg',
//                     variantQuantity: 10
//                 },
//                 {
//                     variantId: 2235,
//                     variantColor: "blue",
//                     variantImage: 'https://cd.shoppub.com.br/macboot/media/cache/84/57/84572e2e9190282920cdc0a2319c79d2.jpg',
//                     variantQuantity: 0
//                 }
//             ],
//             reviews: []
//             }
//     },
//     methods: {
//         addToCart(){
//             this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId)
//         },
//         updateProduct(index) {
//             this.selectedVariant = index
//         },
//         removeFromCart: function() {
//              this.$emit('remove-from-cart', this.variants[this.selectedVariant].variantId)
//         },
//         addReview(productReview) {
//             this.reviews.push(productReview)
//         }
//     },
//     computed: {
//         title(){
//             return this.brand + ' ' + this.product
//         },
//         image() {
//             return this.variants[this.selectedVariant].variantImage
//         },
//         inStock(){
//             return this.variants[this.selectedVariant].variantQuantity
//         },
//         shipping() {
//             if (this.premium){
//                 return "Free"
//             }
//             return 2.99
//         }
//     }
// })

// Vue.component('product-review', {
//     template: `
//     <form class="review-form" @submit.prevent="onSubmit">
//     <p>
//         <label for="name">Name:</label>
//         <input id="name" v-model="name">
//     </p>

//     <p>
//         <label for="review">Review:</label>
//         <input id="review" v-model="review">
//     </p>
    
//     <p>
//         <label for="rating">Rating:</label>
//         <select id="rating" v-model.number="rating">
//             <option>5</option>
//             <option>4</option>
//             <option>3</option>
//             <option>2</option>
//             <option>1</option>
//         </select>
//     </p>

//     <p>
//         <input type="submit" value="submit">
//     </p>

//     </form>
//     `,
//     data() {
//         return {
//             name: null,
//             review: null,
//             rating: null
//         }
//     },
//     methods: {
//         onSubmit(){
//             let productReview = {
//                 name: this.name,
//                 review: this.review,
//                 rating: this.rating
//             }
//             this.$emit('review-submitted', 'productReview')
//             this.name = null 
//             this.review = null
//             this.rating = null
//         }
//     }
// })

// // var app = new Vue({
// //     el: '#app',
// //     data: {
// //         premium: true,
// //         cart: []
// //     },
// //     methods: {
// //         updateCart(id){
// //             this.cart.push(id)
// //         },
// //         removeItem(id) {
// //           for(var i = this.cart.length - 1; i >= 0; i--) {
// //             if (this.cart[i] === id) {
// //                this.cart.splice(i, 1);
// //             }
// //             console.log(id);
// //           }
// //         }
// //     },

// // })




// // var origamid = new Vue({
// //     el: '#origamid',
// //     data: {
// //         nome: 'Danilo',
// //     }
// // })

// // var app1 = new Vue({
// //     el: '#app1',
// //     data: {
// //         ferramenta: 'Martelo',
// //     }
// // })

// // var app2 = new Vue({
// //     el: '#app2',
// //     data: {
// //         instrumento: 'Violão',
// //     }
// // })

// // var quadrado = new Vue({
// //     el: '#quadrado',
// //     data: {
// //         lado: 20
// //     }
// // })

// const app3 = new Vue({
//     el: '#app3',
//     data: {
//         acoes: {},
//     },
//     methods: {
//         puxarAcoes(){
//             fetch("https://cloud.iexapis.com/stable/stock/aapl/quote?token=pk_a268c19f25944831bef399bfabd1fb84")
//             .then(response => response.json())
//             .then(json => {
//                 this.acoes = json;
//             })
//         }
//     }
// })


// const app4 = new Vue({
//     el: '#app4',
//     data: {
//         apple: {},
//         google: {},
//     },
//     methods: {
//         fetchGoogle(){
//             fetch("https://cloud.iexapis.com/stable/stock/googl/quote?token=pk_a268c19f25944831bef399bfabd1fb84")
//             .then(response => response.json())
//             .then(google => {
//                 this.google = google;
//             })
//         },
//         fetchApple(){
//             fetch("https://cloud.iexapis.com/stable/stock/aapl/quote?token=pk_a268c19f25944831bef399bfabd1fb84")
//             .then(response => response.json())
//             .then(apple => {
//                 this.apple = apple;
//             })
//         },
//         puxarDados(){
//             this.fetchGoogle();
//             this.fetchApple();
//         }
//     }
// })


const app = new Vue({
    el: "#app",
    data: {
        cart: 0,
        estoque: 7,
    },
    methods: {
        addtoCart(){
            this.cart++
        }
    }
})