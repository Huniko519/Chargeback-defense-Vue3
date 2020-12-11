<template>
    <v-tabs class="tabwidth" background-color dark centered icons-and-text>
        <v-tabs-slider ></v-tabs-slider>

        <v-tab href="#merchantdetail">
            Mid Info
        </v-tab>

        <v-tab href="#portals">
            Portals
        </v-tab>

        <v-tab href="#apis">
            Apis
        </v-tab>

        <v-tab-item :value="'merchantdetail'">
            <v-card flat min-height="540px">
                <v-card-text>
                    <!--
                    <b-table thead-class="hidden_header" :items="merchantData" :fields="fields">
                        <template v-slot:cell(value)="data">
                            <b-form-input v-model="data.value"></b-form-input>
                        </template>
                    </b-table>
                    -->
                    <v-container fluid class="textbottom texttop">
                        <v-layout row>
                            <v-flex xs4>
                                <v-subheader>ID</v-subheader>
                            </v-flex>
                            <v-flex xs8>
                                <v-text-field
                                    v-model="merchantUserData.merchantid"
                                    disabled
                                ></v-text-field>
                            </v-flex>
                        </v-layout>
                        <v-layout row>
                            <v-flex xs4>
                                <v-subheader>DBA</v-subheader>
                            </v-flex>
                            <v-flex xs8>
                                <v-text-field
                                    v-model="merchantUserData.merchantdba"
                                ></v-text-field>
                            </v-flex>
                        </v-layout>
                        <v-layout row>
                            <v-flex xs4>
                                <v-subheader>Merchant Number</v-subheader>
                            </v-flex>
                            <v-flex xs8>
                                <v-text-field
                                    v-model="merchantUserData.merchantnumber"
                                    disabled
                                ></v-text-field>
                            </v-flex>
                        </v-layout>
                        <v-layout row>
                            <v-flex xs4>
                                <v-subheader>Merchant Url</v-subheader>
                            </v-flex>
                            <v-flex xs8>
                                <v-text-field
                                    v-model="merchantUserData.merchanturl"
                                ></v-text-field>
                            </v-flex>
                        </v-layout>
                        <v-layout row>
                            <v-flex xs4>
                                <v-subheader>Descriptor</v-subheader>
                            </v-flex>
                            <v-flex xs8>
                                <v-text-field
                                    v-model="merchantUserData.merchantdescriptor"
                                ></v-text-field>
                            </v-flex>
                        </v-layout>
                        <v-layout row>
                            <v-flex xs4>
                                <v-subheader>Phone</v-subheader>
                            </v-flex>
                            <v-flex xs8>
                                <v-text-field
                                    v-model="merchantUserData.merchantphone"
                                ></v-text-field>
                            </v-flex>
                        </v-layout>
                        <v-layout row>
                            <v-flex xs4>
                                <v-subheader>Merchant Properties</v-subheader>
                            </v-flex>
                            <v-flex xs8>
                                <div class="mb-sm-1 mb-md-0 card">
                                    <div class="widget-content no-shadow card">
                                        <div class="widget-content-outer">
                                            <div class="widget-progress-wrapper mt-1">
                                                <div class="progress-bar-sm progress mt-2 mb-2">
                                                    <div class="progress-bar bg-success" role="progressbar" :aria-valuenow="merchantUserData.merchantprogress"
                                                        aria-valuemin="0" aria-valuemax="100" v-bind:style="'width: ' + merchantUserData.merchantprogress + '%'">
                                                    </div>
                                                </div>
                                                <div class="progress-sub-label">
                                                    <span>{{Math.round(merchantUserData.merchantprogress) + '%'}}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-card-text>
            </v-card>
        </v-tab-item>
        <v-tab-item :value="'portals'">
            <v-card flat min-height="540px">
                <PortalsDataTable :portals="portals" @send-alert="onAlert"></PortalsDataTable>
            </v-card>
        </v-tab-item>
        <v-tab-item :value="'apis'">
            <v-card flat min-height="540px">
                <ApisDataTable :apis="merchantApis" @send-alert="onAlert"></ApisDataTable>
            </v-card>
        </v-tab-item>
    </v-tabs>
</template>

<script>
    import { mapGetters } from 'vuex'
    import PortalsDataTable from './PortalsDataTable'
    import ApisDataTable from './ApisDataTable'

    export default {
        components: {
            PortalsDataTable,
            ApisDataTable
        },
        props: ["merchantData"],
        data: () => ({
            merchantUserData: {
                merchantid: '',
                merchantdba: '',
                merchantnumber: '',
                merchanturl: '',
                merchantdescriptor: '',
                merchantphone: '',
                merchantprogress: ''
            }
        }),
        watch: {
            'merchantData': {
                handler: function () {
                    const {
                        merchantid,
                        merchantdba,
                        merchantnumber,
                        merchanturl,
                        merchantdescriptor,
                        merchantphone,
                        merchantprogress
                    } = this.merchantData

                    this.merchantUserData = {
                        merchantid,
                        merchantdba,
                        merchantnumber,
                        merchanturl,
                        merchantdescriptor,
                        merchantphone,
                        merchantprogress
                    }
                },
                deep: true
            }
        },
        computed: {
            ...mapGetters({
                'getPortals': 'warpliteapi/getPortals',
                'getMerchantApis': 'warpliteapi/getMerchantApis'
            }),
            portals() {
                let portals = []
                if (this.getPortals && this.getPortals.data) {
                    portals = [ ...this.getPortals.data ]
                }

                return portals
            },
            merchantApis() {
                let merchantApis = []
                if (this.getMerchantApis && this.getMerchantApis.data) {
                    merchantApis = [ ...this.getMerchantApis.data ]
                }

                return merchantApis
            }
        },
        methods: {
            onAlert(event) {
                this.$emit('send-alert', event);
            }
        },
        mounted() {
            const {
                merchantid,
                merchantdba,
                merchantnumber,
                merchanturl,
                merchantdescriptor,
                merchantphone,
                merchantprogress
            } = this.merchantData

            this.merchantUserData = {
                merchantid,
                merchantdba,
                merchantnumber,
                merchanturl,
                merchantdescriptor,
                merchantphone,
                merchantprogress
            }
        }
    };
</script>

<style>
    .hidden_header {
        display: none;
    }

    .tabwidth {
        width: 100%;


    }

    .tabInfo {
        height: 200px;
        border:1px solid #cccccc;
    }
    .tab-slider {
        margin-bottom: 20px;
    }
</style>
