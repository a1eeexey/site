<template>
    <svg style="display: none;">

        <symbol id="favourite" viewBox="0 0 24 24">
            <path d="M12,21 L10.55,19.7051771 C5.4,15.1242507 
                2,12.1029973 2,8.39509537 C2,5.37384196 4.42,3 
                7.5,3 C9.24,3 10.91,3.79455041 12,5.05013624 C13.09,3.79455041 
                14.76,3 16.5,3 C19.58,3 22,5.37384196 22,8.39509537 C22,12.1029973 
                18.6,15.1242507 13.45,19.7149864 L12,21 Z" />
        </symbol>
    </svg>

    <div class="container">
        <div class="container__inner">
            <div class="container__description">

                <div class="container__information">
                    <div class="add_to">
                        <button @click="addToCart">
                            <svg class="favourite__icon">
                                <use xlink:href="#favourite"></use>
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="inline">
                    <figure class="container__image">
                        <img v-bind:src="product.get_image">
                    </figure>
                    <div class="information">
                        <h1 class="title">{{ product.name }}</h1>
                        <p class="description">{{ product.description }}</p>
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
                    document.title = this.product.name + ' | CookKing';
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

.information {
    margin-left: 150px;
}

.inline>.container__image,
.information {
    display: inline-block;
    vertical-align: middle;
    width: 40%;
}

img {
    object-fit: cover;
    height: 100%;
    border-radius: 15px;
    position: relative;
    margin-left: 50px;
    margin-top: 20px;
}

.container__description {
    background: rgba(255, 219, 175, 0.97);
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

button {
    background: none;
    border: none;
    cursor: pointer;
}

.favourite__icon {
    width: 40px;
    height: 40px;
    opacity: 0.75;
}

.favourite__icon:hover {
    opacity: 1;
    fill: #ff9883;
}
</style>