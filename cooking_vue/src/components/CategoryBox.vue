<template>
    <div class="categories__grid" v-for="category in Categories.slice(0, 5)" :key="category.id" :category="category">

        <div class="grid__item">
            <button @click="SetCategory(category.get_absolute_url)" class="grid__btn">{{ category.name }}</button>
        </div>

    </div>
</template>

<script>
export default {
    name: 'CategoryBox',
    props: {
        Categories: Array,
        category: Object,
        SetCategory: Function,
    },
}
</script>

<style scoped>
.categories__grid>.grid__item {
    float: left;
}

.grid__btn {
    margin-left: 20px;
    background: rgba(249,227,220, 0.9);
    border: none;
    color: #91907d;
    cursor: pointer;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    border-radius: 12px;
    padding: 10px 20px;
}

.grid__btn:hover {
    color: #4d4c3f;
}
</style>