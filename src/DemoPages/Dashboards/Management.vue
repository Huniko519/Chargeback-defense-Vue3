<template>
  <div>
    <page-title :heading="heading" :subheading="subheading" :icon="icon"></page-title>
    <div class="row">
      <div class="col-md-6 col-xl-4">
        <div class="card mb-3 widget-content bg-night-fade">
          <div class="widget-content-wrapper text-white">
            <div class="widget-content-left">
              <div class="widget-heading">Total Orders</div>
              <div class="widget-subheading">Last year expenses</div>
            </div>
            <div class="widget-content-right">
              <div class="widget-numbers text-white">
                <span>1896</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-xl-4">
        <div class="card mb-3 widget-content bg-arielle-smile">
          <div class="widget-content-wrapper text-white">
            <div class="widget-content-left">
              <div class="widget-heading">Clients</div>
              <div class="widget-subheading">Total Clients Profit</div>
            </div>
            <div class="widget-content-right">
              <div class="widget-numbers text-white">
                <span>$ 568</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-xl-4">
        <div class="card mb-3 widget-content bg-happy-green">
          <div class="widget-content-wrapper text-white">
            <div class="widget-content-left">
              <div class="widget-heading">Followers</div>
              <div class="widget-subheading">People Interested</div>
            </div>
            <div class="widget-content-right">
              <div class="widget-numbers text-white">
                <span>46%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="d-xl-none d-lg-block col-md-6 col-xl-4">
        <div class="card mb-3 widget-content bg-premium-dark">
          <div class="widget-content-wrapper text-white">
            <div class="widget-content-left">
              <div class="widget-heading">Products Sold</div>
              <div class="widget-subheading">Revenue streams</div>
            </div>
            <div class="widget-content-right">
              <div class="widget-numbers text-warning">
                <span>$14M</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12 col-lg-6 col-xl-5">
        <b-card class="mb-3 nav-justified" no-body>
          <b-tabs class="card-header-tab-animation" card>
            <b-tab title="Sales Report" active>
              <div class="card mb-3 widget-chart widget-chart2 text-left w-100">
                <div class="widget-chat-wrapper-outer">
                  <div class="widget-chart-content pt-3 pr-3 pl-3">
                    <div class="widget-chart-flex">
                      <div class="widget-numbers">
                        <div class="widget-chart-flex">
                          <div>
                            <small class="opacity-5">$</small>
                            <span>368</span>
                          </div>
                          <div
                            class="widget-title ml-2 opacity-5 font-size-lg text-muted"
                          >Total Leads</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="widget-chart-wrapper widget-chart-wrapper-lg opacity-10 m-0" style="height: 161px;">
                    <chart1 :height="180" />
                  </div>
                </div>
              </div>
              <h6
                class="text-muted text-uppercase font-size-md opacity-5 font-weight-normal"
              >Top Authors</h6>
              <div class="scroll-area-sm">
                <VuePerfectScrollbar class="scrollbar-container" v-once>
                  <ul class="rm-list-borders rm-list-borders-scroll list-group list-group-flush">
                    <li class="list-group-item">
                      <div class="widget-content p-0">
                        <div class="widget-content-wrapper">
                          <div class="widget-content-left mr-3">
                            <img width="42" class="rounded-circle" src="@/assets/images/avatars/9.jpg" alt />
                          </div>
                          <div class="widget-content-left">
                            <div class="widget-heading">Ella-Rose Henry</div>
                            <div class="widget-subheading">Web Developer</div>
                          </div>
                          <div class="widget-content-right">
                            <div class="font-size-xlg text-muted">
                              <small class="opacity-5 pr-1">$</small>
                              <span>129</span>
                              <small class="text-danger pl-2">
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
                            <img width="42" class="rounded-circle" src="@/assets/images/avatars/5.jpg" alt/>
                          </div>
                          <div class="widget-content-left">
                            <div class="widget-heading">Ruben Tillman</div>
                            <div class="widget-subheading">UI Designer</div>
                          </div>
                          <div class="widget-content-right">
                            <div class="font-size-xlg text-muted">
                              <small class="opacity-5 pr-1">$</small>
                              <span>54</span>
                              <small class="text-success pl-2">
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
                            <img width="42" class="rounded-circle" src="@/assets/images/avatars/4.jpg" alt />
                          </div>
                          <div class="widget-content-left">
                            <div class="widget-heading">Vinnie Wagstaff</div>
                            <div class="widget-subheading">Java Programmer</div>
                          </div>
                          <div class="widget-content-right">
                            <div class="font-size-xlg text-muted">
                              <small class="opacity-5 pr-1">$</small>
                              <span>429</span>
                              <small class="text-warning pl-2">
                                <font-awesome-icon icon="dot-circle" />
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
                            <img width="42" class="rounded-circle" src="@/assets/images/avatars/3.jpg" alt />
                          </div>
                          <div class="widget-content-left">
                            <div class="widget-heading">Ella-Rose Henry</div>
                            <div class="widget-subheading">Web Developer</div>
                          </div>
                          <div class="widget-content-right">
                            <div class="font-size-xlg text-muted">
                              <small class="opacity-5 pr-1">$</small>
                              <span>129</span>
                              <small class="text-danger pl-2">
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
                            <img width="42" class="rounded-circle" src="@/assets/images/avatars/2.jpg" alt />
                          </div>
                          <div class="widget-content-left">
                            <div class="widget-heading">Ruben Tillman</div>
                            <div class="widget-subheading">UI Designer</div>
                          </div>
                          <div class="widget-content-right">
                            <div class="font-size-xlg text-muted">
                              <small class="opacity-5 pr-1">$</small>
                              <span>54</span>
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
            </b-tab>
            <b-tab title="Members">
              <h6 class="text-muted text-uppercase font-size-md opacity-5 font-weight-normal">Last Month Highlights</h6>
              <div class="scroll-area-lg">
                <VuePerfectScrollbar class="scrollbar-container" v-once>
                  <ul class="rm-list-borders rm-list-borders-scroll list-group list-group-flush">
                    <li class="list-group-item">
                      <div class="widget-content p-0">
                        <div class="widget-content-wrapper">
                          <div class="widget-content-left mr-3">
                            <img width="42" class="rounded-circle" src="@/assets/images/avatars/1.jpg" alt />
                          </div>
                          <div class="widget-content-left">
                            <div class="widget-heading">Ella-Rose Henry</div>
                            <div class="widget-subheading">Web Developer</div>
                          </div>
                          <div class="widget-content-right">
                            <div class="font-size-xlg text-muted">
                              <small class="opacity-5 pr-1">$</small>
                              <span>129</span>
                              <small class="text-danger pl-2">
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
                            <img width="42" class="rounded-circle" src="@/assets/images/avatars/10.jpg" alt />
                          </div>
                          <div class="widget-content-left">
                            <div class="widget-heading">Ruben Tillman</div>
                            <div class="widget-subheading">UI Designer</div>
                          </div>
                          <div class="widget-content-right">
                            <div class="font-size-xlg text-muted">
                              <small class="opacity-5 pr-1">$</small>
                              <span>54</span>
                              <small class="text-success pl-2">
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
                            <img width="42" class="rounded-circle" src="@/assets/images/avatars/9.jpg" alt />
                          </div>
                          <div class="widget-content-left">
                            <div class="widget-heading">Vinnie Wagstaff</div>
                            <div class="widget-subheading">Java Programmer</div>
                          </div>
                          <div class="widget-content-right">
                            <div class="font-size-xlg text-muted">
                              <small class="opacity-5 pr-1">$</small>
                              <span>429</span>
                              <small class="text-warning pl-2">
                                <font-awesome-icon icon="dot-circle" />
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
                            <img width="42" class="rounded-circle" src="@/assets/images/avatars/5.jpg" alt />
                          </div>
                          <div class="widget-content-left">
                            <div class="widget-heading">Ella-Rose Henry</div>
                            <div class="widget-subheading">Web Developer</div>
                          </div>
                          <div class="widget-content-right">
                            <div class="font-size-xlg text-muted">
                              <small class="opacity-5 pr-1">$</small>
                              <span>129</span>
                              <small class="text-danger pl-2">
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
                            <img width="42" class="rounded-circle" src="@/assets/images/avatars/8.jpg" alt />
                          </div>
                          <div class="widget-content-left">
                            <div class="widget-heading">Ruben Tillman</div>
                            <div class="widget-subheading">UI Designer</div>
                          </div>
                          <div class="widget-content-right">
                            <div class="font-size-xlg text-muted">
                              <small class="opacity-5 pr-1">$</small>
                              <span>54</span>
                              <small class="text-success pl-2">
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
                            <img width="42" class="rounded-circle" src="@/assets/images/avatars/5.jpg" alt />
                          </div>
                          <div class="widget-content-left">
                            <div class="widget-heading">Ella-Rose Henry</div>
                            <div class="widget-subheading">Web Developer</div>
                          </div>
                          <div class="widget-content-right">
                            <div class="font-size-xlg text-muted">
                              <small class="opacity-5 pr-1">$</small>
                              <span>129</span>
                              <small class="text-danger pl-2">
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
                            <img width="42" class="rounded-circle" src="@/assets/images/avatars/1.jpg" alt />
                          </div>
                          <div class="widget-content-left">
                            <div class="widget-heading">Ella-Rose Henry</div>
                            <div class="widget-subheading">Web Developer</div>
                          </div>
                          <div class="widget-content-right">
                            <div class="font-size-xlg text-muted">
                              <small class="opacity-5 pr-1">$</small>
                              <span>129</span>
                              <small class="text-danger pl-2">
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
                            <img width="42" class="rounded-circle" src="@/assets/images/avatars/10.jpg" alt />
                          </div>
                          <div class="widget-content-left">
                            <div class="widget-heading">Ruben Tillman</div>
                            <div class="widget-subheading">UI Designer</div>
                          </div>
                          <div class="widget-content-right">
                            <div class="font-size-xlg text-muted">
                              <small class="opacity-5 pr-1">$</small>
                              <span>54</span>
                              <small class="text-success pl-2">
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
                            <img width="42" class="rounded-circle" src="@/assets/images/avatars/9.jpg" alt />
                          </div>
                          <div class="widget-content-left">
                            <div class="widget-heading">Vinnie Wagstaff</div>
                            <div class="widget-subheading">Java Programmer</div>
                          </div>
                          <div class="widget-content-right">
                            <div class="font-size-xlg text-muted">
                              <small class="opacity-5 pr-1">$</small>
                              <span>429</span>
                              <small class="text-warning pl-2">
                                <font-awesome-icon icon="dot-circle" />
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
                            <img width="42" class="rounded-circle" src="@/assets/images/avatars/5.jpg" alt />
                          </div>
                          <div class="widget-content-left">
                            <div class="widget-heading">Ella-Rose Henry</div>
                            <div class="widget-subheading">Web Developer</div>
                          </div>
                          <div class="widget-content-right">
                            <div class="font-size-xlg text-muted">
                              <small class="opacity-5 pr-1">$</small>
                              <span>129</span>
                              <small class="text-danger pl-2">
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
                            <img width="42" class="rounded-circle" src="@/assets/images/avatars/8.jpg" alt />
                          </div>
                          <div class="widget-content-left">
                            <div class="widget-heading">Ruben Tillman</div>
                            <div class="widget-subheading">UI Designer</div>
                          </div>
                          <div class="widget-content-right">
                            <div class="font-size-xlg text-muted">
                              <small class="opacity-5 pr-1">$</small>
                              <span>54</span>
                              <small class="text-success pl-2">
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
                            <img width="42" class="rounded-circle" src="@/assets/images/avatars/5.jpg" alt />
                          </div>
                          <div class="widget-content-left">
                            <div class="widget-heading">Ella-Rose Henry</div>
                            <div class="widget-subheading">Web Developer</div>
                          </div>
                          <div class="widget-content-right">
                            <div class="font-size-xlg text-muted">
                              <small class="opacity-5 pr-1">$</small>
                              <span>129</span>
                              <small class="text-danger pl-2">
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
                            <img width="42" class="rounded-circle" src="@/assets/images/avatars/4.jpg" alt />
                          </div>
                          <div class="widget-content-left">
                            <div class="widget-heading">Ruben Tillman</div>
                            <div class="widget-subheading">UI Designer</div>
                          </div>
                          <div class="widget-content-right">
                            <div class="font-size-xlg text-muted">
                              <small class="opacity-5 pr-1">$</small>
                              <span>54</span>
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
              <div class="grid-menu grid-menu-xl grid-menu-3col mt-3">
                <div class="no-gutters row">
                  <div class="col-sm-6 col-xl-4 border-0">
                    <button class="btn-icon-vertical btn-transition-text btn-transition btn-transition-alt pt-2 pb-2 btn btn-outline-info">
                      <i class="pe-7s-world icon-gradient bg-night-fade btn-icon-wrapper btn-icon-lg mb-3 text-info"></i>
                      Automation
                    </button>
                  </div>
                  <div class="col-sm-6 col-xl-4 border-0">
                    <button class="btn-icon-vertical btn-transition-text btn-transition btn-transition-alt pt-2 pb-2 btn btn-outline-success">
                      <i class="pe-7s-piggy icon-gradient bg-night-fade btn-icon-wrapper btn-icon-lg mb-3 text-success"></i>
                      Reports
                    </button>
                  </div>
                  <div class="col-sm-6 col-xl-4 border-0">
                    <button class="btn-icon-vertical btn-transition-text btn-transition btn-transition-alt pt-2 pb-2 btn btn-outline-danger">
                      <i class="pe-7s-config icon-gradient bg-night-fade btn-icon-wrapper btn-icon-lg mb-3 text-danger"></i>
                      Settings
                    </button>
                  </div>
                </div>
              </div>
            </b-tab>
          </b-tabs>
        </b-card>
      </div>
      <div class="col-md-12 col-lg-6 col-xl-7">
        <div class="mb-3 card">
          <div class="card-header-tab card-header">
            <div class="card-header-title">
              <i class="header-icon lnr-rocket icon-gradient bg-tempting-azure"></i>
              Bandwidth Reports
            </div>
            <div class="btn-actions-pane-right">
              <button class="btn-wide btn btn-link btn-sm">View All</button>
              <button class="btn-wide btn-shadow btn btn-primary btn-sm">Add New Entry</button>
            </div>
          </div>
          <div class="widget-chart p-0">
            <MixedExample></MixedExample>
            <div class="widget-chart-content">
              <div class="widget-description mt-0 text-warning">
                <font-awesome-icon icon="arrow-left" />
                <span class="pl-1">175.5%</span>
                <span class="text-muted opacity-8 pl-1">increased server resources</span>
              </div>
            </div>
          </div>
          <div class="pt-2 card-body">
            <div class="row">
              <div class="col-md-6">
                <div class="widget-content">
                  <div class="widget-content-outer">
                    <div class="widget-content-wrapper">
                      <div class="widget-content-left">
                        <div class="widget-numbers fsize-3 text-muted">63%</div>
                      </div>
                      <div class="widget-content-right">
                        <div class="text-muted opacity-6">Generated Leads</div>
                      </div>
                    </div>
                    <div class="widget-progress-wrapper mt-1">
                      <div class="progress-bar-sm progress-bar-animated-alt progress">
                        <div class="progress-bar bg-danger" role="progressbar" aria-valuenow="63"
                          aria-valuemin="0" aria-valuemax="100" style="width: 63%;">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="widget-content">
                  <div class="widget-content-outer">
                    <div class="widget-content-wrapper">
                      <div class="widget-content-left">
                        <div class="widget-numbers fsize-3 text-muted">32%</div>
                      </div>
                      <div class="widget-content-right">
                        <div class="text-muted opacity-6">Submitted Tickers</div>
                      </div>
                    </div>
                    <div class="widget-progress-wrapper mt-1">
                      <div class="progress-bar-sm progress-bar-animated-alt progress">
                        <div class="progress-bar bg-success" role="progressbar" aria-valuenow="32"
                          aria-valuemin="0" aria-valuemax="100" style="width: 32%;">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="widget-content">
                  <div class="widget-content-outer">
                    <div class="widget-content-wrapper">
                      <div class="widget-content-left">
                        <div class="widget-numbers fsize-3 text-muted">71%</div>
                      </div>
                      <div class="widget-content-right">
                        <div class="text-muted opacity-6">Server Allocation</div>
                      </div>
                    </div>
                    <div class="widget-progress-wrapper mt-1">
                      <div class="progress-bar-sm progress-bar-animated-alt progress">
                        <div class="progress-bar bg-primary" role="progressbar" aria-valuenow="71"
                          aria-valuemin="0" aria-valuemax="100" style="width: 71%;">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="widget-content">
                  <div class="widget-content-outer">
                    <div class="widget-content-wrapper">
                      <div class="widget-content-left">
                        <div class="widget-numbers fsize-3 text-muted">41%</div>
                      </div>
                      <div class="widget-content-right">
                        <div class="text-muted opacity-6">Generated Leads</div>
                      </div>
                    </div>
                    <div class="widget-progress-wrapper mt-1">
                      <div class="progress-bar-sm progress-bar-animated-alt progress">
                        <div class="progress-bar bg-warning" role="progressbar" aria-valuenow="41"
                          aria-valuemin="0" aria-valuemax="100" style="width: 41%;">
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
    <div class="row">
      <div class="col-md-6 col-lg-4 col-xl-4">
        <div class="card-hover-shadow-2x mb-3 card">
          <div class="rm-border responsive-center text-left card-header">
            <div>
              <h5 class="menu-header-title text-capitalize text-success">Received Messages</h5>
            </div>
          </div>
          <div class="widget-chart widget-chart2 text-left pt-0">
            <div class="widget-chat-wrapper-outer">
              <div class="widget-chart-content">
                <div class="widget-chart-flex">
                  <div class="widget-numbers">
                    <div class="widget-chart-flex">
                      <div class="text-success">
                        <span>348</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="widget-chart-wrapper widget-chart-wrapper-lg he-auto opacity-10 m-0">
                <trend :data="[0, 8, 5, 7, 7, 8, 5, 2, 7, 8]" :gradient="['var(--success)']" stroke-width="3"
                  :height="80" stroke-linecap="round" auto-draw smooth>
                </trend>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-4 col-xl-4">
        <div class="card-hover-shadow-2x mb-3 card">
          <div class="rm-border responsive-center text-left card-header">
            <div>
              <h5 class="menu-header-title text-capitalize text-danger">Sent Messages</h5>
            </div>
          </div>
          <div class="widget-chart widget-chart2 text-left pt-0">
            <div class="widget-chat-wrapper-outer">
              <div class="widget-chart-content">
                <div class="widget-chart-flex">
                  <div class="widget-numbers">
                    <div class="widget-chart-flex">
                      <div class="text-danger">
                        <span>425</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="widget-chart-wrapper widget-chart-wrapper-lg he-auto opacity-10 m-0">
                <trend :data="[2,8,3,6,8,4,3,6,8,4]" :gradient="['var(--primary)']" stroke-width="3"
                  :height="80" stroke-linecap="round" auto-draw smooth>
                </trend>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-12 col-lg-4 col-xl-4">
        <div class="card-hover-shadow-2x mb-3 card bg-dark">
          <div class="rm-border bg-dark responsive-center text-left card-header">
            <div>
              <h5 class="menu-header-title text-capitalize text-warning">Inbox Total</h5>
            </div>
          </div>
          <div class="widget-chart widget-chart2 text-left pt-0">
            <div class="widget-chat-wrapper-outer">
              <div class="widget-chart-content">
                <div class="widget-chart-flex">
                  <div class="widget-numbers">
                    <div class="widget-chart-flex">
                      <div class="text-warning">
                        <span>274</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="widget-chart-wrapper widget-chart-wrapper-lg he-auto opacity-10 m-0">
                <trend :data="[5,8,3,6,8,5,3,8,5,3,8]" :gradient="['var(--warning)']" stroke-width="3"
                  :height="80" stroke-linecap="round" auto-draw smooth>
                </trend>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <div class="main-card mb-3 card">
          <div class="card-header">
            Active Users
            <div class="btn-actions-pane-right">
              <div role="group" class="btn-group-sm btn-group">
                <button class="active btn btn-focus">Last Week</button>
                <button class="btn btn-focus">All Month</button>
              </div>
            </div>
          </div>
          <div class="table-responsive">
            <table class="align-middle mb-0 table table-borderless table-striped table-hover">
              <thead>
                <tr>
                  <th class="text-center">#</th>
                  <th>Name</th>
                  <th class="text-center">City</th>
                  <th class="text-center">Status</th>
                  <th class="text-center">Sales</th>
                  <th class="text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="text-center text-muted">#345</td>
                  <td>
                    <div class="widget-content p-0">
                      <div class="widget-content-wrapper">
                        <div class="widget-content-left mr-3">
                          <div class="widget-content-left">
                            <img width="40" class="rounded-circle" src="@/assets/images/avatars/4.jpg" alt />
                          </div>
                        </div>
                        <div class="widget-content-left flex2">
                          <div class="widget-heading">John Doe</div>
                          <div class="widget-subheading opacity-7">Web Developer</div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td class="text-center">Madrid</td>
                  <td class="text-center">
                    <div class="badge badge-warning">Pending</div>
                  </td>
                  <td class="text-center" style="width: 150px;">chart</td>
                  <td class="text-center">
                    <button
                      type="button"
                      id="PopoverCustomT-1"
                      class="btn btn-primary btn-sm"
                    >Details</button>
                  </td>
                </tr>
                <tr>
                  <td class="text-center text-muted">#347</td>
                  <td>
                    <div class="widget-content p-0">
                      <div class="widget-content-wrapper">
                        <div class="widget-content-left mr-3">
                          <div class="widget-content-left">
                            <img width="40" class="rounded-circle" src="@/assets/images/avatars/3.jpg" alt />
                          </div>
                        </div>
                        <div class="widget-content-left flex2">
                          <div class="widget-heading">Ruben Tillman</div>
                          <div class="widget-subheading opacity-7">Etiam sit amet orci eget</div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td class="text-center">Berlin</td>
                  <td class="text-center">
                    <div class="badge badge-success">Completed</div>
                  </td>
                  <td class="text-center" style="width: 150px; position: relative;">chart</td>
                  <td class="text-center">
                    <button
                      type="button"
                      id="PopoverCustomT-2"
                      class="btn btn-primary btn-sm"
                    >Details</button>
                  </td>
                </tr>
                <tr>
                  <td class="text-center text-muted">#321</td>
                  <td>
                    <div class="widget-content p-0">
                      <div class="widget-content-wrapper">
                        <div class="widget-content-left mr-3">
                          <div class="widget-content-left">
                            <img width="40" class="rounded-circle" src="@/assets/images/avatars/2.jpg" alt />
                          </div>
                        </div>
                        <div class="widget-content-left flex2">
                          <div class="widget-heading">Elliot Huber</div>
                          <div class="widget-subheading opacity-7">Lorem ipsum dolor sic</div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td class="text-center">London</td>
                  <td class="text-center">
                    <div class="badge badge-danger">In Progress</div>
                  </td>
                  <td class="text-center" style="width: 150px; position: relative;">chart</td>
                  <td class="text-center">
                    <button
                      type="button"
                      id="PopoverCustomT-3"
                      class="btn btn-primary btn-sm"
                    >Details</button>
                  </td>
                </tr>
                <tr>
                  <td class="text-center text-muted">#55</td>
                  <td>
                    <div class="widget-content p-0">
                      <div class="widget-content-wrapper">
                        <div class="widget-content-left mr-3">
                          <div class="widget-content-left">
                            <img width="40" class="rounded-circle" src="@/assets/images/avatars/1.jpg" alt />
                          </div>
                        </div>
                        <div class="widget-content-left flex2">
                          <div class="widget-heading">Vinnie Wagstaff</div>
                          <div class="widget-subheading opacity-7">UI Designer</div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td class="text-center">Amsterdam</td>
                  <td class="text-center">
                    <div class="badge badge-info">On Hold</div>
                  </td>
                  <td class="text-center" style="width: 150px; position: relative;">chart</td>
                  <td class="text-center">
                    <button type="button" id="PopoverCustomT-4" class="btn btn-primary btn-sm">Details</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="d-block text-center card-footer">
            <button class="mr-2 btn-icon btn-icon-only btn btn-outline-danger">
              <i class="pe-7s-trash btn-icon-wrapper"></i>
            </button>
            <button class="btn-wide btn btn-success">Save</button>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center mb-3">
      <h5 class="menu-header-title text-capitalize mb-3 fsize-3">Profile Cards</h5>
      <div role="group" class="mb-3 btn-group-lg btn-group">
        <button class="btn-shadow btn btn-alternate btn-pill pl-3">Hour</button>
        <button class="btn-shadow btn btn-alternate">Day</button>
        <button class="btn-shadow btn btn-alternate">Week</button>
        <button class="btn-shadow btn btn-alternate btn-pill pr-3">Month</button>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12 col-md-6 col-xl-4">
        <div class="card-shadow-primary card-border mb-3 profile-responsive card">
          <div class="dropdown-menu-header">
            <div class="dropdown-menu-header-inner bg-alternate">
              <div class="menu-header-image opacity-2 dd-header-bg-4"></div>
              <div class="menu-header-content btn-pane-right">
                <div class="avatar-icon-wrapper mr-3 avatar-icon-xl btn-hover-shine">
                  <div class="avatar-icon rounded">
                    <img src="@/assets/images/avatars/9.jpg" alt="Avatar 6" />
                  </div>
                </div>
                <div>
                  <h5 class="menu-header-title">Jeff Walberg</h5>
                  <h6 class="menu-header-subtitle">Lead UX Developer</h6>
                </div>
                <div class="menu-header-btn-pane">
                  <button type="button" class="btn-wide btn-hover-shine btn-pill btn btn-warning">Messages</button>
                </div>
              </div>
            </div>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <div class="widget-content pt-2 pl-0 pb-2 pr-0">
                <div class="text-center">
                  <h5 class="widget-heading opacity-4 mb-0">Lorem ipsum</h5>
                </div>
              </div>
            </li>
            <li class="p-0 list-group-item">
              <div class="grid-menu grid-menu-2col overflow-hidden">
                <div class="no-gutters row">
                  <div class="col-sm-6">
                    <button class="btn-icon-vertical btn-square btn-transition br-bl btn btn-outline-link">
                      <i class="lnr-license btn-icon-wrapper btn-icon-lg mb-3"></i>View Profile
                    </button>
                  </div>
                  <div class="col-sm-6">
                    <button class="btn-icon-vertical btn-square btn-transition br-br btn btn-outline-link">
                      <i class="lnr-music-note btn-icon-wrapper btn-icon-lg mb-3"></i>Leads Generated
                    </button>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-sm-12 col-md-6 col-xl-4">
        <div class="card-shadow-primary card-border mb-3 profile-responsive card">
          <div class="dropdown-menu-header">
            <div class="dropdown-menu-header-inner bg-alternate">
              <div class="menu-header-image opacity-4 dd-header-bg-3"></div>
              <div class="menu-header-content btn-pane-right">
                <div class="avatar-icon-wrapper mr-3 avatar-icon-xl btn-hover-shine">
                  <div class="avatar-icon rounded">
                    <img src="@/assets/images/avatars/5.jpg" alt="Avatar 4" />
                  </div>
                </div>
                <div>
                  <h5 class="menu-header-title">John Rosenberg</h5>
                  <h6 class="menu-header-subtitle">Short profile description</h6>
                </div>
                <div class="menu-header-btn-pane">
                  <button type="button" class="btn-wide btn-hover-shine btn-pill btn btn-warning">Profile</button>
                </div>
              </div>
            </div>
          </div>
          <ul class="list-group list-group-flush">
            <li class="p-0 list-group-item">
              <div class="widget-content">
                <div class="text-center">
                  <h5 class="widget-heading mb-0 opacity-4">Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque.</h5>
                </div>
              </div>
            </li>
            <li class="p-0 list-group-item">
              <div class="grid-menu grid-menu-2col overflow-hidden">
                <div class="no-gutters row">
                  <div class="col-sm-6">
                    <div class="p-1">
                      <button class="btn-icon-vertical btn-transition-text btn-transition btn-transition-alt pt-2 pb-2 btn btn-outline-focus">
                        <i class="lnr-sun text-primary opacity-7 btn-icon-wrapper mb-2"></i>View
                        Profile
                      </button>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="p-1">
                      <button class="btn-icon-vertical btn-transition-text btn-transition btn-transition-alt pt-2 pb-2 btn btn-outline-focus">
                        <i class="lnr-magic-wand text-primary opacity-7 btn-icon-wrapper mb-2"></i>View Leads
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-sm-12 col-md-12 col-xl-4">
        <div class="card-shadow-primary card-border mb-3 profile-responsive card">
          <div class="dropdown-menu-header">
            <div class="dropdown-menu-header-inner bg-alternate">
              <div class="menu-header-image opacity-1 dd-header-bg-2"></div>
              <div class="menu-header-content btn-pane-right">
                <div class="avatar-icon-wrapper mr-3 avatar-icon-xl btn-hover-shine">
                  <div class="avatar-icon rounded">
                    <img src="@/assets/images/avatars/3.jpg" alt="Avatar 5" />
                  </div>
                </div>
                <div>
                  <h5 class="menu-header-title">Ruben Tillman</h5>
                  <h6 class="menu-header-subtitle">Etiam sit amet orci eget</h6>
                </div>
                <div class="menu-header-btn-pane">
                  <button type="button" class="btn-wide btn-hover-shine btn-pill btn btn-warning">Reports</button>
                </div>
              </div>
            </div>
          </div>
          <ul class="list-group list-group-flush">
            <li class="p-0 list-group-item">
              <div class="grid-menu grid-menu-2col overflow-hidden">
                <div class="no-gutters row">
                  <div class="col-sm-6">
                    <div class="p-2">
                      <button class="btn-icon-vertical btn-transition-text btn-transition btn-transition-alt pt-2 pb-2 btn btn-outline-dark">
                        <i class="lnr-lighter text-dark opacity-7 btn-icon-wrapper mb-2"></i>Automation
                      </button>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="p-2">
                      <button class="btn-icon-vertical btn-transition-text btn-transition btn-transition-alt pt-2 pb-2 btn btn-outline-danger">
                        <i class="lnr-construction text-danger opacity-7 btn-icon-wrapper mb-2"></i>Reports
                      </button>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="p-2">
                      <button class="btn-icon-vertical btn-transition-text btn-transition btn-transition-alt pt-2 pb-2 btn btn-outline-success">
                        <i class="lnr-bus text-success opacity-7 btn-icon-wrapper mb-2"></i>Activity
                      </button>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="p-2">
                      <button class="btn-icon-vertical btn-transition-text btn-transition btn-transition-alt pt-2 pb-2 btn btn-outline-focus">
                        <i class="lnr-gift text-focus opacity-7 btn-icon-wrapper mb-2"></i>Settings
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageTitle from "../../Layout/Components/PageTitle.vue";
import VuePerfectScrollbar from "vue-perfect-scrollbar";
import chart1 from "./Management/chart1";
import MixedExample from "../Charts/Apex/MixedExample";

import Trend from "vuetrend";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTrashAlt,
  faAngleDown,
  faAngleUp,
  faDotCircle,
  faArrowLeft
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faTrashAlt, faAngleDown, faAngleUp, faDotCircle, faArrowLeft);

export default {
  components: {
    PageTitle,
    VuePerfectScrollbar,
    "font-awesome-icon": FontAwesomeIcon,
    trend: Trend,

    chart1,

    MixedExample
  },
  data: () => ({
    heading: "Management",
    subheading:
      "This is an example dashboard created using build-in elements and components.",
    icon: "pe-7s-car icon-gradient bg-mean-fruit"
  }),

  methods: {}
};
</script>
