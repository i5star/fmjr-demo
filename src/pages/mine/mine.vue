<template>
    <div>
        <mt-header :title="title" class="com-header">
            <router-link to="/" slot="left">
            </router-link>
        </mt-header>
    </div>
</template>

<script>
    import { Header } from 'mint-ui';

    export default {
        name: 'Mine',
        data() {
            return {
                title: '我的',
            };
        },
        components: {
            Header,
        },
    };
</script>