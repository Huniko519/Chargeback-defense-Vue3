<template>
    <div>
        <div class="main-card mb-3 card">
            <div class="card-header">
                    <div class="col-lg-2">
                        <h5 class="menu-header-title text-capitalize text-primary">Customers</h5>
                    </div>
                    <div class="col-lg-7">
                        <newForm @CreateCustomer="CreateCustomer"></newForm>
                    </div>
                    <div class="col-lg-3">
                        <!--<h5>Total Records: {{pagination.totalRecords}}</h5> -->
                    </div>
            </div>

            <v-data-table :headers="headers" :items="getCustomers" :search="search"
                          :pagination.sync="pagination"
                          :loading="dataLoading"
                          loading-text="loading"
                          class="elevation-1">
                <template v-slot:items="props">
                    <td class="text-xs-center">{{ props.item.DisplayName }} <br> {{props.item.GivenName + ' ' +
                        props.item.MiddleName + ' ' + props.item.FamilyName}}
                    </td>
                    <td class="text-xs-center">{{ props.item.status }}</td>
                    <td class="text-xs-center">?</td>
                    <td class="text-xs-center">?</td>
                    <td class="text-xs-center">?</td>
                    <td class="text-xs-center">?</td>
                    <td class="text-xs-center">{{ (props.item.PrimaryPhone !=
                        null?props.item.PrimaryPhone.FreeFormNumber:'')}}
                    </td>
                    <td class="text-xs-center">{{ (props.item.PrimaryEmailAddr !=
                        null?props.item.PrimaryEmailAddr.Address:'')}}
                    </td>
                    <td class="text-xs-center">?</td>
                </template>
            </v-data-table>


        </div>
        <v-snackbar
            v-model="alertBar.snackbar"
            :bottom="alertBar.y === 'bottom'"
            :left="alertBar.x === 'left'"
            :timeout="alertBar.timeout"
            :vertical="alertBar.mode === 'vertical'"
        >
            {{ alertBar.text }}
            <v-btn color="red" flat @click="alertBar.snackbar = false">Close</v-btn>
        </v-snackbar>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from "vuex";

    import newForm from "../Customers/customerListFormNew";

    export default {
        components: {
            newForm
        },
        data: () => ({
            dataLoading: true,
            alertBar: {
                snackbar: false,
                y: 'top',
                x: null,
                mode: '',
                timeout: 3000,
                text: ''
            },
            pagination: {
                rowsPerPage: 10,
                totalRecords: 0,
                totalPages: 0,
                pages: 0,
                currentPage: 1
            },
            page: 1,
            search: '',
            headers: [
                {
                    text: 'Company Name',
                    align: 'center',
                    value: 'companyname'
                },
                {
                    text: 'Status',
                    align: 'center',
                    value: 'status'
                },
                {
                    text: 'Referral',
                    align: 'center',
                    value: 'referral'
                },
                {
                    text: 'Services',
                    align: 'center',
                    value: 'services'
                },
                {
                    text: 'Managed By',
                    align: 'center',
                    value: 'manageby'
                },
                {
                    text: 'On/Off',
                    align: 'center',
                    value: 'onoff'
                },
                {
                    text: 'Phone',
                    align: 'center',
                    value: 'Phone'
                },
                {
                    text: 'Email',
                    align: 'center',
                    value: 'email'
                },
                {
                    text: 'Actions',
                    align: 'center',
                    value: 'action'
                }
            ],
        }),
        computed: {
            ...mapGetters({
                'getCustomers': 'quickbookapi/getCustomers',
            })
        },
        methods: {
            ...mapActions('quickbookapi', ['customers']),
            setPages() {
                this.dataLoading = false
                let totalRecords = Object.keys(this.getCustomers).length
                this.pagination.totalRecords = parseInt(totalRecords)
                this.pagination.totalPages = Math.ceil(totalRecords / this.pagination.rowsPerPage)
                this.pagination.pages = this.pagination.totalPages
            },
            CreateCustomer (formData){
                this.$store.dispatch('quickbookapi/createCustomers',{formData})
            }
        },
        async mounted() {
            console.log('list loaded')
            this.customers().then(() => {
                this.setPages()
            }).catch(err => {
                console.log(err)
                this.alertBar.text = err.msg
                this.alertBar.snackbar = true
                this.alertBar.timeout = 6000
                this.dataLoading = false
            })

        }
    }
</script>

<style scoped>

</style>