<template>
    <!-- Здесь кнопки с категориями, спавнятся только первые две (надо сделать больше но сколько - это от размера виджета зависит)-->
    <li v-for="category in Categories.slice(0, 2)" :key="category.id" :category="category">
        <div class="column is-3">
            <div class="box">
                <button v-on:click="SetCategory(category.get_absolute_url)" class="is-size-12">{{ category.name }}</button>
            </div>
        </div>
        <!-- Реализация выпадающего списка на вьютифай. Вьютифая у нас кста нет и не будет. Короче тут надо по-хорошему
        сделать выпадающий список со всеми категориями.-->
        <v-select
            :items="Categories"
            v-on:change="SetCategory(category.get_absolute_url)"
            label="..."
            multiple
            hint="Больше категорий"
            persistent-hint
        ></v-select>
    </li>
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
</style>