<template>
    <div>
        <page-title :heading="heading"></page-title>
        <div class="row">
            <div class="col-lg-6">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="card-shadow-primary mb-3 widget-chart widget-chart2 text-left card">
                            <div class="widget-chat-wrapper-outer">
                                <div class="widget-chart-content">
                                    <h6 class="widget-subheading">New / Incoming Disputes</h6>
                                    <div class="widget-chart-flex">
                                        <div class="widget-numbers mb-0 w-100">
                                            <div class="widget-chart-flex">
                                                <div class="fsize-4">
                                                    {{ newChargebacks }}
                                                    <!--/customers_chargebacks.mtd_count-->
                                                </div>
                                                <div class="ml-auto">
                                                    <div
                                                        class="widget-title ml-auto font-size-lg font-weight-normal text-muted">
                                                <span
                                                    class="text-dark pr-1">{{ newChargebacksAmount }}</span>
                                                        <!--/customers_chargebacks.mtd_amount-->
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="card-shadow-primary mb-3 widget-chart widget-chart2 text-left card">
                            <div class="widget-chat-wrapper-outer">
                                <div class="widget-chart-content">
                                    <h6 class="widget-subheading">In Review / Responded</h6>
                                    <div class="widget-chart-flex">
                                        <div class="widget-numbers mb-0 w-100">
                                            <div class="widget-chart-flex">
                                                <div class="fsize-4">
                                                    {{ reviewChargebacks }}
                                                    <!--/customers_chargebacks.mtd_count-->
                                                </div>
                                                <div class="ml-auto">
                                                    <div
                                                        class="widget-title ml-auto font-size-lg font-weight-normal text-muted">
                                                <span
                                                    class="text-dark pr-1">{{ reviewChargebacksAmount }}</span>
                                                        <!--/customers_chargebacks.mtd_amount-->
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="card-shadow-primary mb-3 widget-chart widget-chart2 text-left card">
                            <div class="widget-chat-wrapper-outer">
                                <div class="widget-chart-content">
                                    <h6 class="widget-subheading">Wrongful Chargebacks</h6>
                                    <div class="widget-chart-flex">
                                        <div class="widget-numbers mb-0 w-100">
                                            <div class="widget-chart-flex">
                                                <div class="fsize-4">
                                                    <span class="text-dark pl-2">
                                                        {{ wrongfulChargebacks }}
                                                    </span>
                                                </div>
                                                <div class="ml-auto">
                                                    <div
                                                        class="widget-title ml-auto font-size-lg font-weight-normal text-muted">
                                                        <span class="text-dark pl-2">
                                                            {{ wrongfulChargebacksAmount }}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="card-shadow-primary mb-3 widget-chart widget-chart2 text-left card">
                            <div class="widget-chat-wrapper-outer">
                                <div class="widget-chart-content">
                                    <h6 class="widget-subheading">Missing/Other Information</h6>
                                    <div class="widget-chart-flex">
                                        <div class="widget-numbers mb-0 w-100">
                                            <div class="widget-chart-flex">
                                                <div class="fsize-4">
                                                    {{ missingInfo }}
                                                </div>
                                                <div class="ml-auto">
                                                    <div
                                                        class="widget-title ml-auto font-size-lg font-weight-normal text-muted">
                                                        <span class="text-dark pl-2">
                                                            {{ missingInfoAmount }}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <DisputeGraph></DisputeGraph>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12">
                <div class="row">
                    <div class="col-sm-12">
                        <v-card class="mb-3">
                        </v-card>
                        <CustomerDisputes
                            :customRowsPerPage="5"
                        ></CustomerDisputes>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
//import alertdetailform from "./alertdetailform";
import PageTitle from "../../Layout/Components/PageTitle2.vue";
//import DemoCard from "../../Layout/Components/DemoCard";
//import searchForm from "../../Components/cbAlertSearchForm";
import DisputeGraph from "../../Components/DisputeGraph";
import CustomerDisputes from "../Customers/CustomerDisputes";
import { abbreviateNumber } from "../../modules/utils";

export default {
    components: {
        PageTitle,
        DisputeGraph,
        CustomerDisputes
    },
    computed: {
        ...mapGetters({
            'getCustomerDisputes': 'warpliteapi/getDisputesArr',
        }),
        newChargebacks() {
            let totalRecords = null;
            if (this.getCustomerDisputes && this.getCustomerDisputes.summary && this.getCustomerDisputes.summary.report_totals) {
                totalRecords = this.getCustomerDisputes.summary.report_totals.find(ele => ele.new_chargebacks !== undefined)
            }
            return totalRecords ? totalRecords.new_chargebacks : 0
        },
        newChargebacksAmount() {
            let reportTotals = null;
            if (this.getCustomerDisputes && this.getCustomerDisputes.summary && this.getCustomerDisputes.summary.report_totals) {
                reportTotals = this.getCustomerDisputes.summary.report_totals.find(ele => ele.new_chargebacks_amount !== undefined)
            }
            let amount = reportTotals ? reportTotals.new_chargebacks_amount : 0
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
            let amount = reportTotals ? reportTotals.inreview_cbs_amount : 0
            return `$${abbreviateNumber(parseFloat(amount))}`

        },
        wrongfulChargebacks() {
            let reportTotal = null;
            if (this.getCustomerDisputes && this.getCustomerDisputes.summary && this.getCustomerDisputes.summary.report_totals) {
                reportTotal = this.getCustomerDisputes.summary.report_totals.find(ele => ele.wrongful_cbs !== undefined)
            }
            return reportTotal ? reportTotal.wrongful_cbs : 0
        },
        wrongfulChargebacksAmount() {
            let reportTotals = null;
            if (this.getCustomerDisputes && this.getCustomerDisputes.summary && this.getCustomerDisputes.summary.report_totals) {
                reportTotals = this.getCustomerDisputes.summary.report_totals.find(ele => ele.wrongful_cbs_amount !== undefined)
            }
            let amount = reportTotals ? reportTotals.wrongful_cbs_amount : 0.00
            return `$${abbreviateNumber(parseFloat(amount))}`

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
            let amount =  reportTotal ? reportTotal.missing_information_amount : 0
            return `$${abbreviateNumber(parseFloat(amount))}`

        }
    },
    data: () => ({
        heading: "My Chargebacks",
        search: '',
    }),
    methods: {
        ...mapActions('warpliteapi', ['getCbdDisputes']),
        searchAlerts(formData) {
            console.log('s alerts', formData);
            //this.getCbdDisputes(formData);
        }
    },
    async mounted() {
        console.log('page loaded');
        // await this.getCbdDisputes();
    }
}
</script>

<style scoped>

</style>
