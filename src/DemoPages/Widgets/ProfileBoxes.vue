<template>
  <div>
    <page-title :heading="heading" :subheading="subheading" :icon="icon"></page-title>
    <div class="row mt-4">
      <div class="col-md-12 col-lg-6 col-xl-4">
        <div class="card-hover-shadow profile-responsive card-border border-success mb-3 card">
          <div class="dropdown-menu-header">
            <div class="dropdown-menu-header-inner bg-success">
              <div class="menu-header-content">
                <div class="avatar-icon-wrapper btn-hover-shine mb-2 avatar-icon-xl">
                  <div class="avatar-icon rounded">
                    <img src="@/assets/images/avatars/1.jpg" alt="Avatar 6" />
                  </div>
                </div>
                <div>
                  <h5 class="menu-header-title">John Rosenberg</h5>
                  <h6 class="menu-header-subtitle">Short profile description</h6>
                </div>
                <div class="menu-header-btn-pane pt-2">
                  <div role="group" class="btn-group text-center">
                    <div class="nav">
                      <a href class="btn btn-dark mr-1">Send</a>
                      <a href class="btn btn-dark">Receive</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="p-0 card-body">
            <div class="tab-content">
              <div class="tab-pane active show" id="tab-2-eg1">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">
                    <div class="widget-content p-0">
                      <div class="widget-content-wrapper">
                        <div class="widget-content-left mr-3">
                          <div class="widget-content-left">
                            <img width="52" class="rounded-circle" src="@/assets/images/avatars/2.jpg" alt />
                          </div>
                        </div>
                        <div class="widget-content-left flex2">
                          <div class="widget-heading">John Doe</div>
                          <div class="widget-subheading opacity-10">
                            <span class="pr-2">
                              <b>43</b> Sales
                            </span>
                            <span>
                              <b class="text-success">$156,24</b> Totals
                            </span>
                          </div>
                        </div>
                        <div class="widget-content-right">
                          <div class="icon-wrapper m-0">
                            <div class="progress-circle-wrapper">
                              <vue-circle :progress="54" :size="52" :reverse="false" line-cap="round" :fill="f3"
                                empty-fill="rgba(0, 0, 0, .12)" :animation-start-value="0.0"
                                :start-angle="0" insert-mode="append" :thickness="3" :show-percent="true">
                              </vue-circle>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <div class="widget-content p-0">
                      <div class="widget-content-wrapper">
                        <div class="widget-content-left mr-3">
                          <div class="widget-content-left">
                            <img  width="52" class="rounded-circle" src="@/assets/images/avatars/8.jpg" alt/>
                          </div>
                        </div>
                        <div class="widget-content-left flex2">
                          <div class="widget-heading">Rosy O'Dowell</div>
                          <div class="widget-subheading opacity-10">
                            <span class="pr-2">
                              <b class="text-danger">12</b> Leads
                            </span>
                            <span>
                              <b class="text-warning">$56,24</b> Totals
                            </span>
                          </div>
                        </div>
                        <div class="widget-content-right">
                          <div class="icon-wrapper m-0">
                            <div class="progress-circle-wrapper">
                              <vue-circle :progress="23" :size="52" :reverse="false" line-cap="round" :fill="f2"
                                empty-fill="rgba(0, 0, 0, .12)" :animation-start-value="0.0"
                                :start-angle="0" insert-mode="append" :thickness="3" :show-percent="true">
                              </vue-circle>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="tab-pane" id="tab-2-eg2">
                <ul class="list-group list-group-flush">
                  <a href="javascript:void(0);" class="disabled list-group-item">Cras justo odio</a>
                  <a href="javascript:void(0);" class="list-group-item">Dapibus ac facilisis in</a>
                  <a href="javascript:void(0);" class="list-group-item">Morbi leo risus</a>
                  <a href="javascript:void(0);" class="list-group-item">Porta ac consectetur ac</a>
                  <a href="javascript:void(0);" class="list-group-item"> Vestibulum at eros</a>
                </ul>
              </div>
              <div class="tab-pane" id="tab-2-eg3">
                <div class="p-3">
                  <p>With supporting text below as a natural lead-in to additional content.</p>
                  <p class="mb-0">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="text-center d-block card-footer">
            <button class="mr-2 text-danger btn btn-link btn-sm">Cancel</button>
            <button class="btn-shadow-primary btn btn-primary btn-lg">View Profile</button>
          </div>
        </div>
      </div>
      <div class="col-md-12 col-lg-6 col-xl-4">
        <div class="card-shadow-primary card-border mb-3 card">
          <div class="dropdown-menu-header">
            <div class="dropdown-menu-header-inner bg-primary">
              <div class="menu-header-image"
                style="background-image: url('assets/images/dropdown-header/city2.jpg');">
              </div>
              <div class="menu-header-content">
                <div class="avatar-icon-wrapper avatar-icon-lg">
                  <div class="avatar-icon rounded btn-hover-shine"> 
                    <img src="@/assets/images/avatars/12.jpg" alt="Avatar 5" />
                  </div>
                </div>
                <div>
                  <h5 class="menu-header-title">Jessica Walberg</h5>
                </div>
                <div class="menu-header-btn-pane">
                  <button class="mr-2 btn btn-info btn-sm">Settings</button>
                  <button class="btn-icon btn-icon-only btn btn-warning btn-sm">
                    <i class="pe-7s-config btn-icon-wrapper"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="scroll-area-sm">
            <VuePerfectScrollbar class="scrollbar-container" v-once>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  <div class="widget-content p-0">
                    <div class="widget-content-wrapper">
                      <div class="widget-content-left center-elem mr-2">
                        <i class="pe-7s-file text-muted fsize-2"></i>
                      </div>
                      <div class="widget-content-left">
                        <div class="widget-heading">Example file 1</div>
                      </div>
                      <div class="widget-content-right widget-content-actions">
                        <button class="mr-1 btn-icon btn-icon-only btn btn-primary btn-sm">
                          <i class="pe-7s-tools btn-icon-wrapper"></i>
                        </button>
                        <button class="mr-1 btn-icon btn-icon-only btn btn-secondary btn-sm">
                          <i class="pe-7s-gym btn-icon-wrapper"></i>
                        </button>
                        <button class="btn-icon btn-icon-only btn btn-success btn-sm">
                          <i class="pe-7s-umbrella btn-icon-wrapper"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="list-group-item">
                  <div class="widget-content p-0">
                    <div class="widget-content-wrapper">
                      <div class="widget-content-left center-elem mr-2">
                        <i class="pe-7s-file text-muted fsize-2"></i>
                      </div>
                      <div class="widget-content-left">
                        <div class="widget-heading">Example file 2</div>
                      </div>
                      <div class="widget-content-right widget-content-actions">
                        <button class="mr-1 btn-icon btn-icon-only btn btn-primary btn-sm">
                          <i class="pe-7s-tools btn-icon-wrapper"></i>
                        </button>
                        <button class="btn-icon btn-icon-only btn btn-success btn-sm">
                          <i class="pe-7s-umbrella btn-icon-wrapper"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="list-group-item">
                  <div class="widget-content p-0">
                    <div class="widget-content-wrapper">
                      <div class="widget-content-left center-elem mr-2">
                        <i class="pe-7s-file text-muted fsize-2"></i>
                      </div>
                      <div class="widget-content-left">
                        <div class="widget-heading">Example file 2</div>
                      </div>
                      <div class="widget-content-right widget-content-actions">
                        <button class="mr-1 btn-icon btn-icon-only btn btn-primary btn-sm">
                          <i class="pe-7s-tools btn-icon-wrapper"></i>
                        </button>
                        <button class="btn-icon btn-icon-only btn btn-success btn-sm">
                          <i class="pe-7s-umbrella btn-icon-wrapper"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="list-group-item">
                  <div class="widget-content p-0">
                    <div class="widget-content-wrapper">
                      <div class="widget-content-left center-elem mr-2">
                        <i class="pe-7s-file text-muted fsize-2"></i>
                      </div>
                      <div class="widget-content-left">
                        <div class="widget-heading">Example file 2</div>
                      </div>
                      <div class="widget-content-right widget-content-actions">
                        <button class="mr-1 btn-icon btn-icon-only btn btn-primary btn-sm">
                          <i class="pe-7s-tools btn-icon-wrapper"></i>
                        </button>
                        <button class="btn-icon btn-icon-only btn btn-success btn-sm">
                          <i class="pe-7s-umbrella btn-icon-wrapper"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="list-group-item">
                  <div class="widget-content p-0">
                    <div class="widget-content-wrapper">
                      <div class="widget-content-left center-elem mr-2">
                        <i class="pe-7s-file text-muted fsize-2"></i>
                      </div>
                      <div class="widget-content-left">
                        <div class="widget-heading">Example file 2</div>
                      </div>
                      <div class="widget-content-right widget-content-actions">
                        <button class="mr-1 btn-icon btn-icon-only btn btn-primary btn-sm">
                          <i class="pe-7s-tools btn-icon-wrapper"></i>
                        </button>
                        <button class="btn-icon btn-icon-only btn btn-success btn-sm">
                          <i class="pe-7s-umbrella btn-icon-wrapper"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="list-group-item">
                  <div class="widget-content p-0">
                    <div class="widget-content-wrapper">
                      <div class="widget-content-left center-elem mr-2">
                        <i class="pe-7s-file text-muted fsize-2"></i>
                      </div>
                      <div class="widget-content-left">
                        <div class="widget-heading">Example file 2</div>
                      </div>
                      <div class="widget-content-right widget-content-actions">
                        <button class="mr-1 btn-icon btn-icon-only btn btn-primary btn-sm">
                          <i class="pe-7s-tools btn-icon-wrapper"></i>
                        </button>
                        <button class="btn-icon btn-icon-only btn btn-success btn-sm">
                          <i class="pe-7s-umbrella btn-icon-wrapper"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </VuePerfectScrollbar>
          </div>
          <div class="text-center d-block card-footer">
            <button class="mr-2 border-0 btn-transition btn btn-outline-danger">Remove from list</button>
            <button class="border-0 btn-transition btn btn-outline-success">Send Message</button>
          </div>
        </div>
      </div>
      <div class="col-md-12 col-lg-6 col-xl-4">
        <div class="card-shadow-primary profile-responsive card-border mb-3 card">
          <div class="dropdown-menu-header">
            <div class="dropdown-menu-header-inner bg-danger">
              <div class="menu-header-image"
                style="background-image: url('assets/images/dropdown-header/abstract1.jpg')">
              </div>
              <div class="menu-header-content btn-pane-right">
                <div class="avatar-icon-wrapper mr-2 avatar-icon-xl">
                  <div class="avatar-icon">
                    <img src="@/assets/images/avatars/3.jpg" alt="Avatar 5" />
                  </div>
                </div>
                <div>
                  <h5 class="menu-header-title">Mathew Mercer</h5>
                  <h6 class="menu-header-subtitle">Sales Manager</h6>
                </div>
                <div class="menu-header-btn-pane">
                  <button class="btn-icon mr-2 btn-icon-only btn btn-warning btn-sm">
                    <i class="pe-7s-config btn-icon-wrapper"></i>
                  </button>
                  <button class="btn-icon btn btn-success btn-sm">View Profile</button>
                </div>
              </div>
            </div>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <div class="widget-content p-0">
                <div class="widget-content-wrapper">
                  <div class="widget-content-left mr-3">
                    <div class="icon-wrapper m-0">
                      <div class="progress-circle-wrapper">
                        <vue-circle :progress="62" :size="52" :reverse="false" line-cap="round" :fill="f1"
                          empty-fill="rgba(0, 0, 0, .12)" :animation-start-value="0.0"
                          :start-angle="0" insert-mode="append" :thickness="3" :show-percent="true">
                        </vue-circle>
                      </div>
                    </div>
                  </div>
                  <div class="widget-content-left">
                    <div class="widget-heading">January Sales</div>
                    <div class="widget-subheading">Lorem ipsum dolor</div>
                  </div>
                  <div class="widget-content-right">
                    <div class="widget-numbers widget-numbers-sm text-primary">
                      <span>764</span>
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
                          empty-fill="rgba(0, 0, 0, .12)" :animation-start-value="0.0"
                          :start-angle="0" insert-mode="append" :thickness="3" :show-percent="true">
                        </vue-circle>
                      </div>
                    </div>
                  </div>
                  <div class="widget-content-left">
                    <div class="widget-heading">February Sales</div>
                    <div class="widget-subheading">Maecenas tempus, tellus</div>
                  </div>
                  <div class="widget-content-right">
                    <div class="widget-numbers widget-numbers-sm text-warning">
                      <span>194</span>
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
                          empty-fill="rgba(0, 0, 0, .12)" :animation-start-value="0.0"
                          :start-angle="0" insert-mode="append" :thickness="3" :show-percent="true">
                        </vue-circle>
                      </div>
                    </div>
                  </div>
                  <div class="widget-content-left">
                    <div class="widget-heading">March Sales</div>
                    <div class="widget-subheading">Donec vitae sapien</div>
                  </div>
                  <div class="widget-content-right">
                    <div class="widget-numbers widget-numbers-sm text-danger">
                      <span>-54 $</span>
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
                        <vue-circle :progress="91" :size="52" :reverse="false" line-cap="round" :fill="fill1"
                          empty-fill="rgba(0, 0, 0, .12)" :animation-start-value="0.0"
                          :start-angle="0" insert-mode="append" :thickness="3" :show-percent="true">
                        </vue-circle>
                      </div>
                    </div>
                  </div>
                  <div class="widget-content-left">
                    <div class="widget-heading">April Sales</div>
                    <div class="widget-subheading">Curabitur ullamcorper ultricies</div>
                  </div>
                  <div class="widget-content-right">
                    <div class="widget-numbers widget-numbers-sm text-info">
                      <span>45 $</span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12 col-lg-6 col-xl-4">
        <div class="card-shadow-primary profile-responsive card-border mb-3 card">
          <div class="dropdown-menu-header">
            <div class="dropdown-menu-header-inner bg-focus">
              <div class="menu-header-image opacity-3"
                style="background-image: url('assets/images/dropdown-header/city4.jpg');">
              </div>
              <div class="menu-header-content btn-pane-right">
                <div class="avatar-icon-wrapper mr-3 avatar-icon-xl">
                  <div class="avatar-icon rounded">
                    <img src="@/assets/images/avatars/12.jpg" alt="Avatar 5" />
                  </div>
                </div>
                <div>
                  <h5 class="menu-header-title">Bryce Cordova</h5>
                  <h6 class="menu-header-subtitle">Implementation Specialist</h6>
                </div>
                <div class="menu-header-btn-pane">
                  <button class="btn btn-pill btn-info">Button</button>
                </div>
              </div>
            </div>
          </div>
          <ul class="list-group list-group-flush">
            <li class="bg-warm-flame list-group-item">
              <div class="widget-content p-0">
                <div class="widget-content-wrapper">
                  <div class="widget-content-left mr-3">
                    <div class="icon-wrapper m-0 text-center">
                      <b class="text-white d-block w-100 fsize-3">
                        <span>764</span>
                      </b>
                    </div>
                  </div>
                  <div class="widget-content-left">
                    <div class="widget-heading text-dark opacity-7">March Totals</div>
                    <div class="widget-subheading opacity-10">
                      <span class="pr-2">
                        <b class="text-danger">12</b> new leads,
                      </span>
                      <span>
                        <b class="text-dark">$56,24</b> in sales
                      </span>
                    </div>
                  </div>
                  <div class="widget-content-right">
                    <div class="icon-wrapper m-0">
                      <div class="progress-circle-wrapper">
                        <vue-circle :progress="69" :size="52" :reverse="false" line-cap="round" :fill="f4"
                          empty-fill="rgba(0, 0, 0, .12)" :animation-start-value="0.0"
                          :start-angle="0" insert-mode="append" :thickness="3" :show-percent="true">
                        </vue-circle>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class="p-0 list-group-item">
              <div class="grid-menu grid-menu-2col overflow-hidden">
                <div class="no-gutters row">
                  <div class="col-sm-6">
                    <button class="btn-icon-vertical btn-square btn-transition btn btn-outline-link">
                      <i class="lnr-license btn-icon-wrapper btn-icon-lg mb-3"></i>View Profile
                    </button>
                  </div>
                  <div class="col-sm-6">
                    <button class="btn-icon-vertical btn-square btn-transition btn btn-outline-link">
                      <i class="lnr-map btn-icon-wrapper btn-icon-lg mb-3"></i>Sales Reports
                    </button>
                  </div>
                  <div class="col-sm-6">
                    <button class="btn-icon-vertical btn-square btn-transition btn btn-outline-link">
                      <i class="lnr-music-note btn-icon-wrapper btn-icon-lg mb-3"></i>Leads Generated
                    </button>
                  </div>
                  <div class="col-sm-6">
                    <button class="btn-icon-vertical btn-square btn-transition btn btn-outline-link">
                      <i class="lnr-heart btn-icon-wrapper btn-icon-lg mb-3"></i>Successful Tasks
                    </button>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="card-shadow-primary profile-responsive card-border mb-3 card">
          <div class="dropdown-menu-header">
            <div class="dropdown-menu-header-inner bg-info">
              <div class="menu-header-image opacity-2"
                style="background-image: url('assets/images/dropdown-header/abstract1.jpg')">
              </div>
              <div class="menu-header-content btn-pane-right">
                <div class="avatar-icon-wrapper mr-2 avatar-icon-xl">
                  <div class="avatar-icon rounded">
                    <img src="@/assets/images/avatars/7.jpg" alt="Avatar 5" />
                  </div>
                </div>
                <div>
                  <h5 class="menu-header-title">Aliesha Hunter</h5>
                </div>
                <div class="menu-header-btn-pane">
                  <div>
                    <div role="group" class="btn-group text-center">
                      <div class="nav">
                        <a href="#tab-example-161" data-toggle="tab" class="btn btn-focus mr-1">Action</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="tab-content">
            <div class="tab-pane active show" id="tab-example-161">
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  <div class="widget-content">
                    <div class="text-center">
                      <h5 class="widget-heading opacity-4">March Totals</h5>
                      <h5>
                        <span class="pr-2">
                          <b class="text-danger">12</b> new leads,
                        </span>
                        <span>
                          <b class="text-success">$56,24</b> in sales
                        </span>
                      </h5>
                    </div>
                  </div>
                </li>
                <li class="p-0 list-group-item">
                  <div class="grid-menu grid-menu-2col overflow-hidden">
                    <div class="no-gutters row">
                      <div class="col-sm-6">
                        <button class="btn-icon-vertical btn-square btn-transition btn btn-outline-link">
                          <i class="lnr-license btn-icon-wrapper btn-icon-lg mb-3"></i>View Profile
                        </button>
                      </div>
                      <div class="col-sm-6">
                        <button class="btn-icon-vertical btn-square btn-transition btn btn-outline-link">
                          <i class="lnr-music-note btn-icon-wrapper btn-icon-lg mb-3"></i>Leads Generated
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div class="tab-pane" id="tab-example-162">
              <div class="p-3">
                <p
                  class="mb-0"
                >With supporting text below as a natural lead-in to additional content.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-12 col-lg-6 col-xl-4">
        <div class="card-shadow-primary card-border mb-3 card">
          <div class="dropdown-menu-header">
            <div class="dropdown-menu-header-inner bg-dark">
              <div class="menu-header-content">
                <div class="avatar-icon-wrapper mb-3 avatar-icon-xl">
                  <div class="avatar-icon">
                    <img src="@/assets/images/avatars/6.jpg" alt="Avatar 5" />
                  </div>
                </div>
                <div>
                  <h5 class="menu-header-title">Isabelle Day</h5>
                  <h6 class="menu-header-subtitle">Security Officer</h6>
                </div>
                <div class="menu-header-btn-pane pt-1">
                  <button class="btn-icon btn btn-warning btn-sm">View Complete Profile</button>
                </div>
              </div>
            </div>
          </div>
          <div class="p-3">
            <h6
              class="text-muted text-uppercase font-size-md opacity-5 font-weight-normal"
            >Top Authors</h6>
            <ul class="rm-list-borders list-group list-group-flush">
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
              <li class="list-group-item">
                <div class="widget-content p-0">
                  <div class="widget-content-wrapper">
                    <div class="widget-content-left mr-3">
                      <img width="42" class="rounded-circle" src="@/assets/images/avatars/2.jpg" alt />
                    </div>
                    <div class="widget-content-left">
                      <div class="widget-heading">Vinnie Wagstaff</div>
                      <div class="widget-subheading">Java Programmer</div>
                    </div>
                    <div class="widget-content-right">
                      <div class="font-size-xlg text-muted">
                        <small class="opacity-5 pr-1">$</small>
                        <span>431</span>
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
                      <div class="widget-heading">Katerina Hutchings</div>
                      <div class="widget-subheading">Group Fiori</div>
                    </div>
                    <div class="widget-content-right">
                      <div class="font-size-xlg text-muted">
                        <small class="opacity-5 pr-1">$</small>
                        <span>77</span>
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
                      <img width="42" class="rounded-circle" src="@/assets/images/avatars/2.jpg" alt />
                    </div>
                    <div class="widget-content-left">
                      <div class="widget-heading">Harper Rose</div>
                      <div class="widget-subheading">Markets Planner</div>
                    </div>
                    <div class="widget-content-right">
                      <div class="font-size-xlg text-muted">
                        <small class="opacity-5 pr-1">$</small>
                        <span>32</span>
                        <small class="text-info pl-2">
                          <font-awesome-icon icon="angle-up" />
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div class="text-center d-block card-footer">
            <button class="btn btn-info">View Details</button>
          </div>
        </div>
      </div>
      <div class="col-md-12 col-lg-6 col-xl-4">
        <div class="card-shadow-primary card-border text-white mb-3 card bg-primary">
          <div class="dropdown-menu-header">
            <div class="dropdown-menu-header-inner bg-primary">
              <div class="menu-header-content">
                <div class="avatar-icon-wrapper mb-3 avatar-icon-xl">
                  <div class="avatar-icon">
                    <img src="@/assets/images/avatars/2.jpg" alt="Avatar 5" />
                  </div>
                </div>
                <div>
                  <h5 class="menu-header-title">Kalem Forster</h5>
                  <h6 class="menu-header-subtitle">Applications Technician</h6>
                </div>
                <div class="menu-header-btn-pane pt-1">
                  <button class="btn-icon btn btn-dark btn-sm">
                    <i class="pe-7s-config btn-icon-wrapper"></i>View Complete Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="text-center d-block card-footer">
            <button class="btn-shadow-dark btn-wider btn btn-dark">Send Message</button>
          </div>
        </div>
        <div class="card-hover-shadow card-border mb-3 card">
          <div class="dropdown-menu-header">
            <div class="dropdown-menu-header-inner bg-warning">
              <div class="menu-header-content">
                <div>
                  <a href="javascript:void(0);"  class="avatar-icon-wrapper btn-hover-shine avatar-icon-xl">
                    <div class="avatar-icon rounded">
                      <img src="@/assets/images/avatars/3.jpg" alt="Avatar 5" />
                    </div>
                  </a>
                </div>
                <div>
                  <h5 class="menu-header-title">Settings</h5>
                  <h6 class="menu-header-subtitle">Manage all of your options</h6>
                </div>
                <div class="menu-header-btn-pane">
                  <button class="mr-2 btn btn-dark btn-sm">Settings</button>
                  <button class="btn-icon btn-icon-only btn btn-primary btn-sm">
                    <i class="pe-7s-config btn-icon-wrapper"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="card-body">
            <p>Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.</p>
            <p class="mb-0">Since the 1500s, when an unknown printer took a galley of type and scrambled.</p>
          </div>
          <div class="d-block text-right card-footer">
            <button class="mr-2 btn btn-link btn-sm">Cancel</button>
            <button class="btn-shadow-primary btn btn-primary btn-lg">Submit</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageTitle from "../../Layout/Components/PageTitle.vue";
import VuePerfectScrollbar from "vue-perfect-scrollbar";
import VueCircle from "vue2-circle-progress";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faArrowRight,
  faArrowLeft,
  faAngleUp,
  faDotCircle,
  faAngleDown
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faArrowRight, faAngleUp, faArrowLeft, faDotCircle, faAngleDown);

export default {
  components: {
    PageTitle,
    "font-awesome-icon": FontAwesomeIcon,
    VuePerfectScrollbar,
    VueCircle
  },
  data: () => ({
    heading: "Profile Boxes",
    subheading:
      "These boxes are usually for dashboard elements centered around users and profiles.",
    icon: "pe-7s-science icon-gradient bg-happy-itmeo",

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
