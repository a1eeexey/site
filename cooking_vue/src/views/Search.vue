<template>
    <svg style="display: none;">

        <symbol id="search" viewBox="0 0 413.842 413.842">
            <path d="M401.395,341.29l-69.568-69.568c-4.731-4.732-12.402-4.732-17.134,0l-7.343,7.343l-28.907-28.908
	c20.261-26.247,32.335-59.122,32.335-94.769C310.777,69.707,241.07,0,155.389,0C69.707,0,0,69.707,0,155.388
	c0,85.682,69.707,155.389,155.389,155.389c35.646,0,68.521-12.073,94.769-32.335l28.907,28.908l-7.343,7.343
	c-4.731,4.731-4.731,12.402,0,17.134l69.569,69.568c16.597,16.597,43.507,16.597,60.104,0
	C417.992,384.797,417.992,357.887,401.395,341.29z M155.389,79.34c-41.934,0-76.049,34.115-76.049,76.049c0,11.046-8.954,20-20,20
	s-20-8.954-20-20C39.339,91.4,91.399,39.34,155.389,39.34c11.046,0,20,8.954,20,20S166.435,79.34,155.389,79.34z" />
        </symbol>
    </svg>

    <div class="container">
        <div class="container__inner">
            <div class="container__title">
                <h1 class="">
                    Search
                    <svg class="search__icon">
                        <use xlink:href="#search"></use>
                    </svg>
                </h1>
            </div>

            <center>
                <h2 class="">Search term: "{{ query }}"</h2>
            </center>

            <div class="grid">
                <ProductBox v-for="product in products" v-bind:key="product.id" v-bind:product="product" />
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import ProductBox from '@/components/ProductBox.vue'

export default {
    name: 'Search',
    components: {
        ProductBox,
    },
    data() {
        return {
            products: [],
            query: '',
        };
    },
    mounted() {
        document.title = 'Search | CookKing';

        let uri = window.location.search.substring(1);
        let params = new URLSearchParams(uri);

        if (params.get('query')) {
            this.query = params.get('query');
            this.performSearch();
        }
    },
    methods: {
        async performSearch() {
            await axios
                .post('/api/v1/products/search/', { 'query': this.query })
                .then(response => {
                    this.products = response.data;
                });
        },
    },
}
</script>

<style scoped>
.container__inner {
    margin-top: 100px;
}

h1 {
    width: 100%;
    text-align: center;
    box-shadow: 10px 0 10px rgba(0, 0, 0, 0.2);
    border-radius: 15px;
    background: rgba(255, 219, 175, 1);
    ;
    font-family: 'Lobster';
    font-size: 35px;
    transition: all 0.2s linear;
}

.search__icon {
    fill: #91907d;
    width: 20px;
    height: 20px;
}

h2 {
    width: 50%;
    text-align: center;
    box-shadow: 10px 0 10px rgba(0, 0, 0, 0.2);
    border-radius: 15px;
    background: rgba(255, 219, 175, 1);
    font-family: 'Lobster';
    font-size: 35px;
    transition: all 0.2s linear;
    margin-top: 100px;
    padding: 10px 20px;
}

.grid {
    display: grid;
    grid-template-columns: repeat(3, 33.33333%);
    background: rgba(255, 219, 175, 0.9);
    margin: 10px;
    border-radius: 15px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    padding: 10px;
}
</style>