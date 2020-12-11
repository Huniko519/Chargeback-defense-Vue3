<template>
    <div class="example">
        <apexchart height="200" type="area" :options="chartOptions" :series="series" ref="chart"></apexchart>
    </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
import {mapGetters} from "vuex";
import { abbreviateNumber } from "../modules/utils";

export default {
    name: "AlertGraph",
    computed: {
        ...mapGetters({
            'getAlerts': 'warpliteapi/getAlertsArr'
        }),
        totalAlertAmount() {
            let totalAmount = null;
            if (this.getAlerts && this.getAlerts.summary && this.getAlerts.summary.report_totals) {
                totalAmount = this.getAlerts.summary.report_totals.find(ele => ele && ele.total_amount_month !== undefined)
            }
            let amount = totalAmount ? totalAmount.total_amount_month : 0
            return `$${abbreviateNumber(parseFloat(amount))}`
        },
        dataAry() {
            let customAlerts = []

            const today = new Date()
            let day = new Date()
            day.setMonth(day.getMonth() - 4);
            while (day.getTime() <= today.getTime()) {
                let date = new Date(day)
                let month = date.getMonth()
                let dayNum = date.getDate()
                let year = date.getFullYear()
                dayNum = '' + dayNum
                if (dayNum.length < 2)
                    dayNum = '0' + dayNum

                month = '' + (month + 1)
                if (month.length < 2)
                    month = '0' + month
                
                let strDate = `${year}-${month}-${dayNum}`

                let totalRecords = null
                if (this.getAlerts && this.getAlerts.summary && this.getAlerts.summary.report_totals) {
                    totalRecords = this.getAlerts.summary.report_totals.find(ele => ele && ele['count(apiID)'] && ele.apidate && ele.apidate.includes(strDate))
                }
                if (totalRecords) {
                    customAlerts.push(totalRecords['count(apiID)'])
                } else {
                    customAlerts.push(0)
                }

                day.setDate(day.getDate() + 1);
            }

            return customAlerts
        },
        series() {
            if (this.dataAry) {
                return [{
                    name: 'Alerts',
                    type: 'area',
                    data: this.dataAry
                }]
            } else {
                return [{
                    name: 'Alerts',
                    type: 'area',
                    data: []
                }]
            }
        },
        chartOptions() {
            const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

            let dates = []
            const today = new Date()
            let day = new Date()
            day.setMonth(day.getMonth() - 4);
            while (day.getTime() <= today.getTime()) {
                let date = new Date(day)
                let month = date.getMonth()
                let dayNum = date.getDate()
                let year = date.getFullYear()
                dayNum = '' + dayNum
                if (dayNum.length < 2)
                    dayNum = '0' + dayNum
                
                let strDate = `${dayNum} ${months[month]} ${year}`

                dates.push(strDate)
                day.setDate(day.getDate() + 1);
            }

            return {
                chart: {
                    height: 200,
                    type: 'area',
                },
                stroke: {
                    curve: 'smooth',
                },
                title: {
                    text: this.totalAlertAmount
                },
                dataLabels: {
                    enabled: true,
                    enabledOnSeries: []
                },
                mark: {
                    size: 0.5
                },
                labels: dates,
                xaxis: {
                    type: 'datetime'
                },
                yaxis: [{
                    title: {
                    },
                }]
            }
        }
    },
    components: {
        apexchart: VueApexCharts
    },
    updated () {
        const d = new Date()
        let month = '' + (d.getMonth() + 1)
        const year = d.getFullYear()

        if (month.length < 2)
            month = '0' + month

        let fromDay = '1'
        let toDay = '' + d.getDate()

        if (fromDay.length < 2)
            fromDay = '0' + fromDay
        if (toDay.length < 2)
            toDay = '0' + toDay

        const strFromDate = `${year}-${month}-${fromDay}`
        const strToDate = `${year}-${month}-${toDay}`

        this.$refs.chart.zoomX(new Date(strFromDate).getTime(), new Date(strToDate).getTime())
    }
};
</script>
