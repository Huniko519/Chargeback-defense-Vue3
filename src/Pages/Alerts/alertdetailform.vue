<template>
    <v-layout row justify-center>
        <v-btn small color="primary" @click.stop="onClickView">
            View
        </v-btn>
        <v-dialog v-model="dialog" max-width="700" class="mp-1">
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
                <div v-if="formdata.providerid" class="header-row">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="main-card mb-0 card">
                                <div class="card-body">
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">
                                            <div class="widget-content p-0">
                                                <div class="widget-content-wrapper">
                                                    <div class="widget-content-left mr-3">
                                                        <img v-if="formdata.providerid === '1'" width="42" class="rounded" src="https://www.chargebackdefense.com/wp-content/uploads/2020/08/etchoca256.png" alt="avatar" />
                                                        <img v-else width="42" class="rounded" src="https://www.chargebackdefense.com/wp-content/uploads/2020/08/cdrnverifi.png" alt="avatar" />
                                                    </div>
                                                    <div class="widget-content-left">
                                                        <div class="widget-title">Settled: {{formdata.apitransactiondate}}</div>
                                                        <div class="widget-numbers">{{formdata.apiamount}}</div>
                                                    </div>
                                                    <div class="widget-content-right">
                                                        <div class="badge badge-info" v-if="formdata.statusid === '0'">{{formdata.statusname}}</div>
                                                        <div class="badge badge-warning" v-if="formdata.statusid === '1'">{{formdata.statusname}}</div>
                                                        <div class="badge badge-secondary" v-if="formdata.statusid === '2'">{{formdata.statusname}}</div>
                                                        <div class="badge badge-success" v-if="formdata.statusid === '3'">{{formdata.statusname}}</div>
                                                        <div class="badge badge-danger" v-if="formdata.statusid === '4'">{{formdata.statusname}}</div>
                                                        <div class="badge badge-warning" v-if="formdata.statusid === '5'">{{formdata.statusname}}</div>
                                                        <div class="badge badge-info" v-if="formdata.statusid === '6'">{{formdata.statusname}}</div>
                                                        <div class="badge badge-light" v-if="formdata.statusid === '7'">{{formdata.statusname}}</div>
                                                        <div class="badge badge-dark" v-if="formdata.statusid === '8'">{{formdata.statusname}}</div>
                                                        <div class="badge badge-primary" v-if="formdata.statusid === '9'">{{formdata.statusname}}</div>
                                                        <div class="badge badge-secondary" v-if="formdata.statusid === '10'">{{formdata.statusname}}</div>
                                                        <div class="badge badge-success" v-if="formdata.statusid === '11'">{{formdata.statusname}}</div>
                                                        <div class="badge badge-danger" v-if="formdata.statusid === '12'">{{formdata.statusname}}</div>
                                                    </div>
                                                    <div class="widget-content-left">
                                                        <div class="ml-2 widget-heading-bold">{{formdata.apidate}}</div>
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
                <v-card-text class="texttop">
                    <v-container grid-list-md>
                        <v-layout wrap>
                            <b-table thead-class="hidden_header" :items="fdata"></b-table>
                        </v-layout>
                        <v-layout row wrap>
                            <v-flex d-flex xs4>
                                <v-container fluid>
                                    Status
                                    <v-switch
                                        v-for="opt in options"
                                        :key="opt.value"
                                        :input-value="statuses[opt.value]"
                                        :label="opt.text"
                                        @click="onStatusChange(opt.value)"
                                        :disabled="formdata.statusid !== '0'"
                                        readonly
                                        hide-details
                                        color="primary"
                                    ></v-switch>
                                </v-container>
                            </v-flex>
                            <v-flex d-flex xs8>
                                <v-container fluid>
                                    <v-textarea
                                        outline
                                        name="input-7-4"
                                        label="Alert notes"
                                        v-model="notes"
                                        rows="2"
                                    ></v-textarea>
                                    <v-list two-line>
                                        <template v-for="(item, index) in items">
                                            <v-divider :key="index"></v-divider>
                                            <v-list-tile
                                                :key="item.noteid"
                                                avatar
                                            >
                                                <v-list-tile-action>
                                                    <v-checkbox
                                                        color="primary"
                                                        :input-value="item.noteonoff === '1'"
                                                        @change="onChangeNoteOnOff(item)"
                                                    ></v-checkbox>
                                                </v-list-tile-action>
                                                <v-list-tile-content>
                                                    <v-list-tile-title v-html="item.notetext"></v-list-tile-title>
                                                    <v-list-tile-sub-title v-html="item.subtext">
                                                    </v-list-tile-sub-title>
                                                </v-list-tile-content>
                                            </v-list-tile>
                                        </template>
                                    </v-list>
                                </v-container>
                            </v-flex>
                            <v-flex d-flex xs12>
                                <v-btn block color="primary" @click="submit" :loading="inSubmit" :disabled="inSubmit || (notes === '' && !statusSelected)">
                                    Submit
                                    <template v-slot:loader>
                                        <span class="custom-loader">
                                            <v-icon light>cached</v-icon>
                                        </span>
                                    </template>
                                </v-btn>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-card-text>
                <!--<v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" flat @click="dialog = false; alertStatus = false">Close</v-btn>
                </v-card-actions>-->
            </v-card>
        </v-dialog>
    </v-layout>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex'

    export default {
        props: ["buttonname", "formdata", "descriptors"],
        data: () => ({
            dialog: false,
            statusid: 0,
            notes: '',
            alertStatus: false,
            alertStatusText: '',
            alertType: 0, // 0: success, 1: error
            statuses: {
                '1': false,
                '4': false,
                '8': false,
                '12': false
            },
            inSubmit: false,
            items: [],
            todayDate: '',
            statusSelected: false
        }),
        computed: {
            ...mapGetters({
                'getStatusChargebacks': 'warpliteapi/getStatusChargebacks',
                'getUserData': 'login/getUserInfo'
            }),
            options() {
                let ary = []
                if (this.getStatusChargebacks) {
                    let status = this.getStatusChargebacks.find(ele => ele.statusid === '1')
                    if (status)
                        ary.push({value: status.statusid, text: status.statusname})
                    status = this.getStatusChargebacks.find(ele => ele.statusid === '4')
                    if (status)
                        ary.push({value: status.statusid, text: status.statusname})
                    status = this.getStatusChargebacks.find(ele => ele.statusid === '8')
                    if (status)
                        ary.push({value: status.statusid, text: status.statusname})
                    status = this.getStatusChargebacks.find(ele => ele.statusid === '12')
                    if (status)
                        ary.push({value: status.statusid, text: status.statusname})
                }

                return ary
            },
            fdata() {
                let lData = []
                lData.push({name:'ID', value:this.formdata.apiID})
                lData.push({name:'Created', value:this.formdata.apidate})
                lData.push({name:'Last Updated', value:this.formdata.apidateupdated})
                lData.push({name:'Ethoca Merchant', value:this.formdata.providerid})
                lData.push({name:'Merchant Id', value:this.formdata.merchantid5})
                lData.push({name:'Descriptor', value:this.formdata.merchantdescriptor})
                lData.push({name:'Merchant Name', value:this.formdata.merchantname})
                lData.push({name:'Card Number', value:this.formdata.apicard})
                lData.push({name:'Provider ID', value:this.formdata.apialerterid})

                return lData
            }
        },
        methods: {
            ...mapActions('warpliteapi', ['setCbdAlertStatus', 'addCbdAlertNotes', 'getCbdAlertNotes', 'setCbdAlertNotes']),
            onStatusChange (statusid) {
                if (this.formdata.statusid === '0') {
                    if (this.statusid === statusid) {
                        this.statuses[statusid] = true
                    } else {
                        for (let key in this.statuses) {
                            this.statuses[key] = false
                        }
                        this.statuses[statusid] = true
                        this.statusid = statusid
                    }

                    this.statusSelected = true
                }
            },
            onChangeNoteOnOff (note) {
                const {
                    noteid, noteonoff
                } = note

                let newNoteOnOff = '0'
                if (noteonoff === '1') {
                    note.noteonoff = '0'
                    newNoteOnOff = '0'
                } else {
                    note.noteonoff = '1'
                    newNoteOnOff = '1'
                }
                const editedIndex = this.items.findIndex(ele => ele.noteid === noteid)

                const item = {
                    adminid: note.adminid,
                    alertid: note.alertid,
                    datecreated: note.datecreated,
                    noteid: note.noteid,
                    noteonoff: newNoteOnOff,
                    notetext: note.notetext,
                    notetype: note.notetype
                }
                this.setCbdAlertNotes(item)
                    .then(() => {
                        this.items.splice(editedIndex, 1)
                    })
            },
            submit() {
                this.inSubmit = true
                this.setCbdAlertStatus({statusId: this.statusid, alertId: this.formdata.apiID})
                    .then(() => {
                        this.addCbdAlertNotes({alertNotes: this.notes, alertId: this.formdata.apiID})
                            .then(res => {
                                this.alertStatus = true
                                this.alertStatusText = 'Alert updated successfully!'
                                this.alertType = 0
                                this.inSubmit = false

                                let item = {
                                    noteid: res.summary.data[0],
                                    noteonoff: '1',
                                    notetext: this.notes,
                                    subtext: this.getUserData.customerInfo.adminid + ' ' + this.getUserData.customerInfo.adminfirstname + ' ' + this.getUserData.customerInfo.adminlastname + ' ' +
                                        `<div class="badge badge-info badge-pill">NEW</div>`
                                }
                                this.items.push(item)
                            })
                            .catch(() => {
                                this.alertStatus = true
                                this.alertStatusText = 'Alert update failed!'
                                this.alertType = 1
                                this.inSubmit = false
                            })
                    })
                    .catch(() => {
                        this.alertStatus = true
                        this.alertStatusText = 'Alert update failed!'
                        this.alertType = 1
                        this.inSubmit = false
                    })
            },
            onClickView() {
                this.statusSelected = false
                this.statusid = this.formdata.statusid
                for (let key in this.statuses) {
                    if (key === this.statusid)
                        this.statuses[key] = true
                    else
                        this.statuses[key] = false
                }
                
                const d = new Date()
                let month = '' + (d.getMonth() + 1)
                const year = d.getFullYear()

                if (month.length < 2)
                    month = '0' + month
                let day = '' + d.getDate();
                if (day.length < 2)
                    day = '0' + day
                let strDate = `${year}-${month}-${day}`
                this.todayDate = strDate

                this.getCbdAlertNotes({ alertid: this.formdata.apiID, noteonoff: '1' })
                    .then(res => {
                        this.items = res.data.map(item => {
                            if (item.datecreated.includes(this.todayDate)) {
                                item.subtext = this.getUserData.customerInfo.adminid + ' ' + this.getUserData.customerInfo.adminfirstname + ' ' + this.getUserData.customerInfo.adminlastname + ' ' +
                                    `<div class="badge badge-info badge-pill">NEW</div>`
                            } else {
                                item.subtext = this.getUserData.customerInfo.adminid + ' ' + this.getUserData.customerInfo.adminfirstname + ' ' + this.getUserData.customerInfo.adminlastname
                            }

                            return item
                        })
                    })
                    .catch(err => {
                        console.log(err)
                    })

                this.dialog = true
            },
        },
        mounted() {
            
        }
    };
</script>

<style>
    .hidden_header {
        display: none;
    }
    .header-row {
        overflow-x: hidden;
    }
    .texttop {
        padding-bottom: 0;
        padding-top: 0;
    }
    .textbottom {padding-top: 0;}
    .custom-loader {
        animation: loader 1s infinite;
        display: flex;
    }
    @-moz-keyframes loader {
        from {
            transform: rotate(0);
        }
        to {
            transform: rotate(360deg);
        }
    }
    @-webkit-keyframes loader {
        from {
            transform: rotate(0);
        }
        to {
            transform: rotate(360deg);
        }
    }
    @-o-keyframes loader {
        from {
            transform: rotate(0);
        }
        to {
            transform: rotate(360deg);
        }
    }
    @keyframes loader {
        from {
            transform: rotate(0);
        }
        to {
            transform: rotate(360deg);
        }
    }
    .v-divider {
        margin: 0;
    }
    .container {
        padding: 12px;
    }
    .v-list {
        max-height: 162px;
        overflow: auto;
    }
    .v-list__tile__sub-title {
        font-size: 0.94rem;
    }
    .v-list__tile__title {
        font-size: 0.94rem;
    }
    .v-label {
        font-size: 0.94rem;
    }
</style>
