<template>
  <div>
    <page-title :heading="heading" :subheading="subheading" :icon="icon"></page-title>
    <b-row>
      <b-col md="6">
        <div class="row text-center">
          <div class="col-md-6">
            <b-card class="main-card mb-3">
              <vue-circle :progress="62" :size="84" :reverse="false" line-cap="round" :fill="f1"
                empty-fill="rgba(0, 0, 0, .12)" :animation-start-value="0.0" :start-angle="0"
                insert-mode="append" :thickness="3" :show-percent="true">
              </vue-circle>
            </b-card>
          </div>
          <div class="col-md-6">
            <b-card class="main-card mb-3">
              <vue-circle :progress="23" :size="84" :reverse="false" line-cap="round" :fill="f2"
                empty-fill="rgba(0, 0, 0, .12)" :animation-start-value="0.0" :start-angle="0"
                insert-mode="append" :thickness="3" :show-percent="true">
              </vue-circle>
            </b-card>
          </div>
          <div class="col-md-6">
            <b-card class="main-card mb-3">
              <vue-circle :progress="54" :size="84" :reverse="false" line-cap="round" :fill="f3"
                empty-fill="rgba(0, 0, 0, .12)" :animation-start-value="0.0" :start-angle="0"
                insert-mode="append" :thickness="3" :show-percent="true">
              </vue-circle>
            </b-card>
          </div>
          <div class="col-md-6">
            <b-card class="main-card mb-3">
              <vue-circle :progress="69" :size="84" :reverse="false" line-cap="round" :fill="f4"
                empty-fill="rgba(0, 0, 0, .12)" :animation-start-value="0.0" :start-angle="0"
                insert-mode="append" :thickness="3" :show-percent="true">
              </vue-circle>
            </b-card>
          </div>
        </div>
      </b-col>
      <b-col md="6">
        <div class="row text-center">
          <div class="col-md-6">
            <b-card class="main-card mb-3">
              <vue-circle :progress="62" :size="84" :reverse="true" line-cap="round" :fill="f1"
                empty-fill="rgba(0, 0, 0, .12)" :animation-start-value="0.0" :start-angle="0"
                insert-mode="append" :thickness="5" :show-percent="true">
              </vue-circle>
            </b-card>
          </div>
          <div class="col-md-6">
            <b-card class="main-card mb-3">
              <vue-circle :progress="23" :size="84" :reverse="true" line-cap="round" :fill="f2"
                empty-fill="rgba(0, 0, 0, .12)" :animation-start-value="0.0" :start-angle="0"
                insert-mode="append" :thickness="5" :show-percent="true">
              </vue-circle>
            </b-card>
          </div>
          <div class="col-md-6">
            <b-card class="main-card mb-3">
              <vue-circle :progress="54" :size="84" :reverse="true" line-cap="round" :fill="f3"
                empty-fill="rgba(0, 0, 0, .12)" :animation-start-value="0.0" :start-angle="0"
                insert-mode="append" :thickness="5" :show-percent="true">
              </vue-circle>
            </b-card>
          </div>
          <div class="col-md-6">
            <b-card class="main-card mb-3">
              <vue-circle :progress="69" :size="84" :reverse="true" line-cap="round" :fill="f4"
                empty-fill="rgba(0, 0, 0, .12)" :animation-start-value="0.0" :start-angle="0"
                insert-mode="append" :thickness="5" :show-percent="true">
              </vue-circle>
            </b-card>
          </div>
        </div>
      </b-col>
      <b-col md="6">
        <div class="mb-3 card">
          <div class="card-header-tab card-header">
            <div class="card-header-title font-size-lg text-capitalize font-weight-normal">
              <i class="header-icon lnr-laptop-phone mr-3 text-muted opacity-6"></i>
              Best Selling Products
            </div>
            <div class="btn-actions-pane-right actions-icon-btn">
              <b-dropdown toggle-class="btn-icon btn-icon-only" variant="link" right>
                <span slot="button-content">
                  <font-awesome-icon icon="th" />
                </span>
                <div>
                  <button type="button" tabindex="0" class="dropdown-item">
                    <i class="dropdown-icon lnr-inbox"></i>
                    <span>Menus</span>
                  </button>
                  <button type="button" tabindex="0" class="dropdown-item">
                    <i class="dropdown-icon lnr-file-empty"></i>
                    <span>Settings</span>
                  </button>
                  <button type="button" tabindex="0" class="dropdown-item">
                    <i class="dropdown-icon lnr-book"></i>
                    <span>Actions</span>
                  </button>
                  <div tabindex="-1" class="dropdown-divider"></div>
                  <div class="p-1 text-right">
                    <button class="mr-2 btn-shadow btn-sm btn btn-link">View Details</button>
                    <button class="mr-2 btn-shadow btn-sm btn btn-primary">Action</button>
                  </div>
                </div>
              </b-dropdown>
            </div>
          </div>
          <div class="pt-2 pb-0 card-body">
            <div class="scroll-area-sm shadow-overflow">
              <VuePerfectScrollbar class="scrollbar-container" v-once>
                <ul class="rm-list-borders rm-list-borders-scroll list-group list-group-flush">
                  <li class="list-group-item">
                    <div class="widget-content p-0">
                      <div class="widget-content-wrapper">
                        <div class="widget-content-left mr-3">
                          <div class="icon-wrapper m-0">
                            <div class="progress-circle-wrapper">
                              <vue-circle :progress="62" :size="52" :reverse="false" line-cap="round" :fill="f1"
                                empty-fill="rgba(0, 0, 0, .12)" :animation-start-value="0.0" :start-angle="0"
                                insert-mode="append" :thickness="3" :show-percent="true">
                              </vue-circle>
                            </div>
                          </div>
                        </div>
                        <div class="widget-content-left">
                          <div class="widget-heading">Asus Laptop</div>
                          <div class="widget-subheading mt-1 opacity-10">
                            <div class="badge badge-pill badge-dark">$152</div>
                          </div>
                        </div>
                        <div class="widget-content-right">
                          <div class="fsize-1 text-focus">
                            <small class="opacity-5 pr-1">$</small>
                            <span>752</span>
                            <small class="text-warning pl-2">
                              <font-awesome-icon icon="angle-down" />
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <div class="widget-content p-0">
                      <div class="widget-content-wrapper">
                        <div class="widget-content-left mr-3">
                          <div class="icon-wrapper m-0">
                            <div class="progress-circle-wrapper">
                              <vue-circle :progress="23" :size="52" :reverse="false" line-cap="round" :fill="f2"
                                empty-fill="rgba(0, 0, 0, .12)" :animation-start-value="0.0" :start-angle="0"
                                insert-mode="append" :thickness="3" :show-percent="true">
                              </vue-circle>
                            </div>
                          </div>
                        </div>
                        <div class="widget-content-left">
                          <div class="widget-heading">Dell Inspire</div>
                          <div class="widget-subheading mt-1 opacity-10">
                            <div class="badge badge-pill badge-dark">$53</div>
                          </div>
                        </div>
                        <div class="widget-content-right">
                          <div class="fsize-1 text-focus">
                            <small class="opacity-5 pr-1">$</small>
                            <span>587</span>
                            <small class="text-danger pl-2">
                              <font-awesome-icon icon="angle-up" />
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <div class="widget-content p-0">
                      <div class="widget-content-wrapper">
                        <div class="widget-content-left mr-3">
                          <div class="icon-wrapper m-0">
                            <div class="progress-circle-wrapper">
                              <vue-circle :progress="54" :size="52" :reverse="false" line-cap="round" :fill="f3"
                                empty-fill="rgba(0, 0, 0, .12)" :animation-start-value="0.0" :start-angle="0"
                                insert-mode="append" :thickness="3" :show-percent="true">
                              </vue-circle>
                            </div>
                          </div>
                        </div>
                        <div class="widget-content-left">
                          <div class="widget-heading">Lenovo IdeaPad</div>
                          <div class="widget-subheading mt-1 opacity-10">
                            <div class="badge badge-pill badge-dark">$239</div>
                          </div>
                        </div>
                        <div class="widget-content-right">
                          <div class="fsize-1 text-focus">
                            <small class="opacity-5 pr-1">$</small>
                            <span>163</span>
                            <small class="text-muted pl-2">
                              <font-awesome-icon icon="angle-down" />
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <div class="widget-content p-0">
                      <div class="widget-content-wrapper">
                        <div class="widget-content-left mr-3">
                          <div class="icon-wrapper m-0">
                            <div class="progress-circle-wrapper">
                              <vue-circle :progress="69" :size="52" :reverse="false" line-cap="round" :fill="f4"
                                empty-fill="rgba(0, 0, 0, .12)" :animation-start-value="0.0" :start-angle="0"
                                insert-mode="append" :thickness="3" :show-percent="true">
                              </vue-circle>
                            </div>
                          </div>
                        </div>
                        <div class="widget-content-left">
                          <div class="widget-heading">Asus Vivobook</div>
                          <div class="widget-subheading mt-1 opacity-10">
                            <div class="badge badge-pill badge-dark">$21</div>
                          </div>
                        </div>
                        <div class="widget-content-right">
                          <div class="fsize-1 text-focus">
                            <small class="opacity-5 pr-1">$</small>
                            653
                            <small class="text-primary pl-2">
                              <font-awesome-icon icon="angle-up" />
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <div class="widget-content p-0">
                      <div class="widget-content-wrapper">
                        <div class="widget-content-left mr-3">
                          <div class="icon-wrapper m-0">
                            <div class="progress-circle-wrapper">
                              <vue-circle :progress="21" :size="52" :reverse="false" line-cap="round" :fill="f5"
                                empty-fill="rgba(0, 0, 0, .12)" :animation-start-value="0.0" :start-angle="0"
                                insert-mode="append" :thickness="3" :show-percent="true">
                              </vue-circle>
                            </div>
                          </div>
                        </div>
                        <div class="widget-content-left">
                          <div class="widget-heading">Apple Macbook</div>
                          <div class="widget-subheading mt-1 opacity-10">
                            <div class="badge badge-pill badge-dark">$381</div>
                          </div>
                        </div>
                        <div class="widget-content-right">
                          <div class="fsize-1 text-focus">
                            <small class="opacity-5 pr-1">$</small>
                            629
                            <small class="text-muted pl-2">
                              <font-awesome-icon icon="angle-up" />
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <div class="widget-content p-0">
                      <div class="widget-content-wrapper">
                        <div class="widget-content-left mr-3">
                          <div class="icon-wrapper m-0">
                            <div class="progress-circle-wrapper">
                              <vue-circle :progress="68" :size="52" :reverse="false" line-cap="round" :fill="f6"
                                empty-fill="rgba(0, 0, 0, .12)" :animation-start-value="0.0" :start-angle="0"
                                insert-mode="append" :thickness="3" :show-percent="true">
                              </vue-circle>
                            </div>
                          </div>
                        </div>
                        <div class="widget-content-left">
                          <div class="widget-heading">HP Envy 13"</div>
                          <div class="widget-subheading mt-1 opacity-10">
                            <div class="badge badge-pill badge-dark">$74</div>
                          </div>
                        </div>
                        <div class="widget-content-right">
                          <div class="fsize-1 text-focus">
                            <small class="opacity-5 pr-1">$</small>
                            462
                            <small class="text-muted pl-2">
                              <font-awesome-icon icon="angle-down" />
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="border-bottom-0 list-group-item">
                    <div class="widget-content p-0">
                      <div class="widget-content-wrapper">
                        <div class="widget-content-left mr-3">
                          <div class="icon-wrapper m-0">
                            <div class="progress-circle-wrapper">
                              <vue-circle :progress="91" :size="52" :reverse="false" line-cap="round" :fill="fill1"
                                empty-fill="rgba(0, 0, 0, .12)" :animation-start-value="0.0" :start-angle="0"
                                insert-mode="append" :thickness="3" :show-percent="true">
                              </vue-circle>
                            </div>
                          </div>
                        </div>
                        <div class="widget-content-left">
                          <div class="widget-heading">Gaming Laptop HP</div>
                          <div class="widget-subheading mt-1 opacity-10">
                            <div class="badge badge-pill badge-dark">$7</div>
                          </div>
                        </div>
                        <div class="widget-content-right">
                          <div class="fsize-1 text-focus">
                            <small class="opacity-5 pr-1">$</small>
                            956
                            <small class="text-success pl-2">
                              <font-awesome-icon icon="angle-up" />
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </VuePerfectScrollbar>
            </div>
          </div>
        </div>
      </b-col>
      <b-col md="6">
        <div class="mb-3 card">
          <div class="rm-border pb-0 responsive-center card-header">
            <div>
              <h5 class="menu-header-title text-capitalize">Portfolio Performance</h5>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="no-shadow rm-border bg-transparent widget-chart text-left card">
                <div class="progress-circle-wrapper">
                  <vue-circle :progress="36" :size="104" :reverse="true" line-cap="round" :fill="fill1"
                    empty-fill="rgba(0, 0, 0, .1)" :animation-start-value="0.0" :start-angle="0"
                    insert-mode="append" :thickness="7" :show-percent="true">
                  </vue-circle>
                </div>
                <div class="widget-chart-content">
                  <div class="widget-subheading">Capital Gains</div>
                  <div class="widget-numbers text-success">
                    <span>$563</span>
                  </div>
                  <div class="widget-description text-focus">
                    Increased by
                    <span class="text-warning pl-1">
                      <font-awesome-icon icon="angle-up" />
                      <span class="pl-1">7.35%</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="card no-shadow rm-border bg-transparent widget-chart text-left mt-2">
                <div class="progress-circle-wrapper">
                  <vue-circle :progress="54" :size="104" :reverse="true" line-cap="round" :fill="fill2"
                    empty-fill="rgba(0, 0, 0, .1)" :animation-start-value="0.0" :start-angle="0"
                    insert-mode="append" :thickness="7" :show-percent="true">
                  </vue-circle>
                </div>
                <div class="widget-chart-content">
                  <div class="widget-subheading">Withdrawals</div>
                  <div class="widget-numbers text-danger">
                    <span>$194</span>
                  </div>
                  <div class="widget-description opacity-8 text-focus">
                    Down by
                    <span class="text-success pl-1 pr-1">
                      <font-awesome-icon icon="angle-down" />
                      <span class="pl-1">21.8%</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import PageTitle from "../../Layout/Components/PageTitle.vue";
import VueCircle from "vue2-circle-progress";
import VuePerfectScrollbar from "vue-perfect-scrollbar";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCalendarAlt,
  faAngleDown,
  faStar,
  faAngleUp,
  faTh,
  faBusinessTime,
  faArrowLeft,
  faArrowRight,
  faCog,
  faDotCircle
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faAngleDown,
  faCalendarAlt,
  faStar,
  faAngleUp,
  faTh,
  faBusinessTime,
  faCog,
  faArrowLeft,
  faArrowRight,
  faDotCircle
);

export default {
  components: {
    PageTitle,
    VueCircle,
    VuePerfectScrollbar,
    "font-awesome-icon": FontAwesomeIcon
  },
  data: () => ({
    heading: "Gauges",
    subheading:
      "Create wonderful animated gauges that can be used in combination with other ArchitectUI elements.",
    icon: "pe-7s-car icon-gradient bg-warm-flame",

    fill: { gradient: ["var(--primary)"] },
    fill1: { gradient: ["#2af598", "#009efd"] },
    fill2: { gradient: ["#fccb90", "#d57eeb"] },

    f1: { gradient: ["#3f6ad8"] },
    f2: { gradient: ["#3ac47d"] },
    f3: { gradient: ["#16aaff"] },
    f4: { gradient: ["#f7b924"] },
    f5: { gradient: ["#d92550"] },
    f6: { gradient: ["#444054"] }
  }),

  methods: {}
};
</script>
