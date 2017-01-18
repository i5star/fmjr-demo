<template>
    <div class="index-announcement">
        <img src="../../assets/home_notice@3x.png" alt="公告" class="notice-img">
        <p class="announcement-text">{{news.articleTitle}}</p>
    </div>
</template>
<script>
    import { mapState } from 'vuex';

    export default {
        name: 'announcement',
        computed: mapState({
            news: state => state.notice,
        }),
        created() {
            this.$store.dispatch('getNotices');
        },
    };
</script>
<style lang="scss">
    .index-announcement {
        width: 100%;
        padding: 12px 0px;
        border-bottom: 1px solid #e5e5e5;
        background-color: white;
        & > .announcement-text {
            font-size: 12px;
            color: #666;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        & > .notice-img {
            width: 15px;
            height: 12px;
            float: left;
            margin-left: 15px;
            margin-right: 3px;
        }
    }
</style>