<template>
   <div class="acccountDetails">
       <ComHead :pageTitle="title"></ComHead>
       <!--<chart :options="polar"></chart>-->
   </div>
</template>

<script>
    import ComHead from '../../comHead.vue';
    // import ECharts from 'vue2-echarts/src/ECharts/ECharts.vue';

    export default {
        name: 'acccountDetails',
        data() {
            return {
                title: '资产统计',
            };
        },
        // data: function() {
        //     let data = []

        //     for (let i = 0; i <= 360; i++) {
        //         let t = i / 180 * Math.PI
        //         let r = Math.sin(2 * t) * Math.cos(2 * t)
        //         data.push([r, i])
        //     }

        //     return {
        //         title: '资产统计',
        //         polar: {
        //             // title: {
        //             //     text: '极坐标双数值轴'
        //             // },
        //             legend: {
        //                 data: ['line']
        //             },
        //             polar: {
        //                 center: ['50%', '54%']
        //             },
        //             tooltip: {
        //                 trigger: 'axis',
        //                 axisPointer: {
        //                     type: 'cross'
        //                 }
        //             },
        //             angleAxis: {
        //                 type: 'value',
        //                 startAngle: 0
        //             },
        //             radiusAxis: {
        //                 min: 0
        //             },
        //             series: [{
        //                 coordinateSystem: 'polar',
        //                 name: 'line',
        //                 type: 'line',
        //                 showSymbol: false,
        //                 data: data
        //             }],
        //             animationDuration: 2000
        //         }
        //     }
        // },
        // mounted() {
        //     var myChart = ECharts.init(document.getElementById('main'));
        //     myChart.setOption({
        //         title: {
        //             text: 'ECharts 入门示例'
        //         },
        //         tooltip: {},
        //         xAxis: {
        //             data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        //         },
        //         yAxis: {},
        //         series: [{
        //             name: '销量',
        //             type: 'bar',
        //             data: [5, 20, 36, 10, 10, 20]
        //         }]
        //     });
        // },
        components: {
            ComHead,
            // chart: ECharts,
        },
        methods: {
            back() {
                this.$router.back();
            },
        }
    }
</script>
<style lang="scss">

</style>