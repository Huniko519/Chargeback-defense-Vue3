<template>
    <div>
        <div class="row col-lg-12">
            <div class="main-card mb-3 card col-lg-12">
                <div class="no-gutters row">
                    <div class="col-md-4">
                        <div class="pt-0 pb-0 card-body">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">
                                    <div class="widget-content p-0">
                                        <div class="widget-content-outer">
                                            <div class="widget-content-wrapper">
                                                <div class="widget-content-left">
                                                    <div class="widget-heading">Gateways</div>
                                                    <div class="widget-subheading">Browser Porals</div>
                                                </div>
                                                <div class="widget-content-right">
                                                    <div class="widget-numbers-sm text-success">{{gatewaysAll}}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="widget-content p-0">
                                        <div class="widget-content-outer">
                                            <div class="widget-content-wrapper">
                                                <div class="widget-content-left">
                                                    <div class="widget-heading">Gateway APIs</div>
                                                    <div class="widget-subheading">API connections</div>
                                                </div>
                                                <div class="widget-content-right">
                                                    <div class="widget-numbers-sm text-primary">{{gatewayAPIs}}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="pt-0 pb-0 card-body">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">
                                    <div class="widget-content p-0">
                                        <div class="widget-content-outer">
                                            <div class="widget-content-wrapper">
                                                <div class="widget-content-left">
                                                    <div class="widget-heading">Active Processors</div>
                                                    <div class="widget-subheading">current processing accounts</div>
                                                </div>
                                                <div class="widget-content-right">
                                                    <div class="widget-numbers-sm text-danger">{{processorsAll}}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="widget-content p-0">
                                        <div class="widget-content-outer">
                                            <div class="widget-content-wrapper">
                                                <div class="widget-content-left">
                                                    <div class="widget-heading">Inactive Procesors</div>
                                                    <div class="widget-subheading">onboarding / non-procesing accounts</div>
                                                </div>
                                                <div class="widget-content-right">
                                                    <div class="widget-numbers-sm text-warning">{{processorsInactive}}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="pt-0 pb-0 card-body">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">
                                    <div class="widget-content p-0">
                                        <div class="widget-content-outer">
                                            <div class="widget-content-wrapper">
                                                <div class="widget-content-left">
                                                    <div class="widget-heading">CRMs</div>
                                                    <div class="widget-subheading">Broswer Portals</div>
                                                </div>
                                                <div class="widget-content-right">
                                                    <div class="widget-numbers-sm text-success">{{crmsAll}}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="widget-content p-0">
                                        <div class="widget-content-outer">
                                            <div class="widget-content-wrapper">
                                                <div class="widget-content-left">
                                                    <div class="widget-heading">CRM APIs</div>
                                                    <div class="widget-subheading">API Connections</div>
                                                </div>
                                                <div class="widget-content-right">
                                                    <div class="widget-numbers-sm text-primary">{{crmAPIs}}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <!-- <div class="col-lg-12">
                <div class="row"> -->
            <div class="col-sm-12">
                <div class="main-card mb-3 card">
                    <table class="align-middle table elevation-1 chargeTbl dense">
                        <thead>
                        <tr>
                            <th v-for="head in headers" v-bind:key="head.value" class="fa fa-sort-alpha-asc" @click="movePage(head.value)">
                                {{head.text}}
                                <font-awesome-icon class="mr-2 float-right" :icon="sortOrder[head.value] !== undefined ? sortOrder[head.value] === 'desc'? 'sort-down' : 'sort-up' : 'sort'" />
                            </th>
                        </tr>
                        <tr class="v-datatable__progress">
                            <th colspan="6" class="column">
                                <v-progress-linear v-slot:progress color="blue" indeterminate style="height: 2px" v-if="isLoading"></v-progress-linear>
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(props, index) in merchantData" v-bind:key="index">
                            <td class="text-xs-left">{{ props.merchantid }}</td>
                            <td class="text-xs-left">{{ props.merchantnumber }}</td>
                            <td class="text-xs-left">{{ props.merchanturl }}</td>
                            <td class="text-xs-left">{{ props.merchantdescriptor }}</td>
                            <td class="text-xs-left">
                                <div class="progress-bar-xs progress">
                                    <div class="progress-bar bg-primary" role="progressbar" :aria-valuenow="merchantProgress[props.merchantid]"
                                            aria-valuemin="0" aria-valuemax="100" v-bind:style="{width:merchantProgress[props.merchantid]+'%'}">
                                    </div>
                                </div>
                            </td>
                            <td>
                                <MerchantDetailForm
                                    buttonname = "View"
                                    :formdata = "props"
                                    :descriptors = "[]"
                                />
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <b-pagination align="right" :total-rows="pagination.totalRecords" :value="pagination.currentPage" 
                        :per-page="pagination.rowsPerPage" @change="handlePageChange">
                    </b-pagination>
                </div>
            </div>
                <!-- </div>
            </div> -->
            <!--<div class="col-lg-12 col-xl-4">
                <div class="mb-3 card">
                    <div class="rm-border pb-0 responsive-center card-header">
                        <div>
                            <h5 class="menu-header-title text-capitalize">Merchant Portfolio Performance</h5>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-6 col-xl-12">
                            <div class="no-shadow rm-border bg-transparent widget-chart text-left card">
                                <div class="progress-circle-wrapper">
                                    <vue-circle :progress="2.34" :size="104" :reverse="true" line-cap="round"
                                                :fill="fill1" empty-fill="rgba(0, 0, 0, .1)" :animation-start-value="0.0" :start-angle="0"
                                                insert-mode="append" :thickness="7" :show-percent="true">
                                    </vue-circle>
                                </div>
                                <div class="widget-chart-content">
                                    <div class="widget-subheading">Chargeback Ratio</div>
                                    <div class="widget-numbers-sm text-success">
                                        <span>0%</span>
                                    </div>
                                    <div class="widget-description text-focus">
                                        Descreased from
                                        <span class="text-warning pl-1">
                                            <font-awesome-icon icon="angle-up" />
                                            <span class="pl-1">0%</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-xl-12">
                            <div class="card no-shadow rm-border bg-transparent widget-chart text-left mt-2">
                                <div class="progress-circle-wrapper">
                                    <vue-circle :progress="54" :size="104" :reverse="true" line-cap="round" :fill="fill2"
                                                empty-fill="rgba(0, 0, 0, .1)" :animation-start-value="0.0" :start-angle="0" insert-mode="append"
                                                :thickness="7" :show-percent="true">
                                    </vue-circle>
                                </div>
                                <div class="widget-chart-content">
                                    <div class="widget-subheading">Effectiveness</div>
                                    <div class="widget-numbers-sm text-danger">
                                        <span>$194</span>
                                    </div>
                                    <div class="widget-description opacity-8 text-focus">
                                        Down by
                                        <span class="text-success pl-1 pr-1">
                                            <font-awesome-icon icon="angle-down" />
                                            <span class="pl-1">21.8%</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>-->
        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
//import VueCircle from "vue2-circle-progress";
import { library } from "@fortawesome/fontawesome-svg-core";
import {  faStar, faPlus, faSortUp, faSortDown, faSort } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import MerchantDetailForm from "../Dashboard/MerchantDetailForm";

library.add(faStar, faPlus, faSortUp, faSortDown, faSort);
import {
    faCalendarAlt,
    faAngleDown,
    faAngleUp,
    faTh,
    faBusinessTime,
    faArrowLeft,
    faArrowRight,
    faCog,
    faDotCircle
} from "@fortawesome/free-solid-svg-icons";

library.add(
    faAngleDown,
    faCalendarAlt,
    faStar,
    faAngleUp,
    faTh,
    faBusinessTime,
    faCog,
    faArrowLeft,
    faArrowRight,
    faDotCircle
);

export default {
    name: 'custMerch',
    components: {
        "font-awesome-icon": FontAwesomeIcon,
        MerchantDetailForm
        //VueCircle
    },
    props: {
        customRowsPerPage: {type: Number}
    },
    computed: {
        ...mapGetters({
            'merchantData': 'warpliteapi/getMerchantsData',
            'merchantProgress': 'warpliteapi/getMerchantsProgress',
            'merchantDataSummary': 'warpliteapi/getMerchantsDataSummary',
        }),
        activeMerchants() {
            let activeMerchants = null;
            if (this.merchantDataSummary && this.merchantDataSummary.report_totals) {
                activeMerchants = this.merchantDataSummary.report_totals.find(ele => ele.active_merchants !== undefined)
            }
            return activeMerchants ? activeMerchants.active_merchants : 0
        },
        crmsAll() {
            let crmsAll = null;
            if (this.merchantDataSummary && this.merchantDataSummary.report_totals) {
                crmsAll = this.merchantDataSummary.report_totals.find(ele => ele.crms_all !== undefined)
            }
            return crmsAll ? crmsAll.crms_all : 0
        },
        gatewaysAll() {
            let gatewaysAll = null;
            if (this.merchantDataSummary && this.merchantDataSummary.report_totals) {
                gatewaysAll = this.merchantDataSummary.report_totals.find(ele => ele.gateways_all !== undefined)
            }
            return gatewaysAll ? gatewaysAll.gateways_all : 0
        },
        gatewaysInactive() {
            let gatewaysInactive = null;
            if (this.merchantDataSummary && this.merchantDataSummary.report_totals) {
                gatewaysInactive = this.merchantDataSummary.report_totals.find(ele => ele.gateways_inactive !== undefined)
            }
            return gatewaysInactive ? gatewaysInactive.gateways_inactive : 0
        },
        processorsAll() {
            let processorsAll = null;
            if (this.merchantDataSummary && this.merchantDataSummary.report_totals) {
                processorsAll = this.merchantDataSummary.report_totals.find(ele => ele.processors_all !== undefined)
            }
            return processorsAll ? processorsAll.processors_all : 0
        },
        processorsInactive() {
            let processorsInactive = null;
            if (this.merchantDataSummary && this.merchantDataSummary.report_totals) {
                processorsInactive = this.merchantDataSummary.report_totals.find(ele => ele.processors_inactive !== undefined)
            }
            return processorsInactive ? processorsInactive.processors_inactive : 0
        },
        gatewayAPIs() {
            let gatewayAPIs = null;
            if (this.merchantDataSummary && this.merchantDataSummary.report_totals) {
                gatewayAPIs = this.merchantDataSummary.report_totals.find(ele => ele.gateway_apis !== undefined)
            }
            return gatewayAPIs ? gatewayAPIs.gateway_apis : 0
        },
        crmAPIs() {
            let crmAPIs = null;
            if (this.merchantDataSummary && this.merchantDataSummary.report_totals) {
                crmAPIs = this.merchantDataSummary.report_totals.find(ele => ele.crm_apis !== undefined)
            }
            return crmAPIs ? crmAPIs.crm_apis : 0
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
                text: 'Merchant Id',
                align: 'center',
                value: 'merchantid'
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
                text: 'Merchant Descriptor',
                align: 'left',
                value: 'merchantdescriptor'
            },
            {
                text: 'Progress',
                align: 'left',
                value: 'progress'
            },
            {
                text: '',
                align: 'left',
                value: ''
            }
        ],
        icon: "pe-7s-car icon-gradient bg-mean-fruit",
        fill: {gradient: ["var(--primary)"]},
        fill1: {gradient: ["#2af598", "#009efd"]},
        fill2: {gradient: ["#fccb90", "#d57eeb"]},
        f1: {gradient: ["#3f6ad8"]},
        f2: {gradient: ["#3ac47d"]},
        f3: {gradient: ["#16aaff"]},
        f4: {gradient: ["#f7b924"]},
        f5: {gradient: ["#d92550"]},
        f6: {gradient: ["#444054"]},
    }),
    methods: {
        ...mapActions('warpliteapi', ['getCbdMerchants', 'getApiConnections']),
        handlePageChange (currentPage) {
            this.pagination.currentPage = currentPage
            this.movePage()
        },
        movePage(sortBy) {
            let before = (this.pagination.currentPage - 1)
            let after = this.pagination.currentPage
            let rp = this.pagination.rowsPerPage
            let startcount = (after == 1 ? 0 : (before * rp))
            let endcount = rp
            let data = {limit: startcount + '|' + endcount};
            if(sortBy !== undefined) {
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
            }else if(this.sortOrder[Object.keys(this.sortOrder)[0]] !== undefined){
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
            if (this.merchantDataSummary) {
                let totalRecords = this.merchantDataSummary.query_total
                totalRecords = totalRecords ? parseInt(totalRecords) : 0
                this.pagination.totalRecords = totalRecords
                let rp = this.pagination.rowsPerPage
                this.pagination.totalPages = Math.ceil(totalRecords / rp)
                this.pages = this.pagination.totalPages
            }
        }
    },
    async mounted() {
        this.getApiConnections()
        
        this.pagination.rowsPerPage = 25
        this.movePage()
    }
}
</script>

<style scoped>

</style>