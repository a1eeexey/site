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
  <header class="header" id="header">
    <div class="container">
      <div class="header__inner">

        <div class="header__logo">
          <img src="@/assets/logo.png" alt="">
          <a>
            <router-link class="logo__name" to="/">CookKing</router-link>
          </a>
        </div>

        <div class="search" id="navbar-menu" v-bind:class="{ 'is-active': showMobileMenu }">
          <form method="get" action="/search">
            <input class="search__input" type="text" placeholder="Recipe search..." name="query">
            <button class="search__btn">
              <svg class="search__icon">
                <use xlink:href="#search"></use>
              </svg>
            </button>
          </form>
        </div>

        <nav class="nav">
          <a>
            <router-link class="nav__link" to="/">Home</router-link>
          </a>
          <a>
            <router-link class="nav__link" to="/timer">Timer</router-link>
          </a>
          <a>
            <router-link class="nav__link" to="/publish">Publish</router-link>
          </a>
          <a>
            <router-link class="nav__link" to="/about">About</router-link>
          </a>
          <div class="btns">
            <div>
              <template v-if="$store.state.isAuthenticated">
                <router-link class="btns__item" to="/my-account">My recipes</router-link>
                <router-link class="btns__item" to="/cart">
                  <span>Cart ({{ cartTotalLength }})</span>
                </router-link>
              </template>

              <template v-else>
                <a>
                  <router-link class="btns__item_authority" to="/authority">Authority</router-link>
                </a>
              </template>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'MyHeader',
}
</script>

<style scoped>
.header {
  position: fixed;
  top: 0px;
  z-index: 2000;
  width: 100%;
  border-radius: 30px;
}

.container {
  background-color: #e99072;
  border-radius: 30px;
}

.header__inner {
  display: flex;
  justify-content: space-between;
  border: 1px solid #5b8f7d;
  border-radius: 30px;
  padding: 10px 0;
  align-items: center;
  padding: 15px;
}

.header__logo {
  display: flex;
  align-items: center;
  box-shadow: -5px -5px 10px rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  padding: 0 10px;
}

.logo__name {
  font-family: 'Lobster', cursive;
  font-size: 36px;
  font-weight: 700;
  margin-left: 2px;
  color: #5d5352;
  text-decoration: none;
  opacity: 0.9;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}

.nav {
  font-size: 15px;
  font-weight: 700;
  text-transform: uppercase;
  display: flex;
  align-items: center;
}

.nav__link {
  color: #fff;
  text-decoration: none;
  opacity: 0.75;
  border-left: 1px solid #fff;
  border-radius: 12px;
  padding: 10px 20px;
  margin-left: 30px;
  transition: color .1s linear;
  box-shadow: -5px -5px 3px rgba(0, 0, 0, 0.2);
  background: none;
}

.nav__link:hover {
  opacity: 1;
  color: #fff;
}

.btns {
  font-size: 15px;
  font-weight: 700;
  margin-left: 250px;
  display: flex;
}

.btns__item {
  text-decoration: none;
  margin-left: 10px;
  border-radius: 12px;
  padding: 10px 10px;
  color: #bc4b51;
  background-color: #fff;
  opacity: 0.9;
  box-shadow: -5px -5px 5px rgba(0, 0, 0, 0.3);
}

.btns__item_authority {
  text-decoration: none;
  margin-left: 10px;
  border-radius: 12px;
  padding: 10px 10px;
  color: #bc4b51;
  background-color: #fff;
  opacity: 0.9;
  box-shadow: -5px -5px 5px rgba(0, 0, 0, 0.3);
  margin-left: 100px;
}

.btns__item:hover {
  opacity: 1;
}

.search>.search__input,
.search__btn {
  display: inline-block;
  vertical-align: middle;
}

.search__input {
  margin-left: 10px;
  height: 40px;
  border-radius: 12px;
  background: none;
  outline: none;
  border: 1px solid #91907d;
  transition: all 0.1s linear;
  color: #91907d;
}

.search__input:focus {
  border: 1px solid #bc4b51;
}

.search__btn {
  background: none;
  outline: none;
  height: 20px;
  width: 15px;
  margin-left: 5px;
  cursor: pointer;
  border: none;
}

.search__icon {
  width: 20px;
  height: 20px;
  opacity: 0.9;
  fill: #91907d;
  transition: all 0.1s linear;
}

.search__icon:hover {
  fill: #bc4b51;
}
</style>
