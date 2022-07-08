<template>
    <div class="container">
        <div class="container__inner">
            <div>
                <h1 class="title">Favourites</h1>
            </div>

            <div class="inline">
                <div class="cart">
                    <table v-if="cart.items.length">


                        <tbody>
                            <CartItem v-for="item in cart.items" v-bind:key="item.product.id" v-bind:initialItem="item"
                                v-on:removeFromCart="removeFromCart" />
                        </tbody>
                    </table>

                    <p v-else>You don't have any products in your favourites...</p>

                </div>
                <div class="button">
                    <center>
                        <button @click="logout()">Sign out </button>
                        <h3>We will wait for you again!</h3>
                    </center>
                </div>
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

<style scoped>
.container {
    height: 100vh;
}

.container__inner {
    margin-top: 80px;
    padding: 20px;
}

h1 {
    width: 100%;
    text-align: center;
    box-shadow: 10px 0 10px rgba(0, 0, 0, 0.2);
    border-radius: 15px;
    background: rgba(255, 219, 175, 1);
    font-family: 'Lobster';
    font-size: 35px;
    transition: all 0.2s linear;
}

.inline>.cart,
.button {
    display: inline-block;
    vertical-align: middle;
}

.cart {
    width: 85%;
    background: rgba(255, 219, 175, 1);
    margin: 10px;
    border-radius: 15px;
    padding: 15px;
}

.button {
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    height: 24vh;
    width: 13%;
    background: rgba(255, 219, 175, 0.9);
    border-radius: 15px;
    padding: 10px;
}

button {
    width: 150px;
    height: 50px;
    font-size: 1rem;
    outline: none;
    cursor: pointer;
    border: none;
    border-radius: 12px;
    background-color: #ff8174;
    opacity: 0.75;
    margin-top: 20px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
}

button:hover {
    opacity: 1;
}

p {
    font-size: 30px;
}
</style>