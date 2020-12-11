<template>
    <div>
        <div class="mb-3 card">
            <div class="card-header-tab card-header">
                <div class="card-header-title font-size-lg text-capitalize font-weight-normal ml-2">
                    <b-form-select class="mx-1" v-model="pagination.rowsPerPage" :options="options" size="md"></b-form-select>
                </div>
                <b-form-radio-group
                    id="btn-radios-2"
                    v-model="dateRange"
                    :options="dateRanges"
                    @change="setDateRange"
                    buttons
                    button-variant="outline-primary"
                    size="lg"
                    name="radio-btn-outline"
                ></b-form-radio-group>
            </div>
            <div>
                <v-form md12>
                    <v-container class="row">
                        <v-layout>
                            <v-flex xs12 md4>
                                <v-text-field v-model="merchantNumber" label="Merchant Number" placeholder=" " dense></v-text-field>
                            </v-flex>
                            <v-flex xs12 md4>
                                <v-text-field v-model="descriptor" label="Descriptor" placeholder=" " dense></v-text-field>
                            </v-flex>
                            <v-flex xs12 md2>
                                <v-text-field v-model="apiAmount" label="Amount" placeholder=" " dense></v-text-field>
                            </v-flex>
                            <v-flex xs12 md2>
                                <v-text-field v-model="ccBin" label="CC BIN" placeholder=" " dense></v-text-field>
                            </v-flex>
                            <v-flex xs12 md2>
                                <v-text-field v-model="ccLast4" label="CC Last " placeholder=" " dense></v-text-field>
                            </v-flex>
                            <v-flex xs12 md3>
                                <v-text-field v-model="apiAuthCode" label="API Auth Code" placeholder=" " dense></v-text-field>
                            </v-flex>
                            <v-flex xs12 md4>
                                <v-select
                                    v-model="providerId"
                                    :items="providers"
                                    label="Provider Name"
                                ></v-select>
                            </v-flex>
                            <v-flex xs12 md1>
                                <v-btn  color="primary" @click="filter">Filter</v-btn>
                            </v-flex>
                            <v-flex xs12 md1>
                                <v-btn  outline color="primary" @click="clear">clear</v-btn>
                            </v-flex>
                            
                        </v-layout>
                    </v-container>
                </v-form>
            </div>
            <div class="table-responsive">
                <!-- /api-v1/merchants this table will sort /merchants_chargebacks.mtd_count desc order limit 5-->
                <table class="align-middle mb-0 table table-borderless table-striped table-hover">
                    <thead>
                        <tr>
                            <!-- /api-v1/merchants.merchantnumber-->
                            <!-- /api-v1/merchants.campaignname-->
                            <!--/merchants_chargebacks.crmapis_active-->
                            <th v-for="head in headers" v-bind:key="head.value" class="fa fa-sort-alpha-asc"
                                @click="movePage(head.value)" v-bind:style="head.style">
                                {{ head.text }}
                                <font-awesome-icon class="mr-2 float-right"
                                    :icon="sortOrder[head.value] !== undefined ? sortOrder[head.value] === 'desc'? 'sort-down' : 'sort-up' : 'sort'"/>
                            </th>
                            <th></th>
                        </tr>
                        <tr class="v-datatable__progress">
                            <th colspan="13" class="column">
                                <v-progress-linear v-slot:progress color="blue" indeterminate style="height: 2px" v-if="isLoading"></v-progress-linear>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(props, index) in alerts" v-bind:key="index">
                        <td class="text-center text-muted pl-3">{{ props.apiID }}</td>
                        <td>
                            <b-badge variant="success" v-if="props.providerid === '1'">Ethoca</b-badge>
                            <b-badge variant="primary" v-else>Verifi</b-badge>
                        </td>
                        <td>
                            <div class="widget-subheading opacity-7">{{ props.apialerterid }}</div>
                        </td>
                        <td>
                            <div class="widget-content p-0">
                                <div class="widget-content-wrapper">
                                    <div class="widget-content-left flex2">
                                        <div class="widget-heading">${{ props.apiamount }}</div>
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td>{{props.apidate}}</td>
                        <td>{{props.apitransactiondate}}</td>
                        <td>{{props.ccbin6}}</td>
                        <td>{{props.cclast4}}</td>
                        <td>{{props.issuername}}</td>
                        <td>{{props.desctext}}</td>
                        <td>{{props.merchantnumber}}</td>
                        <td>
                            <b-badge variant="info" v-if="props.statusid === '0'">{{props.statusname}}</b-badge>
                            <b-badge variant="warning" v-if="props.statusid === '1'">{{props.statusname}}</b-badge>
                            <b-badge variant="secondary" v-if="props.statusid === '2'">{{props.statusname}}</b-badge>
                            <b-badge variant="success" v-if="props.statusid === '3'">{{props.statusname}}</b-badge>
                            <b-badge variant="danger" v-if="props.statusid === '4'">{{props.statusname}}</b-badge>
                            <b-badge variant="warning" v-if="props.statusid === '5'">{{props.statusname}}</b-badge>
                            <b-badge variant="info" v-if="props.statusid === '6'">{{props.statusname}}</b-badge>
                            <b-badge variant="light" v-if="props.statusid === '7'">{{props.statusname}}</b-badge>
                            <b-badge variant="dark" v-if="props.statusid === '8'">{{props.statusname}}</b-badge>
                            <b-badge variant="primary" v-if="props.statusid === '9'">{{props.statusname}}</b-badge>
                            <b-badge variant="secondary" v-if="props.statusid === '10'">{{props.statusname}}</b-badge>
                            <b-badge variant="success" v-if="props.statusid === '11'">{{props.statusname}}</b-badge>
                            <b-badge variant="danger" v-if="props.statusid === '12'">{{props.statusname}}</b-badge>
                        </td>
                        <td>
                            <AlertDetailForm
                                buttonname = "View"
                                :formdata = "props"
                                :descriptors = "[]"
                            />
                        </td>
                    </tr>
                    </tbody>
                </table>
                
                <b-pagination align="right" :total-rows="pagination.totalRecords" :value="pagination.currentPage"
                              :per-page="pagination.rowsPerPage" @change="handlePageChange"></b-pagination>
            </div>
            <div class="divider mb-0 mt-0"></div>
        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

import {library} from "@fortawesome/fontawesome-svg-core";
import {faStar, faPlus, faSortUp, faSortDown, faSort} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import AlertDetailForm from "../Alerts/alertdetailform";

//import Sparkline from "vue-sparklines";

library.add(faStar, faPlus, faSortUp, faSortDown, faSort);

export default {
    name: 'CustomerAlerts',
    components: {
        "font-awesome-icon": FontAwesomeIcon,
        AlertDetailForm
    },
    props: {
        customRowsPerPage: {type: Number}
    },
    computed: {
        ...mapGetters({
            'getAlerts': 'warpliteapi/getAlertsArr',
            'getStatusChargebacks': 'warpliteapi/getStatusChargebacks',
        }),
        alerts() {
            let alerts = []
            if (this.getAlerts && this.getAlerts.data) {
                alerts = this.getAlerts.data.map(ele => {
                    if (ele) {
                        let status = null;
                        if (this.getStatusChargebacks) {
                            status = this.getStatusChargebacks.find(s => s && s.statusid === ele.statusid)
                        }
                        ele.statusname = status ? status.statusname : ''

                        if (ele.statusid === '0') {
                            ele.statusname = 'New'
                        }
                    }

                    return ele
                })
            }

            return alerts
        }
    },
    watch: {
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
        descriptor: '',
        merchantNumber: '',
        apiAmount: '',
        ccLast4: '',
        ccBin: '',
        apiAuthCode: '',
        providerId: -1,
        providers: [
            { value: -1, text: 'Select...' },
            { value: 3, text: 'Verifi' },
            { value: 1, text: 'Ethoca' }
        ],
        dateRange : 1, // 0: Last_week, 1: Month_todate, 2: Last_month
        dateRanges: [
            { value: 0, text: 'Last Week' },
            { value: 1, text: 'This Month' },
            { value: 2, text: 'Last Month' }
        ],
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
        sortOrder: {'apidate': 'desc'},
        pages: 0,
        search: '',
        headers: [
            {
                text: 'Id',
                align: 'center',
                value: 'apiID',
                style:{"min-width":'80px', 'padding-left' : '20px'}
            },
            {
                text: 'Provider',
                align: 'left',
                value: 'providerid',
                style:{"min-width":'120px'}
            },
            {
                text: 'AlertId',
                align: 'left',
                value: 'apialerterid',
                style:{"min-width":'250px'}
            },
            {
                text: 'Amount',
                align: 'left',
                value: 'apiamount',
                style:{"min-width":'120px'}
            },
            {
                text: 'Date',
                align: 'left',
                value: 'apidate',
                style:{"min-width":'180px'}
            },
            {
                text: 'Trans Date',
                align: 'left',
                value: 'apitransactiondate',
                style:{"min-width":'180px'}
            },
            {
                text: 'Cc bin',
                align: 'left',
                value: 'ccbin6',
                style:{"min-width":'80px'}
            },
            {
                text: 'Cc last',
                align: 'left',
                value: 'cclast4',
                style:{"min-width":'120px'}
            },
            {
                text: 'Issuer',
                align: 'left',
                value: 'issuername',
                style:{"min-width":'180px'}
            },
            {
                text: 'Descriptor',
                align: 'left',
                value: 'desctext',
                sstyle:{"min-width":'220px'}
            },
            {
                text: 'Merchant Number',
                align: 'left',
                value: 'merchantnumber',
                style:{"min-width":'230px'}
            },
            {
                text: 'Outcome',
                align: 'left',
                value: 'statusid',
                style:{"min-width":'100px'}
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
        ...mapActions('warpliteapi', ['getCbdAlerts', 'getCbdAlertStatus']),
        filter () {
            if (this.descriptor !== '' || this.merchantNumber !== '' || this.apiAmount !== '' || this.ccLast4 !== '' || 
                this.ccBin !== '' || this.apiAuthCode !== '' || this.providerId !== -1) {
                this.pagination.currentPage = 1
                this.movePage()
            }
        },
        clear () {
            this.pagination.currentPage = 1
            this.descriptor = ''
            this.merchantNumber = ''
            this.apiAmount = ''
            this.ccLast4 = ''
            this.ccBin = ''
            this.apiAuthCode = ''
            this.providerId = -1

            this.movePage()
        },
        handlePageChange (currentPage) {
            this.pagination.currentPage = currentPage
            this.movePage()
        },
        setDateRange(dateRange) {
            this.dateRange = dateRange
            this.pagination.currentPage = 1
            this.movePage()
        },
        getFilter (sortBy) {
            let before = (this.pagination.currentPage - 1)
            let after = this.pagination.currentPage
            let rp = this.pagination.rowsPerPage
            let startcount = (after == 1 ? 0 : (before * rp))
            let endcount = rp
            let data = {limit: startcount + '|' + endcount};

            if (this.descriptor !== '' || this.merchantNumber !== '' || this.apiAmount !== '' || this.ccLast4 !== '' || 
                this.ccBin !== '' || this.apiAuthCode !== '' || this.providerId !== -1) {
                if (this.descriptor !== '') data.desctext = `like%${this.descriptor}`
                if (this.merchantNumber !== '') data.merchantnumber = `like%${this.merchantNumber}`
                if (this.apiAmount !== '') data.apiamount = `like%${this.apiAmount}`
                if (this.ccLast4 !== '') data.cclast4 = `like%${this.ccLast4}`
                if (this.ccBin !== '') data.ccbin6 = `like%${this.ccBin}`
                if (this.apiAuthCode !== '') data.apiauthcode = `like%${this.apiAuthCode}`
                if (this.providerId !== -1) data.providerid = `${this.providerId}`
            }

            if (this.dateRange === 1) { // month_todate
                const today = new Date()
                let month = '' + (today.getMonth() + 1)
                let day = '' + today.getDate()
                let year = today.getFullYear()

                if (month.length < 2)
                    month = '0' + month
                if (day.length < 2)
                    day = '0' + day

                const curDate = [year, month, day].join('-')
                const firstDate = [year, month, '01'].join('-')

                data.apidate = `${firstDate}|${curDate}`
            } else if (this.dateRange === 0) { // last_week
                let to = new Date();
                let from = new Date();
                to.setTime(to.getTime() - (to.getDay() ? to.getDay() + 1 : 7) * 24 * 60 * 60 * 1000);
                from.setTime(to.getTime() - 6 * 24 * 60 * 60 * 1000);

                let month = '' + (to.getMonth() + 1)
                let day = '' + to.getDate()
                let year = to.getFullYear()

                if (month.length < 2)
                    month = '0' + month
                if (day.length < 2)
                    day = '0' + day

                const toDate = [year, month, day].join('-')

                month = '' + (from.getMonth() + 1)
                day = '' + from.getDate()
                year = from.getFullYear()

                if (month.length < 2)
                    month = '0' + month
                if (day.length < 2)
                    day = '0' + day

                const fromDate = [year, month, day].join('-')

                data.apidate = `${fromDate}|${toDate}`
            } else {
                const today = new Date();
                let from = new Date(today.getFullYear(), today.getMonth()-1, 1);
                let to = new Date(today.getFullYear(), today.getMonth(), 0);

                let month = '' + (to.getMonth() + 1)
                let day = '' + to.getDate()
                let year = to.getFullYear()

                if (month.length < 2)
                    month = '0' + month
                if (day.length < 2)
                    day = '0' + day

                const toDate = [year, month, day].join('-')

                month = '' + (from.getMonth() + 1)
                day = '' + from.getDate()
                year = from.getFullYear()

                if (month.length < 2)
                    month = '0' + month
                if (day.length < 2)
                    day = '0' + day

                const fromDate = [year, month, day].join('-')

                data.apidate = `${fromDate}|${toDate}`
            }

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

            return data
        },
        movePage(sortBy) {
            const data = this.getFilter(sortBy)

            this.isLoading = true
            this.getCbdAlerts(data)
                .then(() => {
                    this.setPages()
                    this.isLoading = false
                })
                .catch(() => {
                    this.isLoading = false
                })
        },
        setPages() {
            if (this.getAlerts && this.getAlerts.summary) {
                let totalRecords = this.getAlerts.summary.query_total
                totalRecords = totalRecords ? parseInt(totalRecords) : 0
                this.pagination.totalRecords = totalRecords
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

        this.isLoading = true
        this.getCbdAlertStatus()
            .then(() => {
                this.isLoading = false
            })
            .catch(() => {
                this.isLoading = false
            })
    }
}
</script>

<style scoped="css">
.table {
  border-spacing: 0 0.85rem !important;
}
.table td,
.table th {
  vertical-align: middle;
  margin-bottom: 10px;
  border: none;
  white-space: nowrap; 
  
}

.table thead {
  background:#f0f0f0 
}

.table thead tr,
.table thead th {
  border: none;
  font-size: 12px;
  letter-spacing: 1px;
  text-transform: uppercase;
  background: transparent;
}




</style>
