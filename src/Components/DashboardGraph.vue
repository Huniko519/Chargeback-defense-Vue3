<template>
    <div class="example">
        <apexchart height="350" type="line" :options="chartOptions" :series="series"></apexchart>
    </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
import {mapGetters} from "vuex";

export default {
    name: "MixedExample",
    computed: {
        ...mapGetters({
            'getCustomerDisputes': 'warpliteapi/getDisputesArr',
            'getAlerts': 'warpliteapi/getAlertsArr'
        }),
        dataAry() {
            const d = new Date()
            let month = '' + (d.getMonth() + 1)
            const year = d.getFullYear()

            if (month.length < 2)
                month = '0' + month

            let customDisputes = []
            let customAlerts = []

            for (let i = 1; i <= d.getDate(); i++) {
                let day = '' + i;
                if (day.length < 2)
                    day = '0' + day
                let strDate = `${year}-${month}-${day}`
                let totalRecords = null
                if (this.getCustomerDisputes && this.getCustomerDisputes.summary && this.getCustomerDisputes.summary.report_totals) {
                    totalRecords = this.getCustomerDisputes.summary.report_totals.find(ele => ele && ele['count(cbid)'] && ele.cbdatedisputed === strDate)
                }
                if (totalRecords) {
                    customDisputes.push(totalRecords['count(cbid)'])
                } else {
                    customDisputes.push(0)
                }

                totalRecords = null
                if (this.getAlerts && this.getAlerts.summary && this.getAlerts.summary.report_totals) {
                    totalRecords = this.getAlerts.summary.report_totals.find(ele => ele && ele['count(apiID)'] && ele.apidate && ele.apidate.includes(strDate))
                }
                if (totalRecords) {
                    customAlerts.push(totalRecords['count(apiID)'])
                } else {
                    customAlerts.push(0)
                }
            }

            return {
                customDisputes,
                customAlerts
            }
        },
        series() {
            if (this.dataAry) {
                return [{
                    name: 'Chargebacks',
                    type: 'column',
                    data: this.dataAry.customDisputes
                }, {
                    name: 'Alerts',
                    type: 'area',
                    data: this.dataAry.customAlerts
                }]
            } else {
                return [{
                    name: 'Chargebacks',
                    type: 'column',
                    data: []
                }, {
                    name: 'Alerts',
                    type: 'area',
                    data: []
                }]
            }
        }
    },
    components: {
        apexchart: VueApexCharts
    },
    data: function () {
        const d = new Date()
        let month = d.getMonth()
        let day = d.getDate()
        const year = d.getFullYear()
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

        let dates = [];
        for (let i = 1; i <= day; i++) {
            let strDay = '' + i
            if (strDay.length < 2)
                strDay = '0' + strDay;
            let date = `${strDay} ${months[month]} ${year}`
            dates.push(date);
        }

        return {
            chartOptions: {
                chart: {
                    height: 350,
                    type: 'line',
                },
                stroke: {
                    width: [0, 4],
                    curve: 'smooth'
                },
                title: {
                    text: ''
                },
                dataLabels: {
                    enabled: true,
                    enabledOnSeries: []
                },
                fill: {
                    opacity: [0.85, 0.25, 1],
                    gradient: {
                        inverseColors: false,
                        shade: "light",
                        type: "vertical",
                        opacityFrom: 0.85,
                        opacityTo: 0.55,
                        stops: [0, 100, 100, 100]
                    }
                },
                mark: {
                    size: 0.75
                },
                labels: dates,
                xaxis: {
                    type: 'datetime'
                },
                yaxis: [{
                    title: {
                        text: '',
                    },
                }]
            }
        };
    },
    methods: {
        loadData() {
        }
    },
    mounted() {
        let rb = this.$store.state.warpliteapi.MerchantChargebacksLoaded
        let cc = this.$store.state.warpliteapi.customerChargebacksLoaded
        if (rb && cc) {
            this.loadData()
        } else {
            let unwatch = this.$store.watch((state) => state.warpliteapi.MerchantChargebacksLoaded && state.warpliteapi.customerChargebacksLoaded , () => {
                this.loadData()
                unwatch()
            })
        }
    }
};
</script>
