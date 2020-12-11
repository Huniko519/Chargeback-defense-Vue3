<template>
    <div class="example">
        <apexchart height="200" type="area" :options="chartOptions" :series="series"></apexchart>
    </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
import {mapGetters} from "vuex";
import { abbreviateNumber, getFirstCurMonthDate } from "../modules/utils";

export default {
    name: "DisputeGraph",
    computed: {
        ...mapGetters({
            'getCustomerDisputes': 'warpliteapi/getDisputesArr',
        }),
        totalDisputeAmount() {
            const firstDate = getFirstCurMonthDate()

            let totalAmount = null;
            if (this.getCustomerDisputes && this.getCustomerDisputes.summary && this.getCustomerDisputes.summary.report_totals) {
                totalAmount = this.getCustomerDisputes.summary.report_totals.find(ele => ele.total_amount_month !== undefined && ele.cbdatedisputed === firstDate)
            }
            let amount = totalAmount ? totalAmount.total_amount_month : 0
            return `$${abbreviateNumber(parseFloat(amount))}`
        },
        dataAry() {
            const d = new Date()
            let month = '' + (d.getMonth() + 1)
            const year = d.getFullYear()

            if (month.length < 2)
                month = '0' + month

            let customDisputes = []

            for (let i = 1; i <= d.getDate(); i++) {
                let day = '' + i;
                if (day.length < 2)
                    day = '0' + day
                let strDate = `${year}-${month}-${day}`

                let totalRecords = null
                if (this.getCustomerDisputes && this.getCustomerDisputes.summary && this.getCustomerDisputes.summary.report_totals) {
                    totalRecords = this.getCustomerDisputes.summary.report_totals.find(ele => ele && ele['count(cbid)'] && ele.cbdatedisputed && ele.cbdatedisputed.includes(strDate))
                }
                if (totalRecords) {
                    customDisputes.push(totalRecords['count(cbid)'])
                } else {
                    customDisputes.push(0)
                }
            }

            return customDisputes
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
                chart: {
                    height: 200,
                    type: 'area',
                },
                stroke: {
                    curve: 'smooth',
                },
                title: {
                    text: this.totalDisputeAmount
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
    }
};
</script>
