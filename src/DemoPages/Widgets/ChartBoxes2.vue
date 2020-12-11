<template>
  <div>
    <page-title :heading="heading" :subheading="subheading" :icon="icon"></page-title>
    <tabs :tabs="tabs" :currentTab="currentTab" :wrapper-class="'body-tabs shadow-tabs'" :tab-class="'tab-item'"
      :tab-active-class="'tab-item-active'" :line-class="'tab-item-line'" @onClick="handleClick" />
    <div class="content">
      <div v-if="currentTab === 'tab1'">
        <div class="row">
          <div class="col-md-4">
            <div class="card mb-3 widget-chart widget-chart2 text-left">
              <div class="widget-chart-content">
                <div class="widget-chart-flex">
                  <div class="widget-title">Sales</div>
                  <div class="widget-subtitle text-muted">Monthly Goals</div>
                </div>
                <div class="widget-chart-flex">
                  <div class="widget-numbers">
                    <span>$1283</span>
                  </div>
                  <div class="widget-description ml-auto text-success">
                    <font-awesome-icon icon="angle-up" />
                    <span class="pl-1">
                      <span>176%</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card mb-3 widget-chart widget-chart2 text-left">
              <div class="widget-chart-actions">
                <div class="btn-group dropdown">
                  <button type="button" aria-haspopup="true" aria-expanded="false" class="btn btn-link" data-toggle="dropdown">
                    <font-awesome-icon icon="ellipsis-h" />
                  </button>
                  <div tabindex="-1"  role="menu" aria-hidden="true"
                    class="dropdown-menu-lg dropdown-menu-right dropdown-menu">
                    <div class="dropdown-menu-header">
                      <div class="dropdown-menu-header-inner bg-primary">
                        <div class="menu-header-image" style="background-image: url('assets/images/dropdown-header/abstract1.jpg');"></div>
                        <div class="menu-header-content">
                          <div>
                            <h5 class="menu-header-title">Settings</h5>
                            <h6 class="menu-header-subtitle">Manage all of your options</h6>
                          </div>
                          <div class="menu-header-btn-pane">
                            <button class="mr-2 btn btn-dark btn-sm">Settings</button>
                            <button class="btn-icon btn-icon-only btn btn-warning btn-sm">
                              <i class="pe-7s-config btn-icon-wrapper"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
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
                      <li class="nav-item-divider nav-item"></li>
                      <li class="nav-item-btn nav-item">
                        <button class="btn-wide btn-shadow btn btn-danger btn-sm">Cancel</button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="widget-chart-content">
                <div class="widget-chart-flex">
                  <div class="widget-title">Profiles</div>
                </div>
                <div class="widget-chart-flex">
                  <div class="widget-numbers text-primary">
                    <span>368k</span>
                  </div>
                  <div class="widget-description ml-auto text-warning">
                    <span class="pr-2">66.5%</span>
                    <font-awesome-icon icon="arrow-left" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card mb-3 widget-chart widget-chart2 text-left">
              <div class="widget-chart-content">
                <div class="widget-chart-flex">
                  <div class="widget-title">Clients</div>
                  <div class="widget-subtitle text-danger opacity-7">Returning</div>
                </div>
                <div class="widget-chart-flex">
                  <div class="widget-numbers">
                    <span>87%</span>
                  </div>
                  <div class="widget-description ml-auto text-danger">
                    <span class="pr-1">45</span>
                    <font-awesome-icon icon="angle-up" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card mb-3 widget-chart widget-chart2 text-left">
              <div class="widget-chart-content">
                <div class="widget-chart-flex">
                  <div class="widget-title">Reports</div>
                  <div class="widget-subtitle text-muted">Bugs Fixed</div>
                </div>
                <div class="widget-chart-flex">
                  <div class="widget-numbers text-warning">
                    <span>1,621</span>
                  </div>
                  <div class="widget-description ml-auto text-info">
                    <font-awesome-icon icon="arrow-right" />
                    <span class="pl-1">27.2%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card mb-3 widget-chart widget-chart2 text-left">
              <div class="widget-chart-content">
                <div class="widget-chart-flex">
                  <div class="widget-title">Support Requests</div>
                  <div class="widget-subtitle text-success opacity-7">Solved</div>
                </div>
                <div class="widget-chart-flex">
                  <div class="widget-numbers">
                    <span>183</span>
                  </div>
                  <div class="widget-description ml-auto text-success">
                    <span class="pr-1">32</span>
                    <font-awesome-icon icon="angle-down" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card mb-3 widget-chart widget-chart2 text-left">
              <div class="widget-chart-content">
                <div class="widget-chart-flex">
                  <div class="widget-title text-success">Reports</div>
                  <div class="widget-subtitle text-muted">Bugs Fixed</div>
                </div>
                <div class="widget-chart-flex">
                  <div class="widget-numbers text-success">
                    <span>1,621</span>
                  </div>
                  <div class="widget-description ml-auto text-info">
                    <font-awesome-icon icon="arrow-right" />
                    <span class="pl-1">17.2%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="divider mt-0" style="margin-bottom: 30px;"></div>
        <div class="row">
          <div class="col-md-4">
            <div class="card mb-3 widget-chart widget-chart2 text-left">
              <div class="widget-chat-wrapper-outer">
                <div class="widget-chart-content">
                  <div class="widget-chart-flex">
                    <div class="widget-title">Sales</div>
                    <div class="widget-subtitle text-muted">Monthly Goals</div>
                  </div>
                  <div class="widget-chart-flex">
                    <div class="widget-numbers">
                      <small>$</small>
                      1283
                    </div>
                    <div class="widget-description ml-auto text-success">
                      <font-awesome-icon icon="angle-up" />
                      <span class="pl-1">175.5%</span>
                    </div>
                  </div>
                </div>
                <div class="widget-progress-wrapper">
                  <div class="progress-bar-sm progress-bar-animated-alt progress">
                    <div class="progress-bar bg-success" role="progressbar" aria-valuenow="65"
                      aria-valuemin="0" aria-valuemax="100" style="width: 65%;">
                    </div>
                  </div>
                  <div class="progress-sub-label">YoY Growth</div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card mb-3 widget-chart widget-chart2 text-left">
              <div class="widget-chat-wrapper-outer">
                <div class="widget-chart-content">
                  <div class="widget-chart-flex">
                    <div class="widget-title">Profiles</div>
                    <div class="widget-subtitle text-muted">Active Users</div>
                  </div>
                  <div class="widget-chart-flex">
                    <div class="widget-numbers">368</div>
                    <div class="widget-description ml-auto text-warning">
                      <span class="pr-2">66.5%</span>
                      <font-awesome-icon icon="arrow-left" />
                    </div>
                  </div>
                </div>
                <div class="widget-progress-wrapper">
                  <div class="progress-bar-xs progress-bar-animated-alt progress">
                    <div class="progress-bar bg-danger" role="progressbar" aria-valuenow="85"
                      aria-valuemin="0" aria-valuemax="100" style="width: 85%;">
                    </div>
                  </div>
                  <div class="progress-sub-label">Monthly Subscribers</div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card mb-3 widget-chart widget-chart2 text-left">
              <div class="widget-chat-wrapper-outer">
                <div class="widget-chart-content">
                  <div class="widget-chart-flex">
                    <div class="widget-title">Clients</div>
                    <div class="widget-subtitle text-danger opacity-7">Returning</div>
                  </div>
                  <div class="widget-chart-flex">
                    <div class="widget-numbers">
                      87
                      <small>%</small>
                    </div>
                    <div class="widget-description ml-auto text-danger">
                      <span class="pr-1">45</span>
                      <font-awesome-icon icon="angle-up" />
                    </div>
                  </div>
                </div>
                <div class="widget-progress-wrapper">
                  <div class="progress-bar-sm progress-bar-animated progress">
                    <div class="progress-bar bg-warning" role="progressbar" aria-valuenow="47"
                      aria-valuemin="0"  aria-valuemax="100" style="width: 47%;">
                    </div>
                  </div>
                  <div class="progress-sub-label">Successful Payments</div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card mb-3 widget-chart widget-chart2 text-left">
              <div class="widget-chat-wrapper-outer">
                <div class="widget-chart-content">
                  <div class="widget-chart-flex">
                    <div class="widget-title">Reports</div>
                    <div class="widget-subtitle text-muted">Bugs Fixed</div>
                  </div>
                  <div class="widget-chart-flex">
                    <div class="widget-numbers text-warning">1621</div>
                    <div class="widget-description ml-auto text-info">
                      <font-awesome-icon icon="arrow-right" />
                      <span>27.2%</span>
                    </div>
                  </div>
                </div>
                <div class="widget-progress-wrapper">
                  <div class="progress-bar-xs progress">
                    <div class="progress-bar bg-primary" role="progressbar" aria-valuenow="91"
                      aria-valuemin="0" aria-valuemax="100" style="width: 91%;">
                    </div>
                  </div>
                  <div class="progress-sub-label">Severe Reports</div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card mb-3 widget-chart widget-chart2 text-left">
              <div class="widget-chat-wrapper-outer">
                <div class="widget-chart-content">
                  <div class="widget-chart-flex">
                    <div class="widget-title">Payments</div>
                    <div class="widget-subtitle text-danger opacity-7">Failed</div>
                  </div>
                  <div class="widget-chart-flex">
                    <div class="widget-numbers text-success">
                      43
                      <small>%</small>
                    </div>
                    <div class="widget-description ml-auto text-danger">
                      <span class="pr-1">45</span>
                      <font-awesome-icon icon="angle-up" />
                    </div>
                  </div>
                </div>
                <div class="widget-progress-wrapper">
                  <div class="progress-bar progress">
                    <div class="progress-bar progress-bar-animated bg-success progress-bar-striped" role="progressbar" aria-valuenow="47"
                      aria-valuemin="0" aria-valuemax="100" style="width: 47%;">
                    </div>
                  </div>
                  <div class="progress-sub-label">Successful Payments</div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card mb-3 widget-chart widget-chart2 text-left">
              <div class="widget-chat-wrapper-outer">
                <div class="widget-chart-content">
                  <div class="widget-chart-flex">
                    <div class="widget-title text-warning">Reports</div>
                    <div class="widget-subtitle text-muted">Bugs Fixed</div>
                  </div>
                  <div class="widget-chart-flex">
                    <div class="widget-numbers text-danger">1621</div>
                    <div class="widget-description ml-auto text-info">
                      <font-awesome-icon icon="arrow-right" />
                      <span>27.2%</span>
                    </div>
                  </div>
                </div>
                <div class="widget-progress-wrapper">
                  <div class="progress-bar-lg progress">
                    <div class="progress-bar bg-danger" role="progressbar" aria-valuenow="55"
                      aria-valuemin="0" aria-valuemax="100" style="width: 55%;">
                    </div>
                  </div>
                  <div class="progress-sub-label">Severe Reports</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="currentTab === 'tab2'">
        <div class="row">
          <div class="col-md-4">
            <div class="card mb-3 widget-chart widget-chart2 bg-primary text-left">
              <div class="widget-chart-content text-white">
                <div class="widget-chart-flex">
                  <div class="widget-title">Sales</div>
                  <div class="widget-subtitle opacity-7">Monthly Goals</div>
                </div>
                <div class="widget-chart-flex">
                  <div class="widget-numbers">
                    <small>$</small>
                    1283
                  </div>
                  <div class="widget-description ml-auto opacity-7">
                    <font-awesome-icon icon="angle-up" />
                    <span class="pl-1">175.5%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card mb-3 widget-chart widget-chart2 bg-info text-left">
              <div class="widget-chart-actions">
                <div class="btn-group dropdown">
                  <button type="button" aria-haspopup="true"
                    aria-expanded="false" class="text-white btn btn-link" data-toggle="dropdown">
                    <font-awesome-icon icon="ellipsis-h" />
                  </button>
                  <div tabindex="-1" role="menu" aria-hidden="true" class="dropdown-menu-lg dropdown-menu-right dropdown-menu">
                    <div class="dropdown-menu-header">
                      <div class="dropdown-menu-header-inner bg-primary">
                        <div class="menu-header-image"
                          style="background-image: url('assets/images/dropdown-header/abstract1.jpg');">
                        </div>
                        <div class="menu-header-content">
                          <div>
                            <h5 class="menu-header-title">Settings</h5>
                            <h6 class="menu-header-subtitle">Manage all of your options</h6>
                          </div>
                          <div class="menu-header-btn-pane">
                            <button class="mr-2 btn btn-dark btn-sm">Settings</button>
                            <button class="btn-icon btn-icon-only btn btn-warning btn-sm">
                              <i class="pe-7s-config btn-icon-wrapper"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
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
                      <li class="nav-item-divider nav-item"></li>
                      <li class="nav-item-btn nav-item">
                        <button class="btn-wide btn-shadow btn btn-danger btn-sm">Cancel</button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="widget-chart-content text-white">
                <div class="widget-chart-flex">
                  <div class="widget-title">Profiles</div>
                </div>
                <div class="widget-chart-flex">
                  <div class="widget-numbers">368</div>
                  <div class="widget-description ml-auto opcity-5">
                    <span class="pr-1">66.5%</span>
                    <font-awesome-icon icon="arrow-left" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card mb-3 widget-chart widget-chart2 bg-focus text-left">
              <div class="widget-chart-content text-white">
                <div class="widget-chart-flex">
                  <div class="widget-title">Clients</div>
                  <div class="widget-subtitle text-warning">Returning</div>
                </div>
                <div class="widget-chart-flex">
                  <div class="widget-numbers">
                    87
                    <small>%</small>
                  </div>
                  <div class="widget-description ml-auto text-warning">
                    <span class="pr-1">45</span>
                    <font-awesome-icon icon="angle-up" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card mb-3 widget-chart widget-chart2 bg-vicious-stance text-left">
              <div class="widget-chart-content text-white">
                <div class="widget-chart-flex">
                  <div class="widget-title">Reports</div>
                  <div class="widget-subtitle text-success">Bugs Fixed</div>
                </div>
                <div class="widget-chart-flex">
                  <div class="widget-numbers text-warning">357</div>
                  <div class="widget-description ml-auto text-success">
                    <font-awesome-icon icon="arrow-right" />
                    <span class="pl-1">27.2%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card mb-3 widget-chart widget-chart2 bg-slick-carbon text-left">
              <div class="widget-chart-content text-white">
                <div class="widget-chart-flex">
                  <div class="widget-title">Payments</div>
                  <div class="widget-subtitle text-danger">Failed</div>
                </div>
                <div class="widget-chart-flex">
                  <div class="widget-numbers text-danger">475</div>
                  <div class="widget-description ml-auto text-danger">
                    <font-awesome-icon icon="arrow-right" />
                    <span class="pl-1">27.2%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card mb-3 widget-chart widget-chart2 bg-night-sky text-left">
              <div class="widget-chart-content text-white">
                <div class="widget-chart-flex">
                  <div class="widget-title">Requests</div>
                  <div class="widget-subtitle text-white">Submitted</div>
                </div>
                <div class="widget-chart-flex">
                  <div class="widget-numbers text-white">345</div>
                  <div class="widget-description ml-auto text-success">
                    <font-awesome-icon icon="arrow-right" />
                    <span class="pr-1">27.2%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="divider mt-0" style="margin-bottom: 30px;"></div>
        <div class="row">
          <div class="col-md-4">
            <div class="card mb-3 widget-chart widget-chart2 bg-warm-flame text-left">
              <div class="widget-chat-wrapper-outer">
                <div class="widget-chart-content text-white">
                  <div class="widget-chart-flex">
                    <div class="widget-title">Sales</div>
                    <div class="widget-subtitle text-white">Monthly Goals</div>
                  </div>
                  <div class="widget-chart-flex">
                    <div class="widget-numbers">
                      <small>$</small>
                      1283
                    </div>
                    <div class="widget-description ml-auto text-white">
                      <font-awesome-icon icon="angle-up" />
                      <span class="pl-1">175.5%</span>
                    </div>
                  </div>
                </div>
                <div class="widget-progress-wrapper">
                  <div class="progress-bar-sm progress-bar-animated-alt progress">
                    <div class="progress-bar bg-success" role="progressbar" aria-valuenow="65"
                      aria-valuemin="0" aria-valuemax="100" style="width: 65%;">
                    </div>
                  </div>
                  <div class="progress-sub-label text-white">YoY Growth</div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card mb-3 widget-chart widget-chart2 bg-tempting-azure text-left">
              <div class="widget-chat-wrapper-outer">
                <div class="widget-chart-content text-dark">
                  <div class="widget-chart-flex">
                    <div class="widget-title">Profiles</div>
                    <div class="widget-subtitle text-dark">Active Users</div>
                  </div>
                  <div class="widget-chart-flex">
                    <div class="widget-numbers">368</div>
                    <div class="widget-description ml-auto text-dark">
                      <span class="pr-1">66.5%</span>
                      <font-awesome-icon icon="arrow-left" />
                    </div>
                  </div>
                </div>
                <div class="widget-progress-wrapper">
                  <div class="progress-bar-xs progress-bar-animated-alt progress">
                    <div class="progress-bar bg-danger" role="progressbar" aria-valuenow="85"
                      aria-valuemin="0" aria-valuemax="100" style="width: 85%;">
                    </div>
                  </div>
                  <div class="progress-sub-label">Monthly Subscribers</div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card mb-3 widget-chart widget-chart2 bg-plum-plate text-left">
              <div class="widget-chat-wrapper-outer">
                <div class="widget-chart-content text-white">
                  <div class="widget-chart-flex">
                    <div class="widget-title">Clients</div>
                    <div class="widget-subtitle text-white opacity-7">Returning</div>
                  </div>
                  <div class="widget-chart-flex">
                    <div class="widget-numbers">
                      87
                      <small>%</small>
                    </div>
                    <div class="widget-description ml-auto text-white">
                      <span class="pr-1">45</span>
                      <font-awesome-icon icon="angle-up" />
                    </div>
                  </div>
                </div>
                <div class="widget-progress-wrapper">
                  <div class="progress-bar-sm progress-bar-animated progress">
                    <div class="progress-bar bg-warning" role="progressbar" aria-valuenow="47"
                      aria-valuemin="0" aria-valuemax="100" style="width: 47%;">
                    </div>
                  </div>
                  <div class="progress-sub-label text-white">Successful Payments</div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card mb-3 widget-chart widget-chart2 bg-mixed-hopes text-left">
              <div class="widget-chat-wrapper-outer">
                <div class="widget-chart-content text-white">
                  <div class="widget-chart-flex">
                    <div class="widget-title">Reports</div>
                    <div class="widget-subtitle text-white">Bugs Fixed</div>
                  </div>
                  <div class="widget-chart-flex">
                    <div class="widget-numbers text-warning">1621</div>
                    <div class="widget-description ml-auto text-white">
                      <font-awesome-icon icon="arrow-right" />
                      <span class="pl-1">27.2%</span>
                    </div>
                  </div>
                </div>
                <div class="widget-progress-wrapper">
                  <div class="progress-bar-xs progress">
                    <div class="progress-bar bg-primary" role="progressbar" aria-valuenow="91"
                      aria-valuemin="0" aria-valuemax="100" style="width: 91%;">
                    </div>
                  </div>
                  <div class="progress-sub-label text-white">Severe Reports</div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card mb-3 widget-chart widget-chart2 bg-slick-carbon text-left">
              <div class="widget-chat-wrapper-outer">
                <div class="widget-chart-content text-white">
                  <div class="widget-chart-flex">
                    <div class="widget-title opacity-5">Sales</div>
                    <div class="widget-subtitle opacity-5 text-white">Monthly Goals</div>
                  </div>
                  <div class="widget-chart-flex">
                    <div class="widget-numbers">
                      <small>$</small>
                      1283
                    </div>
                    <div class="widget-description ml-auto text-white">
                      <font-awesome-icon icon="angle-up" />
                      <span class="pl-1">175.5%</span>
                    </div>
                  </div>
                </div>
                <div class="widget-progress-wrapper">
                  <div class="progress-bar-xs progress-bar-animated-alt progress">
                    <div class="progress-bar bg-warning" role="progressbar" aria-valuenow="65"
                      aria-valuemin="0" aria-valuemax="100" style="width: 65%;">
                    </div>
                  </div>
                  <div class="progress-sub-label text-white">YoY Growth</div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card mb-3 widget-chart widget-chart2 bg-asteroid text-left">
              <div class="widget-chat-wrapper-outer">
                <div class="widget-chart-content text-white">
                  <div class="widget-chart-flex">
                    <div class="widget-title opacity-5">Payments</div>
                    <div class="widget-subtitle opacity-5 text-white">Totals</div>
                  </div>
                  <div class="widget-chart-flex">
                    <div class="widget-numbers">
                      <small>$</small>
                      653
                    </div>
                    <div class="widget-description ml-auto text-white">
                      <font-awesome-icon icon="angle-up" />
                      <span class="pl-1">$4596</span>
                    </div>
                  </div>
                </div>
                <div class="widget-progress-wrapper">
                  <div class="progress-bar-xs progress-bar-animated-alt progress">
                    <div class="progress-bar bg-info" role="progressbar" aria-valuenow="65"
                      aria-valuemin="0" aria-valuemax="100" style="width: 65%;">
                    </div>
                  </div>
                  <div class="progress-sub-label text-white">YoY Growth</div>
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
import Tabs from "vue-tabs-with-active-line";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faArrowRight,
  faArrowLeft,
  faAngleUp,
  faEllipsisH,
  faAngleDown
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faArrowRight, faAngleUp, faArrowLeft, faEllipsisH, faAngleDown);

const TABS = [
  {
    title: "Basic",
    value: "tab1"
  },
  {
    title: "Colors",
    value: "tab2"
  }
];

export default {
  components: {
    PageTitle,
    Tabs,
    "font-awesome-icon": FontAwesomeIcon
  },
  data: () => ({
    heading: "Chart Boxes II",
    subheading:
      "Unlimited styles are available for our chart boxes. Check out our dashboard examples for more.",
    icon: "pe-7s-plug icon-gradient bg-arielle-smile",

    tabs: TABS,
    currentTab: "tab1"
  }),

  methods: {
    handleClick(newTab) {
      this.currentTab = newTab;
    }
  }
};
</script>
