<template>
    <div class="index-goodlist">
        <Good
            v-for="good of goods"
        ></Good>
    </div>
</template>

<script>
    import Good from './good.vue';

    export default {
        data() {
            return {
                goods: [
                    {},
                    {},
                    {},
                    {},
                    {},
                    {},
                ],
            };
        },
        name: 'GoodList',
        components: {
            Good,
        },
    };
</script>

<style lang="scss">
</style>