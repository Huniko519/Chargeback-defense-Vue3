<template>
  <div>
    <div class="app-inner-layout">
      <div class="app-inner-layout__header-boxed p-0">
        <div class="app-inner-layout__header page-title-icon-rounded text-white bg-royal mb-4">
          <div class="app-page-title">
            <div class="page-title-wrapper">
              <div class="page-title-heading">
                <div class="page-title-icon">
                  <i class="pe-7s-umbrella icon-gradient bg-sunny-morning"></i>
                </div>
                <div>
                  Sales Dashboard
                  <div
                    class="page-title-subheading"
                  >Example of a Dashboard page built with ArchitectUI.</div>
                </div>
              </div>
              <div class="page-title-actions">
                <b-button type="button" class="mr-3" variant="warning">
                  <font-awesome-icon icon="star" />
                </b-button>
                <div class="d-inline-block">
                  <b-dropdown toggle-class="btn-icon btn-icon-only" variant="info" right>
                    <span slot="button-content">
                      <span class="pr-2 opacity-7">
                        <font-awesome-icon icon="business-time" />
                      </span>
                      Menu
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
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <ul class="tabs-animated-shadow tabs-animated nav nav-justified tabs-rounded-lg">
          <li class="nav-item">
            <a role="tab" class="nav-link active show" href="javascript:void(0);" aria-selected="true">
              <span>Sales</span>
            </a>
          </li>
          <li class="nav-item">
            <a role="tab" class="nav-link" href="javascript:void(0);" aria-selected="false">
              <span>Activity</span>
            </a>
          </li>
          <li class="nav-item">
            <a role="tab" class="nav-link" href="javascript:void(0);" aria-selected="false">
              <span>Profile</span>
            </a>
          </li>
          <li class="nav-item">
            <a role="tab" class="nav-link" href="javascript:void(0);" aria-selected="false">
              <span>Accounts</span>
            </a>
          </li>
        </ul>
      </div>
      <div class="row">
        <div class="col-lg-6 col-xl-4">
          <div class="mb-3 card">
            <div class="card-header-tab card-header">
              <div class="card-header-title font-size-lg text-capitalize font-weight-normal">
                <i class="header-icon lnr-shirt mr-3 text-muted opacity-6"></i>
                Top Sellers
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
            <div class="widget-chart widget-chart2 text-left p-0">
              <div class="widget-chat-wrapper-outer">
                <div class="widget-chart-content widget-chart-content-lg">
                  <div class="widget-chart-flex">
                    <div
                      class="widget-title opacity-5 text-muted text-uppercase"
                    >New accounts since 2018</div>
                  </div>
                  <div class="widget-numbers">
                    <div class="widget-chart-flex">
                      <div>
                        <span class="opacity-10 text-success pr-2">
                          <font-awesome-icon icon="angle-up" />
                        </span>
                        <span>9</span>
                        <small class="opacity-5 pl-1">%</small>
                      </div>
                      <div class="widget-title ml-2 font-size-lg font-weight-normal text-muted">
                        <span class="text-danger pl-2">+14% failed</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="widget-chart-wrapper widget-chart-wrapper-xlg opacity-10 m-0">
                  <chart1 :height="165" />
                </div>
              </div>
            </div>
            <div class="pt-2 pb-0 card-body">
              <h6
                class="text-muted text-uppercase font-size-md opacity-9 mb-2 font-weight-normal"
              >Authors</h6>
              <div class="scroll-area-md shadow-overflow">
                <VuePerfectScrollbar class="scrollbar-container" v-once>
                  <ul class="rm-list-borders rm-list-borders-scroll list-group list-group-flush">
                    <li class="list-group-item">
                      <div class="widget-content p-0">
                        <div class="widget-content-wrapper">
                          <div class="widget-content-left mr-3">
                            <img width="38" class="rounded-circle" src="@/assets/images/avatars/1.jpg" alt />
                          </div>
                          <div class="widget-content-left">
                            <div class="widget-heading">Viktor Martin</div>
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
                            <img width="38" class="rounded-circle" src="@/assets/images/avatars/2.jpg" alt />
                          </div>
                          <div class="widget-content-left">
                            <div class="widget-heading">Denis Delgado</div>
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
                            <img width="38" class="rounded-circle" src="@/assets/images/avatars/3.jpg" alt />
                          </div>
                          <div class="widget-content-left">
                            <div class="widget-heading">Shawn Galloway</div>
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
                            <img width="38" class="rounded-circle" src="@/assets/images/avatars/4.jpg" alt/>
                          </div>
                          <div class="widget-content-left">
                            <div class="widget-heading">Latisha Allison</div>
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
                            <img width="38" class="rounded-circle" src="@/assets/images/avatars/5.jpg" alt />
                          </div>
                          <div class="widget-content-left">
                            <div class="widget-heading">Lilly-Mae White</div>
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
                            <img width="38" class="rounded-circle" src="@/assets/images/avatars/8.jpg" alt />
                          </div>
                          <div class="widget-content-left">
                            <div class="widget-heading">Julie Prosser</div>
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
                            <img width="38" class="rounded-circle" src="@/assets/images/avatars/8.jpg" alt/>
                          </div>
                          <div class="widget-content-left">
                            <div class="widget-heading">Amin Hamer</div>
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
            <div class="d-block text-center rm-border card-footer">
              <button class="btn btn-primary">
                View complete report
                <font-awesome-icon class="ml-2 opacity-3" icon="arrow-right" />
              </button>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-xl-4">
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
            <div class="widget-chart widget-chart2 text-left p-0">
              <div class="widget-chat-wrapper-outer">
                <div class="widget-chart-content widget-chart-content-lg">
                  <div class="widget-chart-flex">
                    <div class="widget-title opacity-5 text-muted text-uppercase">Toshiba Laptops</div>
                  </div>
                  <div class="widget-numbers">
                    <div class="widget-chart-flex">
                      <div>
                        <span class="opacity-10 text-warning pr-2">
                          <font-awesome-icon icon="dot-circle" />
                        </span>
                        <span>$984</span>
                      </div>
                      <div class="widget-title ml-2 font-size-lg font-weight-normal text-muted">
                        <span class="text-success pl-2">+14</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="widget-chart-wrapper widget-chart-wrapper-xlg opacity-10 m-0">
                  <chart2 :height="165" />
                </div>
              </div>
            </div>
            <div class="pt-2 pb-0 card-body">
              <h6
                class="text-muted text-uppercase font-size-md opacity-9 mb-2 font-weight-normal"
              >Top Performing</h6>
              <div class="scroll-area-md shadow-overflow">
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
                                <vue-circle :progress="69" :size="52" :reverse="false" line-cap="round"
                                  :fill="f4" empty-fill="rgba(0, 0, 0, .12)" :animation-start-value="0.0" :start-angle="0"
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
            <div class="d-block text-center rm-border card-footer">
              <button class="btn btn-primary">
                View all participants
                <font-awesome-icon class="ml-2 opacity-3" icon="arrow-right" />
              </button>
            </div>
          </div>
        </div>
        <div class="col-lg-12 col-xl-4">
          <div class="mb-3 card">
            <div class="rm-border pb-0 responsive-center card-header">
              <div>
                <h5 class="menu-header-title text-capitalize">Portfolio Performance</h5>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-6 col-xl-12">
                <div class="no-shadow rm-border bg-transparent widget-chart text-left card">
                  <div class="progress-circle-wrapper">
                    <vue-circle :progress="6" :size="104" :reverse="true" line-cap="round"
                      :fill="fill1" empty-fill="rgba(0, 0, 0, .1)" :animation-start-value="0.0" :start-angle="0"
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
              <div class="col-lg-6 col-xl-12">
                <div class="card no-shadow rm-border bg-transparent widget-chart text-left mt-2">
                  <div class="progress-circle-wrapper">
                    <vue-circle :progress="54" :size="104" :reverse="true" line-cap="round" :fill="fill2"
                      empty-fill="rgba(0, 0, 0, .1)" :animation-start-value="0.0" :start-angle="0" insert-mode="append"
                      :thickness="7" :show-percent="true">
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
            <div class="card-body">
              <div class="text-center">
                <h5 class="menu-header-title">Example Heading</h5>
                <h6 class="menu-header-subtitle opacity-6">Example of various options built with ArchitectUI</h6>
              </div>
              <div class="card-hover-shadow-2x widget-chart widget-chart2 bg-premium-dark text-left mt-3 card">
                <div class="widget-chart-content text-white">
                  <div class="widget-chart-flex">
                    <div class="widget-title">Sales</div>
                    <div class="widget-subtitle opacity-7">Monthly Goals</div>
                  </div>
                  <div class="widget-chart-flex">
                    <div class="widget-numbers text-success">
                      <small>$</small>
                      <span>976</span>
                      <small class="opacity-8 pl-2">
                        <font-awesome-icon icon="angle-up" />
                      </small>
                    </div>
                    <div class="widget-description ml-auto opacity-7">
                      <font-awesome-icon icon="angle-up" />
                      <span class="pl-1">175%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="text-center mt-3">
                <button class="btn-pill btn-shadow btn-wide fsize-1 btn btn-success btn-lg">
                  <span class="mr-2 opacity-7">
                    <font-awesome-icon icon="cog" spin />
                  </span>
                  <span class="mr-1">View Complete Report</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12 col-lg-6 col-xl-8">
          <div class="mb-3 card">
            <div class="card-header-tab card-header">
              <div class="card-header-title font-size-lg text-capitalize font-weight-normal">
                <i class="header-icon lnr-dice mr-3 text-muted opacity-6"></i>
                Table Example
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
                    <td class="text-center" style="width: 150px;">
                      <sparkline :indicatorStyles="spIndicatorStyles1">
                        <sparklineCurve :data="spData2" :limit="spData2.length" :styles="spCurveStyles2" />
                      </sparkline>
                    </td>
                    <td class="text-center">
                      <button type="button" id="PopoverCustomT-1" class="btn btn-primary btn-sm">Details</button>
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
                    <td class="text-center" style="width: 150px; position: relative;">
                      <sparkline :indicatorStyles="spIndicatorStyles1">
                        <sparklineCurve :data="spData1" :limit="spData1.length" :styles="spCurveStyles1" />
                      </sparkline>
                    </td>
                    <td class="text-center">
                      <button type="button" id="PopoverCustomT-2" class="btn btn-primary btn-sm">Details</button>
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
                    <td class="text-center" style="width: 150px; position: relative;">
                      <sparkline :indicatorStyles="spIndicatorStyles1">
                        <sparklineCurve :data="spData3" :limit="spData3.length" :styles="spCurveStyles3" />
                      </sparkline>
                    </td>
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
                    <td class="text-center" style="width: 150px; position: relative;">
                      <sparkline :indicatorStyles="spIndicatorStyles1">
                        <sparklineCurve :data="spData4" :limit="spData4.length" :styles="spCurveStyles4" />
                      </sparkline>
                    </td>
                    <td class="text-center">
                      <button type="button" id="PopoverCustomT-4" class="btn btn-primary btn-sm">Details</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="divider mb-0 mt-0"></div>
            <div class="card-body clearfix">
              <b-pagination :total-rows="totalRows" :per-page="perPage" v-model="currentPage" class="float-right mb-0" />
            </div>
            <div class="d-block text-center card-footer">
              <button class="mr-2 btn btn-link btn-sm">Cancel</button>
              <button class="btn btn-success btn-lg">Save</button>
            </div>
          </div>
        </div>
        <div class="col-md-12 col-lg-6 col-xl-4">
          <div class="mb-3 card">
            <div class="card-header-tab card-header">
              <div class="card-header-title font-size-lg text-capitalize font-weight-normal">
                <i class="header-icon lnr-cloud-download icon-gradient bg-happy-itmeo"></i>
                Technical Support
              </div>
            </div>
            <div class="p-0 card-body">
              <div class="dropdown-menu-header mt-0 mb-0">
                <div class="dropdown-menu-header-inner bg-heavy-rain">
                  <div class="menu-header-image opacity-1 dd-header-bg-5"></div>
                  <div class="menu-header-content text-dark">
                    <h5 class="menu-header-title">Notifications</h5>
                    <h6 class="menu-header-subtitle">
                      You have
                      <b class="text-danger">21</b>
                      unread messages
                    </h6>
                  </div>
                </div>
              </div>
              <tabs :tabs="tabs" :currentTab="currentTab" :wrapper-class="'shadow-tabs inline-tabs'" :tab-class="'tab-item'"
                :tab-active-class="'tab-item-active'" :line-class="'tab-item-line'" @onClick="handleClick" />
              <div class="scroll-gradient" v-if="currentTab === 'tab1'">
                <div class="scroll-area-sm">
                  <VuePerfectScrollbar class="scrollbar-container" v-once>
                    <div class="p-3">
                      <div class="vertical-time-simple vertical-without-time vertical-timeline vertical-timeline--animate vertical-timeline--one-column">
                        <div class="vertical-timeline-item vertical-timeline-element">
                          <div>
                            <span class="vertical-timeline-element-icon bounce-in"></span>
                            <div class="vertical-timeline-element-content bounce-in">
                              <h4 class="timeline-title">All Hands Meeting</h4>
                              <span class="vertical-timeline-element-date"></span>
                            </div>
                          </div>
                        </div>
                        <div class="vertical-timeline-item vertical-timeline-element">
                          <div>
                            <span class="vertical-timeline-element-icon bounce-in"></span>
                            <div class="vertical-timeline-element-content bounce-in">
                              <p>
                                Another meeting today, at
                                <b class="text-danger">12:00 PM</b>
                              </p>
                              <span class="vertical-timeline-element-date"></span>
                            </div>
                          </div>
                        </div>
                        <div class="vertical-timeline-item vertical-timeline-element">
                          <div>
                            <span class="vertical-timeline-element-icon bounce-in"></span>
                            <div class="vertical-timeline-element-content bounce-in">
                              <h4 class="timeline-title">Build the production release</h4>
                              <span class="vertical-timeline-element-date"></span>
                            </div>
                          </div>
                        </div>
                        <div class="vertical-timeline-item vertical-timeline-element">
                          <div>
                            <span class="vertical-timeline-element-icon bounce-in"></span>
                            <div class="vertical-timeline-element-content bounce-in">
                              <h4 class="timeline-title">All Hands Meeting</h4>
                              <span class="vertical-timeline-element-date"></span>
                            </div>
                          </div>
                        </div>
                        <div class="vertical-timeline-item vertical-timeline-element">
                          <div>
                            <span class="vertical-timeline-element-icon bounce-in"></span>
                            <div class="vertical-timeline-element-content bounce-in">
                              <h4 class="timeline-title text-success">FontAwesome Icons</h4>
                              <span class="vertical-timeline-element-date"></span>
                            </div>
                          </div>
                        </div>
                        <div class="vertical-timeline-item vertical-timeline-element">
                          <div>
                            <span class="vertical-timeline-element-icon bounce-in"></span>
                            <div class="vertical-timeline-element-content bounce-in">
                              <h4 class="timeline-title">Build the production release</h4>
                              <span class="vertical-timeline-element-date"></span>
                            </div>
                          </div>
                        </div>
                        <div class="vertical-timeline-item vertical-timeline-element">
                          <div>
                            <span class="vertical-timeline-element-icon bounce-in"></span>
                            <div class="vertical-timeline-element-content bounce-in">
                              <p>
                                Another meeting today, at
                                <b class="text-warning">12:00 PM</b>
                              </p>
                              <span class="vertical-timeline-element-date"></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </VuePerfectScrollbar>
                </div>
              </div>
              <div class="scroll-gradient" v-if="currentTab === 'tab2'">
                <div class="scroll-area-sm">
                  <VuePerfectScrollbar class="scrollbar-container" v-once>
                    <div class="p-3">
                      <div class="vertical-without-time vertical-timeline vertical-timeline--animate vertical-timeline--one-column">
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
                              <p>Lorem ipsum dolor sit amit,consectetur eiusmdd tempor incididunt ut labore et dolore magna elit enim at minim veniam quis nostrud</p>
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
                              <p>Lorem ipsum dolor sit amit,consectetur elit enim at minim veniam quis nostrud</p>
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
                              <p>Lorem ipsum dolor sit amit,consectetur eiusmdd tempor incididunt ut labore et dolore magna elit enim at minim veniam quis nostrud</p>
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
                              <p>Lorem ipsum dolor sit amit,consectetur elit enim at minim veniam quis nostrud</p>
                              <span class="vertical-timeline-element-date"></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </VuePerfectScrollbar>
                </div>
              </div>
              <div v-if="currentTab === 'tab3'">
                <div class="no-results">
                  <div class="swal2-icon swal2-success swal2-animate-success-icon mt-0">
                    <div
                      class="swal2-success-circular-line-left"
                      style="background-color: rgb(255, 255, 255);"
                    ></div>
                    <span class="swal2-success-line-tip"></span>
                    <span class="swal2-success-line-long"></span>
                    <div class="swal2-success-ring"></div>
                    <div class="swal2-success-fix" style="background-color: rgb(255, 255, 255);"></div>
                    <div
                      class="swal2-success-circular-line-right"
                      style="background-color: rgb(255, 255, 255);"
                    ></div>
                  </div>
                  <div class="results-subtitle">All caught up!</div>
                  <div class="results-title">There are no system errors!</div>
                </div>
              </div>
              <ul class="nav flex-column">
                <li class="nav-item-btn text-center pt-1 pb-3 nav-item">
                  <button class="btn-shadow btn-wide btn-pill btn btn-dark">
                    <span class="badge badge-dot badge-dot-lg badge-warning badge-pulse">Badge</span>
                    View All Messages
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="main-card mb-3 card">
        <div class="no-gutters row">
          <div class="col-md-6 col-xl-4">
            <div class="widget-content">
              <div class="widget-content-wrapper">
                <div class="widget-content-right ml-0 mr-3">
                  <div class="widget-numbers text-success">1896</div>
                </div>
                <div class="widget-content-left">
                  <div class="widget-heading">Total Orders</div>
                  <div class="widget-subheading">Last year expenses</div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-xl-4">
            <div class="widget-content">
              <div class="widget-content-wrapper">
                <div class="widget-content-right ml-0 mr-3">
                  <div class="widget-numbers text-warning">$ 14M</div>
                </div>
                <div class="widget-content-left">
                  <div class="widget-heading">Products Sold</div>
                  <div class="widget-subheading">Total revenue streams</div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-xl-4">
            <div class="widget-content">
              <div class="widget-content-wrapper">
                <div class="widget-content-right ml-0 mr-3">
                  <div class="widget-numbers text-danger">45.9%</div>
                </div>
                <div class="widget-content-left">
                  <div class="widget-heading">Followers</div>
                  <div class="widget-subheading">People Interested</div>
                </div>
              </div>
            </div>
          </div>
          <div class="d-xl-none d-md-block col-md-6 col-xl-4">
            <div class="widget-content">
              <div class="widget-content-wrapper">
                <div class="widget-content-right ml-0 mr-3">
                  <div class="widget-numbers text-danger">45.9%</div>
                </div>
                <div class="widget-content-left">
                  <div class="widget-heading">Followers</div>
                  <div class="widget-subheading">People Interested</div>
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
import VuePerfectScrollbar from "vue-perfect-scrollbar";
import Sparkline from "vue-sparklines";
import VueCircle from "vue2-circle-progress";
import chart1 from "./Analytics/chart1";
import chart2 from "./Analytics/chart2";
import Tabs from "vue-tabs-with-active-line";

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

const TABS = [
  {
    title: "Messages",
    value: "tab1"
  },
  {
    title: "Events",
    value: "tab2"
  },
  {
    title: "System Errors",
    value: "tab3"
  }
];

export default {
  components: {
    VuePerfectScrollbar,
    "font-awesome-icon": FontAwesomeIcon,
    Sparkline,
    VueCircle,
    chart1,
    chart2,

    Tabs
  },
  data: () => ({
    currentPage: 1,
    perPage: 5,
    totalRows: 45,

    tabs: TABS,
    currentTab: "tab1",

    fill: { gradient: ["var(--primary)"] },
    fill1: { gradient: ["#2af598", "#009efd"] },
    fill2: { gradient: ["#fccb90", "#d57eeb"] },

    f1: { gradient: ["#3f6ad8"] },
    f2: { gradient: ["#3ac47d"] },
    f3: { gradient: ["#16aaff"] },
    f4: { gradient: ["#f7b924"] },
    f5: { gradient: ["#d92550"] },
    f6: { gradient: ["#444054"] },

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

  methods: {
    handleClick(newTab) {
      this.currentTab = newTab;
    }
  }
};
</script>