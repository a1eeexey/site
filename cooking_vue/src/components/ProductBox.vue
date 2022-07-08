<template>
    <div class="recipe">
        <div class="recipe__inner">

            <h3 class="recipe__name">{{ product.name }}</h3>

            <figure class="recipe__image">
                <img v-bind:src="product.get_thumbnail">
            </figure>

            <div class="recipe__container">
                <router-link v-bind:to="product.get_absolute_url" class="recipe__about">View recipe</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProductBox',
    props: {
        product: Object,
    },
}
</script>

<style scoped>


.recipe {
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 15px;
    margin: 10px auto;
    padding: 20px 20px;
    width: 90%;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
}

img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 15px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    margin-bottom: 10px;
}

.recipe__name {
    font-family: 'Lobster', cursive;
    font-size: 20px;
    margin-top: 0;
    padding: 5px 20px;
    border-radius: 12px;
    text-shadow: -5px 5px 10px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    text-overflow: ellipsis;
}

.recipe__likes {
    font-size: 15px;
    margin-left: 5px;
}

.recipe__container>p,
router-link {
    display: inline-block;
    width: 50%;
}

.recipe__about {
    text-decoration: none;
    border: 2px solid #91907d;
    border-radius: 15px;
    padding: 10px 20px;
    margin-left: 50px;
    color: #91907d;
    font-size: 15px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
}

.recipe__about:hover {
    background: rgba(37, 37, 37, 0.5);
    color: rgba(255, 255, 255, 0.5);
}
</style>