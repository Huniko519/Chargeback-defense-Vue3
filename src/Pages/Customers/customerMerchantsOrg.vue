<template>
    <div>
        <div class="main-card mb-3 card">
            <div class="card-header">
                <div class="col-lg-9">
                    <h5 class="menu-header-title text-capitalize text-primary">Merchants</h5>
                </div>
                <div class="col-lg-3">
                    <!--<h5>Total Records: {{pagination.totalRecords}}</h5>-->
                </div>

            </div>
            <table class="table elevation-1 chargeTbl">
                <thead>
                <tr>
                    <th v-for="head in headers" v-bind:key="head.value" class="fa fa-sort-alpha-asc" @click="movePage(head.value)">
                        {{head.text}}
                        <font-awesome-icon class="mr-2" :icon="sortOrder[head.value] !== undefined ? sortOrder[head.value] === 'desc'? 'sort-down' : 'sort-up' : 'sort'" />
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="props in merchantData" v-bind:key="props.merchantid">
                    <td class="text-xs-center">{{ props.merchantid }}</td>
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
                </tr>
                </tbody>
            </table>
            <b-pagination align="center" :total-rows="pagination.totalRecords" v-model="pagination.currentPage" :per-page="rowsPP"></b-pagination>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex'

    import { library } from "@fortawesome/fontawesome-svg-core";
    import {  faStar, faPlus, faSortUp, faSortDown, faSort } from "@fortawesome/free-solid-svg-icons";
    import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

    library.add(faStar, faPlus, faSortUp, faSortDown, faSort);

    export default {
        components: {
            "font-awesome-icon": FontAwesomeIcon
        },
        props: {
            customRowsPerPage: {type:Number}
        },
        computed: {
            ...mapGetters({
                'merchantData': 'warpliteapi/getMerchantsData',
                'merchantProgress': 'warpliteapi/getMerchantsProgress',
                'merchantDataSummary': 'warpliteapi/getMerchantsDataSummary',
            }),
            rowsPP (){
                let rp = (parseInt(this.customRowsPerPage) > 0 ? parseInt(this.customRowsPerPage) : this.pagination.rowsPerPage)
                return rp
            }
        },
        watch: {
            'pagination.currentPage': {
                handler: function () {
                    this.movePage()
                },
                deep: true
            },
        },
        data: () => ({
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
            ],
            icon: "pe-7s-car icon-gradient bg-mean-fruit",
        }),
        methods: {
            ...mapActions('warpliteapi', ['getCbdMerchants']),
            movePage(sortBy) {
                let before = (this.pagination.currentPage - 1)
                let after = this.pagination.currentPage
                let rp = (parseInt(this.customRowsPerPage) > 0 ? parseInt(this.customRowsPerPage) : this.pagination.rowsPerPage)
                let startcount = (after == 1?1:((before*rp)+1))
                let endcount = rp
                let data = {limit:startcount+'|'+endcount};
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
                    data.sortby = Object.keys(this.sortOrder)[0]+','+this.sortOrder[Object.keys(this.sortOrder)[0]]
                }
                this.getCbdMerchants(data).then( () => {
                    this.setPages()
                });
            },
            setPages() {
                if (this.merchantDataSummary && this.merchantDataSummary.total_records) {
                    this.pagination.totalRecords = parseInt(this.merchantDataSummary.total_records)
                    let rp = (parseInt(this.customRowsPerPage) > 0 ? parseInt(this.customRowsPerPage) : this.pagination.rowsPerPage)
                    this.pagination.totalPages = Math.ceil(this.merchantDataSummary.total_records / rp)
                    this.pages = this.pagination.totalPages
                }
            }
        },
        async mounted() {
            this.movePage()
        }
    }
</script>

<style scoped>

</style>