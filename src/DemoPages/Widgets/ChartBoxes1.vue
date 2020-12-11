<template>
  <div>
    <page-title :heading="heading" :subheading="subheading" :icon="icon"></page-title>
    <tabs :tabs="tabs" :currentTab="currentTab"
      :wrapper-class="'body-tabs shadow-tabs'" :tab-class="'tab-item'"
      :tab-active-class="'tab-item-active'" :line-class="'tab-item-line'" @onClick="handleClick" />
    <div class="content">
      <div v-if="currentTab === 'tab1'">
        <div class="row">
          <div class="col-md-4">
            <div class="card mb-3 widget-chart">
              <div class="icon-wrapper rounded-circle">
                <div class="icon-wrapper-bg bg-primary"></div>
                <i class="lnr-cog text-primary"></i>
              </div>
              <div class="widget-numbers">
                <span>46k</span>
              </div>
              <div class="widget-subheading">Total Views</div>
              <div class="widget-description text-success">
                <font-awesome-icon icon="angle-up" />
                <span class="pl-1">
                  <span>176%</span>
                </span>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card mb-3 widget-chart">
              <div class="widget-chart-actions">
                <button type="button" class="btn btn-link">
                  <font-awesome-icon icon="ellipsis-h" />
                </button>
              </div>
              <div class="icon-wrapper rounded-circle">
                <div class="icon-wrapper-bg bg-success"></div>
                <i class="lnr-screen text-success"></i>
              </div>
              <div class="widget-numbers">
                <span>17k</span>
              </div>
              <div class="widget-subheading">Profiles</div>
              <div class="widget-description text-warning">
                <span class="pr-1">
                  <span>128%</span>
                </span>
                <font-awesome-icon icon="arrow-left" />
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card mb-3 widget-chart">
              <div class="icon-wrapper rounded-circle">
                <div class="icon-wrapper-bg bg-danger"></div>
                <i class="lnr-laptop-phone text-danger"></i>
              </div>
              <div class="widget-numbers">
                <span>5,82k</span>
              </div>
              <div class="widget-subheading">Reports Submitted</div>
              <div class="widget-description text-primary">
                <span class="pr-1">54.1%</span>
                <font-awesome-icon icon="angle-up" />
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card mb-3 widget-chart">
              <div class="icon-wrapper rounded-circle">
                <div class="icon-wrapper-bg bg-info"></div>
                <i class="lnr-graduation-hat text-info"></i>
              </div>
              <div class="widget-numbers">
                <span>62k</span>
              </div>
              <div class="widget-subheading">Bugs Fixed</div>
              <div class="widget-description text-info">
                <font-awesome-icon icon="arrow-right" />
                <span class="pl-1">175.5%</span>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card mb-3 widget-chart">
              <div class="icon-wrapper rounded">
                <div class="icon-wrapper-bg bg-focus"></div>
                <div class="center-svg">
                  <font-awesome-icon icon="arrow-right" />
                </div>
              </div>
              <div class="widget-numbers">
                <span>2,82k</span>
              </div>
              <div class="widget-subheading">Total Sales</div>
              <div class="widget-description text-danger">
                <span class="pr-1">23.1%</span>
                <font-awesome-icon icon="angle-down" />
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card mb-3 widget-chart">
              <div class="icon-wrapper rounded">
                <div class="icon-wrapper-bg bg-primary"></div>
                <div class="center-svg">
                  <font-awesome-icon icon="angle-down" />
                </div>
              </div>
              <div class="widget-numbers">
                <span>32k</span>
              </div>
              <div class="widget-subheading">Follow-ups</div>
              <div class="widget-description text-focus">
                <font-awesome-icon icon="arrow-left" />
                <span class="pl-1">115.5%</span>
              </div>
            </div>
          </div>
        </div>
        <div class="divider mt-0" style="margin-bottom: 30px;"></div>
        <div class="row">
          <div class="col-md-4">
            <div class="card mb-3 widget-chart">
              <div class="widget-numbers">1.2M</div>
              <div class="widget-subheading">Leads Generated</div>
              <div class="widget-description text-info">
                <font-awesome-icon icon="ellipsis-h" />
                <span class="pl-1">115.5%</span>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card mb-3 widget-chart">
              <div class="widget-chart-actions">
                <button type="button" class="btn btn-link">
                  <font-awesome-icon icon="ellipsis-h" />
                </button>
              </div>
              <div class="widget-numbers">17.2k</div>
              <div class="widget-subheading">Profiles</div>
              <div class="widget-description text-warning">
                <span class="pr-1">175.5%</span>
                <font-awesome-icon icon="arrow-left" />
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card mb-3 widget-chart">
              <div class="widget-numbers">5.82k</div>
              <div class="widget-subheading">Reports Submitted</div>
              <div class="widget-description text-primary">
                <span class="pr-1">54.1%</span>
                <font-awesome-icon icon="angle-up" />
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card mb-3 widget-chart">
              <div class="widget-numbers">63.2k</div>
              <div class="widget-subheading">Bugs Fixed</div>
              <div class="widget-description text-info">
                <font-awesome-icon icon="arrow-right" />
                <span class="pl-1">175.5%</span>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card mb-3 widget-chart">
              <div class="widget-numbers">3.47k</div>
              <div class="widget-subheading">Users Active</div>
              <div class="widget-description text-danger">
                <span class="pr-1">31.2%</span>
                <font-awesome-icon icon="angle-down" />
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card mb-3 widget-chart">
              <div class="widget-numbers">3.7M</div>
              <div class="widget-subheading">Lifetime Tickets</div>
              <div class="widget-description text-warning">
                <font-awesome-icon icon="arrow-right" />
                <span class="pl-1">121.9%</span>
              </div>
            </div>
          </div>
        </div>
        <div class="divider mt-0" style="margin-bottom: 30px;"></div>
        <div class="row">
          <div class="col-md-4">
            <div class="card mb-3 widget-chart card-hover-shadow-2x">
              <div class="icon-wrapper border-light rounded">
                <div class="icon-wrapper-bg bg-light"></div>
                <i class="lnr-cog icon-gradient bg-night-fade"></i>
              </div>
              <div class="widget-numbers">45.8k</div>
              <div class="widget-subheading">Total Views</div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card mb-3 widget-chart card-hover-shadow-2x">
              <div class="icon-wrapper border-light rounded">
                <div class="icon-wrapper-bg bg-light"></div>
                <i class="lnr-screen icon-gradient bg-ripe-malin"></i>
              </div>
              <div class="widget-numbers">17.2k</div>
              <div class="widget-subheading">Profiles</div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card mb-3 widget-chart card-hover-shadow-2x">
              <div class="icon-wrapper border-light rounded">
                <div class="icon-wrapper-bg bg-light"></div>
                <i class="lnr-laptop-phone icon-gradient bg-arielle-smile"></i>
              </div>
              <div class="widget-numbers">5.82k</div>
              <div class="widget-subheading">Reports Submitted</div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card mb-3 widget-chart card-hover-shadow-2x">
              <div class="icon-wrapper border-light rounded">
                <div class="icon-wrapper-bg bg-light"></div>
                <i class="lnr-graduation-hat icon-gradient bg-happy-itmeo"></i>
              </div>
              <div class="widget-numbers">63.2k</div>
              <div class="widget-subheading">Bugs Fixed</div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card mb-3 widget-chart card-hover-shadow-2x">
              <div class="icon-wrapper border-light rounded-circle">
                <div class="icon-wrapper-bg bg-light"></div>
                <i class="lnr-lock icon-gradient bg-malibu-beach"></i>
              </div>
              <div class="widget-numbers">1.5M</div>
              <div class="widget-subheading">Views</div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card mb-3 widget-chart card-hover-shadow-2x">
              <div class="icon-wrapper border-light rounded">
                <div class="icon-wrapper-bg bg-light"></div>
                <i class="lnr-hourglass icon-gradient bg-love-kiss"></i>
              </div>
              <div class="widget-numbers">1,584</div>
              <div class="widget-subheading">Active Social Accounts</div>
            </div>
          </div>
        </div>
        <div class="divider mt-0" style="margin-bottom: 30px;"></div>
        <div class="row">
          <div class="col-md-4">
            <div class="card mb-3 widget-chart">
              <div class="icon-wrapper rounded-circle">
                <div class="icon-wrapper-bg bg-primary"></div>
                <i class="lnr-cog text-primary"></i>
              </div>
              <div class="widget-numbers">45.8k</div>
              <div class="widget-subheading">Total Views</div>
              <div class="widget-description text-success">
                <font-awesome-icon icon="angle-up" />
                <span class="pl-1">175.5%</span>
              </div>
              <div class="widget-progress-wrapper">
                <div class="progress-bar-sm progress-bar-animated-alt progress">
                  <div class="progress-bar bg-success" role="progressbar"
                    aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" style="width: 65%;">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card mb-3 widget-chart">
              <div class="icon-wrapper rounded-circle">
                <div class="icon-wrapper-bg bg-success"></div>
                <i class="lnr-screen text-success"></i>
              </div>
              <div class="widget-numbers">17.2k</div>
              <div class="widget-subheading">Profiles</div>
              <div class="widget-description text-warning">
                <span class="pr-1">175.5%</span>
                <font-awesome-icon icon="arrow-left" />
              </div>
              <div class="widget-progress-wrapper">
                <div class="progress-bar-xs progress-bar-animated-alt progress">
                  <div class="progress-bar bg-danger" role="progressbar"
                    aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style="width: 85%;">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card mb-3 widget-chart card-border">
              <div class="icon-wrapper rounded-circle">
                <div class="icon-wrapper-bg bg-danger"></div>
                <i class="lnr-laptop-phone text-danger"></i>
              </div>
              <div class="widget-numbers">5.82k</div>
              <div class="widget-subheading">Reports Submitted</div>
              <div class="widget-description text-primary">
                <span class="pr-1">54.1%</span>
                <font-awesome-icon icon="angle-up" />
              </div>
              <div class="widget-progress-wrapper progress-wrapper-bottom">
                <div class="progress-bar-sm progress-bar-animated progress">
                  <div class="progress-bar bg-warning" role="progressbar"
                    aria-valuenow="47" aria-valuemin="0" aria-valuemax="100" style="width: 47%;">
                </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card mb-3 widget-chart card-border">
              <div class="icon-wrapper rounded-circle">
                <div class="icon-wrapper-bg bg-info"></div>
                <i class="lnr-graduation-hat text-info"></i>
              </div>
              <div class="widget-numbers">63.2k</div>
              <div class="widget-subheading">Bugs Fixed</div>
              <div class="widget-description text-info">
                <font-awesome-icon icon="arrow-right" />
                <span class="pl-1">175.5%</span>
              </div>
              <div class="widget-progress-wrapper progress-wrapper-bottom">
                <div class="progress-bar-xs progress">
                  <div class="progress-bar bg-primary" role="progressbar" aria-valuenow="91"
                    aria-valuemin="0" aria-valuemax="100" style="width: 91%;">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card mb-3 widget-chart">
              <div class="icon-wrapper rounded-circle">
                <div class="icon-wrapper-bg bg-focus"></div>
                <i class="pe-7s-bluetooth text-focus"></i>
              </div>
              <div class="widget-numbers">15.8k</div>
              <div class="widget-subheading">Total Views</div>
              <div class="widget-description">
                <span class="text-success">
                  <font-awesome-icon icon="angle-up" />
                  <span class="pl-1">54.1%</span>
                </span> increase since last month
              </div>
              <div class="widget-progress-wrapper">
                <div class="progress-bar-lg progress-bar-animated progress">
                  <div class="progress-bar bg-primary" role="progressbar" aria-valuenow="65"
                    aria-valuemin="0" aria-valuemax="100" style="width: 65%;">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card mb-3 widget-chart">
              <div class="icon-wrapper rounded-circle">
                <div class="icon-wrapper-bg bg-warning"></div>
                <i class="pe-7s-stopwatch text-warning"></i>
              </div>
              <div class="widget-numbers">17.2k</div>
              <div class="widget-subheading">Profiles</div>
              <div class="widget-description">
                <span class="text-success pl-1 pr-1">
                  <font-awesome-icon icon="angle-up" />
                  <span class="pl-1">77.5%</span>
                </span>new sales leads
              </div>
              <div class="widget-progress-wrapper">
                <div class="progress-bar-xs progress-bar-animated progress">
                  <div class="progress-bar bg-info" role="progressbar" aria-valuenow="85"
                    aria-valuemin="0" aria-valuemax="100" style="width: 85%;">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="currentTab === 'tab2'">
        <div class="row">
          <div class="col-md-4">
            <div class="card mb-3 bg-primary widget-chart text-white card-border">
              <div class="icon-wrapper rounded-circle">
                <div class="icon-wrapper-bg bg-white opacity-1"></div>
                <i class="lnr-cog text-white"></i>
              </div>
              <div class="widget-numbers">45.8k</div>
              <div class="widget-subheading">Total Views</div>
              <div class="widget-description text-success">
                <font-awesome-icon icon="angle-up" />
                <span class="pl-1">175.5%</span>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card mb-3 bg-success widget-chart text-white card-border">
              <div class="widget-chart-actions">
                <button type="button" class="btn btn-link">
                  <font-awesome-icon icon="ellipsis-h" />
                </button>
              </div>
              <div class="icon-wrapper rounded-circle">
                <div class="icon-wrapper-bg bg-white opacity-10"></div>
                <i class="lnr-screen text-success"></i>
              </div>
              <div class="widget-numbers">17.2k</div>
              <div class="widget-subheading">Profiles</div>
              <div class="widget-description text-white">
                <span class="pr-1">175.5%</span>
                <font-awesome-icon icon="arrow-left" />
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card mb-3 bg-warning widget-chart text-white card-border">
              <div class="icon-wrapper rounded-circle">
                <div class="icon-wrapper-bg bg-white opacity-2"></div>
                <i class="lnr-laptop-phone text-white"></i>
              </div>
              <div class="widget-numbers">5.82k</div>
              <div class="widget-subheading">Reports Submitted</div>
              <div class="widget-description text-white">
                <span class="pl-1">54.1%</span>
                <font-awesome-icon icon="angle-up" />
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card mb-3 bg-focus widget-chart text-white card-border">
              <div class="icon-wrapper rounded-circle">
                <div class="icon-wrapper-bg bg-info opacity-5"></div>
                <i class="lnr-graduation-hat text-white"></i>
              </div>
              <div class="widget-numbers">63.2k</div>
              <div class="widget-subheading">Bugs Fixed</div>
              <div class="widget-description text-info">
                <font-awesome-icon icon="arrow-right" />
                <span class="pl-1">175.5%</span>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card mb-3 bg-danger widget-chart text-white card-border">
              <div class="icon-wrapper rounded">
                <div class="icon-wrapper-bg bg-white opacity-2"></div>
                <i class="pe-7s-eyedropper text-white"></i>
              </div>
              <div class="widget-numbers">5.82k</div>
              <div class="widget-subheading">Reports Submitted</div>
              <div class="widget-description text-white">
                <span class="pl-1">54.1%</span>
                <font-awesome-icon icon="angle-up" />
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card mb-3 bg-info widget-chart text-white card-border">
              <div class="icon-wrapper rounded">
                <div class="icon-wrapper-bg bg-focus opacity-5"></div>
                <i class="pe-7s-photo text-white"></i>
              </div>
              <div class="widget-numbers">63.2k</div>
              <div class="widget-subheading">Bugs Fixed</div>
              <div class="widget-description text-white">
                <font-awesome-icon icon="arrow-right" />
                <span class="pl-1">175.5%</span>
              </div>
            </div>
          </div>
        </div>
        <div class="divider mt-0" style="margin-bottom: 30px;"></div>
        <div class="row">
          <div class="col-md-4">
            <div class="card mb-3 bg-arielle-smile widget-chart text-white card-border">
              <div class="icon-wrapper rounded-circle">
                <div class="icon-wrapper-bg bg-white opacity-10"></div>
                <i class="lnr-cog icon-gradient bg-arielle-smile"></i>
              </div>
              <div class="widget-numbers">45.8k</div>
              <div class="widget-subheading">Total Views</div>
              <div class="widget-description text-dark">
                <font-awesome-icon icon="angle-up" />
                <span class="pl-1">175.5%</span>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card mb-3 bg-warm-flame widget-chart text-white card-border">
              <div class="icon-wrapper rounded">
                <div class="icon-wrapper-bg bg-white opacity-10"></div>
                <i class="lnr-screen icon-gradient bg-warm-flame"></i>
              </div>
              <div class="widget-numbers">17.2k</div>
              <div class="widget-subheading">Profiles</div>
              <div class="widget-description text-white">
                <span class="pr-1">175.5%</span>
                <font-awesome-icon icon="arrow-left" />
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card mb-3 bg-ripe-malin widget-chart text-white card-border">
              <div class="icon-wrapper rounded">
                <div class="icon-wrapper-bg bg-white opacity-2"></div>
                <i class="lnr-laptop-phone text-white"></i>
              </div>
              <div class="widget-numbers">5.82k</div>
              <div class="widget-subheading">Reports Submitted</div>
              <div class="widget-description text-white">
                <span class="pl-1">54.1%</span>
                <font-awesome-icon icon="angle-up" />
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card mb-3 bg-mixed-hopes widget-chart text-white card-border">
              <div class="icon-wrapper rounded">
                <div class="icon-wrapper-bg bg-dark opacity-9"></div>
                <i class="lnr-graduation-hat text-white"></i>
              </div>
              <div class="widget-numbers">63.2k</div>
              <div class="widget-subheading">Bugs Fixed</div>
              <div class="widget-description text-dark">
                <font-awesome-icon icon="arrow-right" />
                <span class="pl-1">175.5%</span>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card mb-3 bg-grow-early widget-chart text-white card-border">
              <div class="icon-wrapper rounded-circle">
                <div class="icon-wrapper-bg bg-white opacity-2"></div>
                <i class="lnr-laptop-phone text-white"></i>
              </div>
              <div class="widget-numbers">5.82k</div>
              <div class="widget-subheading">Reports Submitted</div>
              <div class="widget-description text-white">
                <span class="pl-1">54.1%</span>
                <font-awesome-icon icon="angle-up" />
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card mb-3 bg-plum-plate widget-chart text-white card-border">
              <div class="icon-wrapper rounded-circle">
                <div class="icon-wrapper-bg bg-dark opacity-9"></div>
                <i class="lnr-graduation-hat text-white"></i>
              </div>
              <div class="widget-numbers">63.2k</div>
              <div class="widget-subheading">Bugs Fixed</div>
              <div class="widget-description text-white opacity-8">
                <font-awesome-icon icon="arrow-right" />
                <span class="pl-1">175.5%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="currentTab === 'tab3'">
        <div class="row">
          <div class="col-lg-5">
            <div class="main-card mb-3 card">
              <div class="grid-menu grid-menu-2col overflow-hidden">
                <div class="no-gutters row">
                  <div class="col-sm-6">
                    <div class="widget-chart">
                      <div class="icon-wrapper rounded-circle">
                        <div class="icon-wrapper-bg bg-primary"></div>
                        <i class="lnr-cog text-primary"></i>
                      </div>
                      <div class="widget-numbers">45.8k</div>
                      <div class="widget-subheading">Total Views</div>
                      <div class="widget-description text-success">
                        <font-awesome-icon icon="angle-up" />
                        <span class="pl-1">175.5%</span>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="widget-chart">
                      <div class="icon-wrapper rounded-circle">
                        <div class="icon-wrapper-bg bg-info"></div>
                        <i class="lnr-graduation-hat text-info"></i>
                      </div>
                      <div class="widget-numbers">63.2k</div>
                      <div class="widget-subheading">Bugs Fixed</div>
                      <div class="widget-description text-info">
                        <font-awesome-icon icon="arrow-right" />
                        <span class="pl-1">175.5%</span>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="widget-chart">
                      <div class="widget-chart-actions">
                        <button type="button" class="btn btn-link">
                          <font-awesome-icon icon="ellipsis-h" />
                        </button>
                      </div>
                      <div class="icon-wrapper rounded-circle">
                        <div class="icon-wrapper-bg bg-success"></div>
                        <i class="lnr-screen text-success"></i>
                      </div>
                      <div class="widget-numbers">17.2k</div>
                      <div class="widget-subheading">Profiles</div>
                      <div class="widget-description text-warning">
                        <span class="pr-1">175.5%</span>
                        <font-awesome-icon icon="arrow-left" />
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="widget-chart">
                      <div class="icon-wrapper rounded-circle">
                        <div class="icon-wrapper-bg bg-danger"></div>
                        <i class="lnr-laptop-phone text-danger"></i>
                      </div>
                      <div class="widget-numbers">5.82k</div>
                      <div class="widget-subheading">Reports Submitted</div>
                      <div class="widget-description text-primary">
                        <span class="pl-1">54.1%</span>
                        <font-awesome-icon icon="angle-up" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="main-card mb-3 card">
              <div class="grid-menu grid-menu-2col overflow-hidden">
                <div class="no-gutters row">
                  <div class="col-sm-6">
                    <div class="widget-chart widget-chart-hover">
                      <div class="icon-wrapper rounded-circle">
                        <div class="icon-wrapper-bg bg-primary"></div>
                        <i class="lnr-cog text-primary"></i>
                      </div>
                      <div class="widget-numbers">45.8k</div>
                      <div class="widget-subheading">Total Views</div>
                      <div class="widget-description text-success">
                        <font-awesome-icon icon="angle-up" />
                        <span class="pl-1">175.5%</span>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="widget-chart widget-chart-hover">
                      <div class="icon-wrapper rounded-circle">
                        <div class="icon-wrapper-bg bg-info"></div>
                        <i class="lnr-graduation-hat text-info"></i>
                      </div>
                      <div class="widget-numbers">63.2k</div>
                      <div class="widget-subheading">Bugs Fixed</div>
                      <div class="widget-description text-info">
                        <font-awesome-icon icon="arrow-right" />
                        <span class="pl-1">175.5%</span>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="widget-chart widget-chart-hover">
                      <div class="icon-wrapper rounded-circle">
                        <div class="icon-wrapper-bg bg-danger"></div>
                        <i class="lnr-laptop-phone text-danger"></i>
                      </div>
                      <div class="widget-numbers">5.82k</div>
                      <div class="widget-subheading">Reports Submitted</div>
                      <div class="widget-description text-primary">
                        <span class="pl-1">54.1%</span>
                        <font-awesome-icon icon="angle-up" />
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="bg-premium-dark widget-chart-hover widget-chart card-border br-br">
                      <div class="widget-chart-content text-white">
                        <div class="icon-wrapper rounded-circle">
                          <div class="icon-wrapper-bg bg-success opacity-8"></div>
                          <i class="lnr-screen"></i>
                        </div>
                        <div class="widget-numbers">17.2k</div>
                        <div class="widget-subheading">Profiles</div>
                        <div class="widget-description text-warning">
                          <span class="pr-1">175.5%</span>
                          <font-awesome-icon icon="arrow-left" />
                        </div>
                      </div>
                      <div class="widget-chart-wrapper opacity-4">chart</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-7">
            <div class="main-card mb-3 card">
              <div class="grid-menu grid-menu-3col">
                <div class="no-gutters row">
                  <div class="col-sm-6 col-xl-4">
                    <div class="widget-chart">
                      <div class="icon-wrapper rounded-circle">
                        <div class="icon-wrapper-bg bg-primary"></div>
                        <i class="lnr-cog text-primary"></i>
                      </div>
                      <div class="widget-numbers">45.8k</div>
                      <div class="widget-subheading">Total Views</div>
                      <div class="widget-description text-success">
                        <font-awesome-icon icon="angle-up" />
                        <span class="pl-1">175.5%</span>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-xl-4">
                    <div class="widget-chart">
                      <div class="icon-wrapper rounded-circle">
                        <div class="icon-wrapper-bg bg-info"></div>
                        <i class="lnr-graduation-hat text-info"></i>
                      </div>
                      <div class="widget-numbers">63.2k</div>
                      <div class="widget-subheading">Bugs Fixed</div>
                      <div class="widget-description text-info">
                        <font-awesome-icon icon="arrow-right" />
                        <span class="pl-1">175.5%</span>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-xl-4">
                    <div class="widget-chart">
                      <div class="icon-wrapper rounded-circle">
                        <div class="icon-wrapper-bg bg-info"></div>
                        <i class="lnr-graduation-hat text-info"></i>
                      </div>
                      <div class="widget-numbers">63.2k</div>
                      <div class="widget-subheading">Bugs Fixed</div>
                      <div class="widget-description text-info">
                        <font-awesome-icon icon="arrow-right" />
                        <span class="pl-1">175.5%</span>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-xl-4">
                    <div class="widget-chart">
                      <div class="icon-wrapper rounded-circle">
                        <div class="icon-wrapper-bg bg-danger"></div>
                        <i class="lnr-laptop-phone text-danger"></i>
                      </div>
                      <div class="widget-numbers">5.82k</div>
                      <div class="widget-subheading">Reports Submitted</div>
                      <div class="widget-description text-primary">
                        <span class="pl-1">54.1%</span>
                        <font-awesome-icon icon="angle-up" />
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-xl-4">
                    <div class="widget-chart">
                      <div class="widget-chart-actions">
                        <button type="button" class="btn btn-link">
                          <font-awesome-icon icon="ellipsis-h" />
                        </button>
                      </div>
                      <div class="icon-wrapper rounded-circle">
                        <div class="icon-wrapper-bg bg-success"></div>
                        <i class="lnr-screen text-success"></i>
                      </div>
                      <div class="widget-numbers">17.2k</div>
                      <div class="widget-subheading">Profiles</div>
                      <div class="widget-description text-warning">
                        <span class="pr-1">175.5%</span>
                        <font-awesome-icon icon="arrow-left" />
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-xl-4">
                    <div class="widget-chart">
                      <div class="icon-wrapper rounded-circle">
                        <div class="icon-wrapper-bg bg-danger"></div>
                        <i class="lnr-laptop-phone text-danger"></i>
                      </div>
                      <div class="widget-numbers">5.82k</div>
                      <div class="widget-subheading">Reports Submitted</div>
                      <div class="widget-description text-primary">
                        <span class="pl-1">54.1%</span>
                        <font-awesome-icon icon="angle-up" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="main-card mb-3 card">
              <div class="grid-menu grid-menu-3col">
                <div class="no-gutters row">
                  <div class="col-sm-6 col-xl-4">
                    <div class="widget-chart widget-chart-hover">
                      <div class="icon-wrapper rounded-circle">
                        <div class="icon-wrapper-bg bg-primary"></div>
                        <i class="lnr-cog text-primary"></i>
                      </div>
                      <div class="widget-numbers">45.8k</div>
                      <div class="widget-subheading">Total Views</div>
                      <div class="widget-description text-success">
                        <font-awesome-icon icon="angle-up" />
                        <span class="pl-1">175.5%</span>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-xl-4">
                    <div class="widget-chart widget-chart-hover">
                      <div class="icon-wrapper rounded-circle">
                        <div class="icon-wrapper-bg bg-info"></div>
                        <i class="lnr-graduation-hat text-info"></i>
                      </div>
                      <div class="widget-numbers">63.2k</div>
                      <div class="widget-subheading">Bugs Fixed</div>
                      <div class="widget-description text-info">
                        <font-awesome-icon icon="arrow-right" />
                        <span class="pl-1">175.5%</span>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-xl-4">
                    <div class="widget-chart widget-chart-hover">
                      <div class="icon-wrapper rounded-circle">
                        <div class="icon-wrapper-bg bg-info"></div>
                        <i class="lnr-graduation-hat text-info"></i>
                      </div>
                      <div class="widget-numbers">63.2k</div>
                      <div class="widget-subheading">Bugs Fixed</div>
                      <div class="widget-description text-info">
                        <font-awesome-icon icon="arrow-right" />
                        <span class="pl-1">175.5%</span>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-xl-4">
                    <div class="widget-chart widget-chart-hover">
                      <div class="icon-wrapper rounded-circle">
                        <div class="icon-wrapper-bg bg-danger"></div>
                        <i class="lnr-laptop-phone text-danger"></i>
                      </div>
                      <div class="widget-numbers">5.82k</div>
                      <div class="widget-subheading">Reports Submitted</div>
                      <div class="widget-description text-primary">
                        <span class="pl-1">54.1%</span>
                        <font-awesome-icon icon="angle-up" />
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-xl-4">
                    <div class="widget-chart widget-chart-hover">
                      <div class="widget-chart-actions">
                        <button class="btn-icon btn-icon-only btn-link btn btn-warning">
                          <div class="btn-icon-wrapper">
                            <font-awesome-icon icon="arrow-left" />
                          </div>
                        </button>
                      </div>
                      <div class="icon-wrapper rounded-circle">
                        <div class="icon-wrapper-bg bg-success"></div>
                        <i class="lnr-screen text-success"></i>
                      </div>
                      <div class="widget-numbers">17.2k</div>
                      <div class="widget-subheading">Profiles</div>
                      <div class="widget-description text-warning">
                        <span class="pr-1">175.5%</span>
                        <font-awesome-icon icon="arrow-left" />
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-xl-4">
                    <div class="widget-chart widget-chart-hover">
                      <div class="icon-wrapper rounded-circle">
                        <div class="icon-wrapper-bg bg-danger"></div>
                        <i class="lnr-laptop-phone text-danger"></i>
                      </div>
                      <div class="widget-numbers">5.82k</div>
                      <div class="widget-subheading">Reports Submitted</div>
                      <div class="widget-description text-primary">
                        <span class="pl-1">54.1%</span>
                        <font-awesome-icon icon="angle-up" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="currentTab === 'tab4'">
        <div class="row">
          <div class="col-md-6 col-lg-4">
            <div class="card mb-3 widget-chart text-left">
              <div class="icon-wrapper rounded-circle">
                <div class="icon-wrapper-bg bg-primary"></div>
                <i class="lnr-cog text-primary"></i>
              </div>
              <div class="widget-chart-content">
                <div class="widget-subheading">Total Views</div>
                <div class="widget-numbers">45.8k</div>
                <div class="widget-description text-success">
                  <font-awesome-icon icon="angle-up" />
                  <span class="pl-1">175.5%</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="card mb-3 widget-chart text-left">
              <div class="widget-chart-actions">
                <button type="button" class="btn btn-link">
                  <font-awesome-icon icon="ellipsis-h" />
                </button>
              </div>
              <div class="icon-wrapper rounded-circle">
                <div class="icon-wrapper-bg bg-success"></div>
                <i class="lnr-screen text-success"></i>
              </div>
              <div class="widget-chart-content">
                <div class="widget-subheading">Profiles</div>
                <div class="widget-numbers">17.2k</div>
                <div class="widget-description text-warning">
                  <span class="pr-1">175.5%</span>
                  <font-awesome-icon icon="arrow-left" />
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="card mb-3 widget-chart text-left">
              <div class="icon-wrapper rounded-circle">
                <div class="icon-wrapper-bg bg-danger"></div>
                <i class="lnr-laptop-phone text-danger"></i>
              </div>
              <div class="widget-chart-content">
                <div class="widget-subheading">Reports Submitted</div>
                <div class="widget-numbers">5.82k</div>
                <div class="widget-description text-primary">
                  <span class="pr-1">54.1%</span>
                  <font-awesome-icon icon="angle-up" />
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="card mb-3 widget-chart text-left">
              <div class="icon-wrapper rounded-circle">
                <div class="icon-wrapper-bg bg-info"></div>
                <i class="lnr-graduation-hat text-info"></i>
              </div>
              <div class="widget-chart-content">
                <div class="widget-subheading">Bugs Fixed</div>
                <div class="widget-numbers">63.2k</div>
                <div class="widget-description text-info">
                  <font-awesome-icon icon="arrow-right" />
                  <span class="pl-1">175.5%</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="card mb-3 widget-chart text-left">
              <div class="icon-wrapper rounded-circle">
                <div class="icon-wrapper-bg opacity-10 bg-warning"></div>
                <i class="lnr-laptop-phone text-dark opacity-8"></i>
              </div>
              <div class="widget-chart-content">
                <div class="widget-subheading">Reports Submitted</div>
                <div class="widget-numbers">2.5M</div>
                <div class="widget-description text-danger">
                  <span class="pr-1">21.8%</span>
                  <font-awesome-icon icon="angle-down" />
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="card mb-3 widget-chart text-left">
              <div class="icon-wrapper rounded-circle">
                <div class="icon-wrapper-bg opacity-9 bg-focus"></div>
                <i class="lnr-graduation-hat text-white"></i>
              </div>
              <div class="widget-chart-content">
                <div class="widget-subheading">Bugs Fixed</div>
                <div class="widget-numbers">
                  <span>375</span>
                </div>
                <div class="widget-description opacity-8 text-focus">
                  Down by
                  <span class="text-success pl-1 pr-1">
                    <font-awesome-icon icon="angle-down" />
                    <span class="pl-1">54.1%</span>
                  </span>from 30 days ago
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="divider mt-0" style="margin-bottom: 30px;"></div>
        <div class="row">
          <div class="col-md-6 col-lg-4">
            <div class="card mb-3 widget-chart text-left">
              <div class="widget-chart-content">
                <div class="widget-subheading">Total Views</div>
                <div class="widget-numbers">45.8k</div>
                <div class="widget-description text-success">
                  <font-awesome-icon icon="angle-up" />
                  <span class="pl-1">175.5%</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="card mb-3 widget-chart text-left">
              <div class="widget-chart-actions">
                <button type="button" class="btn btn-link">
                  <font-awesome-icon icon="ellipsis-h" />
                </button>
              </div>
              <div class="widget-chart-content">
                <div class="widget-subheading">Profiles</div>
                <div class="widget-numbers">17.2k</div>
                <div class="widget-description text-warning">
                  <span class="pr-1">175.5%</span>
                  <font-awesome-icon icon="arrow-left" />
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="card mb-3 widget-chart text-left">
              <div class="widget-chart-content">
                <div class="widget-subheading">Reports Submitted</div>
                <div class="widget-numbers">5.82k</div>
                <div class="widget-description text-primary">
                  <span class="pr-1">54.1%</span>
                  <font-awesome-icon icon="angle-up" />
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="card mb-3 widget-chart text-left">
              <div class="widget-chart-content">
                <div class="widget-subheading">Bugs Fixed</div>
                <div class="widget-numbers">63.2k</div>
                <div class="widget-description text-info">
                  <font-awesome-icon icon="arrow-right" />
                  <span class="pl-1">175.5%</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="card mb-3 widget-chart text-left">
              <div class="widget-chart-content">
                <div class="widget-subheading">Reports Submitted</div>
                <div class="widget-numbers">5.82k</div>
                <div class="widget-description text-primary">
                  <span class="pr-1">54.1%</span>
                  <font-awesome-icon icon="angle-up" />
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="card mb-3 widget-chart text-left">
              <div class="widget-chart-content">
                <div class="widget-subheading">Bugs Fixed</div>
                <div class="widget-numbers">63.2k</div>
                <div class="widget-description text-info">
                  <font-awesome-icon icon="arrow-right" />
                  <span class="pl-1">175.5%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="divider mt-0" style="margin-bottom: 30px;"></div>
        <div class="row">
          <div class="col-md-6 col-lg-4">
            <div class="card mb-3 widget-chart card-hover-shadow-2x text-left">
              <div class="icon-wrapper border-light rounded">
                <div class="icon-wrapper-bg bg-light"></div>
                <i class="lnr-cog icon-gradient bg-night-fade"></i>
              </div>
              <div class="widget-chart-content">
                <div class="widget-numbers">45.8k</div>
                <div class="widget-subheading">Total Views</div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="card mb-3 widget-chart card-hover-shadow-2x text-left">
              <div class="icon-wrapper border-light rounded">
                <div class="icon-wrapper-bg bg-light"></div>
                <i class="lnr-screen icon-gradient bg-ripe-malin"></i>
              </div>
              <div class="widget-chart-content">
                <div class="widget-numbers">17.2k</div>
                <div class="widget-subheading">Profiles</div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="card mb-3 widget-chart card-hover-shadow-2x text-left">
              <div class="icon-wrapper border-light rounded">
                <div class="icon-wrapper-bg bg-light"></div>
                <i class="lnr-laptop-phone icon-gradient bg-arielle-smile"></i>
              </div>
              <div class="widget-chart-content">
                <div class="widget-numbers">5.82k</div>
                <div class="widget-subheading">Reports Submitted</div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="card mb-3 widget-chart card-hover-shadow-2x text-left">
              <div class="icon-wrapper border-light rounded">
                <div class="icon-wrapper-bg bg-light"></div>
                <i class="lnr-graduation-hat icon-gradient bg-happy-itmeo"></i>
              </div>
              <div class="widget-chart-content">
                <div class="widget-numbers">63.2k</div>
                <div class="widget-subheading">Bugs Fixed</div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="card mb-3 widget-chart card-hover-shadow-2x text-left">
              <div class="icon-wrapper border-light rounded">
                <div class="icon-wrapper-bg bg-light"></div>
                <i class="lnr-enter icon-gradient bg-grow-early"></i>
              </div>
              <div class="widget-chart-content">
                <div class="widget-numbers">653</div>
                <div class="widget-subheading">Reports Submitted</div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="card mb-3 widget-chart card-hover-shadow-2x text-left">
              <div class="icon-wrapper border-light rounded">
                <div class="icon-wrapper-bg bg-light"></div>
                <i class="lnr-license icon-gradient bg-plum-plate"></i>
              </div>
              <div class="widget-chart-content">
                <div class="widget-numbers">231</div>
                <div class="widget-subheading">Bugs Fixed</div>
              </div>
            </div>
          </div>
        </div>
        <div class="divider mt-0" style="margin-bottom: 30px;"></div>
        <div class="row">
          <div class="col-md-6 col-lg-4">
            <div class="card mb-3 widget-chart text-left">
              <div class="icon-wrapper rounded-circle">
                <div class="icon-wrapper-bg bg-primary"></div>
                <i class="lnr-cog text-primary"></i>
              </div>
              <div class="widget-numbers">45.8k</div>
              <div class="widget-progress-wrapper progress-wrapper-bottom">
                <div class="progress-bar-sm progress-bar-animated-alt progress">
                  <div class="progress-bar bg-success" role="progressbar" aria-valuenow="65"
                    aria-valuemin="0" aria-valuemax="100" style="width: 65%;">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="card mb-3 widget-chart text-left">
              <div class="icon-wrapper rounded-circle">
                <div class="icon-wrapper-bg bg-success"></div>
                <i class="lnr-screen text-success"></i>
              </div>
              <div class="widget-numbers">17.2k</div>
              <div class="widget-progress-wrapper progress-wrapper-bottom">
                <div class="progress-bar-xs progress-bar-animated-alt progress">
                  <div class="progress-bar bg-danger" role="progressbar" aria-valuenow="85"
                    aria-valuemin="0"  aria-valuemax="100" style="width: 85%;">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="card mb-3 widget-chart text-left">
              <div class="icon-wrapper rounded-circle">
                <div class="icon-wrapper-bg bg-danger"></div>
                <i class="lnr-laptop-phone text-danger"></i>
              </div>
              <div class="widget-numbers">5.82k</div>
              <div class="widget-progress-wrapper progress-wrapper-bottom">
                <div class="progress-bar-sm progress-bar-animated progress">
                  <div class="progress-bar bg-warning" role="progressbar" aria-valuenow="47"
                    aria-valuemin="0" aria-valuemax="100" style="width: 47%;">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="card mb-3 widget-chart text-left">
              <div class="icon-wrapper rounded-circle">
                <div class="icon-wrapper-bg bg-info"></div>
                <i class="lnr-graduation-hat text-info"></i>
              </div>
              <div class="widget-numbers">63.2k</div>
              <div class="widget-progress-wrapper progress-wrapper-bottom">
                <div class="progress-bar-xs progress">
                  <div class="progress-bar bg-primary" role="progressbar" aria-valuenow="91"
                    aria-valuemin="0" aria-valuemax="100" style="width: 91%;">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="card mb-3 widget-chart text-left card-border">
              <div class="icon-wrapper rounded-circle">
                <div class="icon-wrapper-bg bg-danger"></div>
                <i class="lnr-laptop-phone text-danger"></i>
              </div>
              <div class="widget-numbers">5.82k</div>
              <div class="widget-progress-wrapper progress-wrapper-bottom">
                <div class="progress-bar-sm progress-bar-animated progress">
                  <div class="progress-bar bg-danger" role="progressbar" aria-valuenow="47"
                    aria-valuemin="0" aria-valuemax="100" style="width: 47%;">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="card mb-3 widget-chart text-left card-border">
              <div class="icon-wrapper rounded-circle">
                <div class="icon-wrapper-bg bg-info"></div>
                <i class="lnr-graduation-hat text-info"></i>
              </div>
              <div class="widget-numbers">8.6M</div>
              <div class="widget-progress-wrapper progress-wrapper-bottom">
                <div class="progress-bar progress">
                  <div class="progress-bar bg-success" role="progressbar" aria-valuenow="91"
                    aria-valuemin="0" aria-valuemax="100" style="width: 91%;">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="currentTab === 'tab5'">
        <div class="row">
          <div class="col-md-6 col-lg-4">
            <div class="card mb-3 widget-chart text-left">
              <div class="progress-circle-wrapper">
                <vue-circle :progress="62" :size="64" :reverse="false" line-cap="round"
                  :fill="f1" empty-fill="rgba(0, 0, 0, .12)" :animation-start-value="0.0"
                  :start-angle="0" insert-mode="append" :thickness="3" :show-percent="true" >
                </vue-circle>
              </div>
              <div class="widget-chart-content">
                <div class="widget-subheading">Total Views</div>
                <div class="widget-numbers">45.8k</div>
                <div class="widget-description text-success">
                  <font-awesome-icon icon="angle-up" />
                  <span class="pl-1">175.5%</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="card mb-3 widget-chart text-left">
              <div class="widget-chart-actions">
                <button type="button" class="btn btn-link">
                  <font-awesome-icon icon="ellipsis-h" />
                </button>
              </div>
              <div class="progress-circle-wrapper">
                <vue-circle :progress="23" :size="64" :reverse="false"
                  line-cap="round" :fill="f2" empty-fill="rgba(0, 0, 0, .12)"
                  :animation-start-value="0.0" :start-angle="0" insert-mode="append" :thickness="3" :show-percent="true">
                </vue-circle>
              </div>
              <div class="widget-chart-content">
                <div class="widget-subheading">Profiles</div>
                <div class="widget-numbers">17.2k</div>
                <div class="widget-description text-warning">
                  <span class="pr-1">175.5%</span>
                  <font-awesome-icon icon="arrow-left" />
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="card mb-3 widget-chart text-left">
              <div class="progress-circle-wrapper">
                <vue-circle :progress="54" :size="64" :reverse="false" line-cap="round"
                  :fill="f3" empty-fill="rgba(0, 0, 0, .12)" :animation-start-value="0.0"
                  :start-angle="0" insert-mode="append" :thickness="3" :show-percent="true">
                </vue-circle>
              </div>
              <div class="widget-chart-content">
                <div class="widget-subheading">Reports Submitted</div>
                <div class="widget-numbers">5.82k</div>
                <div class="widget-description text-primary">
                  <span class="pr-1">54.1%</span>
                  <font-awesome-icon icon="angle-up" />
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="card mb-3 widget-chart text-left">
              <div class="progress-circle-wrapper">
                <vue-circle :progress="69" :size="64" :reverse="false" line-cap="round"
                  :fill="f4" empty-fill="rgba(0, 0, 0, .12)" :animation-start-value="0.0"
                  :start-angle="0" insert-mode="append" :thickness="3" :show-percent="true">
                </vue-circle>
              </div>
              <div class="widget-chart-content">
                <div class="widget-subheading">Bugs Fixed</div>
                <div class="widget-numbers">63.2k</div>
                <div class="widget-description text-info">
                  <font-awesome-icon icon="arrow-right" />
                  <span class="pl-1">175.5%</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="card mb-3 widget-chart text-left">
              <div class="progress-circle-wrapper">
                <vue-circle :progress="21" :size="64" :reverse="false" line-cap="round" :fill="f5"
                  empty-fill="rgba(0, 0, 0, .12)" :animation-start-value="0.0"
                  :start-angle="0" insert-mode="append" :thickness="3" :show-percent="true">
                </vue-circle>
              </div>
              <div class="widget-chart-content">
                <div class="widget-subheading">Reports Submitted</div>
                <div class="widget-numbers">5.82k</div>
                <div class="widget-description text-primary">
                  <span class="pr-1">54.1%</span>
                  <font-awesome-icon icon="angle-up" />
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="card mb-3 widget-chart text-left">
              <div class="progress-circle-wrapper">
                <vue-circle :progress="68" :size="64" :reverse="false" line-cap="round" :fill="f6"
                  empty-fill="rgba(0, 0, 0, .12)" :animation-start-value="0.0"
                  :start-angle="0" insert-mode="append" :thickness="3" :show-percent="true">
                </vue-circle>
              </div>
              <div class="widget-chart-content">
                <div class="widget-subheading">Bugs Fixed</div>
                <div class="widget-numbers">63.2k</div>
                <div class="widget-description text-info">
                  <font-awesome-icon icon="arrow-right" />
                  <span class="pl-1">175.5%</span>
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
import VueCircle from "vue2-circle-progress";

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
  },
  {
    title: "Grids",
    value: "tab3"
  },
  {
    title: "Alignments",
    value: "tab4"
  },
  {
    title: "Progress Circle",
    value: "tab5"
  }
];

export default {
  components: {
    PageTitle,
    Tabs,
    "font-awesome-icon": FontAwesomeIcon,
    VueCircle
  },
  data: () => ({
    heading: "Chart Boxes",
    subheading:
      "These boxes can be used to show numbers and data in a breautiful user friendly way.",
    icon: "pe-7s-star icon-gradient bg-ripe-malin",

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
    f6: { gradient: ["#444054"] }
  }),

  methods: {
    handleClick(newTab) {
      this.currentTab = newTab;
    }
  }
};
</script>
