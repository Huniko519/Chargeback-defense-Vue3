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
            <div class="table-responsive">
                <!-- /api-v1/merchants this table will sort /merchants_chargebacks.mtd_count desc order limit 5-->
                <table class="align-middle mb-0 table table-borderless table-striped table-hover dense">
                    <thead>
                        <tr>
                            <!-- /api-v1/merchants.merchantnumber-->
                            <!-- /api-v1/merchants.campaignname-->
                            <!--/merchants_chargebacks.crmapis_active-->
                            <th v-for="head in headers" v-bind:key="head.value" class="fa fa-sort-alpha-asc"
                                @click="movePage(head.value)" v-bind:style="head.style && head.style">
                                {{ head.text }}
                                <font-awesome-icon class="ml-1float-left"
                                                :icon="sortOrder[head.value] !== undefined ? sortOrder[head.value] === 'desc'? 'sort-down' : 'sort-up' : 'sort'"/>
                            </th>
                            <th></th>
                        </tr>
                        <tr class="v-datatable__progress">
                            <th colspan="10" class="column">
                                <v-progress-linear v-slot:progress color="blue" indeterminate style="height: 2px" v-if="isLoading"></v-progress-linear>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(props, index) in disputes" v-bind:key="index">
                        <td class="text-center text-muted">{{ props.cbid }}</td>
                        <td>
                            <div class="widget-heading opacity-7">{{ props.cbcasenumber }}</div>
                        </td>
                        <td>
                            <div class="widget-content p-0">
                                <div class="widget-content-wrapper">
                                    <div class="widget-content-left flex2">
                                        <div class="widget-heading">{{ props.cbdatedisputed }}</div>
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div class="widget-content p-0">
                                <div class="widget-content-wrapper">
                                    <div class="widget-content-left flex2">
                                        <div class="widget-heading">{{ props.cbdateorder }}</div>
                                    </div>
                                </div>
                            </div>
                        </td>

                        <td>
                            <b-badge variant="primary" v-if="props.statusid === '1'">{{props.statusname}}</b-badge>
                            <b-badge variant="secondary" v-if="props.statusid === '2'">{{props.statusname}}</b-badge>
                            <b-badge variant="success" v-if="props.statusid === '3'">{{props.statusname}}</b-badge>
                            <b-badge variant="danger" v-if="props.statusid === '4'">{{props.statusname}}</b-badge>
                            <b-badge variant="warning" v-if="props.statusid === '113'">{{props.statusname}}</b-badge>
                            <b-badge variant="warning" v-if="props.statusid === '67'">{{props.statusname}}</b-badge>
                            <b-badge variant="light" v-if="props.statusid === '7'">{{props.statusname}}</b-badge>
                            <b-badge variant="dark" v-if="props.statusid === '8'">{{props.statusname}}</b-badge>
                            <b-badge variant="primary" v-if="props.statusid === '9'">{{props.statusname}}</b-badge>
                            <b-badge variant="secondary" v-if="props.statusid === '10'">{{props.statusname}}</b-badge>
                            <b-badge variant="success" v-if="props.statusid === '11'">{{props.statusname}}</b-badge>
                            <b-badge variant="danger" v-if="props.statusid === '12'">{{props.statusname}}</b-badge>
                        </td>
                        <td>{{props.cbcardnumber}}</td>
                        <td>{{props.cbamount}}</td>
                        <td>{{props.cbreasoncode}}</td>
                        <td>{{props.cbauthcode}}</td>
                        <td>
                            <ChargebackDetailForm
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
//import Sparkline from "vue-sparklines";
import ChargebackDetailForm from "../Chargeback/ChargebackDetailForm";

library.add(faStar, faPlus, faSortUp, faSortDown, faSort);

export default {
    name: 'CustomerDisputes',
    components: {
        "font-awesome-icon": FontAwesomeIcon,
        ChargebackDetailForm
    },
    props: {
        customRowsPerPage: {type: Number}
    },
    computed: {
        ...mapGetters({
            'getCustomerDisputes': 'warpliteapi/getDisputesArr',
            'getStatusChargebacks': 'warpliteapi/getStatusChargebacks',
        }),
        disputes() {
            let disputes = []
            if (this.getCustomerDisputes && this.getCustomerDisputes.data) {
                disputes = this.getCustomerDisputes.data.map(ele => {
                    let status = null;
                    if (this.getStatusChargebacks) {
                        status = this.getStatusChargebacks.find(s => s.statusid === ele.statusid)
                    }
                    ele.statusname = status ? status.statusname : ''

                    return ele
                })
            }

            return disputes
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
        dateRanges: [
            { value: 0, text: 'Last Week' },
            { value: 1, text: 'This Month' },
            { value: 2, text: 'Last Month' }
        ],
        dateRange : 1, // 0: Last_week, 1: Month_todate, 2: Last_month
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
        sortOrder: {'cbdatedisputed': 'desc'},
        pages: 0,
        search: '',
        headers: [
            {
                text: 'Id',
                align: 'center',
                value: 'cbid',
                style:{'padding-left':'25px'}
            },
            {
                text: 'Case Number',
                align: 'left',
                value: 'cbcasenumber'
            },
            {
                text: 'Dispute Date',
                align: 'left',
                value: 'cbdatedisputed'
            },
            {
                text: 'Trans Date',
                align: 'left',
                value: 'cbdateorder'
            },
            {
                text: 'Status',
                align: 'left',
                value: 'statusname'
            },
            {
                text: 'Card',
                align: 'left',
                value: 'cbcardnumber'
            },
            {
                text: 'Amount',
                align: 'left',
                value: 'cbamount'
            },
            {
                text: 'Code',
                align: 'left',
                value: 'cbreasoncode'
            },
            {
                text: 'Auth Code',
                align: 'left',
                value: 'cbauthcode'
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
        ...mapActions('warpliteapi', ['getCbdDisputes', 'getCbdStatus']),
        handlePageChange (currentPage) {
            this.pagination.currentPage = currentPage
            this.movePage()
        },
        setDateRange(dateRange) {
            this.dateRange = dateRange
            this.pagination.currentPage = 1
            this.movePage()
        },
        movePage(sortBy) {
            let before = (this.pagination.currentPage - 1)
            let after = this.pagination.currentPage
            let rp = this.pagination.rowsPerPage
            let startcount = (after == 1 ? 0 : (before * rp))
            let endcount = rp
            let data = {limit: startcount + '|' + endcount};

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

                data.cbdatedisputed = `${firstDate}|${curDate}`
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

                data.cbdatedisputed = `${fromDate}|${toDate}`
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

                data.cbdatedisputed = `${fromDate}|${toDate}`
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

            this.isLoading = true
            this.getCbdDisputes(data)
                .then(() => {
                    this.setPages()
                    this.isLoading = false
                })
                .catch(() => {
                    this.isLoading = false
                })
        },
        setPages() {
            if (this.getCustomerDisputes && this.getCustomerDisputes.summary) {
                let totalRecords = this.getCustomerDisputes.summary.query_total
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
        this.getCbdStatus()
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

