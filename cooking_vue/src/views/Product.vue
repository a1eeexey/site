<template>
    <div class="container">
        <div class="container__inner">
            <div class="container__description">
                <figure class="container__image">
                    <img v-bind:src="product.get_image">
                </figure>

                <h1 class="title">{{ product.name }}</h1>

                <p class="description">{{ product.description }}</p>

                <div class="container__information">

                    <div class="add_to">
                        <button @click="addToCart">Add to favourite</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Product',
    data() {
        return {
            product: {},
        };
    },
    mounted() {
        this.getProduct();
    },
    methods: {
        async getProduct() {
            const category_slug = this.$route.params.category_slug;
            const product_slug = this.$route.params.product_slug;

            await axios
                .get(`/api/v1/products/${category_slug}/${product_slug}`)
                .then(response => {
                    this.product = response.data;

                    document.title = this.product.name + ' | Djackets';
                });
        },
        addToCart() {
            const item = {
                product: this.product,
            };
            this.$store.commit('addToCart', item);
        },
    },
}
</script>

<style scoped>


.container {
    margin-top: 100px;
    width: 100%;
}

.container__inner {
    margin: 20px;
}

img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 15px;
}

.container__description {
    background: rgba(255, 255, 255, 1);
    padding: 20px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    border-radius: 15px;
}

.title {
    font-size: 30px;
    overflow-x: hidden;
    word-wrap: break-word;
}

.description {
    overflow-x: hidden;
    word-wrap: break-word;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    padding: 10px;
    border-radius: 15px;
    font-size: 25px;
}

.container__information> .likes, .add_to {
    display: inline-block;
    width: 50%;
}

.likes {
    font-size: 20px;
}

button {
    margin-left: 550px;
    background: none;
    border-radius: 12px;
    border: 2px solid #91907d;
    color: #91907d;
    padding: 10px 5px;
    cursor: pointer;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    opacity: 0.7;
}

button:hover {
    opacity: 1;
}
</style>