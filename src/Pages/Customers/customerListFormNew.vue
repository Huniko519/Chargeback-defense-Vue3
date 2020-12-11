<template>
    <v-layout row justify-center>
        <v-dialog v-model="dialog" persistent max-width="600px">
            <template v-slot:activator="{ on }">
                <!-- <v-btn color="primary" dark v-on="on">Open Dialog</v-btn> -->
                <button v-on="on" type="button" class="btn-shadow d-inline-flex align-items-center btn btn-success">
                    <font-awesome-icon class="mr-2" icon="plus"/>
                    Create New
                </button>
            </template>
            <v-card>
                <v-card-title>
                    <span class="headline">Create Customer</span>
                </v-card-title>
                <v-card-text>
                    <v-container grid-list-md>
                        <v-layout wrap>
                            <v-flex xs12 sm6 md6>
                                <v-select v-model="form.Title" :items="title" label="Title"
                                          :error="!$v.form.Title.required" required></v-select>
                            </v-flex>
                            <v-flex xs12 sm6 md6>
                                <v-select v-model="form.Suffix" :items="suffix" :error="!$v.form.Suffix.required"
                                          label="Suffix*" required></v-select>
                            </v-flex>
                            <v-flex xs12 sm6 md4>
                                <v-text-field v-model="form.GivenName" :error="!$v.form.GivenName.required"
                                              label="First name*" required></v-text-field>
                            </v-flex>
                            <v-flex xs12 sm6 md4>
                                <v-text-field v-model="form.MiddleName" :error="!$v.form.MiddleName.required"
                                              label="Middle name*" required></v-text-field>
                            </v-flex>
                            <v-flex xs12 sm6 md4>
                                <v-text-field v-model="form.FamilyName" :error="!$v.form.FamilyName.required"
                                              label="Last name*" required></v-text-field>
                            </v-flex>
                            <v-flex xs12>
                                <v-text-field v-model="form.PrimaryEmailAddr.Address"
                                              :error="!$v.form.PrimaryEmailAddr.Address.required" label="Email*"
                                              required></v-text-field>
                                <div class="red--text" v-if="!$v.form.PrimaryEmailAddr.Address.email">Email incorrect format</div>
                            </v-flex>
                            <v-flex xs12>
                                <v-text-field v-model="form.CompanyName" :error="!$v.form.CompanyName.required"
                                              label="Company Name*" required></v-text-field>
                            </v-flex>
                            <v-flex xs12 sm6>
                                <input class="form-control" id="us-phone-number-ex" type="text"
                                       placeholder="+1(999)-999-9999" v-mask="'+1(###)-###-####'"
                                       :error="!$v.form.PrimaryPhone.FreeFormNumber.required"
                                       required
                                       v-model="form.PrimaryPhone.FreeFormNumber"/>
                            </v-flex>
                        </v-layout>
                    </v-container>
                    <small>*indicates required field</small>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" flat @click="ClearCustomerForm">Close</v-btn>
                    <v-btn color="blue darken-1" flat @click="CreateCustomer">Save</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-snackbar
            v-model="alertbar.snackbar"
            :bottom="alertbar.y === 'bottom'"
            :left="alertbar.x === 'left'"
            :timeout="alertbar.timeout"
            :vertical="alertbar.mode === 'vertical'"
        >
            {{ alertbar.text }}
            <v-btn color="red" flat @click="alertbar.snackbar = false">Close</v-btn>
        </v-snackbar>
    </v-layout>
</template>

<script>
    import Vue from "vue";
    import {library} from "@fortawesome/fontawesome-svg-core";
    import {faStar, faPlus} from "@fortawesome/free-solid-svg-icons";
    import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
    import {validationMixin} from "vuelidate";
    import {required, email} from "vuelidate/lib/validators";

    library.add(faStar, faPlus);

    import VueMask from "v-mask";

    Vue.use(VueMask);

    export default {
        components: {
            "font-awesome-icon": FontAwesomeIcon,
        },
        mixins: [validationMixin],
        validations: {
            form: {
                Title: {
                    required
                },
                GivenName: {
                    required
                },
                MiddleName: {
                    required
                },
                FamilyName: {
                    required
                },
                Suffix: {
                    required
                },
                CompanyName: {
                    required
                },
                PrimaryEmailAddr: {
                    Address: {
                        required, email
                    }
                },
                PrimaryPhone: {
                    FreeFormNumber: {
                        required
                    }
                }
            }
        },
        data: () => ({
            alertbar: {
                snackbar: false,
                y: 'top',
                x: null,
                mode: '',
                timeout: 3000,
                text: ''
            },
            dialog: false,
            dynamicMask: "###.###.###/###",
            form: {
                Title: '',
                GivenName: '',
                MiddleName: '',
                FamilyName: '',
                Suffix: '',
                DisplayName: '',
                FullyQualifiedName: '',
                CompanyName: '',
                PrimaryPhone: {
                    FreeFormNumber: ''
                },
                PrimaryEmailAddr: {
                    Address: ''
                }
            },
            clearedForm: {},
            suffix: ["", "Jr", "Sr"],
            title: ["", "Mr", "Mrs", "Ms", "Miss"],
        }),
        methods: {
            ClearCustomerForm (){
                this.form = {...this.clearedForm}
                this.dialog = false
            },
            CreateCustomer() {
                this.$v.form.$touch()
                if (!this.$v.form.$invalid && this.validateRegForms()) {
                    this.form.DisplayName = this.form.CompanyName
                    this.form.FullyQualifiedName = this.form.CompanyName
                    this.$emit('CreateCustomer', {...this.form})
                    this.form = this.clearedForm
                } else {
                    this.alertbar.timeout = 6000
                    this.alertbar.text = 'Required Fields Missing'
                    this.alertbar.snackbar = true
                }
            }
        },
        async mounted() {
            this.clearedForm = {...this.form}
        }
    };
</script>
