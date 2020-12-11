<template>
    <div>
        <div class="row">
            <div class="col-md-6 col-lg-3">
                <div class="card mb-3 widget-chart widget-chart2 bg-primary text-left">
                    <div class="widget-chart-content text-white">
                        <div class="widget-chart-flex">
                            <div class="widget-title">New Chargebacks</div>
                            <div class="widget-subtitle text-white">Amount</div>
                        </div>
                        <div class="widget-chart-flex">
                            <div class="widget-numbers text-white">{{newChargebacks}}</div>
                            <div class="widget-description ml-auto text-light">
                                <font-awesome-icon icon="arrow-right" />
                                <span class="pr-1">{{newChargebacksAmount}}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-3">
                <div class="card mb-3 widget-chart widget-chart2 bg-primary text-left">
                    <div class="widget-chart-content text-white">
                        <div class="widget-chart-flex">
                            <div class="widget-title">New Alerts</div>
                            <div class="widget-subtitle text-white">Amount</div>
                        </div>
                        <div class="widget-chart-flex">
                            <div class="widget-numbers text-white">{{newAlerts}}</div>
                            <div class="widget-description ml-auto text-light">
                                <font-awesome-icon icon="arrow-right" />
                                <span class="pr-1">{{newAlertsAmount}}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-3">
                <div class="card mb-3 widget-chart widget-chart2 bg-primary text-left">
                    <div class="widget-chart-content text-white">
                        <div class="widget-chart-flex">
                            <div class="widget-title">Total Merchants</div>
                            <div class="widget-subtitle text-white">Inactive</div>
                        </div>
                        <div class="widget-chart-flex">
                            <div class="widget-numbers text-white">{{merchantAll}}</div>
                            <div class="widget-description ml-auto text-light">
                                <font-awesome-icon icon="arrow-right" />
                                <span class="pr-1">{{inactiveMerchants}}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-3">
                <div class="card mb-3 widget-chart widget-chart2 bg-asteroid text-left">
                    <div class="widget-chart-content text-white">
                        <div class="widget-chart-flex">
                            <div class="widget-title">YTD Recovered on <span class="warning--text">{{activeMerchants}}</span> Mids</div>
                            <div class="widget-subtitle text-warning"></div>
                        </div>
                        <div class="widget-chart-flex">
                            <div class="widget-numbers text-warning">{{ytdRecovered}}</div>
                            <div class="widget-description ml-auto text-light"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row mb-1 ">
            <div class="col-md-12 col-lg-6 col-xl-7">
                <div class="mb-sm-3 card">
                    <div class="card-header-tab card-header">
                        <div class="card-header-title">
                            <i class="header-icon pe-7s-display2"></i>
                            daily activity<!--columnname-->
                        </div>
                        <div class="btn-actions-pane-right">
                            <b-button disabled class="btn-wide btn btn-link btn-sm">Filter</b-button>
                        </div>
                    </div>
                    <div class="widget-chart mb-4">
                        <MixedExample></MixedExample>
                        <div class="widget-chart-content">
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-12 col-lg-6 col-xl-5 mb-1">
                <div class="main-card mb-2 card">
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="justify-content-between list-group-item">
                                Total Alerts
                                <span class="badge badge-warning">{{allAlerts}}</span>
                            </li>
                            <li class="justify-content-between list-group-item">
                                Refunded Alerts
                                <span class="badge badge-warning">{{stoppedAlerts}}</span>
                            </li>
                            <li class="justify-content-between list-group-item">
                                Previously Refunded Alerts
                                <span class="badge badge-warning">{{previouslyRefunded}}</span>
                            </li>
                            <li class="justify-content-between list-group-item">
                                Other / Not Found Alerts
                                <span class="badge badge-warning">{{otherAlerts}}</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="main-card mb-0 card">
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="justify-content-between list-group-item">
                                Total chargebacks
                                <span class="badge badge-warning">{{totalChargebacksMTD}}</span>
                            </li>
                            <li class="justify-content-between list-group-item">
                                Full Response
                                <span class="badge badge-warning">{{reviewChargebacks}}</span>
                            </li>
                            <li class="justify-content-between list-group-item">
                                Issuer Invalid
                                <span class="badge badge-warning">{{wrongfulChargebacks}}</span>
                            </li>
                            <li class="justify-content-between list-group-item">
                                Missing Information
                                <span class="badge badge-warning">{{missingInfo}}</span>
                            </li>
                            <li class="justify-content-between list-group-item " >
                                Not Representable
                                <span class="badge badge-warning">{{notRepresentable}}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <!-- <div class="card-body col-sm-12 col-md-6">
                <div class="row"> -->
                    <div class="col-sm-12 col-md-6">
                        <div class="card-border mb-sm-1 mb-md-0 border-light no-shadow card">
                            <div class="widget-content">
                                <div class="widget-content-outer">
                                    <div class="widget-content-wrapper">
                                        <div class="widget-content-left">
                                            <div class="widget-heading">Disputes Responded</div>
                                        </div>
                                        <div class="widget-content-right">
                                            <div class="widget-numbers line-height-1 text-primary">
                                                <span>{{fullfilledChargebacks}}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="widget-progress-wrapper mt-1">
                                        <div class="progress-bar-xs progress mt-2 mb-2">
                                            <div class="progress-bar bg-success" role="progressbar" aria-valuenow="76"
                                                 aria-valuemin="0" aria-valuemax="100" style="width: 76%;">
                                            </div>
                                        </div>
                                        <div class="progress-sub-label">
                                            <div class="sub-label-left">Monthly Target</div>
                                            <div class="sub-label-right">100%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-6">
                        <div class="card-border border-light no-shadow card">
                            <div class="widget-content">
                                <div class="widget-content-outer">
                                    <div class="widget-content-wrapper">
                                        <div class="widget-content-left">
                                            <div class="widget-heading">Alerts Resolved</div>
                                        </div>
                                        <div class="widget-content-right">
                                            <div class="widget-numbers line-height-1 text-success">
                                                <span>{{stoppedAlertsAmount}}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="widget-progress-wrapper mt-1">
                                        <div class="progress-bar-xs progress-bar-animated progress mt-2 mb-2">
                                            <div class="progress-bar bg-danger" role="progressbar" aria-valuenow="23"
                                                 aria-valuemin="0" aria-valuemax="100" style="width: 23%;">
                                            </div>
                                        </div>
                                        <div class="progress-sub-label">
                                            <div class="sub-label-left">Monthly Target</div>
                                            <div class="sub-label-right">100%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                <!-- </div>
            </div> -->
        </div>
        <div class="row mt-3">
            <div class="col-md-12 col-lg-12 col-xl-12">
                <MerchantDash
                    :customRowsPerPage="5"
                    :merchKey="mkey"
                ></MerchantDash>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6 col-lg-6 col-xl-6">
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import {library} from "@fortawesome/fontawesome-svg-core";
//import Sparkline from "vue-sparklines";
import MerchantDash from "../../Pages/Customers/customerMerchants";
//import VueCircle from "vue2-circle-progress";
import { abbreviateNumber } from "../../modules/utils"

import MixedExample from "../../Components/DashboardGraph";
import {
    faBatteryThreeQuarters,
    faAngleDown,
    faAngleUp,
    faAngleRight,
    faHome,
    faQuestionCircle,
    faBusinessTime,
    faArrowLeft,
    faArrowRight
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
//import VueCircle from "vue2-circle-progress";
//import chart4 from "../../Pages/Customers/DashboardBar/Chart1.vue";

library.add(
    faBatteryThreeQuarters,
    faAngleDown,
    faAngleUp,
    faAngleRight,
    faHome,
    faQuestionCircle,
    faBusinessTime,
    faArrowLeft,
    faArrowRight
);

export default {
    components: {
        "font-awesome-icon": FontAwesomeIcon,
        MixedExample,
        MerchantDash
       //VueCircle
    },
    data: () => ({
        progressCircles: [],
        mkey: 0,
        pmkey: 0,
        fill: {gradient: ["var(--primary)"]},
        fill1: {gradient: ["#2af598", "#009efd"]},
        fill2: {gradient: ["#fccb90", "#d57eeb"]},
        f1: {gradient: ["#3f6ad8"]},
        f2: {gradient: ["#3ac47d"]},
        f3: {gradient: ["#16aaff"]},
        f4: {gradient: ["#f7b924"]},
        f5: {gradient: ["#d92550"]},
        f6: {gradient: ["#444054"]},
        spIndicatorStyles1: false,
        totalRows: 0,
        perPage: 0,
        currentPage: 0,
        spData2: (() => {
            const len = 10;
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
        ...mapActions('warpliteapi', ['getCbCustomerCharts', 'getCbCustomerAlerts', 'getCbMerchantChargebacks', 'getCbdDisputes', 'getCbdAlerts', 'getCbdMerchants']),
        addProgressCounts() {
            this.progressCircles.push({
                color: "#3f6ad8",
                count: parseFloat(this.getCustomerChargebacks.daily_count),
                name: 'Daily Count'
            })
            this.progressCircles.push({
                color: "#eeeeee",
                count: parseFloat(this.getCustomerChargebacks.daily_amount),
                name: 'Daily Amount'
            })
            this.progressCircles.push({
                color: "red",
                count: parseFloat(this.getCustomerChargebacks.mtd_count),
                name: 'MTD Count'
            })
            this.progressCircles.push({
                color: "#3f6ad8",
                count: parseFloat(this.getCustomerChargebacks.mtd_amount),
                name: 'MTD Amount'
            })
        }

    },
    computed: {
        ...mapGetters({
            'getCustomerChargebacks': 'warpliteapi/getCustomerChargebacks',
            'getCustomerReports': 'warpliteapi/getCustomerReports',
            'getCustomerAlerts': 'warpliteapi/getCustomerAlerts',
            'getCustomerDisputes': 'warpliteapi/getDisputesArr',
            'getAlerts': 'warpliteapi/getAlertsArr',
            'getMerchantsDataSummary': 'warpliteapi/getMerchantsDataSummary'
        }),
        totalChargebacksMTD() {
            let count = null;
            if (this.getCustomerDisputes && this.getCustomerDisputes.summary && this.getCustomerDisputes.summary.report_totals) {
                count = this.getCustomerDisputes.summary.report_totals.find(ele => ele.total_chargebacks_mtd !== undefined)
            }
            return count ? count.total_chargebacks_mtd : 0
        },
        fullfilledChargebacks() {
            let count = null;
            if (this.getCustomerDisputes && this.getCustomerDisputes.summary && this.getCustomerDisputes.summary.report_totals) {
                count = this.getCustomerDisputes.summary.report_totals.find(ele => ele.disputed_chargebacks !== undefined)
            }
            return count ? count.disputed_chargebacks : 0
        },
        fullfilledPercentage() {
            let count = null;
            if (this.getCustomerDisputes && this.getCustomerDisputes.summary && this.getCustomerDisputes.summary.report_totals) {
                count = this.getCustomerDisputes.summary.report_totals.find(ele => ele.fulfilled_percentage !== undefined)
            }
            return count ? count.fulfilled_percentage : 0
        },
        disputesResponded() {
            let count = null;
            if (this.getCustomerDisputes && this.getCustomerDisputes.summary && this.getCustomerDisputes.summary.report_totals) {
                count = this.getCustomerDisputes.summary.report_totals.find(ele => ele.disputed_chargebacks !== undefined)
            }
            return count ? count.disputed_chargebacks : 0
        },
        totalAmountMonth() {
            let totalAmount = null;
            if (this.getCustomerDisputes && this.getCustomerDisputes.summary && this.getCustomerDisputes.summary.report_totals) {
                totalAmount = this.getCustomerDisputes.summary.report_totals.find(ele => ele.total_amount_month !== undefined)
            }
            let amount = totalAmount ? totalAmount.total_amount_month : 0
            return `$${abbreviateNumber(parseFloat(amount))}`
        },
        fulfilledCbAmount() {
            let totalAmount = null;
            if (this.getCustomerDisputes && this.getCustomerDisputes.summary && this.getCustomerDisputes.summary.report_totals) {
                totalAmount = this.getCustomerDisputes.summary.report_totals.find(ele => ele.fulfilled_cb_amount !== undefined)
            }
            let amount = totalAmount ? totalAmount.fulfilled_cb_amount : 0
            return `$${abbreviateNumber(parseFloat(amount))}`
        },
        newChargebacks() {
            let reportTotals = null;
            if (this.getCustomerDisputes && this.getCustomerDisputes.summary && this.getCustomerDisputes.summary.report_totals) {
                reportTotals = this.getCustomerDisputes.summary.report_totals.find(ele => ele.new_chargebacks !== undefined)
            }
            return reportTotals ? reportTotals.new_chargebacks : 0
        },
        newChargebacksAmount() {
            let reportTotals = null;
            if (this.getCustomerDisputes && this.getCustomerDisputes.summary && this.getCustomerDisputes.summary.report_totals) {
                reportTotals = this.getCustomerDisputes.summary.report_totals.find(ele => ele && ele.new_chargebacks_amount !== undefined)
            }
            let amount = reportTotals ? reportTotals.new_chargebacks_amount : 0
            return `$${abbreviateNumber(parseFloat(amount))}`
        },
        ytdRecovered() {
            let reportTotals = null;
            if (this.getCustomerDisputes && this.getCustomerDisputes.summary && this.getCustomerDisputes.summary.report_totals) {
                reportTotals = this.getCustomerDisputes.summary.report_totals.find(ele => ele && ele.ytd_recovered !== undefined)
            }
            let amount = reportTotals ? reportTotals.ytd_recovered : 0
            return `$${abbreviateNumber(parseFloat(amount))}`
        },
        reviewChargebacks() {
            let reportTotals = null;
            if (this.getCustomerDisputes && this.getCustomerDisputes.summary && this.getCustomerDisputes.summary.report_totals) {
                reportTotals = this.getCustomerDisputes.summary.report_totals.find(ele => ele.inreview_cbs !== undefined)
            }
            return reportTotals ? reportTotals.inreview_cbs : 0
        },
        reviewChargebacksAmount() {
            let reportTotals = null;
            if (this.getCustomerDisputes && this.getCustomerDisputes.summary && this.getCustomerDisputes.summary.report_totals) {
                reportTotals = this.getCustomerDisputes.summary.report_totals.find(ele => ele.inreview_cbs_amount !== undefined)
            }
            return reportTotals ? reportTotals.inreview_cbs_amount : 0
        },
        wrongfulChargebacks() {
            let reportTotal = null;
            if (this.getCustomerDisputes && this.getCustomerDisputes.summary && this.getCustomerDisputes.summary.report_totals) {
                reportTotal = this.getCustomerDisputes.summary.report_totals.find(ele => ele.wrongful_cbs !== undefined)
            }
            return reportTotal ? reportTotal.wrongful_cbs : 0
        },
        wrongfulChargebacksAmount() {
            let reportTotal = null;
            if (this.getCustomerDisputes && this.getCustomerDisputes.summary && this.getCustomerDisputes.summary.report_totals) {
                reportTotal = this.getCustomerDisputes.summary.report_totals.find(ele => ele.wrongful_cbs_amount !== undefined)
            }
            return reportTotal ? reportTotal.wrongful_cbs_amount : 0
        },
        missingInfo() {
            let reportTotal = null;
            if (this.getCustomerDisputes && this.getCustomerDisputes.summary && this.getCustomerDisputes.summary.report_totals) {
                reportTotal = this.getCustomerDisputes.summary.report_totals.find(ele => ele.missing_information !== undefined)
            }
            return reportTotal ? reportTotal.missing_information : 0
        },
        missingInfoAmount() {
            let reportTotal = null;
            if (this.getCustomerDisputes && this.getCustomerDisputes.summary && this.getCustomerDisputes.summary.report_totals) {
                reportTotal = this.getCustomerDisputes.summary.report_totals.find(ele => ele.missing_information_amount !== undefined)
            }
            return reportTotal ? reportTotal.missing_information_amount : 0
        },
        notRepresentable() {
            let reportTotal = null;
            if (this.getCustomerDisputes && this.getCustomerDisputes.summary && this.getCustomerDisputes.summary.report_totals) {
                reportTotal = this.getCustomerDisputes.summary.report_totals.find(ele => ele.not_representable !== undefined)
            }
            return reportTotal ? reportTotal.not_representable : 0
        },
        stoppedAlerts() {
            let stoppedAlertCount = null;
            if (this.getAlerts && this.getAlerts.summary && this.getAlerts.summary.report_totals) {
                stoppedAlertCount = this.getAlerts.summary.report_totals.find(ele => ele && ele.stopped_alerts !== undefined)
            }
            return stoppedAlertCount ? stoppedAlertCount.stopped_alerts : 0
        },
        allAlerts() {
            let allAlertCount = null;
            if (this.getAlerts && this.getAlerts.summary && this.getAlerts.summary.report_totals) {
                allAlertCount = this.getAlerts.summary.report_totals.find(ele => ele && ele.all_alerts !== undefined)
            }
            return allAlertCount ? allAlertCount.all_alerts : 0
        },
        stoppedAlertsAmount() {
            let totalAmountMonth = null;
            if (this.getAlerts && this.getAlerts.summary && this.getAlerts.summary.report_totals) {
                totalAmountMonth = this.getAlerts.summary.report_totals.find(ele => ele && ele.stopped_alerts_amount !== undefined)
            }
            let count = totalAmountMonth ? totalAmountMonth.stopped_alerts_amount : 0
            return `${abbreviateNumber(parseFloat(count))}`
        },
        allAlertsAmount() {
            let totalAmountMonth = null;
            if (this.getAlerts && this.getAlerts.summary && this.getAlerts.summary.total_amount_month) {
                totalAmountMonth = this.getAlerts.summary.report_totals.find(ele => ele && ele.total_amount_month !== undefined)
            }
            let count = totalAmountMonth ? totalAmountMonth.total_amount_month : 0
            return `${abbreviateNumber(parseFloat(count))}`
        },
        newAlertsAmount() {
            let newAlertsAmount = null;
            if (this.getAlerts && this.getAlerts.summary && this.getAlerts.summary.report_totals) {
                newAlertsAmount = this.getAlerts.summary.report_totals.find(ele => ele && ele.new_alerts_amount !== undefined)
            }
            let amount = newAlertsAmount ? newAlertsAmount.new_alerts_amount : 0
            return `$${abbreviateNumber(parseFloat(amount))}`
        },
        newAlerts() {
            let newAlerts = null;
            if (this.getAlerts && this.getAlerts.summary && this.getAlerts.summary.report_totals) {
                newAlerts = this.getAlerts.summary.report_totals.find(ele => ele && ele.new_alerts !== undefined)
            }
            return newAlerts ? newAlerts.new_alerts : 0
        },
        otherAlerts() {
            let otherAlerts = null;
            if (this.getAlerts && this.getAlerts.summary && this.getAlerts.summary.report_totals) {
                otherAlerts = this.getAlerts.summary.report_totals.find(ele => ele && ele.other_alerts !== undefined)
            }
            return otherAlerts ? otherAlerts.other_alerts : 0
        },
        previouslyRefunded() {
            let previouslyRefunded = null;
            if (this.getAlerts && this.getAlerts.summary && this.getAlerts.summary.report_totals) {
                previouslyRefunded = this.getAlerts.summary.report_totals.find(ele => ele && ele.previously_refunded_alerts !== undefined)
            }
            return previouslyRefunded ? previouslyRefunded.previously_refunded_alerts : 0
        },
        otherAlertsAmount() {
            let otherAlertsAmount = null;
            if (this.getAlerts && this.getAlerts.summary && this.getAlerts.summary.report_totals) {
                otherAlertsAmount = this.getAlerts.summary.report_totals.find(ele => ele && ele.other_alerts_amount !== undefined)
            }
            let amount = otherAlertsAmount ? otherAlertsAmount.other_alerts_amount : 0
            return `$${abbreviateNumber(parseFloat(amount))}`
        },
        totalAlertAmount() {
            let totalAmount = null;
            if (this.getAlerts && this.getAlerts.summary && this.getAlerts.summary.report_totals) {
                totalAmount = this.getAlerts.summary.report_totals.find(ele => ele && ele.total_amount_month !== undefined)
            }
            let amount = totalAmount ? totalAmount.total_amount_month : 0
            return `$${abbreviateNumber(parseFloat(amount))}`
        },
        alertMaxId() {
            let maxId = null;
            if (this.getAlerts && this.getAlerts.summary) {
                maxId = this.getAlerts.summary.maxId
            }
            return maxId ? maxId : 0
        },
        alertMinId() {
            let minId = null;
            if (this.getAlerts && this.getAlerts.summary) {
                minId = this.getAlerts.summary.minId
            }
            return minId ? minId : 0
        },
        merchantAll() {
            let merchantAll = null;
            if (this.getMerchantsDataSummary && this.getMerchantsDataSummary.report_totals) {
                merchantAll = this.getMerchantsDataSummary.report_totals.find(ele => ele.merchant_all !== undefined)
            }
            return merchantAll ? merchantAll.merchant_all : 0
        },
        activeMerchants() {
            let activeMerchants = null;
            if (this.getMerchantsDataSummary && this.getMerchantsDataSummary.report_totals) {
                activeMerchants = this.getMerchantsDataSummary.report_totals.find(ele => ele.active_merchants !== undefined)
            }
            return activeMerchants ? activeMerchants.active_merchants : 0
        },
        inactiveMerchants() {
            let inactiveMerchants = null;
            if (this.getMerchantsDataSummary && this.getMerchantsDataSummary.report_totals) {
                inactiveMerchants = this.getMerchantsDataSummary.report_totals.find(ele => ele.inactive_merchants !== undefined)
            }
            return inactiveMerchants ? inactiveMerchants.inactive_merchants : 0
        },
        gatewaysAll() {
            let gatewaysAll = null;
            if (this.getMerchantsDataSummary && this.getMerchantsDataSummary.report_totals) {
                gatewaysAll = this.getMerchantsDataSummary.report_totals.find(ele => ele.gateways_all !== undefined)
            }
            return gatewaysAll ? gatewaysAll.gateways_all : 0
        },
        gatewaysInactive() {
            let gatewaysInactive = null;
            if (this.getMerchantsDataSummary && this.getMerchantsDataSummary.report_totals) {
                gatewaysInactive = this.getMerchantsDataSummary.report_totals.find(ele => ele.gateways_inactive !== undefined)
            }
            return gatewaysInactive ? gatewaysInactive.gateways_inactive : 0
        },
        crmsAll() {
            let crmsAll = null;
            if (this.getMerchantsDataSummary && this.getMerchantsDataSummary.report_totals) {
                crmsAll = this.getMerchantsDataSummary.report_totals.find(ele => ele.crms_all !== undefined)
            }
            return crmsAll ? crmsAll.crms_all : 0
        },
        crmsInactive() {
            let crmsInactive = null;
            if (this.getMerchantsDataSummary && this.getMerchantsDataSummary.report_totals) {
                crmsInactive = this.getMerchantsDataSummary.report_totals.find(ele => ele.crms_inactive !== undefined)
            }
            return crmsInactive ? crmsInactive.crms_inactive : 0
        },
        processorsAll() {
            let processorsAll = null;
            if (this.getMerchantsDataSummary && this.getMerchantsDataSummary.report_totals) {
                processorsAll = this.getMerchantsDataSummary.report_totals.find(ele => ele.processors_all !== undefined)
            }
            return processorsAll ? processorsAll.processors_all : 0
        },
        processorsInactive() {
            let processorsInactive = null;
            if (this.getMerchantsDataSummary && this.getMerchantsDataSummary.report_totals) {
                processorsInactive = this.getMerchantsDataSummary.report_totals.find(ele => ele.processors_inactive !== undefined)
            }
            return processorsInactive ? processorsInactive.processors_inactive : 0
        },
        gatewayAPIs() {
            let gatewayAPIs = null;
            if (this.getMerchantsDataSummary && this.getMerchantsDataSummary.report_totals) {
                gatewayAPIs = this.getMerchantsDataSummary.report_totals.find(ele => ele.gateway_apis !== undefined)
            }
            return gatewayAPIs ? gatewayAPIs.gateway_apis : 0
        },
        crmAPIs() {
            let crmAPIs = null;
            if (this.getMerchantsDataSummary && this.getMerchantsDataSummary.report_totals) {
                crmAPIs = this.getMerchantsDataSummary.report_totals.find(ele => ele.crm_apis !== undefined)
            }
            return crmAPIs ? crmAPIs.crm_apis : 0
        },
        missingInfoCalc() {
            //customers_chargebacks.missing_information   sum(+) .need_information   sum(+) .not_representable
            return (parseFloat(this.getCustomerChargebacks.missing_information) +
                parseFloat(this.getCustomerChargebacks.need_information) +
                parseFloat(this.getCustomerChargebacks.not_representable)
            )
        },
        preventedChargbackCalc() {
            //<!--customers_chargebacks.mtd_count  sum(+) customers_alerts.alertcount_mtd  dividedby(/) customers_alerts.alertcount_mtd-->
            let pback = (parseFloat(this.getCustomerChargebacks.mtd_count) +
                parseFloat(this.getCustomerAlerts.alertcount_mtd) /
                parseFloat(this.getCustomerAlerts.alertcount_mtd)
            )
            return isNaN(pback) ? 0 : pback
        },
        respondedChargebacks() {
            //<!--customers_chargebacks.mtd_count  dividedby(/) .new_cbs + .missing_information sum(+) .need_information sum(+) .not_representable-->
            let sback = (parseFloat(this.getCustomerChargebacks.mtd_count) /
                parseFloat(this.getCustomerChargebacks.new_cbs) +
                parseFloat(this.getCustomerChargebacks.missing_information) +
                parseFloat(this.getCustomerChargebacks.need_information) +
                parseFloat(this.getCustomerChargebacks.not_representable)
            )
            return isNaN(sback) ? 0 : sback
        }
    },
    async mounted() {
        this.mkey++
        //this.getCbMerchantChargebacks()
        //await this.getCbCustomerCharts()

        this.getCbdDisputes()
        this.getCbdAlerts()
        this.pmkey++
    }
}
</script>

<style scoped>

</style>