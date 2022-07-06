<template>
  <div class="home">
    <section class="hero is-medium is-dark mb-6">
        <div class="hero-body has-text-centered">
            <p class="title mb-6">
                Welcome to Djacket
            </p>
            <p class="subtitle">
                The best jacket store online
            </p>
        </div>
    </section>

    <div class="columns is-multiline">
      <div class="column is-12">
          <h2 class="is-size-2 has-text-centered">Latest products</h2>
      </div>
      
      <ProductBox 
        v-for="product in latestProducts"
        v-bind:key="product.id"
        v-bind:product="product" />
      
      <div class="column is-12">
          <h2 class="is-size-2 has-text-centered">Категории</h2>
      </div>

      <CategoryBox :SetCategory="setCategory" :Categories="Categories"/>

      <div class="column is-12">
          <h2 class="is-size-2 has-text-centered">{{category.name}}</h2>
      </div>

      <ProductBox
        v-for="product in category.products"
        v-bind:key="product.id"
        v-bind:product="product" />

    </div>
  </div>
</template>

<script>
import axios from 'axios'

import ProductBox from '../components/ProductBox.vue'
import CategoryBox from '../components/CategoryBox.vue'

export default {
  name: 'Home',
  data() {
    return {
      latestProducts: [],
      Products: [],
      Categories: [],
      category: {
          products: []
      }
    }
  },
  components: {
    ProductBox,
    CategoryBox
  },
  mounted() {
    this.getLatestProducts(),
    this.getProducts(),
    this.getCategories(),
    this.setDefaultCategory(),
    document.title = 'Home | Djackets'
  },
  watch: {
      $route(to, from) {
          if (to.name === 'Category') {
              this.getCategory()
          }
      }
  },
  methods: {
    async getLatestProducts() {
      this.$store.commit('setIsLoading', true)

      await axios
        .get('/api/v1/latest-products/')
        .then(response => {
          this.latestProducts = response.data
        })
        .catch(error => {
          console.log(error)
        })

      this.$store.commit('setIsLoading', false)
    },
    async getProducts() {
      this.$store.commit('setIsLoading', true)

      await axios
        .get('/api/v1/products/')
        .then(response => {
          this.Products = response.data
        })
        .catch(error => {
          console.log(error)
        })

      this.$store.commit('setIsLoading', false)
    },
    async getCategories() {
      this.$store.commit('setIsLoading', true)

      await axios
        .get('/api/v1/categories/')
        .then(response => {
          this.Categories = response.data
        })
        .catch(error => {
          console.log(error)
        })
      this.$store.commit('setIsLoading', false)
    },
    // Категория по дефолту выбирается самая новая из созданных во views.py
    async setDefaultCategory(){
      this.$store.commit('setIsLoading', true)
      await axios
        .get('/api/v1/defaultcategory/')
        .then(response => {
          this.$route.params.category_slug = response.data.get_absolute_url
        })
        .catch(error => {
          console.log(error)
        })
      console.log(this.$route.params.category_slug)
      this.$store.commit('setIsLoading', false)
      this.getCategory();
    },
    async setCategory(slug){
      this.$store.commit('setIsLoading', true)
      this.$route.params.category_slug = slug
      this.$store.commit('setIsLoading', false)
      this.getCategory()
    },
    async getCategory() {
      const categorySlug = this.$route.params.category_slug
      this.$store.commit('setIsLoading', true)
      axios
        .get(`/api/v1/products${categorySlug}`)
        .then(response => {
            this.category = response.data
            document.title = 'CooKing | ' + this.category.name
        })
        .catch(error => {
          console.log(error)
          toast({
            message: 'Something went wrong. Please try again.',
            type: 'is-danger',
            dismissible: true,
            pauseOnHover: true,
            duration: 2000,
            position: 'bottom-right',
          })
        })
      this.$store.commit('setIsLoading', false)
    },
  }
}
</script>