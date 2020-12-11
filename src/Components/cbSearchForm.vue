<template>
    <v-form v-model="valid">
        <v-container grid-list-md>
            <v-layout row wrap>
                <v-flex xs12 md4>
                    <v-text-field v-model="searchForm.globalsearch" label="Global Search"></v-text-field>
                </v-flex>

                <v-flex xs12 md4>
                    <datepicker4 @getDate="onDateChange" :name="'disputeStartDate'"
                                 :label="'Dispute Start Date'"></datepicker4>
                </v-flex>

                <v-flex xs12 md4>
                    <datepicker4 @getDate="onDateChange" :name="'disputeEndDate'"
                                 :label="'Dispute End Date'"></datepicker4>
                </v-flex>
            </v-layout>
            <v-layout row wrap>
                <v-flex xs12 md4>
                    <v-select v-model="searchForm.onoff" :items="onoffSelect" item-text="text" item-value="value" label="On/Off"></v-select>
                </v-flex>
                <v-flex xs12 md4>
                    <v-select v-model="searchForm.recordtype" :items="recordType" item-text="text" item-value="value" label="Record Type"></v-select>
                </v-flex>
                <v-flex xs12 md4>
                    <v-select v-model="searchForm.merchants" :items="merchants" item-text="text" item-value="value" label="Merchants"></v-select>
                </v-flex>
            </v-layout>
            <v-layout row wrap>
                <v-flex xs12 md4>
                    <v-select v-model="searchForm.statusid5" :items="chargestatus" item-text="text" item-value="value" label="Chargeback Status"></v-select>
                </v-flex>
                <v-flex xs12 md4>
                    <v-select v-model="searchForm.specificSearch" :items="specificSearch" item-text="text" item-value="value" label="Specific Search"></v-select>
                </v-flex>
            </v-layout>
            <v-layout row wrap>
                <v-flex lg12>
                    <v-btn color="info" @click="search">Search</v-btn>
                </v-flex>
            </v-layout>
        </v-container>
    </v-form>
</template>

<script>
    import datepicker4 from "../Components/date-pickers/dateFormatting";
    import {mapActions, mapGetters} from "vuex";

    export default {
        components: {
            datepicker4
        },
        computed: {
            ...mapGetters({
                'merchants': 'warpliteapi/getMerchantsList',
            })
        },
        data: () => ({
            valid: false,
            searchForm: {
                globalsearch: "",
                disputeStartDate: "",
                disputeEndDate: "",
                onoff: "",
                recordtype: "",
                merchants: "",
                statusid5: "",
                specificSearch: "",
                cbdatedisputed:""
            },
            onoffSelect: [
                {value:'', text:''},
                {value:'0', text:'Archived Records'},
                {value:'1', text:'Visible Records'}
            ],
            recordType: [
                {value:'', text:''},
                {value:'0', text:'Missing Type'},
                {value:'5', text:'Retrieval'},
                {value:'6', text:'Pre Arbitration'},
                {value:'7', text:'Chargeback'},
                {value:'8', text:'2nd Chargeback'},
                {value:'10', text:'Pre Dispute'},
                {value:'4', text:'Arbitration'}
            ],
            chargestatus: [
                {value:'', text:''},
                {value:'1', text:'NewFile Uploaded'},
                {value:'67', text:'In Review'},
                {value:'113', text:'Wrongful CB'},
                {value:'186', text:'Chargeback (Win)'},
                {value:'237', text:'In Review / Refunded'},
            ],
            specificSearch: [
                {value:'', text:''},
                {value:'0', text:'DB ID'},
                {value:'1', text:'Case Number'},
                {value:'2', text:'ARN'},
                {value:'3', text:'ECI'},
                {value:'4', text:'First Name'},
                {value:'5', text:'Last Name'},
                {value:'6', text:'Card Number'},
                {value:'7', text:'Email'},
                {value:'8', text:'GW Transacton ID'},
                {value:'9', text:'MID'},
                {value:'10', text:'DBA'},
            ]
        }),
        methods: {
            onDateChange(e) {
                this.searchForm[e.name] = e.date
            },
            search(){
                this.searchForm.cbdatedisputed = this.searchForm.disputeStartDate+'|'+this.searchForm.disputeEndDate
                this.$emit('searchFunc', {...this.searchForm});
            },
            ...mapActions('warpliteapi', ['getCbdMerchants']),
        },
        mounted() {
            this.getCbdMerchants();
        }
    };
</script>
