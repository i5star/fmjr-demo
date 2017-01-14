<template>
    <div class="item-container">

        <img :src="image" class="item-img">
        <p class="item-name ">{{ name }}</p>
    </div>
    
</template>

<script>
    export default {
        name: 'tabBarItem',
        props: ['name', 'image', 'focus'],
    };
</script>

<style>
   .item-container {
       float: left;
       width: 25%;
       text-align: center;
   }
   .item-name {
       font-size: 11px;
   }
   .active {
       color: #ff6c00;
   }
   .item-img {
       width: 24px;
       height: 20px;
   }
</style>
