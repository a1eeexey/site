<template>
  <div class="container">
    <h1>Welcome to our recipe site. Glad to see you!</h1>
    <div class="container__calendar">
      <MyCalendar />
    </div>
  </div>

  <div>
    <div>
      <h2>Latest products</h2>
    </div>
    <div class="grid">
      <ProductBox v-for="product in latestProducts" v-bind:key="product.id" v-bind:product="product" />
    </div>
    <div>
      <h2>Categories</h2>
    </div>

    <CategoryBox :SetCategory="setCategory" :Categories="Categories" />

    <div>
      <h3>{{ category.name }}</h3>
    </div>

    <div class="grid">
      <ProductBox v-for="product in category.products" v-bind:key="product.id" v-bind:product="product" />
    </div>
  </div>
</template>

<script>
import axios from 'axios'

import ProductBox from '../components/ProductBox.vue'
import CategoryBox from '../components/CategoryBox.vue'
import MyCalendar from "@/components/MyCalendar.vue"

export default {
  name: 'HomeView',
  components: {
    MyCalendar,
    ProductBox,
    CategoryBox,
  },
  data() {
    return {
      latestProducts: [],
      Products: [],
      Categories: [],
      category: {
        products: [],
      },
    };
  },
  mounted() {
    this.getLatestProducts(),
      this.getProducts(),
      this.getCategories(),
      this.setDefaultCategory(),
      document.title = 'Home | CookKing'
  },
  watch: {
    $route(to, from) {
      if (to.name === 'Category') {
        this.getCategory();
      }
    },
  },
  methods: {
    async getLatestProducts() {

      await axios
        .get('/api/v1/latest-products/')
        .then(response => {
          this.latestProducts = response.data;
        });

    },
    async getProducts() {

      await axios
        .get('/api/v1/products/')
        .then(response => {
          this.Products = response.data;
        });

    },
    async getCategories() {

      await axios
        .get('/api/v1/categories/')
        .then(response => {
          this.Categories = response.data;
        });
    },
    async setDefaultCategory() {
      await axios
        .get('/api/v1/defaultcategory/')
        .then(response => {
          this.$route.params.category_slug = response.data.get_absolute_url;
        });
      console.log(this.$route.params.category_slug);
      this.getCategory();
    },
    async setCategory(slug) {
      this.$route.params.category_slug = slug;
      this.getCategory();
    },
    async getCategory() {
      const categorySlug = this.$route.params.category_slug;
      axios
        .get(`/api/v1/products${categorySlug}`)
        .then(response => {
          this.category = response.data;
          document.title = 'CooKKing | ' + this.category.name;
        });
    },
  },
}
</script>

<style scoped>
.container>div,
h1 {
  display: inline-block;
  padding: 10px;
  vertical-align: middle;
}

.container>div {
  height: 100vh;
}

h1 {
  width: 50%;
  text-align: center;
  box-shadow: 10px 0 10px rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  background: rgba(255, 219, 175, 0.9);
  font-family: 'Lobster';
  font-size: 35px;
  transition: all 0.2s linear;
}

h1:hover {
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
}

h2 {
  width: 90%;
  text-align: center;
  box-shadow: 10px 0 10px rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  background: rgba(255, 219, 175, 0.9);
  font-family: 'Lobster';
  font-size: 35px;
  transition: all 0.2s linear;
  margin-top: 100px;
  padding: 10px 20px;
}

h3 {
  width: 50%;
  text-align: center;
  box-shadow: 10px 0 10px rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  background: rgba(255, 219, 175, 0.9);
  font-family: 'Lobster';
  font-size: 35px;
  transition: all 0.2s linear;
  margin-top: 100px;
}

.container__calendar {
  width: 50%;
  margin-left: auto;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 33.33333%);
  background: rgba(255, 219, 175, 0.9);
  margin: 10px;
  border-radius: 15px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  padding: 10px 0;
}
</style>
