<template>
    <div class="acccountDetails">
        <ComHead :pageTitle="title"></ComHead>
        <highcharts :height="300" :options="options"></highcharts>
    </div>
</template>

<script>
    import ComHead from '../../comHead.vue';

    export default {
        name: 'acccountDetails',
        data() {
            return {
                title: '资产统计',
                options: {
                    chart: {
                        plotBackgroundColor: 'none',
                        plotBorderWidth: null,
                        plotShadow: false,
                        height: 250,
                    },
                    title: {
                        text: '30488.00<br>总资产(元)',
                        align: 'center',
                        verticalAlign: 'middle',
                        y: -25,
                        style: {
                            color: '#666',
                            fontSize:'16px'
                        }
                    },
                    legend: {
                        itemStyle: {
                            color: '#666',
                            fontWeight: 'normal'
                        }
                    },
                    credits: {
                        enabled: false,
                    },
                    tooltip: {
                        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                    },
                    plotOptions: {
                        pie: {
                            allowPointSelect: false,
                            cursor: 'pointer',
                            dataLabels: {
                                enabled: false
                            },
                            showInLegend: true
                        }
                    },
                    series: [{
                        type: 'pie',
                        name: '所占比例',
                        size: '95%',
                        innerSize: '75%',
                        data: [
                            {
                                y: 66,
                                name: "持有资产(元)",
                                color: "#3fadfc"
                            },
                            {
                                y: 12,
                                name: "可用余额(元)",
                                color: "blue"
                            },
                            {
                                y: 22,
                                name: "提现在途(元)",
                                color: "#ff6c00"
                            },
                        ]
                    }]
                }
            };
        },
        components: {
            ComHead,
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