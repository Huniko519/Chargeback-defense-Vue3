<template>
  <div class="header-dots">
    <b-dropdown toggle-class="p-0 mr-2" menu-class="dropdown-menu-xl" variant="link" no-caret right>
      <span slot="button-content">
        <div class="icon-wrapper icon-wrapper-alt rounded-circle">
          <div class="icon-wrapper-bg bg-primary"></div>
          <i class="lnr-menu text-primary"></i>
        </div>
      </span>
      <div class="dropdown-menu-header">
        <div class="dropdown-menu-header-inner bg-plum-plate">
          <div class="menu-header-image dd-header-bg-1"></div>
          <div class="menu-header-content text-white">
            <h5 class="menu-header-title">Grid Dashboard</h5>
            <h6 class="menu-header-subtitle">Easy grid navigation inside dropdowns</h6>
          </div>
        </div>
      </div>
      <div class="grid-menu grid-menu-xl grid-menu-3col">
        <div class="no-gutters row">
          <div class="col-sm-6 col-xl-4">
            <button class="btn-icon-vertical btn-square btn-transition btn btn-outline-link">
              <i class="pe-7s-world icon-gradient bg-night-fade btn-icon-wrapper btn-icon-lg mb-3"></i>Automation
            </button>
          </div>
          <div class="col-sm-6 col-xl-4">
            <button class="btn-icon-vertical btn-square btn-transition btn btn-outline-link">
              <i class="pe-7s-piggy icon-gradient bg-night-fade btn-icon-wrapper btn-icon-lg mb-3"></i>Reports
            </button>
          </div>
          <div class="col-sm-6 col-xl-4">
            <button class="btn-icon-vertical btn-square btn-transition btn btn-outline-link">
              <i class="pe-7s-config icon-gradient bg-night-fade btn-icon-wrapper btn-icon-lg mb-3"></i>Settings
            </button>
          </div>
          <div class="col-sm-6 col-xl-4">
            <button class="btn-icon-vertical btn-square btn-transition btn btn-outline-link">
              <i class="pe-7s-browser icon-gradient bg-night-fade btn-icon-wrapper btn-icon-lg mb-3"></i>Content
            </button>
          </div>
          <div class="col-sm-6 col-xl-4">
            <button class="btn-icon-vertical btn-square btn-transition btn btn-outline-link">
              <i class="pe-7s-hourglass icon-gradient bg-night-fade btn-icon-wrapper btn-icon-lg mb-3"></i>Activity
            </button>
          </div>
          <div class="col-sm-6 col-xl-4">
            <button class="btn-icon-vertical btn-square btn-transition btn btn-outline-link">
              <i class="pe-7s-world icon-gradient bg-night-fade btn-icon-wrapper btn-icon-lg mb-3"></i>Contacts
            </button>
          </div>
        </div>
      </div>
      <ul class="nav flex-column">
        <li class="nav-item-divider nav-item"></li>
        <li class="nav-item-btn text-center nav-item">
          <button class="btn-shadow btn btn-primary btn-sm">Follow-ups</button>
        </li>
      </ul>
    </b-dropdown>
    <b-dropdown toggle-class="p-0 mr-2" menu-class="dropdown-menu-xl" variant="link" no-caret right>
      <span slot="button-content">
        <div class="icon-wrapper icon-wrapper-alt rounded-circle">
          <div class="icon-wrapper-bg bg-danger"></div>
          <i class="lnr-bullhorn text-danger"></i>
          <div class="badge badge-dot badge-dot-sm badge-danger">Notifications</div>
        </div>
      </span>
      <div class="dropdown-menu-header mb-0">
        <div class="dropdown-menu-header-inner bg-deep-blue">
          <div class="menu-header-image opacity-1 dd-header-bg-2"></div>
          <div class="menu-header-content text-dark">
            <h5 class="menu-header-title">Notifications</h5>
            <h6 class="menu-header-subtitle">
              You have
              <b>{{notifications}}</b> unread messages
            </h6>
          </div>
        </div>
      </div>
      <div class="nav-justified">
        <b-tabs class="card-header-tab-animation" card>
          <b-tab title="Messages" class="p-3" active>
            <div class="scroll-gradient">
              <div class="scroll-area-sm">
                <VuePerfectScrollbar class="scrollbar-container" v-once>
                  <div class="vertical-time-simple vertical-without-time vertical-timeline vertical-timeline--animate vertical-timeline--one-column">
                    <div v-for="notice in notificationList" :key="notice.message" class="vertical-timeline-item vertical-timeline-element">
                      <div>
                        <span class="vertical-timeline-element-icon bounce-in"></span>
                        <div class="vertical-timeline-element-content bounce-in">
                          <h4 class="timeline-title">{{notice.message}}</h4>
                          <span class="vertical-timeline-element-date"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </VuePerfectScrollbar>
              </div>
            </div>
          </b-tab>
          <!--
          <b-tab title="Events" class="p-3">
            <div class="scroll-gradient">
              <div class="scroll-area-sm">
                <VuePerfectScrollbar class="scrollbar-container" v-once>
                  <div class="vertical-without-time vertical-timeline vertical-timeline--animate vertical-timeline--one-column">
                    <div class="vertical-timeline-item vertical-timeline-element">
                      <div>
                        <span class="vertical-timeline-element-icon bounce-in">
                          <i class="badge badge-dot badge-dot-xl badge-success"></i>
                        </span>
                        <div class="vertical-timeline-element-content bounce-in">
                          <h4 class="timeline-title">All Hands Meeting</h4>
                          <p> Lorem ipsum dolor sic amet, today at
                            <a href="javascript:void(0);">12:00 PM</a>
                          </p>
                          <span class="vertical-timeline-element-date"></span>
                        </div>
                      </div>
                    </div>
                    <div class="vertical-timeline-item vertical-timeline-element">
                      <div>
                        <span class="vertical-timeline-element-icon bounce-in">
                          <i class="badge badge-dot badge-dot-xl badge-warning"></i>
                        </span>
                        <div class="vertical-timeline-element-content bounce-in">
                          <p> Another meeting today, at
                            <b class="text-danger">12:00 PM</b>
                          </p>
                          <p> Yet another one, at
                            <span class="text-success">15:00 PM</span>
                          </p>
                          <span class="vertical-timeline-element-date"></span>
                        </div>
                      </div>
                    </div>
                    <div class="vertical-timeline-item vertical-timeline-element">
                      <div>
                        <span class="vertical-timeline-element-icon bounce-in">
                          <i class="badge badge-dot badge-dot-xl badge-danger"></i>
                        </span>
                        <div class="vertical-timeline-element-content bounce-in">
                          <h4 class="timeline-title">Build the production release</h4>
                          <p>
                            Lorem ipsum dolor sit amit,consectetur eiusmdd tempor incididunt
                            ut labore et dolore magna elit enim at minim veniam quis
                            nostrud
                          </p>
                          <span class="vertical-timeline-element-date"></span>
                        </div>
                      </div>
                    </div>
                    <div class="vertical-timeline-item vertical-timeline-element">
                      <div>
                        <span class="vertical-timeline-element-icon bounce-in">
                          <i class="badge badge-dot badge-dot-xl badge-primary"></i>
                        </span>
                        <div class="vertical-timeline-element-content bounce-in">
                          <h4 class="timeline-title text-success">Something not important</h4>
                          <p>
                            Lorem ipsum dolor sit amit,consectetur elit enim at minim veniam
                            quis nostrud
                          </p>
                          <span class="vertical-timeline-element-date"></span>
                        </div>
                      </div>
                    </div>
                    <div class="vertical-timeline-item vertical-timeline-element">
                      <div>
                        <span class="vertical-timeline-element-icon bounce-in">
                          <i class="badge badge-dot badge-dot-xl badge-success"></i>
                        </span>
                        <div class="vertical-timeline-element-content bounce-in">
                          <h4 class="timeline-title">All Hands Meeting</h4>
                          <p>
                            Lorem ipsum dolor sic amet, today at
                            <a href="javascript:void(0);">12:00 PM</a>
                          </p>
                          <span class="vertical-timeline-element-date"></span>
                        </div>
                      </div>
                    </div>
                    <div class="vertical-timeline-item vertical-timeline-element">
                      <div>
                        <span class="vertical-timeline-element-icon bounce-in">
                          <i class="badge badge-dot badge-dot-xl badge-warning"></i>
                        </span>
                        <div class="vertical-timeline-element-content bounce-in">
                          <p>
                            Another meeting today, at
                            <b class="text-danger">12:00 PM</b>
                          </p>
                          <p>
                            Yet another one, at
                            <span class="text-success">15:00 PM</span>
                          </p>
                          <span class="vertical-timeline-element-date"></span>
                        </div>
                      </div>
                    </div>
                    <div class="vertical-timeline-item vertical-timeline-element">
                      <div>
                        <span class="vertical-timeline-element-icon bounce-in">
                          <i class="badge badge-dot badge-dot-xl badge-danger"></i>
                        </span>
                        <div class="vertical-timeline-element-content bounce-in">
                          <h4 class="timeline-title">Build the production release</h4>
                          <p>
                            Lorem ipsum dolor sit amit,consectetur eiusmdd tempor incididunt
                            ut labore et dolore magna elit enim at minim veniam quis
                            nostrud
                          </p>
                          <span class="vertical-timeline-element-date"></span>
                        </div>
                      </div>
                    </div>
                    <div class="vertical-timeline-item vertical-timeline-element">
                      <div>
                        <span class="vertical-timeline-element-icon bounce-in">
                          <i class="badge badge-dot badge-dot-xl badge-primary"></i>
                        </span>
                        <div class="vertical-timeline-element-content bounce-in">
                          <h4 class="timeline-title text-success">Something not important</h4>
                          <p>
                            Lorem ipsum dolor sit amit,consectetur elit enim at minim veniam
                            quis nostrud
                          </p>
                          <span class="vertical-timeline-element-date"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </VuePerfectScrollbar>
              </div>
            </div>
          </b-tab>
          <b-tab title="Status" class="pt-3">
            <div>
              <div class="no-results">
                <div class="swal2-icon swal2-success swal2-animate-success-icon">
                  <div class="swal2-success-circular-line-left"
                    style="background-color: rgb(255, 255, 255);">
                  </div>
                  <span class="swal2-success-line-tip"></span>
                  <span class="swal2-success-line-long"></span>
                  <div class="swal2-success-ring"></div>
                  <div class="swal2-success-fix" style="background-color: rgb(255, 255, 255);"></div>
                  <div class="swal2-success-circular-line-right" style="background-color: rgb(255, 255, 255);"></div>
                </div>
                <div class="results-subtitle">All caught up!</div>
                <div class="results-title">There are no system errors!</div>
              </div>
            </div>
          </b-tab>
          -->
        </b-tabs>
        <ul class="nav flex-column">
          <li class="nav-item-divider nav-item mt-0"></li>
          <li class="nav-item-btn text-center nav-item">
            <button class="btn-shadow btn-wide btn-pill btn btn-focus btn-sm">View Latest Changes</button>
          </li>
        </ul>
      </div>
    </b-dropdown>
    <b-dropdown toggle-class="p-0" menu-class="dropdown-menu-xl" variant="link" no-caret right>
      <span slot="button-content">
        <div class="icon-wrapper icon-wrapper-alt rounded-circle">
          <div class="icon-wrapper-bg bg-success"></div>
          <i class="lnr-pie-chart text-success"></i>
        </div>
      </span>
      <div class="dropdown-menu-header">
        <div class="dropdown-menu-header-inner bg-premium-dark">
          <div class="menu-header-image dd-header-bg-7"></div>
          <div class="menu-header-content text-white">
            <h5 class="menu-header-title">Users Online</h5>
            <h6 class="menu-header-subtitle">Recent Account Activity Overview</h6>
          </div>
        </div>
      </div>
      <div class="widget-chart">
        <div class="widget-chart-content">
          <div class="icon-wrapper rounded-circle">
            <div class="icon-wrapper-bg opacity-9 bg-focus"></div>
            <i class="lnr-users text-white"></i>
          </div>
          <div class="widget-numbers">
            <span>344k</span>
          </div>
          <div class="widget-subheading pt-2">Profile views since last login</div>
          <div class="widget-description text-danger">
            <span class="pr-1">
              <span>176%</span>
            </span>
            <font-awesome-icon class="ml-1" icon="arrow-up" />
          </div>
        </div>
      </div>
      <ul class="nav flex-column">
        <li class="nav-item-divider mt-0 nav-item"></li>
        <li class="nav-item-btn text-center nav-item">
          <button class="btn-shine btn-wide btn-pill btn btn-warning btn-sm">
            <font-awesome-icon class="mr-2" icon="cog" />Refresh List
          </button>
        </li>
      </ul>
    </b-dropdown>
  </div>
</template>

<script>
import VuePerfectScrollbar from "vue-perfect-scrollbar";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowUp, faCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faArrowUp, faCog);

export default {
  components: {
    VuePerfectScrollbar,
    "font-awesome-icon": FontAwesomeIcon
  },
  data: () => ({
      notifications: 0,
      notificationList: [
          {message:'test notice'},
          {message:'test notice 2'}
      ]
  }),
  methods: {}
};
</script>

