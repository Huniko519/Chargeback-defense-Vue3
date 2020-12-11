<template>
  <div>
    <page-title :heading="heading" :subheading="subheading" :icon="icon"></page-title>
    <div class="row">
      <div class="col-sm-12 col-md-6 col-xl-4">
        <div class="card mb-3 widget-chart">
          <div class="widget-chart-content">
            <div class="icon-wrapper rounded">
              <div class="icon-wrapper-bg bg-warning"></div>
              <i class="lnr-laptop-phone text-warning"></i>
            </div>
            <div class="widget-numbers">
              <span>3M</span>
            </div>
            <div class="widget-subheading fsize-1 pt-2 opacity-10 text-warning font-weight-bold">Cash Deposits</div>
            <div class="widget-description opacity-8">
              <span class="text-danger pr-1">
                <font-awesome-icon icon="angle-down" />
                <span class="pl-1">54.1%</span>
              </span>
              down last 30 days
            </div>
          </div>
          <div class="widget-chart-wrapper">
            <chart1 :height="165" />
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-md-6 col-xl-4">
        <div class="card mb-3 widget-chart">
          <div class="widget-chart-content">
            <div class="icon-wrapper rounded">
              <div class="icon-wrapper-bg bg-danger"></div>
              <i class="lnr-graduation-hat text-danger"></i>
            </div>
            <div class="widget-numbers">
              <span>1M</span>
            </div>
            <div class="widget-subheading fsize-1 pt-2 opacity-10 text-danger font-weight-bold">Invested Dividents</div>
            <div class="widget-description opacity-8">
              Compared to YoY:
              <span class="text-info pl-1">
                <font-awesome-icon icon="angle-down" />
                <span class="pl-1">14.1%</span>
              </span>
            </div>
          </div>
          <div class="widget-chart-wrapper">
            <chart2 :height="165" />
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-md-12 col-xl-4">
        <div class="card mb-3 widget-chart">
          <div class="widget-chart-content">
            <div class="icon-wrapper rounded">
              <div class="icon-wrapper-bg bg-info"></div>
              <i class="lnr-diamond text-info"></i>
            </div>
            <div class="widget-numbers text-danger">
              <span>$294</span>
            </div>
            <div
              class="widget-subheading fsize-1 pt-2 opacity-10 text-info font-weight-bold"
            >Withdrawals</div>
            <div class="widget-description opacity-8">
              Down by
              <span class="text-success pl-1">
                <font-awesome-icon icon="angle-down" />
                <span class="pl-1">21.8%</span>
              </span>
            </div>
          </div>
          <div class="widget-chart-wrapper">
            <chart3 :height="165" />
          </div>
        </div>
      </div>
    </div>
    <div class="text-center mbg-3">
      <button class="btn-wide btn-pill btn-shadow fsize-1 btn btn-focus btn-lg">
        <span class="mr-2 opacity-7">
          <i class="icon pe-7s-hammer"></i>
        </span>
        View Complete Report
      </button>
    </div>

    <div class="row">
      <div class="col-sm-12 col-md-5 col-xl-4">
        <div class="card-hover-shadow-2x mb-3 card">
          <div class="card-header">
            <div>Timeline Example</div>
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
          <div class="scroll-area-lg">
            <VuePerfectScrollbar class="scrollbar-container" v-once>
              <div class="p-4">
                <div class="vertical-time-simple vertical-without-time vertical-timeline vertical-timeline--animate vertical-timeline--one-column">
                  <div class="vertical-timeline-element">
                    <div>
                      <span class="vertical-timeline-element-icon bounce-in"></span>
                      <div class="vertical-timeline-element-content bounce-in">
                        <h4 class="timeline-title">All Hands Meeting</h4>
                      </div>
                    </div>
                  </div>
                  <div class="vertical-timeline-element">
                    <div>
                      <span class="vertical-timeline-element-icon bounce-in"></span>
                      <div class="vertical-timeline-element-content bounce-in">
                        <p>
                          Yet another one, at
                          <span class="text-success">15:00 PM</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="vertical-timeline-element">
                    <div>
                      <span class="vertical-timeline-element-icon bounce-in"></span>
                      <div class="vertical-timeline-element-content bounce-in">
                        <h4 class="timeline-title">Build the production release</h4>
                      </div>
                    </div>
                  </div>
                  <div class="vertical-timeline-element">
                    <div>
                      <span class="vertical-timeline-element-icon bounce-in"></span>
                      <div class="vertical-timeline-element-content bounce-in">
                        <h4 class="timeline-title text-success">Something not important</h4>
                      </div>
                    </div>
                  </div>
                  <div class="vertical-timeline-element">
                    <div>
                      <span class="vertical-timeline-element-icon bounce-in"></span>
                      <div class="vertical-timeline-element-content bounce-in">
                        <h4 class="timeline-title">All Hands Meeting</h4>
                      </div>
                    </div>
                  </div>
                  <div class="vertical-timeline-element">
                    <div>
                      <span class="vertical-timeline-element-icon bounce-in"></span>
                      <div class="vertical-timeline-element-content bounce-in">
                        <p>
                          Yet another one, at
                          <span class="text-success">15:00 PM</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="vertical-timeline-element">
                    <div>
                      <span class="vertical-timeline-element-icon bounce-in"></span>
                      <div class="vertical-timeline-element-content bounce-in">
                        <h4 class="timeline-title">Build the production release</h4>
                      </div>
                    </div>
                  </div>
                  <div class="vertical-timeline-element">
                    <div>
                      <span class="vertical-timeline-element-icon bounce-in"></span>
                      <div class="vertical-timeline-element-content bounce-in">
                        <h4 class="timeline-title text-success">Something not important</h4>
                      </div>
                    </div>
                  </div>
                  <div class="vertical-timeline-element">
                    <div>
                      <span class="vertical-timeline-element-icon bounce-in"></span>
                      <div class="vertical-timeline-element-content bounce-in">
                        <h4 class="timeline-title">All Hands Meeting</h4>
                      </div>
                    </div>
                  </div>
                  <div class="vertical-timeline-element">
                    <div>
                      <span class="vertical-timeline-element-icon bounce-in"></span>
                      <div class="vertical-timeline-element-content bounce-in">
                        <p>
                          Yet another one, at
                          <span class="text-success">15:00 PM</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="vertical-timeline-element">
                    <div>
                      <span class="vertical-timeline-element-icon bounce-in"></span>
                      <div class="vertical-timeline-element-content bounce-in">
                        <h4 class="timeline-title">Build the production release</h4>
                      </div>
                    </div>
                  </div>
                  <div class="vertical-timeline-element">
                    <div>
                      <span class="vertical-timeline-element-icon bounce-in"></span>
                      <div class="vertical-timeline-element-content bounce-in">
                        <h4 class="timeline-title text-success">Something not important</h4>
                      </div>
                    </div>
                  </div>
                  <div class="vertical-timeline-element">
                    <div>
                      <span class="vertical-timeline-element-icon bounce-in"></span>
                      <div class="vertical-timeline-element-content bounce-in">
                        <h4 class="timeline-title">All Hands Meeting</h4>
                      </div>
                    </div>
                  </div>
                  <div class="vertical-timeline-element">
                    <div>
                      <span class="vertical-timeline-element-icon bounce-in"></span>
                      <div class="vertical-timeline-element-content bounce-in">
                        <p>
                          Yet another one, at
                          <span class="text-success">15:00 PM</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="vertical-timeline-element">
                    <div>
                      <span class="vertical-timeline-element-icon bounce-in"></span>
                      <div class="vertical-timeline-element-content bounce-in">
                        <h4 class="timeline-title">Build the production release</h4>
                      </div>
                    </div>
                  </div>
                  <div class="vertical-timeline-element">
                    <div>
                      <span class="vertical-timeline-element-icon bounce-in"></span>
                      <div class="vertical-timeline-element-content bounce-in">
                        <h4 class="timeline-title text-success">Something not important</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </VuePerfectScrollbar>
          </div>
          <div class="d-block text-center card-footer">
            <button class="btn-shadow btn-wide btn-pill btn btn-focus">
              <div class="badge badge-dot badge-dot-lg badge-warning badge-pulse">Badge</div>View All Messages
            </button>
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-md-7 col-xl-8">
        <div class="mb-3 card">
          <div class="card-header-tab card-header">
            <div>Dynamic Tables</div>
            <div class="btn-actions-pane-right">
              <div role="group" class="btn-group-sm btn-group">
                <button class="btn-shadow btn btn-dark">Refresh</button>
                <button type="button" class="btn-shadow btn btn-dark">Remove</button>
              </div>
            </div>
          </div>
          <div class="card-body">
            <b-table bordered class="mb-0" striped hover :items="items" :fields="fields"></b-table>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12 col-lg-6">
        <div class="card-hover-shadow-2x mb-3 card">
          <div class="card-header-tab card-header">
            <div class="card-header-title font-size-lg text-capitalize font-weight-normal">
              <i class="header-icon lnr-printer icon-gradient bg-ripe-malin"></i>
              Chat Box
            </div>
            <div class="btn-actions-pane-right text-capitalize actions-icon-btn">
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
          <div class="scroll-area-sm">
            <VuePerfectScrollbar class="scrollbar-container" v-once>
              <div class="chat-wrapper p-1">
                <div class="chat-box-wrapper">
                  <div>
                    <div class="avatar-icon-wrapper mr-1">
                      <div class="badge badge-bottom btn-shine badge-success badge-dot badge-dot-lg"></div>
                      <div class="avatar-icon avatar-icon-lg rounded">
                        <img src="@/assets/images/avatars/2.jpg" alt />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div class="chat-box">
                        But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.
                    </div>
                    <small class="opacity-6">
                      <font-awesome-icon icon="calendar-alt" class="mr-1" />11:01 AM | Yesterday
                    </small>
                  </div>
                </div>
                <div class="float-right">
                  <div class="chat-box-wrapper chat-box-wrapper-right">
                    <div>
                      <div class="chat-box">
                          Expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.
                      </div>
                      <small class="opacity-6">
                        <font-awesome-icon icon="calendar-alt" class="mr-1" />11:01 AM | Yesterday
                      </small>
                    </div>
                    <div>
                      <div class="avatar-icon-wrapper ml-1">
                        <div class="badge badge-bottom btn-shine badge-success badge-dot badge-dot-lg"></div>
                        <div class="avatar-icon avatar-icon-lg rounded">
                          <img src="@/assets/images/avatars/3.jpg" alt />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="chat-box-wrapper">
                  <div>
                    <div class="avatar-icon-wrapper mr-1">
                      <div class="badge badge-bottom btn-shine badge-success badge-dot badge-dot-lg"></div>
                      <div class="avatar-icon avatar-icon-lg rounded">
                        <img src="@/assets/images/avatars/2.jpg" alt />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div class="chat-box">
                        But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.
                    </div>
                    <small class="opacity-6">
                      <font-awesome-icon icon="calendar-alt" class="mr-1" />11:01 AM | Yesterday
                    </small>
                  </div>
                </div>
                <div class="float-right">
                  <div class="chat-box-wrapper chat-box-wrapper-right">
                    <div>
                      <div class="chat-box">
                          Denouncing pleasure and praising pain was born and I will give you a complete account.
                      </div>
                      <small class="opacity-6">
                        <font-awesome-icon icon="calendar-alt" class="mr-1" />11:01 AM | Yesterday
                      </small>
                    </div>
                    <div>
                      <div class="avatar-icon-wrapper ml-1">
                        <div class="badge badge-bottom btn-shine badge-success badge-dot badge-dot-lg"></div>
                        <div class="avatar-icon avatar-icon-lg rounded">
                          <img src="@/assets/images/avatars/2.jpg" alt />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="float-right">
                  <div class="chat-box-wrapper chat-box-wrapper-right">
                    <div>
                      <div class="chat-box">The master-builder of human happiness.</div>
                      <small class="opacity-6">
                        <font-awesome-icon icon="calendar-alt" class="mr-1" />11:01 AM | Yesterday
                      </small>
                    </div>
                    <div>
                      <div class="avatar-icon-wrapper ml-1">
                        <div class="badge badge-bottom btn-shine badge-success badge-dot badge-dot-lg"></div>
                        <div class="avatar-icon avatar-icon-lg rounded">
                          <img src="@/assets/images/avatars/2.jpg" alt />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </VuePerfectScrollbar>
          </div>
          <div class="card-footer">
            <input placeholder="Write here and hit enter to send..." type="text" class="form-control-sm form-control" />
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-lg-6">
        <div class="card-hover-shadow-2x mb-3 card">
          <div class="card-header-tab card-header">
            <div class="card-header-title font-size-lg text-capitalize font-weight-normal">
              <i class="header-icon lnr-database icon-gradient bg-malibu-beach"></i>Tasks List
            </div>
            <div class="btn-actions-pane-right text-capitalize actions-icon-btn">
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
          <div class="scroll-area-sm">
            <VuePerfectScrollbar class="scrollbar-container" v-once>
              <ul class="todo-list-wrapper list-group list-group-flush">
                <li class="list-group-item">
                  <div class="todo-indicator bg-warning"></div>
                  <div class="widget-content p-0">
                    <div class="widget-content-wrapper">
                      <div class="widget-content-left mr-2">
                        <div class="custom-checkbox custom-control">
                          <input type="checkbox" id="exampleCustomCheckbox12" class="custom-control-input" />
                          <label class="custom-control-label" for="exampleCustomCheckbox12">&nbsp;</label>
                        </div>
                      </div>
                      <div class="widget-content-left">
                        <div class="widget-heading">
                          Wash the car
                          <div class="badge badge-danger ml-2">Rejected</div>
                        </div>
                        <div class="widget-subheading">
                          <i>Written by Bob</i>
                        </div>
                      </div>
                      <div class="widget-content-right widget-content-actions">
                        <button class="border-0 btn-transition btn btn-outline-success">
                          <font-awesome-icon icon="check" />
                        </button>
                        <button class="border-0 btn-transition btn btn-outline-danger">
                          <font-awesome-icon icon="trash-alt" />
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="list-group-item">
                  <div class="todo-indicator bg-focus"></div>
                  <div class="widget-content p-0">
                    <div class="widget-content-wrapper">
                      <div class="widget-content-left mr-2">
                        <div class="custom-checkbox custom-control">
                          <input type="checkbox" id="exampleCustomCheckbox1" class="custom-control-input" />
                          <label class="custom-control-label" for="exampleCustomCheckbox1">&nbsp;</label>
                        </div>
                      </div>
                      <div class="widget-content-left">
                        <div class="widget-heading">Task with hover dropdown menu</div>
                        <div class="widget-subheading">
                          <div>
                            By Johnny
                            <div class="badge badge-pill badge-info ml-2">NEW</div>
                          </div>
                        </div>
                      </div>
                      <div class="widget-content-right widget-content-actions">
                        <div class="d-inline-block">
                          <b-dropdown toggle-class="btn-icon btn-icon-only" right variant="link" no-caret>
                            <span slot="button-content">
                              <i class="pe-7s-menu btn-icon-wrapper"></i>
                            </span>
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
                          </b-dropdown>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="list-group-item">
                  <div class="todo-indicator bg-primary"></div>
                  <div class="widget-content p-0">
                    <div class="widget-content-wrapper">
                      <div class="widget-content-left mr-2">
                        <div class="custom-checkbox custom-control">
                          <input type="checkbox" id="exampleCustomCheckbox4" class="custom-control-input" />
                          <label class="custom-control-label" for="exampleCustomCheckbox4">&nbsp;</label>
                        </div>
                      </div>
                      <div class="widget-content-left flex2">
                        <div class="widget-heading">Badge on the right task</div>
                        <div class="widget-subheading">This task has show on hover actions!</div>
                      </div>
                      <div class="widget-content-right widget-content-actions">
                        <button class="border-0 btn-transition btn btn-outline-success">
                          <font-awesome-icon icon="check" />
                        </button>
                      </div>
                      <div class="widget-content-right ml-3">
                        <div class="badge badge-pill badge-success">Latest Task</div>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="list-group-item">
                  <div class="todo-indicator bg-info"></div>
                  <div class="widget-content p-0">
                    <div class="widget-content-wrapper">
                      <div class="widget-content-left mr-2">
                        <div class="custom-checkbox custom-control">
                          <input type="checkbox" id="exampleCustomCheckbox2" class="custom-control-input" />
                          <label class="custom-control-label" for="exampleCustomCheckbox2">&nbsp;</label>
                        </div>
                      </div>
                      <div class="widget-content-left mr-3">
                        <div class="widget-content-left">
                          <img width="42" class="rounded" src="@/assets/images/avatars/1.jpg" alt />
                        </div>
                      </div>
                      <div class="widget-content-left">
                        <div class="widget-heading">Go grocery shopping</div>
                        <div class="widget-subheading">A short description for this todo item</div>
                      </div>
                      <div class="widget-content-right widget-content-actions">
                        <button class="border-0 btn-transition btn btn-outline-success">
                          <font-awesome-icon icon="check" />
                        </button>
                        <button class="border-0 btn-transition btn btn-outline-danger">
                          <font-awesome-icon icon="trash-alt" />
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="list-group-item">
                  <div class="todo-indicator bg-success"></div>
                  <div class="widget-content p-0">
                    <div class="widget-content-wrapper">
                      <div class="widget-content-left mr-2">
                        <div class="custom-checkbox custom-control">
                          <input type="checkbox" id="exampleCustomCheckbox3" class="custom-control-input" />
                          <label class="custom-control-label" for="exampleCustomCheckbox3">&nbsp;</label>
                        </div>
                      </div>
                      <div class="widget-content-left flex2">
                        <div class="widget-heading">Development Task</div>
                        <div class="widget-subheading">Finish Vue ToDo List App</div>
                      </div>
                      <div class="widget-content-right">
                        <div class="badge badge-warning mr-2">69</div>
                      </div>
                      <div class="widget-content-right">
                        <button class="border-0 btn-transition btn btn-outline-success">
                          <font-awesome-icon icon="check" />
                        </button>
                        <button class="border-0 btn-transition btn btn-outline-danger">
                          <font-awesome-icon icon="trash-alt" />
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </VuePerfectScrollbar>
          </div>
          <div class="d-block text-right card-footer">
            <button class="mr-2 btn btn-link btn-sm">Cancel</button>
            <button class="btn btn-primary">Add Task</button>
          </div>
        </div>
      </div>
    </div>
    <div class="card mb-3">
      <div class="no-gutters row">
        <div class="col-md-12 col-lg-6 col-xl-3">
          <div class="pt-0 pb-0 card-body">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <div class="widget-content p-0">
                  <div class="widget-content-outer">
                    <div class="widget-content-wrapper">
                      <div class="widget-content-left">
                        <div class="widget-heading">Total Orders</div>
                        <div class="widget-subheading">Last year expenses</div>
                      </div>
                      <div class="widget-content-right">
                        <div class="widget-numbers text-primary">1896</div>
                      </div>
                    </div>
                    <div class="widget-progress-wrapper">
                      <div class="progress-bar-sm progress-bar-animated-alt progress">
                        <div class="progress-bar bg-primary" role="progressbar" aria-valuenow="43"
                          aria-valuemin="0" aria-valuemax="100" style="width: 43%;" ></div>
                      </div>
                      <div class="progress-sub-label">
                        <div class="sub-label-left">YoY Growth</div>
                        <div class="sub-label-right">100%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-12 col-lg-6 col-xl-3">
          <div class="pt-0 pb-0 card-body">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <div class="widget-content p-0">
                  <div class="widget-content-outer">
                    <div class="widget-content-wrapper">
                      <div class="widget-content-left">
                        <div class="widget-heading">Followers</div>
                        <div class="widget-subheading">People interested</div>
                      </div>
                      <div class="widget-content-right">
                        <div class="widget-numbers text-success">45,5%</div>
                      </div>
                    </div>
                    <div class="widget-progress-wrapper">
                      <div class="progress-bar-sm progress-bar-animated-alt progress">
                        <div class="progress-bar bg-success" role="progressbar" aria-valuenow="43"
                          aria-valuemin="0" aria-valuemax="100" style="width: 43%;"></div>
                      </div>
                      <div class="progress-sub-label">
                        <div class="sub-label-left">YoY Growth</div>
                        <div class="sub-label-right">100%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-12 col-lg-6 col-xl-3">
          <div class="pt-0 pb-0 card-body">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <div class="widget-content p-0">
                  <div class="widget-content-outer">
                    <div class="widget-content-wrapper">
                      <div class="widget-content-left">
                        <div class="widget-heading">Clients</div>
                        <div class="widget-subheading">Total Profit</div>
                      </div>
                      <div class="widget-content-right">
                        <div class="widget-numbers text-danger">
                          <small>$</small>
                          527
                        </div>
                      </div>
                    </div>
                    <div class="widget-progress-wrapper">
                      <div class="progress-bar-sm progress-bar-animated-alt progress">
                        <div class="progress-bar bg-danger" role="progressbar" aria-valuenow="43" aria-valuemin="0"
                          aria-valuemax="100" style="width: 43%;">
                        </div>
                      </div>
                      <div class="progress-sub-label">
                        <div class="sub-label-left">YoY Growth</div>
                        <div class="sub-label-right">100%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-12 col-lg-6 col-xl-3">
          <div class="pt-0 pb-0 card-body">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <div class="widget-content p-0">
                  <div class="widget-content-outer">
                    <div class="widget-content-wrapper">
                      <div class="widget-content-left">
                        <div class="widget-heading">Products Sold</div>
                        <div class="widget-subheading">Total revenue streams</div>
                      </div>
                      <div class="widget-content-right">
                        <div class="widget-numbers text-focus">682</div>
                      </div>
                    </div>
                    <div class="widget-progress-wrapper">
                      <div class="progress-bar-sm progress-bar-animated-alt progress">
                        <div class="progress-bar bg-focus" role="progressbar" aria-valuenow="43"
                          aria-valuemin="0" aria-valuemax="100" style="width: 43%;">
                        </div>
                      </div>
                      <div class="progress-sub-label">
                        <div class="sub-label-left">YoY Growth</div>
                        <div class="sub-label-right">100%</div>
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
  </div>
</template>

<script>
import PageTitle from "../../Layout/Components/PageTitle.vue";
import VuePerfectScrollbar from "vue-perfect-scrollbar";
import chart1 from "./Analytics/chart1";
import chart2 from "./Analytics/chart2";
import chart3 from "./Analytics/chart3";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrashAlt, faCheck, faTh } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faTrashAlt, faCheck, faTh);

export default {
  components: {
    PageTitle,
    VuePerfectScrollbar,
    "font-awesome-icon": FontAwesomeIcon,

    chart1,
    chart2,
    chart3
  },
  data: () => ({
    heading: "Advertisement",
    subheading:
      "This is an example dashboard created using build-in elements and components.",
    icon: "pe-7s-car icon-gradient bg-mean-fruit",

    fields: [
      {
        key: "last_name",
        sortable: true
      },
      {
        key: "first_name",
        sortable: true
      },
      {
        key: "age",
        label: "Person age",
        sortable: true
        // Variant applies to the whole column, including the header and footer
      }
    ],
    items: [
      {
        isActive: true,
        age: 40,
        first_name: "Dickerson",
        last_name: "Macdonald"
      },
      { isActive: false, age: 21, first_name: "Larsen", last_name: "Shaw" },
      { isActive: false, age: 89, first_name: "Geneva", last_name: "Wilson" },
      { isActive: true, age: 38, first_name: "Jami", last_name: "Carney" },
      {
        isActive: true,
        age: 40,
        first_name: "Dickerson",
        last_name: "Macdonald"
      },
      { isActive: false, age: 21, first_name: "Larsen", last_name: "Shaw" },
      { isActive: false, age: 89, first_name: "Geneva", last_name: "Wilson" },
      { isActive: true, age: 38, first_name: "Jami", last_name: "Carney" },
      {
        isActive: true,
        age: 40,
        first_name: "Dickerson",
        last_name: "Macdonald"
      },
      { isActive: false, age: 21, first_name: "Larsen", last_name: "Shaw" }
    ]
  }),

  methods: {}
};
</script>
