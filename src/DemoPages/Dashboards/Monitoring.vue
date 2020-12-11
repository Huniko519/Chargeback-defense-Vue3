<template>
  <div>
    <div class="app-page-title app-page-title-simple">
      <div class="page-title-wrapper">
        <div class="page-title-heading">
          <div>
            <div class="page-title-head center-elem">
              <span class="d-inline-block">Monitoring</span>
            </div>
            <div class="page-title-subheading opacity-10">
              <nav class aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <a href="javascript:void(0);">
                      <font-awesome-icon icon="home" />
                    </a>
                  </li>
                  <li class="breadcrumb-item">
                    <a href="javascript:void(0);">Dashboards</a>
                  </li>
                  <li class="active breadcrumb-item" aria-current="page">Minimal Dashboard Example</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
        <div class="page-title-actions">
          <div class="d-inline-block pr-3">
            <select id="custom-inp-top" type="select" class="custom-select">
              <option>Select period...</option>
              <option>Last Week</option>
              <option>Last Month</option>
              <option>Last Year</option>
            </select>
          </div>
          <b-button v-b-tooltip.hover variant="dark" title="Show a Tooltip!">
            <font-awesome-icon icon="battery-three-quarters" />
          </b-button>
        </div>
      </div>
    </div>
    <div class="mbg-3 alert alert-info alert-dismissible fade show" role="alert">
      <span class="pr-2">
        <font-awesome-icon icon="question-circle" />
      </span>
      This dashboard example was created using only the available elements and components, no additional SCSS was written!
    </div>

    <div class="row">
      <div class="col-md-6 col-lg-3">
        <div class="widget-chart widget-chart2 text-left mb-3 card-btm-border card-shadow-primary border-primary card">
          <div class="widget-chat-wrapper-outer">
            <div class="widget-chart-content">
              <div class="widget-title opacity-5 text-uppercase">New accounts</div>
              <div class="widget-numbers mt-2 fsize-4 mb-0 w-100">
                <div class="widget-chart-flex align-items-center">
                  <div>
                    <span class="opacity-10 text-success pr-2">
                      <font-awesome-icon icon="angle-up" />
                    </span>
                    234
                    <small class="opacity-5 pl-1">%</small>
                  </div>
                  <div class="widget-title ml-auto font-size-lg font-weight-normal text-muted">
                    <div class="circle-progress">
                      <vue-circle :progress="34" :size="54" :reverse="false" line-cap="round" :fill="fill"
                        empty-fill="rgba(0, 0, 0, .1)" :animation-start-value="0.0" :start-angle="0"
                        insert-mode="append" :thickness="4" :show-percent="true">
                      </vue-circle>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-3">
        <div class="widget-chart widget-chart2 text-left mb-3 card-btm-border card-shadow-danger border-danger card">
          <div class="widget-chat-wrapper-outer">
            <div class="widget-chart-content">
              <div class="widget-title opacity-5 text-uppercase">Total Expenses</div>
              <div class="widget-numbers mt-2 fsize-4 mb-0 w-100">
                <div class="widget-chart-flex align-items-center">
                  <div>
                    <span class="opacity-10 text-danger pr-2">
                      <font-awesome-icon icon="angle-down" />
                    </span>
                    71
                    <small class="opacity-5 pl-1">%</small>
                  </div>
                  <div class="widget-title ml-auto font-size-lg font-weight-normal text-muted">
                    <vue-circle :progress="47" :size="54" :reverse="false" line-cap="round" :fill="fill2"
                      empty-fill="rgba(0, 0, 0, .1)" :animation-start-value="0.0" :start-angle="0"
                      insert-mode="append" :thickness="4" :show-percent="true">
                    </vue-circle>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-3">
        <div class="widget-chart widget-chart2 text-left mb-3 card-btm-border card-shadow-warning border-warning card">
          <div class="widget-chat-wrapper-outer">
            <div class="widget-chart-content">
              <div class="widget-title opacity-5 text-uppercase">Company Value</div>
              <div class="widget-numbers mt-2 fsize-4 mb-0 w-100">
                <div class="widget-chart-flex align-items-center">
                  <div>
                    <small class="opacity-5 pr-1">$</small>
                    1,45M
                  </div>
                  <div class="widget-title ml-auto font-size-lg font-weight-normal text-muted">
                    <vue-circle :progress="38" :size="54" :reverse="false" line-cap="round" :fill="fill3"
                      empty-fill="rgba(0, 0, 0, .1)" :animation-start-value="0.0" :start-angle="0"
                      insert-mode="append" :thickness="4" :show-percent="true">
                    </vue-circle>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-3">
        <div class="widget-chart widget-chart2 text-left mb-3 card-btm-border card-shadow-success border-success card">
          <div class="widget-chat-wrapper-outer">
            <div class="widget-chart-content">
              <div class="widget-title opacity-5 text-uppercase">New Employees</div>
              <div class="widget-numbers mt-2 fsize-4 mb-0 w-100">
                <div class="widget-chart-flex align-items-center">
                  <div>
                    <small class="text-success pr-1">+</small>
                    34
                    <small class="opacity-5 pl-1">hires</small>
                  </div>
                  <div class="widget-title ml-auto font-size-lg font-weight-normal text-muted">
                    <vue-circle :progress="65" :size="54" :reverse="false" line-cap="round" :fill="fill4" empty-fill="rgba(0, 0, 0, .1)"
                      :animation-start-value="0.0" :start-angle="0" insert-mode="append" :thickness="4" :show-percent="true">
                    </vue-circle>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12 col-md-7 col-lg-8">
        <div class="mb-3 card">
          <div class="card-header-tab card-header">
            <div
              class="card-header-title font-size-lg text-capitalize font-weight-normal"
            >Traffic Sources</div>
            <div class="btn-actions-pane-right text-capitalize">
              <button class="btn btn-warning">Actions</button>
            </div>
          </div>
          <div class="pt-0 card-body">
            <HeatmapExample></HeatmapExample>
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-md-5 col-lg-4">
        <DonutExample></DonutExample>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 col-lg-3">
        <div class="card-shadow-primary mb-3 widget-chart widget-chart2 text-left card">
          <div class="widget-chat-wrapper-outer">
            <div class="widget-chart-content">
              <h6 class="widget-subheading">Income</h6>
              <div class="widget-chart-flex">
                <div class="widget-numbers mb-0 w-100">
                  <div class="widget-chart-flex">
                    <div class="fsize-4">
                      <small class="opacity-5">$</small>
                      5,456
                    </div>
                    <div class="ml-auto">
                      <div class="widget-title ml-auto font-size-lg font-weight-normal text-muted">
                        <span class="text-success pl-2">+14%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-3">
        <div class="card-shadow-primary mb-3 widget-chart widget-chart2 text-left card">
          <div class="widget-chat-wrapper-outer">
            <div class="widget-chart-content">
              <h6 class="widget-subheading">Expenses</h6>
              <div class="widget-chart-flex">
                <div class="widget-numbers mb-0 w-100">
                  <div class="widget-chart-flex">
                    <div class="fsize-4 text-danger">
                      <small class="opacity-5 text-muted">$</small>
                      4,764
                    </div>
                    <div class="ml-auto">
                      <div class="widget-title ml-auto font-size-lg font-weight-normal text-muted">
                        <span class="text-danger pl-2">
                          <span class="pr-1">
                            <font-awesome-icon icon="angle-up" />
                          </span>
                          8%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-3">
        <div class="card-shadow-primary mb-3 widget-chart widget-chart2 text-left card">
          <div class="widget-chat-wrapper-outer">
            <div class="widget-chart-content">
              <h6 class="widget-subheading">Spendings</h6>
              <div class="widget-chart-flex">
                <div class="widget-numbers mb-0 w-100">
                  <div class="widget-chart-flex">
                    <div class="fsize-4">
                      <span class="text-success pr-2">
                        <font-awesome-icon icon="angle-down" />
                      </span>
                      <small class="opacity-5">$</small>
                      1.5M
                    </div>
                    <div class="ml-auto">
                      <div class="widget-title ml-auto font-size-lg font-weight-normal text-muted">
                        <span class="text-success pl-2">
                          <span class="pr-1">
                            <font-awesome-icon icon="angle-down" />
                          </span>
                          15%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-3">
        <div class="card-shadow-primary mb-3 widget-chart widget-chart2 text-left card">
          <div class="widget-chat-wrapper-outer">
            <div class="widget-chart-content">
              <h6 class="widget-subheading">Totals</h6>
              <div class="widget-chart-flex">
                <div class="widget-numbers mb-0 w-100">
                  <div class="widget-chart-flex">
                    <div class="fsize-4">
                      <small class="opacity-5">$</small>
                      31,564
                    </div>
                    <div class="ml-auto">
                      <div class="widget-title ml-auto font-size-lg font-weight-normal text-muted">
                        <span class="text-warning pl-2">+76%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mbg-3 h-auto pl-0 pr-0 bg-transparent no-border card-header">
      <div class="card-header-title fsize-2 text-capitalize font-weight-normal">Target Section</div>
      <div class="btn-actions-pane-right text-capitalize actions-icon-btn">
        <button class="btn btn-link btn-sm">View Details</button>
      </div>
    </div>

    <div class="row">
      <div class="col-md-6 col-lg-3">
        <div class="card-shadow-primary mb-3 widget-chart widget-chart2 text-left card">
          <div class="widget-content p-0 w-100">
            <div class="widget-content-outer">
              <div class="widget-content-wrapper">
                <div class="widget-content-left pr-2 fsize-1">
                  <div class="widget-numbers mt-0 fsize-3 text-danger">71%</div>
                </div>
                <div class="widget-content-right w-100">
                  <div class="progress-bar-xs progress">
                    <div class="progress-bar bg-danger" role="progressbar" aria-valuenow="71" aria-valuemin="0"
                      aria-valuemax="100" style="width: 71%;">
                    </div>
                  </div>
                </div>
              </div>
              <div class="widget-content-left fsize-1">
                <div class="text-muted opacity-6">Income Target</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-3">
        <div class="card-shadow-primary mb-3 widget-chart widget-chart2 text-left card">
          <div class="widget-content p-0 w-100">
            <div class="widget-content-outer">
              <div class="widget-content-wrapper">
                <div class="widget-content-left pr-2 fsize-1">
                  <div class="widget-numbers mt-0 fsize-3 text-success">54%</div>
                </div>
                <div class="widget-content-right w-100">
                  <div class="progress-bar-xs progress">
                    <div class="progress-bar bg-success" role="progressbar" aria-valuenow="54"
                      aria-valuemin="0" aria-valuemax="100" style="width: 54%;" >
                    </div>
                  </div>
                </div>
              </div>
              <div class="widget-content-left fsize-1">
                <div class="text-muted opacity-6">Expenses Target</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-3">
        <div class="card-shadow-primary mb-3 widget-chart widget-chart2 text-left card">
          <div class="widget-content p-0 w-100">
            <div class="widget-content-outer">
              <div class="widget-content-wrapper">
                <div class="widget-content-left pr-2 fsize-1">
                  <div class="widget-numbers mt-0 fsize-3 text-warning">32%</div>
                </div>
                <div class="widget-content-right w-100">
                  <div class="progress-bar-xs progress">
                    <div class="progress-bar bg-warning" role="progressbar" aria-valuenow="32"
                      aria-valuemin="0" aria-valuemax="100" style="width: 32%;">
                    </div>
                  </div>
                </div>
              </div>
              <div class="widget-content-left fsize-1">
                <div class="text-muted opacity-6">Spendings Target</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-3">
        <div class="card-shadow-primary mb-3 widget-chart widget-chart2 text-left card">
          <div class="widget-content p-0 w-100">
            <div class="widget-content-outer">
              <div class="widget-content-wrapper">
                <div class="widget-content-left pr-2 fsize-1">
                  <div class="widget-numbers mt-0 fsize-3 text-info">89%</div>
                </div>
                <div class="widget-content-right w-100">
                  <div class="progress-bar-xs progress">
                    <div class="progress-bar bg-info" role="progressbar" aria-valuenow="89"
                      aria-valuemin="0" aria-valuemax="100" style="width: 89%;">
                    </div>
                  </div>
                </div>
              </div>
              <div class="widget-content-left fsize-1">
                <div class="text-muted opacity-6">Totals Target</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-12 col-lg-4">
        <div class="mb-3 card">
          <div class="card-header-tab card-header">
            <div class="card-header-title font-size-lg text-capitalize font-weight-normal">Total Sales</div>
            <div class="btn-actions-pane-right text-capitalize actions-icon-btn">
              <b-dropdown toggle-class="btn-wide btn-outline-2x btn pr-2 btn-outline-dark btn-sm" variant="outline" right>
                <span slot="button-content">
                  <span class="btn-icon-wrapper pr-2 opacity-7">
                    <font-awesome-icon icon="business-time" />
                  </span>
                  Buttons
                </span>
                <div>
                  <ul class="nav flex-column">
                    <li class="nav-item">
                      <a class="nav-link">
                        <i class="nav-link-icon lnr-inbox"></i>
                        <span>Inbox</span>
                        <div class="ml-auto badge badge-pill badge-secondary">86</div>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link">
                        <i class="nav-link-icon lnr-book"></i>
                        <span>Book</span>
                        <div class="ml-auto badge badge-pill badge-danger">5</div>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link">
                        <i class="nav-link-icon lnr-picture"></i>
                        <span>Picture</span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a disabled class="nav-link disabled">
                        <i class="nav-link-icon lnr-file-empty"></i>
                        <span>File Disabled</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </b-dropdown>
            </div>
          </div>
          <div class="card-body">
            <chart3 />
          </div>
          <div class="p-0 d-block card-footer">
            <div class="grid-menu grid-menu-2col overflow-hidden">
              <div class="no-gutters row">
                <div class="p-2 col-sm-6">
                  <button class="btn-icon-vertical btn-transition-text btn-transition btn-transition-alt pt-2 pb-2 btn btn-outline-dark">
                    <i class="lnr-car text-primary opacity-7 btn-icon-wrapper mb-2"></i>
                    Admin
                  </button>
                </div>
                <div class="p-2 col-sm-6">
                  <button class="btn-icon-vertical btn-transition-text btn-transition btn-transition-alt pt-2 pb-2 btn btn-outline-dark">
                    <i class="lnr-bullhorn text-danger opacity-7 btn-icon-wrapper mb-2"></i>
                    Blog
                  </button>
                </div>
                <div class="p-2 col-sm-6">
                  <button class="btn-icon-vertical btn-transition-text btn-transition btn-transition-alt pt-2 pb-2 btn btn-outline-dark">
                    <i class="lnr-bug text-success opacity-7 btn-icon-wrapper mb-2"></i>
                    Register
                  </button>
                </div>
                <div class="p-2 col-sm-6">
                  <button class="btn-icon-vertical btn-transition-text btn-transition btn-transition-alt pt-2 pb-2 btn btn-outline-dark">
                    <i class="lnr-heart text-warning opacity-7 btn-icon-wrapper mb-2"></i>
                    Directory
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-lg-4">
        <div class="mb-3 card">
          <div class="card-header-tab card-header">
            <div
              class="card-header-title font-size-lg text-capitalize font-weight-normal"
            >Daily Sales</div>
            <div class="btn-actions-pane-right text-capitalize">
              <button class="btn-wide btn-outline-2x btn btn-outline-focus btn-sm">View All</button>
            </div>
          </div>
          <div class="card-body">
            <chart4 />
          </div>
          <div class="p-0 d-block card-footer">
            <div class="grid-menu grid-menu-2col overflow-hidden">
              <div class="no-gutters row">
                <div class="p-2 col-sm-6">
                  <button class="btn-icon-vertical btn-transition-text btn-transition btn-transition-alt pt-2 pb-2 btn btn-outline-dark">
                    <i class="lnr-apartment text-dark opacity-7 btn-icon-wrapper mb-2"></i>
                    Overview
                  </button>
                </div>
                <div class="p-2 col-sm-6">
                  <button class="btn-icon-vertical btn-transition-text btn-transition btn-transition-alt pt-2 pb-2 btn btn-outline-dark" >
                    <i class="lnr-database text-dark opacity-7 btn-icon-wrapper mb-2"></i>
                    Support
                  </button>
                </div>
                <div class="p-2 col-sm-6">
                  <button class="btn-icon-vertical btn-transition-text btn-transition btn-transition-alt pt-2 pb-2 btn btn-outline-dark">
                    <i class="lnr-printer text-dark opacity-7 btn-icon-wrapper mb-2"></i>
                    Activities
                  </button>
                </div>
                <div class="p-2 col-sm-6">
                  <button class="btn-icon-vertical btn-transition-text btn-transition btn-transition-alt pt-2 pb-2 btn btn-outline-dark">
                    <i class="lnr-store text-dark opacity-7 btn-icon-wrapper mb-2"></i>
                    Marketing
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-lg-4">
        <div class="mb-3 card">
          <div class="card-header-tab card-header">
            <div class="card-header-title font-size-lg text-capitalize font-weight-normal">Total Expenses</div>
            <div class="btn-actions-pane-right text-capitalize">
              <button class="btn-wide btn-outline-2x btn btn-outline-primary btn-sm">View All</button>
            </div>
          </div>
          <div class="card-body">
            <div id="chart-col-3" style="min-height: 200px;">
              <chart5 />
            </div>
          </div>
          <div class="p-0 d-block card-footer">
            <div class="grid-menu grid-menu-2col overflow-hidden">
              <div class="no-gutters row">
                <div class="p-2 col-sm-6">
                  <button class="btn-icon-vertical btn-transition-text btn-transition btn-transition-alt pt-2 pb-2 btn btn-outline-success">
                    <i class="lnr-lighter text-success opacity-7 btn-icon-wrapper mb-2"></i>
                    Accounts
                  </button>
                </div>
                <div class="p-2 col-sm-6">
                  <button class="btn-icon-vertical btn-transition-text btn-transition btn-transition-alt pt-2 pb-2 btn btn-outline-warning">
                    <i class="lnr-construction text-warning opacity-7 btn-icon-wrapper mb-2"></i>
                    Contacts
                  </button>
                </div>
                <div class="p-2 col-sm-6">
                  <button class="btn-icon-vertical btn-transition-text btn-transition btn-transition-alt pt-2 pb-2 btn btn-outline-info">
                    <i class="lnr-bus text-info opacity-7 btn-icon-wrapper mb-2"></i>
                    Products
                  </button>
                </div>
                <div class="p-2 col-sm-6">
                  <button class="btn-icon-vertical btn-transition-text btn-transition btn-transition-alt pt-2 pb-2 btn btn-outline-alternate">
                    <i class="lnr-gift text-alternate opacity-7 btn-icon-wrapper mb-2"></i>
                    Services
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="main-card mb-3 card">
      <div class="card-header">
        <div class="card-header-title font-size-lg text-capitalize font-weight-normal">Company Agents Status</div>
        <div class="btn-actions-pane-right">
          <button type="button" class="btn-icon btn-wide btn-outline-2x btn btn-outline-focus btn-sm d-flex">
            Actions Menu
            <span class="pl-2 align-middle opacity-7">
              <font-awesome-icon icon="angle-right" />
            </span>
          </button>
        </div>
      </div>
      <div class="table-responsive">
        <table class="align-middle text-truncate mb-0 table table-borderless table-hover">
          <thead>
            <tr>
              <th class="text-center">#</th>
              <th class="text-center">Avatar</th>
              <th class="text-center">Name</th>
              <th class="text-center">Company</th>
              <th class="text-center">Status</th>
              <th class="text-center">Due Date</th>
              <th class="text-center">Target Achievement</th>
              <th class="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="text-center text-muted" style="width: 80px;">#54</td>
              <td class="text-center" style="width: 80px;">
                <img width="40" class="rounded-circle" src="@/assets/images/avatars/4.jpg" alt />
              </td>
              <td class="text-center">
                <a href="javascript:void(0)">Juan C. Cargill</a>
              </td>
              <td class="text-center">
                <a href="javascript:void(0)">Micro Electronics</a>
              </td>
              <td class="text-center">
                <div class="badge badge-pill badge-danger">Canceled</div>
              </td>
              <td class="text-center">
                <span class="pr-2 opacity-6">
                  <font-awesome-icon icon="business-time" />
                </span>
                12 Dec
              </td>
              <td class="text-center" style="width: 200px;">
                <div class="widget-content p-0">
                  <div class="widget-content-outer">
                    <div class="widget-content-wrapper">
                      <div class="widget-content-left pr-2">
                        <div class="widget-numbers fsize-1 text-danger">71%</div>
                      </div>
                      <div class="widget-content-right w-100">
                        <div class="progress-bar-xs progress">
                          <div class="progress-bar bg-danger" role="progressbar" aria-valuenow="71"
                            aria-valuemin="0" aria-valuemax="100" style="width: 71%;">
                        </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
              <td class="text-center">
                <div role="group" class="btn-group-sm btn-group">
                  <button class="btn-shadow btn btn-primary">Hire</button>
                  <button class="btn-shadow btn btn-primary">Fire</button>
                </div>
              </td>
            </tr>
            <tr>
              <td class="text-center text-muted" style="width: 80px;">#55</td>
              <td class="text-center" style="width: 80px;">
                <img width="40" class="rounded-circle" src="@/assets/images/avatars/3.jpg" alt />
              </td>
              <td class="text-center">
                <a href="javascript:void(0)">Johnathan Phelan</a>
              </td>
              <td class="text-center">
                <a href="javascript:void(0)">Hatchworks</a>
              </td>
              <td class="text-center">
                <div class="badge badge-pill badge-info">On Hold</div>
              </td>
              <td class="text-center">
                <span class="pr-2 opacity-6">
                  <font-awesome-icon icon="business-time" />
                </span>
                15 Dec
              </td>
              <td class="text-center" style="width: 200px;">
                <div class="widget-content p-0">
                  <div class="widget-content-outer">
                    <div class="widget-content-wrapper">
                      <div class="widget-content-left pr-2">
                        <div class="widget-numbers fsize-1 text-warning">54%</div>
                      </div>
                      <div class="widget-content-right w-100">
                        <div class="progress-bar-xs progress">
                          <div class="progress-bar bg-warning" role="progressbar" aria-valuenow="54"
                            aria-valuemin="0" aria-valuemax="100" style="width: 54%;">
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
              <td class="text-center">
                <div role="group" class="btn-group-sm btn-group">
                  <button class="btn-shadow btn btn-primary">Hire</button>
                  <button class="btn-shadow btn btn-primary">Fire</button>
                </div>
              </td>
            </tr>
            <tr>
              <td class="text-center text-muted" style="width: 80px;">#56</td>
              <td class="text-center" style="width: 80px;">
                <img width="40" class="rounded-circle" src="@/assets/images/avatars/2.jpg" alt />
              </td>
              <td class="text-center">
                <a href="javascript:void(0)">Darrell Lowe</a>
              </td>
              <td class="text-center">
                <a href="javascript:void(0)">Riddle Electronics</a>
              </td>
              <td class="text-center">
                <div class="badge badge-pill badge-warning">In Progress</div>
              </td>
              <td class="text-center">
                <span class="pr-2 opacity-6">
                  <font-awesome-icon icon="business-time" />
                </span>
                6 Dec
              </td>
              <td class="text-center" style="width: 200px;">
                <div class="widget-content p-0">
                  <div class="widget-content-outer">
                    <div class="widget-content-wrapper">
                      <div class="widget-content-left pr-2">
                        <div class="widget-numbers fsize-1 text-success">97%</div>
                      </div>
                      <div class="widget-content-right w-100">
                        <div class="progress-bar-xs progress">
                          <div class="progress-bar bg-success" role="progressbar" aria-valuenow="97" aria-valuemin="0"
                            aria-valuemax="100" style="width: 97%;">
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
              <td class="text-center">
                <div role="group" class="btn-group-sm btn-group">
                  <button class="btn-shadow btn btn-primary">Hire</button>
                  <button class="btn-shadow btn btn-primary">Fire</button>
                </div>
              </td>
            </tr>
            <tr>
              <td class="text-center text-muted" style="width: 80px;">#56</td>
              <td class="text-center" style="width: 80px;">
                <img width="40" class="rounded-circle" src="@/assets/images/avatars/1.jpg" alt />
              </td>
              <td class="text-center">
                <a href="javascript:void(0)">George T. Cottrell</a>
              </td>
              <td class="text-center">
                <a href="javascript:void(0)">Pixelcloud</a>
              </td>
              <td class="text-center">
                <div class="badge badge-pill badge-success">Completed</div>
              </td>
              <td class="text-center">
                <span class="pr-2 opacity-6">
                  <font-awesome-icon icon="business-time" />
                </span>
                19 Dec
              </td>
              <td class="text-center" style="width: 200px;">
                <div class="widget-content p-0">
                  <div class="widget-content-outer">
                    <div class="widget-content-wrapper">
                      <div class="widget-content-left pr-2">
                        <div class="widget-numbers fsize-1 text-info">88%</div>
                      </div>
                      <div class="widget-content-right w-100">
                        <div class="progress-bar-xs progress">
                          <div class="progress-bar bg-info" role="progressbar" aria-valuenow="88"
                            aria-valuemin="0" aria-valuemax="100" style="width: 88%;">
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
              <td class="text-center">
                <div role="group" class="btn-group-sm btn-group">
                  <button class="btn-shadow btn btn-primary">Hire</button>
                  <button class="btn-shadow btn btn-primary">Fire</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="d-block p-4 text-center card-footer">
        <button class="btn-pill btn-shadow btn-wide fsize-1 btn btn-dark btn-lg">
          <span class="mr-2 opacity-7">
            <font-awesome-icon icon="cog" spin />
          </span>
          <span class="mr-1">View Complete Report</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import VueCircle from "vue2-circle-progress";

import HeatmapExample from "./Monitoring/Chart1.vue";
import DonutExample from "./Monitoring/Chart2.vue";
import chart3 from "./Monitoring/Chart3.vue";
import chart4 from "./Monitoring/Chart4.vue";
import chart5 from "./Monitoring/Chart5.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBatteryThreeQuarters,
  faAngleDown,
  faAngleUp,
  faAngleRight,
  faHome,
  faQuestionCircle,
  faBusinessTime
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faBatteryThreeQuarters,
  faAngleDown,
  faAngleUp,
  faAngleRight,
  faHome,
  faQuestionCircle,
  faBusinessTime
);

export default {
  components: {
    VueCircle,
    "font-awesome-icon": FontAwesomeIcon,
    HeatmapExample,
    DonutExample,

    chart3,
    chart4,
    chart5
  },
  data: () => ({
    fill: { color: "#3f6ad8" },
    fill2: { color: "#d92550" },
    fill3: { color: "#f7b924" },
    fill4: { color: "#3ac47d" }
  }),

  methods: {}
};
</script>
