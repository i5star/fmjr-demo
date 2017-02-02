<template>
  <div class="page-infinite">
    <div class="page-infinite-wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
      <ul class="page-infinite-list" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
        <Good 
            v-for="good of yueYingGoodList.data" 
            :lendDate="good.lendDate" 
            :subjectName="good.subjectName" 
            :lendRate="good.lendRate"
            :rewardRate="good.rewardRate" 
            :lendAmt="good.lendAmt" 
            :investMoney="good.investMoney" 
            :id="good.id">
        </Good>
      </ul>
      <p v-show="loading" class="page-infinite-loading">
        <mt-spinner type="fading-circle"></mt-spinner>
        加载中...
      </p>
      <p v-show="allLoaded" class="allLoad">
        没有更多数据
      </p>
    </div>
  </div>
</template>

<script>
    import {
        mapState,
    } from 'vuex';

    import Good from '../index/good.vue';

    export default {
        data() {
            return {
                loading: false,
                allLoaded: false,
                wrapperHeight: 0,
                pageOffset: 1,
            };
        },
        name: 'InvestShengXinList',
        components: {
            Good,
        },
        computed: mapState({
            yueYingGoodList: state => state.home.yueYingGoodList,
        }),
        created() {
            this.$store.dispatch('getYueYingGoodList', {
                pageOffset: this.pageOffset
            });
        },
        methods: {
            loadMore() {
                const isTotal = this.pageOffset < this.yueYingGoodList.totalPage;
                if (isTotal) {
                    this.allLoaded = false;
                    this.loading = true;
                    setTimeout(() => {
                        this.$store.dispatch('getYueYingGoodList', {
                            'pageOffset': this.pageOffset
                        }).then(() => {
                            this.loading = false;
                            this.pageOffset++;
                        });
                    }, 1000);
                } else {
                    this.allLoaded = true;
                }
            },
        },
        mounted() {
            this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
        }
    };
</script>

<style lang="scss">
    .page-infinite-loading {
        text-align: center;
        span {
            text-align: center;
            height: 50px;
            line-height: 50px;
            div {
                display: inline-block;
                vertical-align: middle;
                margin-right: 5px;
            }
        }
    }
    
    .allLoad {
        padding: 15px;
        text-align: center;
    }
</style>