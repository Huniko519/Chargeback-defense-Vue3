<template>
  <div>
    <page-title :heading="heading" :subheading="subheading" :icon="icon"></page-title>
    <div class="row">
      <div class="col-md-12 col-lg-6 col-xl-7">
        <div class="main-card mb-3 card">
          <div class="rm-border card-header">
            <div>
              <h5 class="menu-header-title text-capitalize text-primary">Income Report</h5>
            </div>
            <div class="btn-actions-pane-right text-capitalize">
              <button class="btn-wide btn-outline-2x btn btn-outline-focus btn-sm">View All</button>
            </div>
          </div>
          <chart4 />
          <div class="card-body">
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
                        <div class="progress-bar-xs progress mt-2 mb-2">
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
                        <div class="progress-bar-xs progress-bar-animated progress mt-2 mb-2">
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
        </div>
      </div>
      <div class="col-md-12 col-lg-6 col-xl-5">
        <div class="main-card mb-3 card">
          <div class="card-body">
            <h6
              class="text-muted text-uppercase font-size-md opacity-7 mb-3 font-weight-normal"
            >Highlights</h6>
            <div class="border-light card-border scroll-area-md card">
              <VuePerfectScrollbar class="scrollbar-container" v-once>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">
                    <div class="widget-content p-0">
                      <div class="widget-content-wrapper">
                        <div class="widget-content-left mr-3">
                          <img width="38" class="rounded-circle" src="@/assets/images/avatars/1.jpg" alt />
                        </div>
                        <div class="widget-content-left">
                          <div class="widget-heading">Beck Collier</div>
                          <div class="widget-subheading mt-1 opacity-10">
                            <div class="badge badge-pill badge-primary">$152</div>
                          </div>
                        </div>
                        <div class="widget-content-right">
                          <div class="fsize-2 text-success">
                            <small class="opacity-5 pr-1">$</small>
                            <span>750</span>
                            <small class="text-success pl-2">
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
                          <img width="38" class="rounded-circle" src="@/assets/images/avatars/2.jpg" alt />
                        </div>
                        <div class="widget-content-left">
                          <div class="widget-heading">Angelo Hume</div>
                          <div class="widget-subheading mt-1 opacity-10">
                            <div class="badge badge-pill badge-primary">$53</div>
                          </div>
                        </div>
                        <div class="widget-content-right">
                          <div class="fsize-2 text-success">
                            <small class="opacity-5 pr-1">$</small>
                            <span>542</span>
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
                          <img width="38" class="rounded-circle" src="@/assets/images/avatars/2.jpg" alt/>
                        </div>
                        <div class="widget-content-left">
                          <div class="widget-heading">Saim Melendez</div>
                          <div class="widget-subheading mt-1 opacity-10">
                            <div class="badge badge-pill badge-primary">$239</div>
                          </div>
                        </div>
                        <div class="widget-content-right">
                          <div class="fsize-2 text-success">
                            <small class="opacity-5 pr-1">$</small>
                            <span>874</span>
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
                          <img width="38" class="rounded-circle" src="@/assets/images/avatars/3.jpg" alt />
                        </div>
                        <div class="widget-content-left">
                          <div class="widget-heading">Primrose Navarro</div>
                          <div class="widget-subheading mt-1 opacity-10">
                            <div class="badge badge-pill badge-primary">$21</div>
                          </div>
                        </div>
                        <div class="widget-content-right">
                          <div class="fsize-2 text-success">
                            <small class="opacity-5 pr-1">$</small>
                            348
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
                          <img width="38" class="rounded-circle" src="@/assets/images/avatars/1.jpg" alt/>
                        </div>
                        <div class="widget-content-left">
                          <div class="widget-heading">Beck Collier</div>
                          <div class="widget-subheading mt-1 opacity-10">
                            <div class="badge badge-pill badge-primary">$152</div>
                          </div>
                        </div>
                        <div class="widget-content-right">
                          <div class="fsize-2 text-success">
                            <small class="opacity-5 pr-1">$</small>
                            <span>750</span>
                            <small class="text-success pl-2">
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
                          <img width="38" class="rounded-circle" src="@/assets/images/avatars/2.jpg" alt />
                        </div>
                        <div class="widget-content-left">
                          <div class="widget-heading">Angelo Hume</div>
                          <div class="widget-subheading mt-1 opacity-10">
                            <div class="badge badge-pill badge-primary">$53</div>
                          </div>
                        </div>
                        <div class="widget-content-right">
                          <div class="fsize-2 text-success">
                            <small class="opacity-5 pr-1">$</small>
                            <span>542</span>
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
                          <img width="38" class="rounded-circle" src="@/assets/images/avatars/4.jpg" alt />
                        </div>
                        <div class="widget-content-left">
                          <div class="widget-heading">Finnlay Barton</div>
                          <div class="widget-subheading mt-1 opacity-10">
                            <div class="badge badge-pill badge-primary">$381</div>
                          </div>
                        </div>
                        <div class="widget-content-right">
                          <div class="fsize-2 text-success">
                            <small class="opacity-5 pr-1">$</small>
                            692
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
                          <img width="38" class="rounded-circle" src="@/assets/images/avatars/10.jpg" alt />
                        </div>
                        <div class="widget-content-left">
                          <div class="widget-heading">Johan Corbett</div>
                          <div class="widget-subheading mt-1 opacity-10">
                            <div class="badge badge-pill badge-primary">$74</div>
                          </div>
                        </div>
                        <div class="widget-content-right">
                          <div class="fsize-2 text-success">
                            <small class="opacity-5 pr-1">$</small>
                            395
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
                          <img width="38" class="rounded-circle" src="@/assets/images/avatars/9.jpg" alt />
                        </div>
                        <div class="widget-content-left">
                          <div class="widget-heading">Kaja Wolfe</div>
                          <div class="widget-subheading mt-1 opacity-10">
                            <div class="badge badge-pill badge-primary">$7</div>
                          </div>
                        </div>
                        <div class="widget-content-right">
                          <div class="fsize-2 text-success">
                            <small class="opacity-5 pr-1">$</small>
                            619
                            <small class="text-muted pl-2">
                              <font-awesome-icon icon="angle-down" />
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
        <div class="main-card mb-3 card">
          <div class="rm-border card-header">
            <div>
              <h6 class="menu-header-title text-capitalize text-primary">Monthly Statistics</h6>
            </div>
          </div>
          <div class="pl-3 pr-3 pb-2 slick-slider-md slick-slider-hover">
            <slick ref="slick" :options="slickOptions2">
              <div class="widget-chart widget-chart2 text-left p-0">
                <div class="widget-chat-wrapper-outer">
                  <div class="widget-chart-content">
                    <div class="widget-chart-flex">
                      <div class="widget-numbers">
                        <div class="widget-chart-flex">
                          <div>
                            <small class="opacity-5 text-success">+</small>
                            76
                          </div>
                          <div
                            class="widget-title ml-md-2 opacity-5 font-size-lg text-muted"
                          >Revenue Increased this Quarter</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="widget-chart-wrapper widget-chart-wrapper-lg opacity-10 m-0">
                    <chart1 :height="165" />
                  </div>
                </div>
              </div>
              <div class="widget-chart widget-chart2 text-left p-0">
                <div class="widget-chat-wrapper-outer">
                  <div class="widget-chart-content">
                    <div class="widget-chart-flex">
                      <div class="widget-numbers">
                        <div class="widget-chart-flex">
                          <div>
                            <small class="opacity-5">$</small>
                            1545
                          </div>
                          <div class="widget-title ml-2 opacity-5 font-size-lg text-muted">Total Sales this Month</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="widget-chart-wrapper widget-chart-wrapper-lg opacity-10 m-0">
                    <chart2 :height="165" />
                  </div>
                </div>
              </div>
              <div class="widget-chart widget-chart2 text-left p-0">
                <div class="widget-chat-wrapper-outer">
                  <div class="widget-chart-content">
                    <div class="widget-chart-flex">
                      <div class="widget-numbers">
                        <div class="widget-chart-flex">
                          <div>
                            <small class="opacity-5">$</small>
                            <span>626</span>
                          </div>
                          <div
                            class="widget-title ml-2 opacity-5 font-size-lg text-muted"
                          >Total Expenses Today</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="widget-chart-wrapper widget-chart-wrapper-lg opacity-10 m-0">
                    <chart3 :height="165" />
                  </div>
                </div>
              </div>
            </slick>
          </div>
        </div>
      </div>
    </div>
    <div class="main-card mb-3 card">
      <div class="card-header">
        <div>
          <h5 class="menu-header-title text-capitalize text-primary">Simple Table</h5>
        </div>
        <div class="btn-actions-pane-right">
          <div role="group" class="btn-group-sm btn-group">
            <button class="active btn btn-outline-dark">Last Week</button>
            <button class="btn btn-outline-dark">All Month</button>
          </div>
        </div>
      </div>
      <div class="table-responsive">
        <table class="align-middle mb-0 table table-borderless table-striped table-hover">
          <thead>
            <tr>
              <th class="text-center">#</th>
              <th class="text-center">Status</th>
              <th>Name</th>
              <th class="text-center">Progress</th>
              <th class="text-center">Sales</th>
              <th class="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="text-center text-muted">#345</td>
              <td class="text-center">
                <div class="badge badge-pill pl-2 pr-2 badge-warning">Pending</div>
              </td>
              <td>
                <div class="widget-content p-0">
                  <div class="widget-content-wrapper">
                    <div class="widget-content-left mr-3">
                      <div class="widget-content-left">
                        <img width="32" class="rounded" src="@/assets/images/avatars/1.jpg" alt />
                      </div>
                    </div>
                    <div class="widget-content-left flex2">
                      <div class="widget-heading">John Doe</div>
                      <div class="widget-subheading opacity-7">Web Developer</div>
                    </div>
                  </div>
                </div>
              </td>
              <td class="text-center">
                <div class="progress-bar-xs progress">
                  <div class="progress-bar bg-success" role="progressbar" aria-valuenow="76"
                    aria-valuemin="0" aria-valuemax="100" style="width: 76%;">
                 </div>
                </div>
              </td>
              <td class="text-center" style="width: 150px; position: relative;">
                <sparkline :indicatorStyles="spIndicatorStyles1">
                  <sparklineCurve :data="spData2" :limit="spData2.length" :styles="spCurveStyles2" />
                </sparkline>
              </td>
              <td class="text-center">
                <button type="button" class="btn-icon btn-icon-only btn btn-light btn-sm">View</button>
              </td>
            </tr>
            <tr>
              <td class="text-center text-muted">#347</td>
              <td class="text-center">
                <div class="badge badge-pill pl-2 pr-2 badge-success">Completed</div>
              </td>
              <td>
                <div class="widget-content p-0">
                  <div class="widget-content-wrapper">
                    <div class="widget-content-left mr-3">
                      <div class="widget-content-left">
                        <img width="32" class="rounded" src="@/assets/images/avatars/2.jpg" alt />
                      </div>
                    </div>
                    <div class="widget-content-left flex2">
                      <div class="widget-heading">Ruben Tillman</div>
                      <div class="widget-subheading opacity-7">Etiam sit amet orci eget</div>
                    </div>
                  </div>
                </div>
              </td>
              <td class="text-center">
                <div class="progress-bar-xs progress">
                  <div class="progress-bar bg-danger" role="progressbar" aria-valuenow="23"
                    aria-valuemin="0" aria-valuemax="100" style="width: 23%;">
                  </div>
                </div>
              </td>
              <td class="text-center" style="width: 150px; position: relative;">
                <sparkline :indicatorStyles="spIndicatorStyles1">
                  <sparklineCurve :data="spData1" :limit="spData1.length" :styles="spCurveStyles1" />
                </sparkline>
              </td>
              <td class="text-center">
                <button type="button" class="btn-icon btn-icon-only btn btn-light btn-sm">View</button>
              </td>
            </tr>
            <tr>
              <td class="text-center text-muted">#321</td>
              <td class="text-center">
                <div class="badge badge-pill pl-2 pr-2 badge-danger">In Progress</div>
              </td>
              <td>
                <div class="widget-content p-0">
                  <div class="widget-content-wrapper">
                    <div class="widget-content-left mr-3">
                      <div class="widget-content-left">
                        <img width="32" class="rounded" src="@/assets/images/avatars/3.jpg" alt />
                      </div>
                    </div>
                    <div class="widget-content-left flex2">
                      <div class="widget-heading">Elliot Huber</div>
                      <div class="widget-subheading opacity-7">Lorem ipsum dolor sic</div>
                    </div>
                  </div>
                </div>
              </td>
              <td class="text-center">
                <div class="progress-bar-xs progress">
                  <div class="progress-bar bg-warning" role="progressbar" aria-valuenow="43"
                    aria-valuemin="0" aria-valuemax="100" style="width: 43%;">
                  </div>
                </div>
              </td>
              <td class="text-center" style="width: 150px; position: relative;">
                <sparkline :indicatorStyles="spIndicatorStyles1">
                  <sparklineCurve :data="spData3" :limit="spData3.length" :styles="spCurveStyles3" />
                </sparkline>
              </td>
              <td class="text-center">
                <button type="button" class="btn-icon btn-icon-only btn btn-light btn-sm">View</button>
              </td>
            </tr>
            <tr>
              <td class="text-center text-muted">#55</td>
              <td class="text-center">
                <div class="badge badge-pill pl-2 pr-2 badge-info">On Hold</div>
              </td>
              <td>
                <div class="widget-content p-0">
                  <div class="widget-content-wrapper">
                    <div class="widget-content-left mr-3">
                      <div class="widget-content-left">
                        <img width="32" class="rounded" src="@/assets/images/avatars/4.jpg" alt />
                      </div>
                    </div>
                    <div class="widget-content-left flex2">
                      <div class="widget-heading">Vinnie Wagstaff</div>
                      <div class="widget-subheading opacity-7">UI Designer</div>
                    </div>
                  </div>
                </div>
              </td>
              <td class="text-center">
                <div class="progress-bar-xs progress">
                  <div class="progress-bar bg-primary" role="progressbar" aria-valuenow="67"
                    aria-valuemin="0" aria-valuemax="100" style="width: 67%;">
                  </div>
                </div>
              </td>
              <td class="text-center">
                <sparkline :indicatorStyles="spIndicatorStyles1">
                  <sparklineCurve :data="spData4" :limit="spData4.length" :styles="spCurveStyles4" />
                </sparkline>
              </td>
              <td class="text-center">
                <button type="button" class="btn-icon btn-icon-only btn btn-light btn-sm">View</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="d-block clearfix card-footer">
        <div class="float-left">
          <button class="mr-2 btn-icon btn-icon-only btn btn-outline-danger btn-sm">Delete</button>
        </div>
        <div class="float-right">
          <button class="btn-wide btn btn-link btn-sm">View All</button>
          <button class="btn-wide btn-shadow btn btn-primary btn-sm">Add New Entry</button>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12 col-lg-6">
        <div class="card mb-3 widget-chart bg-arielle-smile card-border">
          <div class="widget-chart-content text-white">
            <div class="icon-wrapper rounded-circle">
              <div class="icon-wrapper-bg bg-white opacity-7"></div>
              <i class="lnr-graduation-hat text-info"></i>
            </div>
            <div class="widget-numbers">63.2k</div>
            <div class="widget-subheading">Bugs Fixed</div>
            <div class="widget-description text-white">
              <font-awesome-icon icon="arrow-right" />
              <span class="pl-1">175.5%</span>
            </div>
          </div>
          <div class="widget-chart-wrapper chart-wrapper-relative">
            <chart5 :height="224" />
          </div>
        </div>
      </div>
      <div class="col-md-12 col-lg-6">
        <div class="card-shadow-primary card-border mb-3 card">
          <div class="dropdown-menu-header">
            <div class="dropdown-menu-header-inner bg-primary">
              <div class="menu-header-image opacity-4 dd-header-bg-3"></div>
              <div class="menu-header-content">
                <h5 class="menu-header-title text-capitalize mb-0 fsize-3">Top Sellers</h5>
                <h6 class="menu-header-subtitle mb-3">Yet another Example of Card Boxes</h6>
                <div role="group" class="mb-0 btn-group">
                  <button type="button" class="btn-pill pl-3 pr-3 btn btn-warning">John</button>
                  <button type="button" class="pl-3 pr-3 btn btn-warning">Mary</button>
                  <button type="button" class="btn-pill pl-3 pr-3 btn btn-warning">Katie</button>
                </div>
              </div>
            </div>
          </div>
          <ul class="list-group list-group-flush">
            <li class="p-0 list-group-item">
              <div class="row">
                <div class="center-elem col-md-6">
                  <div class="center-elem w-100">
                    <RadialBarExample></RadialBarExample>
                  </div>
                </div>
                <div class="col-md-6 d-flex align-items-center">
                  <div class="w-100">
                    <div class="widget-chart">
                      <div class="widget-chart-content">
                        <div class="widget-numbers mt-0 text-danger">
                          <small>$</small>
                          158
                          <small class="opacity-5 pl-2">
                            <font-awesome-icon icon="angle-up" />
                          </small>
                        </div>
                        <div class="widget-subheading">Sales Today</div>
                      </div>
                    </div>
                    <div class="divider mt-0 mb-0 mr-2"></div>
                    <div class="widget-chart">
                      <div class="widget-chart-content">
                        <div class="widget-numbers mt-0 text-primary">
                          <small>$</small>
                          346
                          <small class="opacity-5 pl-2">
                            <font-awesome-icon icon="angle-down" />
                          </small>
                        </div>
                        <div class="widget-subheading">Sales this Month</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class="p-0 list-group-item">
              <div class="grid-menu grid-menu-2col overflow-hidden overflow-hidden">
                <div class="no-gutters row">
                  <div class="col-sm-12">
                    <div class="p-1">
                      <button type="button" class="btn-transition-text btn-transition btn-transition-alt pt-2 pb-2 btn btn-outline-warning">
                        <span class="text-uppercase font-weight-bold">Block Button Maybe?</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-md-12 col-lg-6">
        <div class="card mb-3 widget-chart bg-strong-bliss card-border">
          <div class="widget-chart-content text-white">
            <div class="icon-wrapper rounded">
              <div class="icon-wrapper-bg bg-white opacity-4"></div>
              <i class="lnr-graduation-hat text-white"></i>
            </div>
            <div class="widget-numbers">1.5M</div>
            <div class="widget-subheading">Bugs Fixed</div>
            <div class="widget-description text-white">
              Down by
              <span class="text-white pl-1 pr-1 opacity-8">
                <font-awesome-icon icon="angle-down" />
                <span class="pl-1">54.1%</span>
              </span>
              from 30 days ago
            </div>
          </div>
          <div class="widget-chart-wrapper chart-wrapper-relative">
            <chart6 :height="148" />
          </div>
        </div>
      </div>
      <div class="col-md-12 col-lg-6">
        <div class="card-shadow-primary card-border mb-3 profile-responsive-sm card">
          <div class="dropdown-menu-header">
            <div class="dropdown-menu-header-inner bg-vicious-stance">
              <div class="menu-header-image opacity-1 dd-header-bg-1"></div>
              <div class="menu-header-content btn-pane-right">
                <div class="avatar-icon-wrapper mr-3 avatar-icon-xl btn-hover-shine">
                  <div class="avatar-icon rounded-circle">
                    <img src="@/assets/images/avatars/1.jpg" alt="Avatar 5" />
                  </div>
                </div>
                <div>
                  <h5 class="menu-header-title">Ruben Tillman</h5>
                  <h6 class="menu-header-subtitle">Etiam sit amet orci eget</h6>
                </div>
                <div class="menu-header-btn-pane">
                  <button class="btn btn-success">View Profile</button>
                </div>
              </div>
            </div>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <div class="widget-content pt-4 pb-4 pr-1 pl-1">
                <div class="text-center">
                  <h5 class="mb-0">
                    <span class="pr-1">
                      <b class="text-danger">12</b> new leads,
                    </span>
                    <span>
                      <b class="text-success">$56.24</b> in sales
                    </span>
                  </h5>
                </div>
              </div>
            </li>
            <li class="p-0 list-group-item">
              <div class="grid-menu grid-menu-2col overflow-hidden">
                <div class="no-gutters row">
                  <div class="d-block col-sm-6">
                    <div class="p-1">
                      <button class="btn-icon-vertical btn-transition-text btn-transition btn-transition-alt pt-2 pb-2 btn btn-outline-dark">
                        <i class="lnr-lighter text-dark opacity-7 btn-icon-wrapper mb-2"></i>
                        Automation
                      </button>
                    </div>
                  </div>
                  <div class="d-block col-sm-6">
                    <div class="p-1">
                      <button class="btn-icon-vertical btn-transition-text btn-transition btn-transition-alt pt-2 pb-2 btn btn-outline-danger">
                        <i class="lnr-construction text-danger opacity-7 btn-icon-wrapper mb-2"></i>
                        Reports
                      </button>
                    </div>
                  </div>
                  <div class="d-md-none d-lg-block col-sm-6">
                    <div class="p-1">
                      <button class="btn-icon-vertical btn-transition-text btn-transition btn-transition-alt pt-2 pb-2 btn btn-outline-success">
                        <i class="lnr-bus text-success opacity-7 btn-icon-wrapper mb-2"></i>
                        Activity
                      </button>
                    </div>
                  </div>
                  <div class="d-md-none d-lg-block col-sm-6">
                    <div class="p-1">
                      <button class="btn-icon-vertical btn-transition-text btn-transition btn-transition-alt pt-2 pb-2 btn btn-outline-focus">
                        <i class="lnr-gift text-focus opacity-7 btn-icon-wrapper mb-2"></i>
                        Settings
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
import Slick from "vue-slick";
import Sparkline from "vue-sparklines";

import chart4 from "./Helpdesk/Chart1.vue";

import chart1 from "./Analytics/chart1";
import chart2 from "./Analytics/chart2";
import chart3 from "./Analytics/chart3";

import chart5 from "./Helpdesk/chart1.js";
import chart6 from "./Helpdesk/chart2.js";

import RadialBarExample from "../Charts/Apex/RadialBarExample";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faAngleUp,
  faAngleDown,
  faArrowRight,
  faCheck
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faAngleUp, faAngleDown, faArrowRight, faCheck);

export default {
  components: {
    PageTitle,
    VuePerfectScrollbar,
    Slick,
    "font-awesome-icon": FontAwesomeIcon,
    Sparkline,

    RadialBarExample,

    chart1,
    chart2,
    chart3,
    chart4,

    chart5,
    chart6
  },
  data: () => ({
    heading: "Helpdesk",
    subheading:
      "This is an example dashboard created using build-in elements and components.",
    icon: "pe-7s-car icon-gradient bg-mean-fruit",

    slickOptions2: {
      slidesToShow: 1,
      dots: true
    },

    spIndicatorStyles1: false,
    spData2: (() => {
      const len = 10;
      return Array.from(
        {
          length: len
        },
        () => Math.floor(Math.random() * len)
      );
    })(),
    spCurveStyles2: {
      stroke: "var(--primary)",
      strokeWidth: "2"
    },

    spData1: (() => {
      const len = 10;
      return Array.from(
        {
          length: len
        },
        () => Math.floor(Math.random() * len)
      );
    })(),
    spCurveStyles1: {
      stroke: "var(--danger)",
      strokeWidth: "2"
    },

    spData3: (() => {
      const len = 10;
      return Array.from(
        {
          length: len
        },
        () => Math.floor(Math.random() * len)
      );
    })(),
    spCurveStyles3: {
      stroke: "var(--warning)",
      strokeWidth: "2"
    },

    spData4: (() => {
      const len = 10;
      return Array.from(
        {
          length: len
        },
        () => Math.floor(Math.random() * len)
      );
    })(),
    spCurveStyles4: {
      stroke: "var(--info)",
      strokeWidth: "2"
    }
  }),

  methods: {}
};
</script>
