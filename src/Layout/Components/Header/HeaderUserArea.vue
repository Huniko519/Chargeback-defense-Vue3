<template>
    <div class="d-flex" v-if="userData.customerInfo">
        <div class="header-btn-lg pr-0">
            <div class="widget-content p-0">
                <div class="widget-content-wrapper">
                    <div class="widget-content-left">
                        <b-dropdown toggle-class="p-0 mr-2" menu-class="dropdown-menu-lg" variant="link" no-caret right>
              <span slot="button-content">
                <div class="icon-wrapper icon-wrapper-alt rounded-circle">
                  <!--<img width="42" class="rounded-circle" src="@/assets/images/avatars/1.jpg" alt /> -->
                    <font-awesome-icon class="fa-3x" icon="user-circle"/>
                </div>
              </span>
                            <div class="dropdown-menu-header">
                                <div class="dropdown-menu-header-inner bg-info">
                                    <div class="menu-header-image opacity-2 dd-header-bg-6"></div>
                                    <div class="menu-header-content text-left">
                                        <div class="widget-content p-0">
                                            <div class="widget-content-wrapper">
                                                <div class="widget-content-left">
                                                    <div class="widget-heading">Welcome: {{userData.customerInfo.adminfirstname +' '+userData.customerInfo.adminlastname}}</div>
                                                    <div class="widget-subheading opacity-8"></div>
                                                </div>
                                                <!--
                                              <div class="widget-content-left mr-3">
                                                <img width="42" class="rounded-circle" src="@/assets/images/avatars/1.jpg" alt />
                                              </div>

                                                -->
                                                <div class="widget-content-right mr-2">
                                                    <button class="btn-pill btn-shadow btn-shine btn btn-focus"
                                                            @click="logout">Logout
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!--
                            <div class="scroll-area-xs" style="height: 150px;">
                                <VuePerfectScrollbar class="scrollbar-container" v-once>
                                    <ul class="nav flex-column">
                                        <li class="nav-item-header nav-item">Activity</li>
                                        <li class="nav-item">
                                            <a href="javascript:void(0);" class="nav-link">
                                                Chat
                                                <div class="ml-auto badge badge-pill badge-info">8</div>
                                            </a>
                                        </li>
                                        <li class="nav-item-header nav-item">My Account</li>
                                        <li class="nav-item">
                                            <router-link to="/customers/setting" class="nav-link">Settings</router-link>
                                        </li>
                                    </ul>
                                </VuePerfectScrollbar>
                            </div>
                            -->
                        </b-dropdown>
                    </div>
                    <div class="widget-content-left ml-3 header-user-info">
                        <div class="widget-heading">{{userData.customerInfo.companyname}}</div>
                        <!--<div class="widget-subheading">VP People Manager</div>-->
                    </div>
                </div>
            </div>
        </div>
        <!--
        <div class="header-btn-lg">
            <button type="button" class="hamburger hamburger--elastic"
                    v-bind:class="{ 'is-active': showDrawerSection }"
                    v-on:click="showDrawerSection = !showDrawerSection">
        <span class="hamburger-box">
          <span class="hamburger-inner"></span>
        </span>
            </button>
        </div>
        -->

        <div class="app-drawer-wrapper" v-bind:class="{ 'drawer-open': showDrawerSection }">
            <div class="drawer-nav-btn">
                <button type="button" class="hamburger hamburger--elastic"
                        v-bind:class="{ 'is-active': showDrawerSection }"
                        v-on:click="showDrawerSection = !showDrawerSection">
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
                </button>
            </div>
            <!--
            <div class="drawer-content-wrapper">
                <VuePerfectScrollbar class="scrollbar-container" v-once>
                    <h3 class="drawer-heading">Customer Status</h3>
                    <div class="drawer-section">
                        <div class="row">
                            <div class="col">
                                <div class="progress-box">
                                    <h4>Gateways</h4>
                                    <vue-circle :progress="getGateways" :size="104" :reverse="false" line-cap="round"
                                                :fill="fill1"
                                                empty-fill="rgba(0, 0, 0, .08)" :animation-start-value="0.0"
                                                :start-angle="90" insert-mode="append" :thickness="7"
                                                :show-percent="true">
                                    </vue-circle>
                                </div>
                            </div>
                            <div class="col">
                                <div class="progress-box">
                                    <h4>Processors</h4>
                                    <vue-circle :progress="getProcessors" :size="104" :reverse="false" line-cap="round"
                                                :fill="fill2"
                                                empty-fill="rgba(0, 0, 0, .08)" :animation-start-value="0.0"
                                                :start-angle="90" insert-mode="append" :thickness="7"
                                                :show-percent="true">
                                    </vue-circle>
                                </div>
                            </div>
                            <div class="col">
                                <div class="progress-box">
                                    <h4>Crms</h4>
                                    <vue-circle :progress="getCrms" :size="104" :reverse="false" line-cap="round"
                                                :fill="fill3"
                                                empty-fill="rgba(0, 0, 0, .08)" :animation-start-value="0.0"
                                                :start-angle="90" insert-mode="append" :thickness="7"
                                                :show-percent="true">
                                    </vue-circle>
                                </div>
                            </div>
                        </div>
                        <div class="divider"></div>
                        <div class="mt-3">
                            <div class="row">
                                <div class="col">
                                    <div class="widget-chart p-0">
                                        <div class="widget-chart-content">
                                            <div class="widget-numbers text-warning fsize-3" >{{getCustomerReports.gatewayapis_active}}</div>

                                            <div class="widget-subheading pt-1">Gateway Apis</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="widget-chart p-0">
                                        <div class="widget-chart-content">
                                            <div class="widget-numbers text-danger fsize-3">{{getCustomerReports.processorapis_active}}</div>
                                            <div class="widget-subheading pt-1">Processor Apis</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="widget-chart p-0">
                                        <div class="widget-chart-content">
                                            <div class="widget-numbers text-success fsize-3">{{getCustomerReports.crmapis_active}}</div>
                                            <div class="widget-subheading pt-1">Crm Apis</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="divider"></div>
                        </div>
                    </div>
                </VuePerfectScrollbar>
            </div>
            -->
        </div>
    </div>
</template>

<script>
    //import VuePerfectScrollbar from "vue-perfect-scrollbar";
    //import VueCircle from "vue2-circle-progress";

    import {library} from "@fortawesome/fontawesome-svg-core";
    import {
        faAngleDown,
        faCalendarAlt,
        faTrashAlt,
        faCheck,
        faFileAlt,
        faCloudDownloadAlt,
        faFileExcel,
        faFilePdf,
        faFileArchive,
        faEllipsisH,
        faUser,
        faUserCircle
    } from "@fortawesome/free-solid-svg-icons";
    import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
    import {mapActions,mapGetters} from "vuex";

    library.add(
        faAngleDown,
        faCalendarAlt,
        faTrashAlt,
        faCheck,
        faFileAlt,
        faCloudDownloadAlt,
        faFileExcel,
        faFilePdf,
        faFileArchive,
        faEllipsisH,
        faUser,
        faUserCircle
    );

    export default {
        computed: {
            ...mapGetters({
                'userData': 'login/getUserInfo',
                'getCustomerReports': 'warpliteapi/getCustomerReports',
            }),
            getGateways(){
                //let total = (parseInt(this.getCustomerReports.gateways_active) + parseInt(this.getCustomerReports.gateways_inactive))
                //return (total > 0 ? ((parseInt(this.getCustomerReports.gateways_active) / total)*100) : 0)
                let total = (parseInt(this.getCustomerReports.gateways_active) / parseInt(this.getCustomerReports.gateways_inactive))
                return total > 0 ?total * 100: 0
            },
            getProcessors(){
                //let total = (parseInt(this.getCustomerReports.processors_active) + parseInt(this.getCustomerReports.processors_inactive))
                //return total > 0 ?(parseInt(this.getCustomerReports.processors_active) / total)*100 : 0
                let total = (parseInt(this.getCustomerReports.processors_active) / parseInt(this.getCustomerReports.processors_inactive))
                return total > 0 ?total * 100: 0
            },
            getCrms(){
                //let total = (parseInt(this.getCustomerReports.crms_active) + parseInt(this.getCustomerReports.crms_inactive))
                //return total > 0 ?(parseInt(this.getCustomerReports.crms_active) / total)*100 : 0
                let total = (parseInt(this.getCustomerReports.crms_active) / parseInt(this.getCustomerReports.crms_active))
                return total > 0 ?total * 100: 0
            },
        },
        components: {
            "font-awesome-icon": FontAwesomeIcon
        },
        data() {
            return {
                fill1: {gradient: ["#00b09b", "#96c93d"]},
                fill2: {gradient: ["#ff0844", "#ffb199"]},
                fill3: {gradient: ["#f6d365", "#fda085"]},
                showDrawerSection: false,
                gatewayAPI: 0,
                gatewaysPer: 0,
                processorsPer: 0,
                crmPer: 0
            }
        },
        methods: {
            ...mapActions('warpliteapi', ['getCbCustomerReports']),
            logout() {
                this.$store.dispatch('login/logout')
                this.$router.push({name: 'login'})
            }
        },
        created() {
             this.getCbCustomerReports().then(() => {
                //console.log('re ',this.getCustomerReports.gatewayapis_active);
                ///this.gatewaysPer = this.getCustomerReports.gatewayapis_active
                 //this.$store.state.getCustomerReports.gatewayapis_active = 10
                 //this.$store.commit('warpliteapi/setCbCustomerReports', this.getCustomerReports)
                 //console.log('test = ',this.$store.state.warpliteapi.customerReports)
                 //this.gatewaysPer = this.$store.state.warpliteapi.customerReports.gatewayapis_active
            })
        }
    };
</script>
