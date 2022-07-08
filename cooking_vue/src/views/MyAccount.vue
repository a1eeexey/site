<template>
    <div class="page-cart">
        <div class="columns is-multiline">
            <div class="column is-12">
                <h1 class="title">Cart</h1>
            </div>
            
            <div class="column is-12">
                <button @click="logout()" class="button is-danger">Log out </button>
            </div>

            <div class="column is-12 box">
                <table class="table is-fullwidth" v-if="cart.items.length">
                    

                    <tbody>
                        <CartItem
                            v-for="item in cart.items"
                            v-bind:key="item.product.id"
                            v-bind:initialItem="item"
                            v-on:removeFromCart="removeFromCart" />
                    </tbody>
                </table>

                <p v-else>You don't have any products in your cart...</p>

            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import CartItem from '@/components/CartItem.vue'

export default {
    name: 'MyAccount',
    components: {
        CartItem,
    },
    data() {
        return {
            cart: {
                items: [],
            },
        };
    },
    mounted() {
        document.title = 'My account | CookKing';
        this.cart = this.$store.state.cart;
    },
    methods: {
        removeFromCart(item) {
            this.cart.items = this.cart.items.filter(i => i.product.id !== item.product.id);
        },
        logout() {
            axios.defaults.headers.common["Authorization"] = "";

            localStorage.removeItem("token");
            localStorage.removeItem("username");
            localStorage.removeItem("userid");

            this.$store.commit('removeToken');

            this.$router.push('/');
        },
    },
}
</script>