<template>
    <div class="preloader">
        <div class="item-1 left-side">
            <span>Down</span>
            <div class="dot dot-1"></div>
            <div class="dot dot-2"></div>
        </div>
        <div class="item-1 right-side">
            <span>loading...</span>
            <div class="dot dot-3"></div>
            <div class="dot dot-4"></div>
        </div>
        <div class="item-2"></div>
        <div class="item-3"></div>
        <div class="item-4"></div>
    </div>
</template>

<script>
import $ from 'jquery';

export default {
    data() {
        return {
        };
    },
    methods: {
    },
}

document.body.onload = function () {
    setTimeout(function () {
        $(".dot-1").css({ "background-color": "#e99072", "box-shadow": "0 0 10px #e99072, 0 0 10px #e99072" });
    }, 1000);
    setTimeout(function () {
        $(".dot-2").css({ "background-color": "#e99072", "box-shadow": "0 0 10px #e99072, 0 0 10px #e99072" });
    }, 2000);
    setTimeout(function () {
        $(".dot-3").css({ "background-color": "#e99072", "box-shadow": "0 0 10px #e99072, 0 0 10px #e99072" });
    }, 3000);
    setTimeout(function () {
        $(".dot-4").css({ "background-color": "#e99072", "box-shadow": "0 0 10px #e99072, 0 0 10px #e99072" });
    }, 4000);

    setTimeout(function () { $(".item-1").css("width", "0"); }, 4000);
    setTimeout(function () { $(".item-2").css("height", "0"); }, 5000);
    setTimeout(function () { $(".item-3").css("height", "0"); }, 5300);
    setTimeout(function () { $(".item-4").css("height", "0"); }, 5500);

    setTimeout(function () { $(".header").css({ "opacity": "1", "transform": "translate(0)" }); }, 6100);
    setTimeout(function () { $(".p-1").css({ "opacity": "1", "transform": "translate(0)" }); }, 6300);
    setTimeout(function () { $(".p-2").css({ "opacity": "1", "transform": "translate(0)" }); }, 6500);
    setTimeout(function () { $(".p-3").css({ "opacity": "1", "transform": "translate(0)" }); }, 6700);

    setTimeout(function () { $(".preloader").css("visibility", "hidden"); }, 7000);
}
</script>

<style scoped>
.preloader {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 9999;
}

.item-1 {
    position: relative;
    height: 100%;
    width: 50%;
    transition: 1.5s ease;
    z-index: 9998;
    background: url(@/assets/kitchen.jpg);
    background-size: cover;
    background-position: center center;
    background-attachment: fixed;
}

.right-side {
    position: absolute;
    right: 0;
    top: 0;
}

.item-1 span {
    color: dark;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}

.left-side span {
    right: 0;
    font-family: 'Lobster', cursive;
    font-size: 20px;
}

.right-side span {
    left: 0;
    font-family: 'Lobster', cursive;
    font-size: 20px;
}

.dot {
    height: 7px;
    width: 7px;
    border-radius: 100%;
    position: absolute;
    top: 53%;
}

.dot-1 {
    right: 20px;
}

.dot-2 {
    right: 5px;
}

.dot-3 {
    left: 5px;
}

.dot-4 {
    left: 20px;
}

.item-2 {
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    background-color: #e99072;
    z-index: 9997;
    transition: 1s;
}

.item-3 {
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    background-color: #e77f5d;
    z-index: 9996;
    transition: 1s;
}

.item-4 {
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    background-color: #e67854;
    z-index: 9995;
    transition: 1s;
}
</style>