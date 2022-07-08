<template>
    <div class="">
        <div class="">
            <div class="">
                <figure class="">
                    <img v-bind:src="product.get_image">
                </figure>

                <h1 class="title">{{ product.name }}</h1>

                <p>{{ product.description }}</p>
            </div>

            <div class="">
                <h2 class="">Information</h2>

                <p><strong>Likes: </strong>{{ product.price }}</p>

                <div class="">

                    <div class="">
                        <a class="" @click="addToCart()">Add to favourite</a>
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