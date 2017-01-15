<template>
    <div class="index-announcement">
        <img src="../../assets/home_notice@3x.png" alt="公告" class="notice-img"><span class="announcement-text">分秒金融2017年元旦假期业务受理公告</span>
    </div>
</template>
<script>
    export default {
        name: 'announcement',
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
        }
        & > .notice-img {
            width: 15px;
            height: 12px;
            margin-left: 15px;
            margin-right: 3px;
        }
    }
</style>