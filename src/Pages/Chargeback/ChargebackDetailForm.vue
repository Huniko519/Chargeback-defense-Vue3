<template>
    <v-layout row justify-center>
        <v-dialog v-model="dialog" persistent max-width="800px">
            <template v-slot:activator="{ on }">
                <v-btn small color="primary" v-on="on">View</v-btn>
            </template>
            <v-card>
                <v-card-title>
                    <span class="headline">Dispute Id {{formdata.cbid}}</span>
                </v-card-title>
                <v-card-text class="texttop">
                    <v-container grid-list-md>
                        <v-layout wrap>
                            <b-table thead-class="hidden_header" :items="fdata"></b-table>
                        </v-layout>
                    </v-container>
                </v-card-text>
                <v-card-text class="textbottom">
                    <v-container grid-list-md>
                        <v-layout wrap>
                            <DisputeDetailTabs :disputeData="disputeData"></DisputeDetailTabs>
                        </v-layout>
                    </v-container>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" flat @click="dialog = false">Close</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-layout>
</template>

<script>
    import DisputeDetailTabs from "../../Components/DisputeDetailTabs";

    export default {
        components: {
            DisputeDetailTabs
        },
        props: ["buttonname","formdata","descriptors"],
        data: () => ({
            dialog: false,
            items: []
        }),
        computed: {
            fdata(){
                let lData = []
                lData.push({name:'ID', value:this.formdata.cbid})
                lData.push({name:'Case Number', value:this.formdata.cbcasenumber})
                lData.push({name:'Date', value:this.formdata.cbdatedisputed})
                lData.push({name:'Status', value:this.formdata.statusname})
                lData.push({name:'Card', value:this.formdata.cbcardnumber})
                lData.push({name:'Amount', value:this.formdata.cbamount})
                lData.push({name:'Reason', value:this.formdata.cbreasoncode})
                return lData
            },
            disputeData(){
                let lData = []
                lData.push({name:'ID', value:this.formdata.cbid})
                lData.push({name:'Case Number', value:this.formdata.cbcasenumber})
                lData.push({name:'Date', value:this.formdata.cbdatedisputed})
                lData.push({name:'Status', value:this.formdata.statusname})
                lData.push({name:'Card', value:this.formdata.cbcardnumber})
                lData.push({name:'Amount', value:this.formdata.cbamount})
                lData.push({name:'Reason', value:this.formdata.cbreasoncode})
                return lData
            }
        },
        methods: {
        }
    };
</script>

<style>
    .hidden_header {
        display: none;
    }

    .texttop {padding-bottom: 0;}
    .textbottom {padding-top: 0;}
</style>
