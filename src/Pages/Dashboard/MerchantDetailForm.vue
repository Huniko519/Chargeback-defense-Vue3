<template>
    <v-layout row justify-center>
        <v-btn small color="primary" @click.stop="onClickView">
            View
        </v-btn>
        <v-dialog v-model="dialog" persistent max-width="800px" max-height="500px">
            <!--<template v-slot:activator="{ on }">
                <v-btn small color="primary" v-on="on">View</v-btn>
            </template>-->
            <v-card>
                <v-alert
                    v-model="alertStatus"
                    dismissible
                    :type="alertType===0 ? 'success' : 'error'"
                    transition="scale-transition"
                >
                    {{ alertStatusText }}
                </v-alert>
                <div class="header-row">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="main-card mb-0 no-shadow card">
                                <div class="card-body">
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">
                                            <div class="widget-content p-0">
                                                <div class="widget-content-wrapper">
                                                    <div class="widget-content-left">
                                                        <div class="sub-title">{{formdata.merchantid}}</div>
                                                        <div class="title">{{formdata.merchantdba}}</div>
                                                        <div class="widget-title">{{formdata.merchanturl}}</div>
                                                        <div class="sub-title-bold">{{formdata.merchantnumber}}</div>
                                                    </div>
                                                    <div class="widget-content-right">
                                                        <div class="badge badge-dark">{{formdata.merchantdescriptor}}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <!--
                                        <li class="list-group-item">{{formdata.apidate}}</li>
                                        <li class="list-group-item">{{formdata.apidate}}</li>
                                        <li class="list-group-item">{{formdata.apiID}}</li>
                                        <li class="list-group-item">{{formdata.apiID}}</li>
                                        -->
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--
                <v-card-text class="texttop">
                    <v-container grid-list-md>
                        <v-layout wrap>
                            <b-table thead-class="hidden_header" :items="fdata"></b-table>
                        </v-layout>
                    </v-container>
                </v-card-text>
                -->
                <v-card-text class="textbottom texttop">
                    <v-layout wrap>
                        <MerchantDetailTabs :merchantData="merchantData" @send-alert="onAlert"></MerchantDetailTabs>
                    </v-layout>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" flat @click="dialog = false; alertStatus = false">Close</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-layout>
</template>

<script>
    import { mapActions, mapGetters } from "vuex";
    import MerchantDetailTabs from "../../Components/MerchantDetailTabs";

    export default {
        components: {
            MerchantDetailTabs
        },
        props: ["buttonname","formdata","descriptors"],
        data: () => ({
            dialog: false,
            items: [],
            alertStatus: false,
            alertStatusText: '',
            alertType: 0, // 0: success, 1: error
        }),
        computed: {
            ...mapGetters({
                'merchantProgress': 'warpliteapi/getMerchantsProgress'
            }),
            merchantData() {
                const lData = {
                    merchantid: this.formdata.merchantid,
                    merchantdba: this.formdata.merchantdba,
                    merchantnumber: this.formdata.merchantnumber,
                    merchanturl: this.formdata.merchanturl,
                    merchantdescriptor: this.formdata.merchantdescriptor,
                    merchantphone: this.formdata.merchantphone,
                    merchantprogress: this.merchantProgress[this.formdata.merchantid]
                }

                return lData
            },
        },
        methods: {
            ...mapActions('warpliteapi', ['getCbdPortals', 'getCbdMerchantApis']),
            onClickView() {
                this.getCbdPortals({ merchantid: this.formdata.merchantid, portalonoff: '1' })
                this.getCbdMerchantApis({ merchantid: this.formdata.merchantid, apionoff: '1' })
                this.dialog = true
            },
            onAlert(event) {
                this.alertStatus = event.alertStatus
                this.alertStatusText = event.alertStatusText
                this.alertType = event.alertType
            }
        }
    };
</script>

<style>
    .hidden_header {
        display: none;
    }

    .texttop { padding-bottom: 0; }
    .textbottom { padding-top: 0; }
</style>
