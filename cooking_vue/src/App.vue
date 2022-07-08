<template>
  <MyPreloader />
  <MyHeader />
  <MyArrow />
  <router-view />
  <MyFooter />
</template>

<script>
import axios from 'axios'

import MyHeader from "./components/MyHeader.vue"
import MyFooter from "./components/MyFooter.vue"
import MyArrow from "./components/MyArrow.vue"
import MyPreloader from "./components/MyPreloader.vue"

export default {
  components: {
    MyHeader,
    MyFooter,
    MyArrow,
    MyPreloader,
  },
  data() {
    return {
      showMobileMenu: false,
      cart: {
        items: [],
      },
    };
  },
  beforeCreate() {
    this.$store.commit('initializeStore');

    const token = this.$store.state.token;

    if (token) {
      axios.defaults.headers.common['Authorization'] = "Token " + token;
    } else {
      axios.defaults.headers.common['Authorization'] = "";
    }
  },
  mounted() {
    this.cart = this.$store.state.cart;
  },
}
</script>

<style>
html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: 'Karla', sans-serif;
  font-size: 14px;
  color: #6c7279;
  background: url(@/assets/kitchen.jpg);
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

::-webkit-scrollbar {
  width: 5px;
  height: 8px;
  opacity: 0;
}

::-webkit-scrollbar-thumb {
  background-color: #e99072;
  border-radius: 12px;
  transition: all .1s linear;
}

::-webkit-scrollbar-thumb:hover {
  background-color: #bc4b51;
}
</style>
