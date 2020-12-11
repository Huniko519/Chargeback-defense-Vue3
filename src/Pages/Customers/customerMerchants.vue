<template>
    <div>
        <div class="mb-3 card">
            <div class="card-header-tab card-header">
                <div class="card-header-title font-size-md text-capitalize font-weight-normal ml-2">
                    Highest Dispute Activity
                </div>
            </div>
            <div class="table-responsive">
                <!-- /api-v1/merchants this table will sort /merchants_chargebacks.mtd_count desc order limit 5-->
                <table class="align-middle mb-5 table table-borderless table-striped table-hover">
                    <thead>
                        <tr>
                            <!-- /api-v1/merchants.merchantnumber-->
                            <!-- /api-v1/merchants.campaignname-->
                            <!--/merchants_chargebacks.crmapis_active-->
                            <th v-for="head in headers" v-bind:key="head.value" class="fa fa-sort-alpha-asc"
                                @click="movePage(head.value)">
                                {{ head.text }}
                                <font-awesome-icon class="mr-2"
                                                :icon="sortOrder[head.value] !== undefined ? sortOrder[head.value] === 'desc'? 'sort-down' : 'sort-up' : 'sort'"/>
                            </th>
                            <!--
                            <th class="fa fa-sort-alpha-asc text-center" width="170">
                                Chargebacks
                            </th>
                            <th class="fa fa-sort-alpha-asc text-center" width="170">
                                Alerts
                            </th>
                            -->
                        </tr>
                        <tr class="v-datatable__progress">
                            <th colspan="7" class="column">
                                <v-progress-linear v-slot:progress color="blue" indeterminate style="height: 2px" v-if="isLoading"></v-progress-linear>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(props, index) in top5Merchants" v-bind:key="index">
                        <td class="text-center text-muted flex2">{{ props.merchantid }}</td>
                        <!--/api-v1/merchants.merchantid-->
                        <td>
                            <div class="widget-subheading opacity-7">{{ props.merchantdba }}</div>
                        </td>
                        <td>
                            <div class="widget-content p-0">
                                <div class="widget-content-wrapper">
                                    <div class="widget-content-left ml-0">
                                        <div class="widget-heading">{{ props.merchantnumber }}</div>
                                        <!--/api-v1/merchants.merchantnumber-->
                                        <div class="widget-subheading opacity-7">{{ props.merchantdescriptor }}
                                        </div><!--/api-v1/merchants.merchantdescriptor-->
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td>{{props.merchanturl}}</td>
                        <td>{{props.merchantdescriptor}}</td>
                        <td>{{props.merchantphone}}</td>
                        <td>
                            <div class="progress-circle-wrapper">
                                <vue-circle :progress="parseFloat(props.top5percentage)" :size="54" :reverse="true" line-cap="round" :fill="f1" empty-fill="rgba(0, 0, 0, .1)"
                                            :animation-start-value="0.0" :start-angle="0" insert-mode="append" :thickness="4" :show-percent="true">
                                </vue-circle>
                            </div>
                        </td>

                        <!--<td>

                        <div class="progress-bar-xs progress">
                            <div class="progress-bar bg-primary" role="progressbar" :aria-valuenow="merchantProgress[props.merchantid]"
                                aria-valuemin="0" aria-valuemax="100" v-bind:style="{progress:merchantProgress[props.merchantid]+'%'}">
                            </div>
                        </div>

                         <td>
                            <apexchart type="bar" height="35" width="150" :options="chartOptions" :series="cbSeries(props.merchantid)"></apexchart>
                        </td>
                        <td>
                            <apexchart type="bar" height="35" width="150" :options="chartOptions" :series="alertSeries(props.merchantid)"></apexchart>
                        </td>
                            <MerchantDetailForm
                                buttonname = "View"
                                :formdata = "props"
                                :descriptors = "[]"
                            />
                        </td>-->
                    </tr>
                    </tbody>
                </table>
                <!--<b-pagination align="right" :total-rows="pagination.totalRecords" v-model="pagination.currentPage"
                              :per-page="pagination.rowsPerPage"></b-pagination>-->
            </div>
            <div class="divider mb-0 mt-0"></div>
        </div>
    </div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'
//import VueApexCharts from "vue-apexcharts";
import VueCircle from "vue2-circle-progress";
import {library} from "@fortawesome/fontawesome-svg-core";
import {faStar, faPlus, faSortUp, faSortDown, faSort} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
//import Sparkline from "vue-sparklines";
// import MerchantDetailForm from "../Dashboard/MerchantDetailForm";

library.add(faStar, faPlus, faSortUp, faSortDown, faSort);

export default {
    name: 'custMerch',
    components: {
        "font-awesome-icon": FontAwesomeIcon,
        // MerchantDetailForm,
        //apexchart: VueApexCharts
        VueCircle
    },
    props: {
        customRowsPerPage: {type: Number}
    },
    computed: {
        ...mapGetters({
            'merchantProgress': 'warpliteapi/getMerchantsProgress',
            'merchantDataSummary': 'warpliteapi/getMerchantsDataSummary',
            'merchantChargebacks': 'warpliteapi/getMerchantChargebacks',
            'merchantChargebacksSummary': 'warpliteapi/getMerchantChargebacksSummary'
        }),
        top5Merchants() {
            let merchants = []
            if (this.merchantDataSummary && this.merchantDataSummary.report_totals) {
                let top5Merchants = this.merchantDataSummary.report_totals.find(ele => ele.top5_merchants !== undefined)
                if (top5Merchants)
                    merchants = [ ...top5Merchants.top5_merchants ]
            }
            return merchants
        }
    },
    watch: {
        'pagination.currentPage': {
            handler: function () {
                this.movePage()
            },
            deep: true
        },
        'pagination.rowsPerPage': {
            handler: function () {
                this.pagination.currentPage = 1
                this.movePage()
            },
            deep: true
        },
    },
    data: () => ({
        isLoading: false,
        chartOptions: {
            chart: {
                type: 'bar',
                width: 150,
                height: 35,
                sparkline: {
                    enabled: true
                }
            },
            plotOptions: {
                bar: {
                    columnWidth: '60%'
                }
            },
            xaxis: {
                crosshairs: {
                    width: 1
                },
            }
        },
        options: [
            { value: 5, text: '5' },
            { value: 10, text: '10' },
            { value: 15, text: '15' },
            { value: 20, text: '20' },
            { value: 25, text: '25' }
        ],
        pagination: {
            rowsPerPage: 25,
            totalRecords: 0,
            totalPages: 3,
            currentPage: 1
        },
        sortOrder: {'merchantid': 'asc'},
        pages: 0,
        search: '',
        headers: [
            {
                text: 'ID',
                align: 'right',
                value: 'merchantid'
            },
            {
                text: 'DBA',
                align: 'left',
                value: 'merchantdba'
            },
            {
                text: 'Merchant Number',
                align: 'left',
                value: 'merchantnumber'
            },
            {
                text: 'Merchant Url',
                align: 'left',
                value: 'merchanturl'
            },
            {
                text: 'Descriptor',
                align: 'left',
                value: 'merchantdescriptor'
            },
            {
                text: 'Phone',
                align: 'left',
                value: 'merchantphone'
            },
            {
                text: 'Responded',
                align: 'left',
                value: 'merchantprogress'
            }
        ],
        icon: "pe-7s-car icon-gradient bg-mean-fruit",
        progressCircles: [],
        mkey: 0,
        fill: {gradient: ["var(--primary)"]},
        fill1: {gradient: ["#2af598", "#009efd"]},
        fill2: {gradient: ["#fccb90", "#d57eeb"]},
        f1: {gradient: ["#3f6ad8"]},
        f2: {gradient: ["#3ac47d"]},
        f3: {gradient: ["#16aaff"]},
        f4: {gradient: ["#f7b924"]},
        f5: {gradient: ["#d92550"]},
        f6: {gradient: ["#444054"]},
        function() {
            return {
                tempoveride_count: 50000,
                lastname: 'Fay'
            }
        },
        spIndicatorStyles1: false,
        spData2: (() => {
            const len = 10
            return Array.from(
                {
                    length: len
                },
                () => Math.floor(Math.random() * len)
            );
        })(),
        spCurveStyles2: {
            stroke: "var(--primary)",
            strokeWidth: "2"
        },

        spData1: (() => {
            const len = 10;
            return Array.from(
                {
                    length: len
                },
                () => Math.floor(Math.random() * len)
            );
        })(),
        spCurveStyles1: {
            stroke: "var(--danger)",
            strokeWidth: "2"
        },

        spData3: (() => {
            const len = 10;
            return Array.from(
                {
                    length: len
                },
                () => Math.floor(Math.random() * len)
            );
        })(),
        spCurveStyles3: {
            stroke: "var(--warning)",
            strokeWidth: "2"
        },

        spData4: (() => {
            const len = 10;
            return Array.from(
                {
                    length: len
                },
                () => Math.floor(Math.random() * len)
            );
        })(),
        spCurveStyles4: {
            stroke: "var(--info)",
            strokeWidth: "2"
        }
    }),
    methods: {
        ...mapActions('warpliteapi', ['getCbdMerchants']),
        cbSeries(merchantId) {
            const d = new Date()
            let month = '' + (d.getMonth() + 1)
            const year = d.getFullYear()

            if (month.length < 2)
                month = '0' + month

            let cbCounts = []

            for (let i = 1; i <= d.getDate(); i++) {
                let day = '' + i;
                if (day.length < 2)
                    day = '0' + day
                let strDate = `${year}-${month}-${day}`
                let cbCount = null
                if (this.merchantDataSummary && this.merchantDataSummary.report_totals) {
                    cbCount = this.merchantDataSummary.report_totals.find(ele => ele && ele.cbcount_merchant && ele.cbdatedisputed === strDate && ele.merchantid === merchantId)
                }
                if (cbCount) {
                    cbCounts.push(cbCount.cbcount_merchant)
                } else {
                    cbCounts.push(0)
                }
            }

            return [{
                name: 'Chargeback',
                data: cbCounts
            }]
        },
        alertSeries(merchantId) {
            const d = new Date()
            let month = '' + (d.getMonth() + 1)
            const year = d.getFullYear()

            if (month.length < 2)
                month = '0' + month

            let alertCounts = []

            for (let i = 1; i <= d.getDate(); i++) {
                let day = '' + i;
                if (day.length < 2)
                    day = '0' + day
                let strDate = `${year}-${month}-${day}`
                let alertCount = null
                if (this.merchantDataSummary && this.merchantDataSummary.report_totals) {
                    alertCount = this.merchantDataSummary.report_totals.find(ele => ele && ele.alertcount_merchant && ele.apidate.includes(strDate) && ele.merchantid === merchantId)
                }
                if (alertCount) {
                    alertCounts.push(alertCount.alertcount_merchant)
                } else {
                    alertCounts.push(0)
                }
            }

            return [{
                name: 'Alert',
                data: alertCounts
            }]
        },
        movePage(sortBy) {
            let before = (this.pagination.currentPage - 1)
            let after = this.pagination.currentPage
            let rp = this.pagination.rowsPerPage
            let startcount = (after == 1 ? 1 : ((before * rp) + 1))
            let endcount = rp
            let data = {limit: startcount + '|' + endcount};
            if (sortBy !== undefined) {
                if (this.sortOrder[sortBy] === undefined) {
                    this.sortOrder = {}
                }
                if (this.sortOrder[sortBy] !== undefined && this.sortOrder[sortBy] === 'desc') {
                    this.sortOrder[sortBy] = 'asc';
                    data.sortby = sortBy + ',asc'
                } else {
                    this.sortOrder[sortBy] = 'desc';
                    data.sortby = sortBy + ',desc'
                }
            } else if (this.sortOrder[Object.keys(this.sortOrder)[0]] !== undefined) {
                data.sortby = Object.keys(this.sortOrder)[0] + ',' + this.sortOrder[Object.keys(this.sortOrder)[0]]
            }

            this.isLoading = true
            this.getCbdMerchants(data)
                .then(() => {
                    this.setPages()
                    this.isLoading = false
                })
                .catch(() => {
                    this.isLoading = false
                })
        },
        setPages() {
            if (this.merchantDataSummary && this.merchantDataSummary.report_totals) {
                let total_records = this.merchantDataSummary.report_totals.find(ele => ele.merchant_all !== undefined)
                const totalRecords = total_records ? total_records.merchant_all : 0
                this.pagination.totalRecords = parseInt(totalRecords)
                let rp = this.pagination.rowsPerPage
                this.pagination.totalPages = Math.ceil(totalRecords / rp)
                this.pages = this.pagination.totalPages
            }
        }
    },
    async mounted() {
        //await this.getCbdMerchants()
        this.pagination.rowsPerPage = this.customRowsPerPage
        this.movePage()
    }
}
</script>

<style scoped>
    .table-responsive {
        overflow-y: hidden;
    }
</style>
