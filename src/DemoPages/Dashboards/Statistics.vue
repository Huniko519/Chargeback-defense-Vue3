<template>
  <div>
    <page-title :heading="heading" :subheading="subheading" :icon="icon"></page-title>
    <div class="row">
      <div class="col-sm-12 col-md-7">
        <div class="row">
          <div class="col-sm-12 col-md-6">
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
          <div class="col-sm-12 col-md-6">
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
                                <i class="fa fa-angle-up"></i>
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
          <div class="col-sm-12 col-md-6">
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
          <div class="col-sm-12 col-md-6">
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
      </div>
      <div class="col-sm-12 col-md-5">
        <div class="mb-3 card">
          <div class="card-body">
            <div class="widget-chart widget-chart2 text-left p-0">
              <div class="widget-chat-wrapper-outer">
                <div class="widget-chart-content">
                  <div class="widget-chart-flex">
                    <div class="widget-numbers mt-0">
                      <div class="widget-chart-flex">
                        <div>
                          <small class="opacity-5">$</small>
                          <span>628</span>
                        </div>
                        <div class="widget-title ml-2 opacity-5 font-size-lg text-muted">Total Expenses Today</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="widget-chart-wrapper widget-chart-wrapper-lg opacity-10 m-0">
                  <div id="dashboard-sparkline-carousel-3" style="min-height: 120px;">
                    <chart1 :height="165" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mb-3 card">
      <div class="tab-content">
        <div class="tab-pane fade active show" id="tab-minimal-2">
          <div class="card-body">
            <div class="widget-chart-wrapper widget-chart-wrapper-lg opacity-10 m-0">
              <MixedExample></MixedExample>
            </div>
            <h5 class="card-title">Target Sales</h5>
            <div class="mt-3 row">
              <div class="col-sm-12 col-md-4">
                <div class="widget-content p-0">
                  <div class="widget-content-outer">
                    <div class="widget-content-wrapper">
                      <div class="widget-content-left">
                        <div class="widget-numbers text-dark">65%</div>
                      </div>
                    </div>
                    <div class="widget-progress-wrapper mt-1">
                      <div class="progress-bar-xs progress-bar-animated-alt progress">
                        <div class="progress-bar bg-info" role="progressbar" aria-valuenow="65"
                          aria-valuemin="0" aria-valuemax="100" style="width: 65%;">
                        </div>
                      </div>
                      <div class="progress-sub-label">
                        <div class="sub-label-left font-size-md">Sales</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-12 col-md-4">
                <div class="widget-content p-0">
                  <div class="widget-content-outer">
                    <div class="widget-content-wrapper">
                      <div class="widget-content-left">
                        <div class="widget-numbers text-dark">22%</div>
                      </div>
                    </div>
                    <div class="widget-progress-wrapper mt-1">
                      <div class="progress-bar-xs progress-bar-animated-alt progress">
                        <div class="progress-bar bg-warning" role="progressbar" aria-valuenow="22"
                          aria-valuemin="0" aria-valuemax="100" style="width: 22%;">
                        </div>
                      </div>
                      <div class="progress-sub-label">
                        <div class="sub-label-left font-size-md">Profiles</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-12 col-md-4">
                <div class="widget-content p-0">
                  <div class="widget-content-outer">
                    <div class="widget-content-wrapper">
                      <div class="widget-content-left">
                        <div class="widget-numbers text-dark">83%</div>
                      </div>
                    </div>
                    <div class="widget-progress-wrapper mt-1">
                      <div class="progress-bar-xs progress-bar-animated-alt progress">
                        <div class="progress-bar bg-success" role="progressbar" aria-valuenow="83"
                          aria-valuemin="0" aria-valuemax="100" style="width: 83%;">
                        </div>
                      </div>
                      <div class="progress-sub-label">
                        <div class="sub-label-left font-size-md">Tickets</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="tab-pane fade" id="tab-minimal-3">
          <div class="rm-border card-header">
            <div>
              <h5 class="menu-header-title text-capitalize text-primary">Income Report</h5>
            </div>
            <div class="btn-actions-pane-right text-capitalize">
              <div class="btn-group dropdown">
                <button type="button" data-toggle="dropdown" aria-haspopup="true"
                  aria-expanded="false" class="btn-wide mr-1 dropdown-toggle btn btn-outline-focus btn-sm">Options
                </button>
                <div tabindex="-1" role="menu" aria-hidden="true"
                  class="dropdown-menu-lg rm-pointers dropdown-menu dropdown-menu-right">
                  <div class="dropdown-menu-header">
                    <div class="dropdown-menu-header-inner bg-primary">
                      <div class="menu-header-image"
                        style="background-image: url('@/assets/images/dropdown-header/abstract2.jpg');">
                      </div>
                      <div class="menu-header-content">
                        <div>
                          <h5 class="menu-header-title">Settings</h5>
                          <h6 class="menu-header-subtitle">Example Dropdown Menu</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="scroll-area-xs">
                    <div class="scrollbar-container ps">
                      <ul class="nav flex-column">
                        <li class="nav-item-header nav-item">Activity</li>
                        <li class="nav-item">
                          <a href="javascript:void(0);" class="nav-link">
                            Chat
                            <div class="ml-auto badge badge-pill badge-info">8</div>
                          </a>
                        </li>
                        <li class="nav-item">
                          <a href="javascript:void(0);" class="nav-link">Recover Password</a>
                        </li>
                        <li class="nav-item-header nav-item">My Account</li>
                        <li class="nav-item">
                          <a href="javascript:void(0);" class="nav-link">
                            Settings
                            <div class="ml-auto badge badge-success">New</div>
                          </a>
                        </li>
                        <li class="nav-item">
                          <a href="javascript:void(0);" class="nav-link">
                            Messages
                            <div class="ml-auto badge badge-warning">512</div>
                          </a>
                        </li>
                        <li class="nav-item">
                          <a href="javascript:void(0);" class="nav-link">Logs</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card-body p-2">
            <div class="widget-chart-wrapper widget-chart-wrapper-lg opacity-10 m-0">
              <div style="height: 274px;">
                <div id="chart-combined-tab-3"></div>
              </div>
            </div>
          </div>
          <div class="border-top bg-light card-header">
            <div class="actions-icon-btn mx-auto">
              <div>
                <div role="group" class="btn-group-lg btn-group nav">
                  <button type="button" data-toggle="tab" href="#tab-content-income"
                    class="btn-pill pl-3 active btn btn-focus">Income
                  </button>
                  <button type="button" data-toggle="tab" href="#tab-content-expenses"
                    class="btn-pill pr-3 btn btn-focus">Expenses
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="card-body">
            <div class="tab-content">
              <div class="tab-pane active fade show" id="tab-content-income" role="tabpanel">
                <h5 class="menu-header-title">Target Sales</h5>
                <h6 class="menu-header-subtitle opacity-6">Total performance for this month</h6>
                <div class="mt-3 row">
                  <div class="col-sm-12 col-md-6">
                    <div class="card-border mb-sm-3 mb-md-0 border-light no-shadow card">
                      <div class="widget-content">
                        <div class="widget-content-outer">
                          <div class="widget-content-wrapper">
                            <div class="widget-content-left">
                              <div class="widget-heading">Orders</div>
                            </div>
                            <div class="widget-content-right">
                              <div class="widget-numbers line-height-1 text-primary">
                                <span>366</span>
                              </div>
                            </div>
                          </div>
                          <div class="widget-progress-wrapper mt-1">
                            <div class="progress-bar-xs progress">
                              <div class="progress-bar bg-success" role="progressbar" aria-valuenow="76"
                                aria-valuemin="0" aria-valuemax="100" style="width: 76%;">
                              </div>
                            </div>
                            <div class="progress-sub-label">
                              <div class="sub-label-left">Monthly Target</div>
                              <div class="sub-label-right">100%</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-12 col-md-6">
                    <div class="card-border border-light no-shadow card">
                      <div class="widget-content">
                        <div class="widget-content-outer">
                          <div class="widget-content-wrapper">
                            <div class="widget-content-left">
                              <div class="widget-heading">Income</div>
                            </div>
                            <div class="widget-content-right">
                              <div class="widget-numbers line-height-1 text-success">
                                <span>$2797</span>
                              </div>
                            </div>
                          </div>
                          <div class="widget-progress-wrapper mt-1">
                            <div class="progress-bar-xs progress-bar-animated progress">
                              <div class="progress-bar bg-danger" role="progressbar" aria-valuenow="23"
                                aria-valuemin="0" aria-valuemax="100" style="width: 23%;">
                              </div>
                            </div>
                            <div class="progress-sub-label">
                              <div class="sub-label-left">Monthly Target</div>
                              <div class="sub-label-right">100%</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tab-pane fade" id="tab-content-expenses" role="tabpanel">
                <h5 class="menu-header-title">Tabbed Content</h5>
                <h6 class="menu-header-subtitle opacity-6">Example of various options built with Fiori</h6>
                <div class="mt-3 row">
                  <div class="col-sm-12 col-md-6">
                    <div class="card-hover-shadow-2x mb-sm-3 mb-md-0 widget-chart widget-chart2 bg-premium-dark text-left card">
                      <div class="widget-chart-content text-white">
                        <div class="widget-chart-flex">
                          <div class="widget-title">Sales</div>
                          <div class="widget-subtitle opacity-7">Monthly Goals</div>
                        </div>
                        <div class="widget-chart-flex">
                          <div class="widget-numbers text-success">
                            <small>$</small>
                            976
                            <small class="opacity-8 pl-2">
                              <i class="fa fa-angle-up"></i>
                            </small>
                          </div>
                          <div class="widget-description ml-auto opacity-7">
                            <i class="fa fa-angle-up"></i>
                            <span class="pl-1">175%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-12 col-md-6">
                    <div class="card-hover-shadow-2x widget-chart widget-chart2 bg-premium-dark text-left card">
                      <div class="widget-chart-content text-white">
                        <div class="widget-chart-flex">
                          <div class="widget-title">Clients</div>
                          <div class="widget-subtitle text-warning">Returning</div>
                        </div>
                        <div class="widget-chart-flex">
                          <div class="widget-numbers text-warning">
                            84
                            <small>%</small>
                            <small class="opacity-8 pl-2">
                              <font-awesome-icon icon="angle-down" />
                            </small>
                          </div>
                          <div class="widget-description ml-auto text-warning">
                            <span class="pr-1">45</span>
                            <i class="fa fa-angle-up"></i>
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
        <div class="card-shadow-danger mb-3 widget-chart widget-chart2 text-left card">
          <div class="widget-content p-0 w-100">
            <div class="widget-content-outer">
              <div class="widget-content-wrapper">
                <div class="widget-content-left pr-2 fsize-1">
                  <div class="widget-numbers mt-0 fsize-3 text-danger">71%</div>
                </div>
                <div class="widget-content-right w-100">
                  <div class="progress-bar-xs progress">
                    <div class="progress-bar bg-danger" role="progressbar" aria-valuenow="71"
                      aria-valuemin="0" aria-valuemax="100" style="width: 71%;">
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
        <div class="card-shadow-success mb-3 widget-chart widget-chart2 text-left card">
          <div class="widget-content p-0 w-100">
            <div class="widget-content-outer">
              <div class="widget-content-wrapper">
                <div class="widget-content-left pr-2 fsize-1">
                  <div class="widget-numbers mt-0 fsize-3 text-success">54%</div>
                </div>
                <div class="widget-content-right w-100">
                  <div class="progress-bar-xs progress">
                    <div class="progress-bar bg-success" role="progressbar" aria-valuenow="54"
                      aria-valuemin="0" aria-valuemax="100"  style="width: 54%;">
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
        <div class="card-shadow-warning mb-3 widget-chart widget-chart2 text-left card">
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
        <div class="card-shadow-info mb-3 widget-chart widget-chart2 text-left card">
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
    <div class="main-card mb-3 card">
      <div class="card-header">
        <div class="card-header-title font-size-lg text-capitalize font-weight-normal">Company Agents Status</div>
        <div class="btn-actions-pane-right">
          <button type="button" id="PopoverCustomT-1" class="btn-icon btn-wide btn-outline-2x btn btn-outline-focus btn-sm">
            Actions Menu
            <span class="pl-2 align-middle opactiy-7">
              <font-awesome-icon icon="angle-down" />
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
                <img width="40" class="rounded-circle" src="@/assets/images/avatars/1.jpg" alt />
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
                  <i class="fa fa-business-time"></i>
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
                <img width="40" class="rounded-circle" src="@/assets/images/avatars/2.jpg" alt />
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
                  <i class="fa fa-business-time"></i>
                </span>
                12 Dec
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
                <img width="40" class="rounded-circle" src="@/assets/images/avatars/3.jpg" alt />
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
                  <i class="fa fa-business-time"></i>
                </span>
                12 Dec
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
                          <div class="progress-bar bg-success" role="progressbar" aria-valuenow="97"
                            aria-valuemin="0" aria-valuemax="100" style="width: 97%;">
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
                <img width="40" class="rounded-circle" src="@/assets/images/avatars/4.jpg" alt />
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
                  <i class="fa fa-business-time"></i>
                </span>
                12 Dec
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
            <i class="fa fa-cog fa-spin"></i>
          </span>
          <span class="mr-1">View Complete Report</span>
        </button>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12 col-lg-6">
        <div class="mb-3 card">
          <div class="card-header-tab card-header">
            <div class="card-header-title font-size-lg text-capitalize font-weight-normal">Daily Sales</div>
            <div class="btn-actions-pane-right text-capitalize">
              <button class="btn-wide btn-outline-2x btn btn-outline-focus btn-sm">View All</button>
            </div>
          </div>
          <div class="card-body">
            <chart4 />
          </div>
          <div class="p-0 d-block card-footer">
            <div class="grid-menu grid-menu-2col">
              <div class="no-gutters row">
                <div class="p-2 col-sm-6">
                  <button class="btn-icon-vertical btn-transition-text btn-transition btn-transition-alt pt-2 pb-2 btn btn-outline-dark">
                    <i class="lnr-apartment text-dark opacity-7 btn-icon-wrapper mb-2"></i>
                    Overview
                  </button>
                </div>
                <div class="p-2 col-sm-6">
                  <button class="btn-icon-vertical btn-transition-text btn-transition btn-transition-alt pt-2 pb-2 btn btn-outline-dark">
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
      <div class="col-sm-12 col-lg-6">
        <div class="mb-3 card">
          <div class="card-header-tab card-header">
            <div class="card-header-title font-size-lg text-capitalize font-weight-normal">Total Expenses</div>
            <div class="btn-actions-pane-right text-capitalize">
              <button class="btn-wide btn-outline-2x btn btn-outline-primary btn-sm">View All</button>
            </div>
          </div>
          <div class="card-body">
            <chart5 />
          </div>
          <div class="p-0 d-block card-footer">
            <div class="grid-menu grid-menu-2col">
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
  </div>
</template>

<script>
import PageTitle from "../../Layout/Components/PageTitle.vue";
import chart4 from "./Monitoring/Chart4.vue";
import chart5 from "./Monitoring/Chart5.vue";
import chart1 from "./Analytics/chart2";
import MixedExample from "../Charts/Apex/MixedExample";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTrashAlt,
  faCheck,
  faCalendarAlt,
  faAngleDown
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faTrashAlt, faCheck, faAngleDown, faCalendarAlt);

export default {
  components: {
    PageTitle,
    "font-awesome-icon": FontAwesomeIcon,
    chart4,
    chart5,
    chart1,
    MixedExample
  },
  data: () => ({
    heading: "Statistics Panel",
    subheading:
      "This is an example dashboard created using build-in elements and components.",
    icon: "pe-7s-notebook icon-gradient bg-mixed-hopes"
  }),

  methods: {}
};
</script>