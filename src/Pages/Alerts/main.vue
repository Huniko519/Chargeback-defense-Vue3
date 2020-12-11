<template>
    <div>
        <page-title :heading="heading"></page-title>
        <div class="row">
            <div class="col-lg-6">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="card mb-3 widget-chart widget-chart2 text-left">
                            <div class="widget-chart-content">
                                <div class="widget-chart-flex">
                                    <div class="widget-title">New Alerts</div>
                                    <div class="widget-subtitle text-success opacity-7">Amount</div>
                                </div>
                                <div class="widget-chart-flex">
                                    <div class="widget-numbers">
                                        <span>{{newAlerts}}</span>
                                    </div>
                                    <div class="widget-description ml-auto text-success">
                                        <span class="pr-1">{{newAlertsAmount}}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="card mb-3 widget-chart widget-chart2 text-left">
                            <div class="widget-chart-content">
                                <div class="widget-chart-flex">
                                    <div class="widget-title">Total Alerts</div>
                                    <div class="widget-subtitle text-success opacity-7">Amount</div>
                                </div>
                                <div class="widget-chart-flex">
                                    <div class="widget-numbers">
                                        <span>{{allAlerts}}</span>
                                    </div>
                                    <div class="widget-description ml-auto text-success">
                                        <span class="pr-1">{{allAlertsAmount}}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="card mb-3 widget-chart widget-chart2 text-left">
                            <div class="widget-chart-content">
                                <div class="widget-chart-flex">
                                    <div class="widget-title">Other Alerts</div>
                                    <div class="widget-subtitle text-success opacity-7">Amount</div>
                                </div>
                                <div class="widget-chart-flex">
                                    <div class="widget-numbers">
                                        <span>{{otherAlerts}}</span>
                                    </div>
                                    <div class="widget-description ml-auto text-success">
                                        <span class="pr-1">{{otherAlertsAmount}}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="card mb-3 widget-chart widget-chart2 bg-asteroid text-left">
                            <div class="widget-chart-content text-white">
                                <div class="widget-chart-flex">
                                    <div class="widget-title">Stopped Alerts</div>
                                    <div class="widget-subtitle text-white">Amount</div>
                                </div>
                                <div class="widget-chart-flex">
                                    <div class="widget-numbers text-white">{{stoppedAlerts}}</div>
                                    <div class="widget-description ml-auto text-light">
                                        <font-awesome-icon icon="arrow-right" />
                                        <span class="pr-1">{{stoppedAlertsAmount}}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <AlertGraph></AlertGraph>
            </div>
        </div>


        <!--
        <demo-card heading="Search">
            <searchForm @searchFunc="searchAlerts"></searchForm>
        </demo-card>
        -->
        <div class="row">
            <div class="col-sm-12">
                <div class="row">
                    <div class="col-sm-12">
                        <CustomerAlerts
                            :customRowsPerPage="5"
                        ></CustomerAlerts>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import { library } from "@fortawesome/fontawesome-svg-core";
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
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import PageTitle from "../../Layout/Components/PageTitle2.vue";
//import DemoCard from "../../Layout/Components/DemoCard";
//import searchForm from "../../Components/cbAlertSearchForm";
import AlertGraph from "../../Components/AlertGraph";
import CustomerAlerts from "../Customers/CustomerAlerts";
import { abbreviateNumber, getFirstCurMonthDate } from "../../modules/utils";

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
        PageTitle,
        AlertGraph,
        CustomerAlerts,
        "font-awesome-icon": FontAwesomeIcon
    },
    computed: {
        ...mapGetters({
            'getAlerts': 'warpliteapi/getAlertsArr'
        }),
        totalAlertAmount() {
            const firstDate = getFirstCurMonthDate()

            let totalAmount = null;
            if (this.getAlerts && this.getAlerts.summary && this.getAlerts.summary.report_totals) {
                totalAmount = this.getAlerts.summary.report_totals.find(ele => ele && ele.total_amount_month !== undefined && ele.apidate.includes(firstDate))
            }
            let amount = totalAmount ? totalAmount.total_amount_month : 0
            return `$${abbreviateNumber(parseFloat(amount))}`
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
            if (this.getAlerts && this.getAlerts.summary && this.getAlerts.summary.report_totals) {
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
        }

    },
    data: () => ({
        heading: '',
        search: ''
    }),
    methods: {
        ...mapActions('warpliteapi', ['getCbdAlerts']),
        searchAlerts(formData) {
            console.log('s alerts', formData);
            //this.getCbdDisputes(formData);
        }
    },
    async mounted() {
        await this.getCbdAlerts();
    }
}
</script>

<style scoped>

</style>
