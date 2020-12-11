<template>
  <div>
    <page-title :heading="heading" :subheading="subheading" :icon="icon"></page-title>
    <tabs :tabs="tabs" :currentTab="currentTab" :wrapper-class="'body-tabs shadow-tabs'"
      :tab-class="'tab-item'" :tab-active-class="'tab-item-active'"
      :line-class="'tab-item-line'" @onClick="handleClick" />
    <div class="content">
      <div v-if="currentTab === 'tab1'">
        <b-row>
          <b-col lg="6">
            <div class="main-card mb-3 card">
              <div class="card-body">
                <h5 class="card-title">Solid P7 Icons</h5>
                <template v-for="variant in ['success','danger']">
                  <span v-for="icons in ['pe-7s-tools','pe-7s-gym','pe-7s-umbrella','pe-7s-piggy','pe-7s-helm']"
                    :key="`${variant}_${icons}`">
                    <b-button class="mr-2 mb-2 btn-icon" :variant="variant">
                      <i :class="icons" class="btn-icon-wrapper"></i>
                      {{variant}}
                    </b-button>
                  </span>
                </template>
              </div>
            </div>
            <div class="main-card mb-3 card">
              <div class="card-body">
                <h5 class="card-title">Outline 2x Shadow Linecons Icons</h5>
                <template v-for="variant in ['warning','info']">
                  <span  v-for="icons in ['lnr-database','lnr-heart','lnr-inbox','lnr-store','lnr-user']"
                    :key="`${variant}_${icons}`">
                    <b-button class="mr-2 mb-2 btn-shadow btn-outline-2x btn-icon" :variant="variant">
                      <i :class="icons" class="btn-icon-wrapper"></i>
                      {{variant}}
                    </b-button>
                  </span>
                </template>
              </div>
            </div>
            <div class="main-card mb-3 card">
              <div class="card-body">
                <h5 class="card-title">Shadow Dashed P7 Icons</h5>
                <template v-for="variant in ['outline-info','outline-secondary']">
                  <span v-for="icons in ['pe-7s-tools','pe-7s-gym','pe-7s-umbrella','pe-7s-piggy','pe-7s-helm']" :key="`${variant}_${icons}`">
                    <b-button class="mr-2 mb-2 btn-shadow btn-dashed btn-icon" :variant="variant">
                      <i :class="icons" class="btn-icon-wrapper"></i>
                      {{variant}}
                    </b-button>
                  </span>
                </template>
              </div>
            </div>
            <div class="main-card mb-3 card">
              <div class="card-body">
                <h5 class="card-title">Block Level</h5>
                <template v-for="size in ['sm','','lg']">
                  <b-button v-bind:key="size" block class="mr-2 mb-2 btn-icon" variant="primary" :size="size">
                    <i class="btn-icon-wrapper lnr-database"></i>
                    Block {{size}}
                  </b-button>
                </template>
              </div>
            </div>
            <div class="main-card mb-3 card">
              <div class="card-body">
                <h5 class="card-title">Sizing</h5>
                <template v-for="size in ['sm','','lg']">
                  <b-button v-bind:key="size" class="mr-2 mb-2 btn-icon" variant="primary" :size="size">
                    <i class="btn-icon-wrapper lnr-database"></i>
                    Button {{size}}
                  </b-button>
                </template>
              </div>
            </div>
            <div class="main-card mb-3 card">
              <div class="card-body">
                <h5 class="card-title">Right Icon</h5>
                <template v-for="size in ['sm','','lg']">
                  <b-button v-bind:key="size" class="mr-2 mb-2 btn-icon" variant="primary" :size="size">
                    <i class="btn-icon-wrapper lnr-database"></i>
                    Button {{size}}
                  </b-button>
                </template>
              </div>
            </div>
          </b-col>
          <b-col lg="6">
            <div class="main-card mb-3 card">
              <div class="card-body">
                <h5 class="card-title">Solid Pills Linecons Icons</h5>
                <template v-for="variant in ['primary','success']">
                  <span v-for="icons in ['lnr-database','lnr-heart','lnr-inbox','lnr-store','lnr-user']" :key="`${variant}_${icons}`">
                    <b-button class="mr-2 mb-2 btn-pill btn-icon" :variant="variant">
                      <i :class="icons" class="btn-icon-wrapper"></i>
                      {{variant}}
                    </b-button>
                  </span>
                </template>
              </div>
            </div>
            <div class="main-card mb-3 card">
              <div class="card-body">
                <h5 class="card-title">Linecons Icons Square Buttons</h5>
                <template v-for="variant in ['focus','alternate']">
                  <span v-for="icons in ['lnr-database','lnr-heart','lnr-inbox','lnr-store','lnr-user']" :key="`${variant}_${icons}`">
                    <b-button class="mr-2 mb-2 btn-square btn-icon" :variant="variant">
                      <i :class="icons" class="btn-icon-wrapper"></i>
                      {{variant}}
                    </b-button>
                  </span>
                </template>
              </div>
            </div>
            <div class="main-card mb-3 card">
              <div class="card-body">
                <h5 class="card-title">Outline Pill P7 Icons</h5>
                <template v-for="variant in ['outline-primary','outline-dark']">
                  <span v-for="icons in ['pe-7s-tools','pe-7s-gym','pe-7s-umbrella','pe-7s-piggy','pe-7s-helm']" :key="`${variant}_${icons}`">
                    <b-button class="mr-2 mb-2 btn-pill btn-icon" :variant="variant">
                      <i :class="icons" class="btn-icon-wrapper"></i>
                      {{variant}}
                    </b-button>
                  </span>
                </template>
              </div>
            </div>
            <div class="main-card mb-3 card">
              <div class="card-body">
                <h5 class="card-title">Icons Only</h5>
                <b-button class="mb-2 mr-2 btn-icon btn-icon-only" variant="primary">
                  <i class="pe-7s-tools btn-icon-wrapper"></i>
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon btn-icon-only" variant="secondary">
                  <i class="pe-7s-gym btn-icon-wrapper"></i>
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon btn-icon-only" variant="success">
                  <i class="pe-7s-umbrella btn-icon-wrapper"></i>
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon btn-icon-only" variant="info">
                  <i class="pe-7s-science btn-icon-wrapper"></i>
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon btn-icon-only" variant="warning">
                  <i class="pe-7s-trash btn-icon-wrapper"></i>
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon btn-icon-only" variant="danger">
                  <i class="pe-7s-video btn-icon-wrapper"></i>
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon btn-icon-only" variant="focus">
                  <i class="pe-7s-upload btn-icon-wrapper"></i>
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon btn-icon-only" variant="alternate">
                  <i class="pe-7s-piggy btn-icon-wrapper"></i>
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon btn-icon-only" variant="light">
                  <i class="pe-7s-photo btn-icon-wrapper"></i>
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon btn-icon-only" variant="dark">
                  <i class="pe-7s-helm btn-icon-wrapper"></i>
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon btn-icon-only" variant="link">
                  <i class="pe-7s-settings btn-icon-wrapper"></i>
                </b-button>
                <div class="divider"></div>
                <b-button class="mb-2 mr-2 btn-icon btn-icon-only btn-pill" variant="outline-primary">
                  <i class="pe-7s-tools btn-icon-wrapper"></i>
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon btn-icon-only btn-pill" variant="outline-secondary">
                  <i class="pe-7s-gym btn-icon-wrapper"></i>
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon btn-icon-only btn-pill" variant="outline-success">
                  <i class="pe-7s-umbrella btn-icon-wrapper"></i>
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon btn-icon-only btn-pill" variant="outline-info">
                  <i class="pe-7s-science btn-icon-wrapper"></i>
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon btn-icon-only btn-pill" variant="outline-warning">
                  <i class="pe-7s-trash btn-icon-wrapper"></i>
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon btn-icon-only btn-pill" variant="outline-danger">
                  <i class="pe-7s-video btn-icon-wrapper"></i>
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon btn-icon-only btn-pill" variant="outline-focus">
                  <i class="pe-7s-upload btn-icon-wrapper"></i>
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon btn-icon-only btn-pill" variant="outline-alternate">
                  <i class="pe-7s-piggy btn-icon-wrapper"></i>
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon btn-icon-only btn-pill" variant="outline-light">
                  <i class="pe-7s-photo btn-icon-wrapper"></i>
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon btn-icon-only btn-pill" variant="outline-dark">
                  <i class="pe-7s-helm btn-icon-wrapper"></i>
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon btn-icon-only btn-pill" variant="outline-link">
                  <i class="pe-7s-settings btn-icon-wrapper"></i>
                </b-button>
                <div class="divider"></div>
                <b-button class="mb-2 mr-2 btn-icon btn-icon-only btn-shadow btn-dashed" variant="outline-primary">
                  <i class="pe-7s-tools btn-icon-wrapper"></i>
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon btn-icon-only btn-shadow btn-dashed" variant="outline-secondary">
                  <i class="pe-7s-gym btn-icon-wrapper"></i>
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon btn-icon-only btn-shadow btn-dashed" variant="outline-success">
                  <i class="pe-7s-umbrella btn-icon-wrapper"></i>
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon btn-icon-only btn-shadow btn-dashed" variant="outline-info">
                  <i class="pe-7s-science btn-icon-wrapper"></i>
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon btn-icon-only btn-shadow btn-dashed" variant="outline-warning">
                  <i class="pe-7s-trash btn-icon-wrapper"></i>
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon btn-icon-only btn-shadow btn-dashed" variant="outline-danger">
                  <i class="pe-7s-video btn-icon-wrapper"></i>
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon btn-icon-only btn-shadow btn-dashed" variant="outline-focus">
                  <i class="pe-7s-upload btn-icon-wrapper"></i>
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon btn-icon-only btn-shadow btn-dashed" variant="outline-alternate">
                  <i class="pe-7s-piggy btn-icon-wrapper"></i>
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon btn-icon-only btn-shadow btn-dashed" variant="outline-light">
                  <i class="pe-7s-photo btn-icon-wrapper"></i>
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon btn-icon-only btn-shadow btn-dashed" variant="outline-dark">
                  <i class="pe-7s-helm btn-icon-wrapper"></i>
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon btn-icon-only btn-shadow btn-dashed" variant="outline-link">
                  <i class="pe-7s-settings btn-icon-wrapper"></i>
                </b-button>
                <div class="divider"></div>
                <b-button class="mb-2 mr-2 btn-icon btn-icon-only btn-square" variant="primary">
                  <i class="lnr-license btn-icon-wrapper"></i>
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon btn-icon-only btn-square" variant="secondary">
                  <i class="lnr-map btn-icon-wrapper"></i>
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon btn-icon-only btn-square" variant="success">
                  <i class="lnr-music-note btn-icon-wrapper"></i>
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon btn-icon-only btn-square" variant="info">
                  <i class="lnr-heart btn-icon-wrapper"></i>
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon btn-icon-only btn-square" variant="warning">
                  <i class="lnr-magic-wand btn-icon-wrapper"></i>
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon btn-icon-only btn-square" variant="danger">
                  <i class="lnr-lighter btn-icon-wrapper"></i>
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon btn-icon-only btn-square" variant="focus">
                  <i class="lnr-dice btn-icon-wrapper"></i>
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon btn-icon-only btn-square" variant="alternate">
                  <i class="lnr-apartment btn-icon-wrapper"></i>
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon btn-icon-only btn-square" variant="light">
                  <i class="lnr-database btn-icon-wrapper"></i>
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon btn-icon-only btn-square" variant="dark">
                  <i class="lnr-location btn-icon-wrapper"></i>
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon btn-icon-only btn-square" variant="link">
                  <i class="lnr-inbox btn-icon-wrapper"></i>
                </b-button>
                <div class="divider"></div>
                <b-button class="mb-2 mr-2 btn-icon btn-icon-only btn-shadow btn-outline-2x" variant="primary">
                  <i class="lnr-store btn-icon-wrapper"></i>
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon btn-icon-only btn-shadow btn-outline-2x" variant="secondary">
                  <i class="lnr-book btn-icon-wrapper"></i>
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon btn-icon-only btn-shadow btn-outline-2x" variant="success">
                  <i class="lnr-user btn-icon-wrapper"></i>
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon btn-icon-only btn-shadow btn-outline-2x" variant="info">
                  <i class="lnr-paperclip btn-icon-wrapper"></i>
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon btn-icon-only btn-shadow btn-outline-2x" variant="warning">
                  <i class="lnr-screen btn-icon-wrapper"></i>
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon btn-icon-only btn-shadow btn-outline-2x" variant="danger">
                  <i class="lnr-smartphone btn-icon-wrapper"></i>
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon btn-icon-only btn-shadow btn-outline-2x" variant="focus">
                  <i class="lnr-phone btn-icon-wrapper"></i>
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon btn-icon-only btn-shadow btn-outline-2x" variant="alternate">
                  <i class="lnr-keyboard btn-icon-wrapper"></i>
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon btn-icon-only btn-shadow btn-outline-2x" variant="light">
                  <i class="lnr-dinner btn-icon-wrapper"></i>
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon btn-icon-only btn-shadow btn-outline-2x"  variant="dark">
                  <i class="lnr-earth btn-icon-wrapper"></i>
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon btn-icon-only btn-shadow btn-outline-2x" variant="link">
                  <i class="lnr-car btn-icon-wrapper"></i>
                </b-button>
                <div class="divider"></div>
                <b-button class="mb-2 mr-2 btn-icon btn-icon-only btn-pill" variant="primary">
                  <i class="lnr-hand btn-icon-wrapper"></i>
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon btn-icon-only btn-pill" variant="secondary">
                  <i class="lnr-funnel btn-icon-wrapper"></i>
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon btn-icon-only btn-pill" variant="success">
                  <i class="lnr-crop btn-icon-wrapper"></i>
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon btn-icon-only btn-pill" variant="info">
                  <i class="lnr-drop btn-icon-wrapper"></i>
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon btn-icon-only btn-pill" variant="warning">
                  <i class="lnr-enter btn-icon-wrapper"></i>
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon btn-icon-only btn-pill" variant="danger">
                  <i class="lnr-eye btn-icon-wrapper"></i>
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon btn-icon-only btn-pill" variant="focus">
                  <i class="lnr-graduation-hat btn-icon-wrapper"></i>
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon btn-icon-only btn-pill" variant="alternate">
                  <i class="lnr-file-empty btn-icon-wrapper"></i>
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon btn-icon-only btn-pill" variant="light">
                  <i class="lnr-camera btn-icon-wrapper"></i>
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon btn-icon-only btn-pill" variant="dark">
                  <i class="lnr-picture btn-icon-wrapper"></i>
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon btn-icon-only btn-pill" variant="link">
                  <i class="lnr-book btn-icon-wrapper"></i>
                </b-button>
              </div>
            </div>
          </b-col>
        </b-row>
      </div>
      <div v-if="currentTab === 'tab2'">
        <div class="row">
          <div class="col-lg-12 col-xl-6">
            <div class="main-card mb-3 card">
              <div class="card-body">
                <h5 class="card-title">Solid P7 Icons</h5>
                <b-button class="mb-2 mr-2 btn-icon-vertical" variant="primary">
                  <i class="pe-7s-tools btn-icon-wrapper"></i>Primary
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon-vertical" variant="secondary">
                  <i class="pe-7s-gym btn-icon-wrapper"></i>Secondary
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon-vertical" variant="success">
                  <i class="pe-7s-umbrella btn-icon-wrapper"></i>Success
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon-vertical" variant="info">
                  <i class="pe-7s-science btn-icon-wrapper"></i>Info
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon-vertical" variant="warning">
                  <i class="pe-7s-trash btn-icon-wrapper"></i>Warning
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon-vertical" variant="danger">
                  <i class="pe-7s-video btn-icon-wrapper"></i>Danger
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon-vertical" variant="focus">
                  <i class="pe-7s-upload btn-icon-wrapper"></i>Focus
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon-vertical" variant="alternate">
                  <i class="pe-7s-piggy btn-icon-wrapper"></i>Alt
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon-vertical" variant="light">
                  <i class="pe-7s-photo btn-icon-wrapper"></i>Light
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon-vertical" variant="dark">
                  <i class="pe-7s-helm btn-icon-wrapper"></i>Dark
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon-vertical" variant="link">
                  <i class="pe-7s-settings btn-icon-wrapper"></i>link
                </b-button>
              </div>
            </div>
            <div class="main-card mb-3 card">
              <div class="card-body">
                <h5 class="card-title">Color Transition P7 Icons</h5>
                <b-button class="mb-2 mr-2 btn-icon-vertical btn-transition" variant="outline-primary">
                  <i class="pe-7s-tools btn-icon-wrapper"></i>Primary
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon-vertical btn-transition" variant="outline-secondary">
                  <i class="pe-7s-gym btn-icon-wrapper"></i>Secondary
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon-vertical btn-transition" variant="outline-success">
                  <i class="pe-7s-umbrella btn-icon-wrapper"></i>Success
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon-vertical btn-transition" variant="outline-info">
                  <i class="pe-7s-science btn-icon-wrapper"></i>Info
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon-vertical btn-transition" variant="outline-warning">
                  <i class="pe-7s-trash btn-icon-wrapper"></i>Warning
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon-vertical btn-transition" variant="outline-danger">
                  <i class="pe-7s-video btn-icon-wrapper"></i>Danger
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon-vertical btn-transition" variant="outline-focus">
                  <i class="pe-7s-upload btn-icon-wrapper"></i>Focus
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon-vertical btn-transition" variant="outline-alternate">
                  <i class="pe-7s-piggy btn-icon-wrapper"></i>Alt
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon-vertical btn-transition" variant="outline-light">
                  <i class="pe-7s-photo btn-icon-wrapper"></i>Light
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon-vertical btn-transition" variant="outline-dark">
                  <i class="pe-7s-helm btn-icon-wrapper"></i>Dark
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon-vertical btn-transition" variant="outline-link">
                  <i class="pe-7s-settings btn-icon-wrapper"></i>link
                </b-button>
              </div>
            </div>
            <div class="main-card mb-3 card">
              <div class="card-body">
                <h5 class="card-title">Outline P7 Icons</h5>
                <b-button class="mb-2 mr-2 btn-icon-vertical" variant="outline-primary">
                  <i class="pe-7s-tools btn-icon-wrapper"></i>Primary
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon-vertical" variant="outline-secondary">
                  <i class="pe-7s-gym btn-icon-wrapper"></i>Secondary
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon-vertical" variant="outline-success">
                  <i class="pe-7s-umbrella btn-icon-wrapper"></i>Success
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon-vertical" variant="outline-info">
                  <i class="pe-7s-science btn-icon-wrapper"></i>Info
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon-vertical" variant="outline-warning">
                  <i class="pe-7s-trash btn-icon-wrapper"></i>Warning
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon-vertical" variant="outline-danger">
                  <i class="pe-7s-video btn-icon-wrapper"></i>Danger
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon-vertical" variant="outline-focus">
                  <i class="pe-7s-upload btn-icon-wrapper"></i>Focus
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon-vertical" variant="outline-alternate">
                  <i class="pe-7s-piggy btn-icon-wrapper"></i>Alt
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon-vertical" variant="outline-light">
                  <i class="pe-7s-photo btn-icon-wrapper"></i>Light
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon-vertical" variant="outline-dark">
                  <i class="pe-7s-helm btn-icon-wrapper"></i>Dark
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon-vertical" variant="outline-link">
                  <i class="pe-7s-settings btn-icon-wrapper"></i>link
                </b-button>
              </div>
            </div>
            <div class="main-card mb-3 card">
              <div class="card-body">
                <h5 class="card-title">Shadow Dashed P7 Icons</h5>
                <b-button class="mb-2 mr-2 btn-icon-vertical btn-shadow btn-dashed" variant="outline-primary">
                  <i class="pe-7s-tools btn-icon-wrapper"></i>Primary
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon-vertical btn-shadow btn-dashed" variant="outline-secondary">
                  <i class="pe-7s-gym btn-icon-wrapper"></i>Secondary
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon-vertical btn-shadow btn-dashed" variant="outline-success">
                  <i class="pe-7s-umbrella btn-icon-wrapper"></i>Success
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon-vertical btn-shadow btn-dashed" variant="outline-info">
                  <i class="pe-7s-science btn-icon-wrapper"></i>Info
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon-vertical btn-shadow btn-dashed" variant="outline-warning">
                  <i class="pe-7s-trash btn-icon-wrapper"></i>Warning
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon-vertical btn-shadow btn-dashed" variant="outline-danger">
                  <i class="pe-7s-video btn-icon-wrapper"></i>Danger
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon-vertical btn-shadow btn-dashed" variant="outline-focus">
                  <i class="pe-7s-upload btn-icon-wrapper"></i>Focus
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon-vertical btn-shadow btn-dashed" variant="outline-alternate">
                  <i class="pe-7s-piggy btn-icon-wrapper"></i>Alt
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon-vertical btn-shadow btn-dashed" variant="outline-light">
                  <i class="pe-7s-photo btn-icon-wrapper"></i>Light
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon-vertical btn-shadow btn-dashed" variant="outline-dark">
                  <i class="pe-7s-helm btn-icon-wrapper"></i>Dark
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon-vertical btn-shadow btn-dashed" variant="outline-link">
                  <i class="pe-7s-settings btn-icon-wrapper"></i>link
                </b-button>
              </div>
            </div>
            <div class="main-card mb-3 card">
              <div class="card-body">
                <h5 class="card-title">Block Level</h5>
                <b-button class="mb-2 mr-2 btn-icon-vertical" variant="primary" block>
                  <i class="lnr-picture btn-icon-wrapper"></i>Block Large
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon-vertical" variant="primary" block>
                  <i class="lnr-crop btn-icon-wrapper"></i>Block Normal
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon-vertical" variant="primary" block>
                  <i class="lnr-paperclip btn-icon-wrapper"></i>Block Small
                </b-button>
              </div>
            </div>
            <div class="main-card mb-3 card">
              <div class="card-body">
                <h5 class="card-title">Sizing</h5>
                <div class="text-center">
                  <b-button class="btn-wide mb-2 mr-2 btn-icon-vertical" variant="primary" size="lg">
                    <i class="pe-7s-science btn-icon-wrapper"></i>Large
                  </b-button>
                  <b-button class="btn-wide mb-2 mr-2 btn-icon-vertical" variant="primary">
                    <i class="pe-7s-volume btn-icon-wrapper"></i>Normal
                  </b-button>
                  <b-button class="btn-wide mb-2 mr-2 btn-icon-vertical" variant="primary" size="sm">
                    <i class="pe-7s-tools btn-icon-wrapper"></i>Small
                  </b-button>
                </div>
              </div>
            </div>
            <div class="main-card mb-3 card">
              <div class="card-body">
                <h5 class="card-title">Bottom Icon</h5>
                <div class="text-center">
                  <b-button class="btn-wide mb-2 mr-2 btn-icon-vertical btn-icon-bottom" size="lg" variant="warning">
                    Large
                    <i class="pe-7s-science btn-icon-wrapper"></i>
                  </b-button>
                  <b-button class="btn-wide mb-2 mr-2 btn-icon-vertical btn-icon-bottom btn-shadow" variant="outline-success">
                    Normal
                    <i class="pe-7s-volume btn-icon-wrapper"></i>
                  </b-button>
                  <b-button class="btn-wide mb-2 mr-2 btn-icon-vertical btn-icon-bottom btn-dashed" size="sm" variant="outline-danger">
                    Small
                    <i class="pe-7s-tools btn-icon-wrapper"></i>
                  </b-button>
                </div>
              </div>
            </div>
            <div class="main-card mb-3 card">
              <div class="card-body">
                <h5 class="card-title">Grid Menu Bigger</h5>
                <div class="grid-menu grid-menu-3col">
                  <div class="no-gutters row">
                    <div class="col-sm-6 col-xl-4">
                      <b-button class="btn-icon-vertical btn-square btn-transition" variant="outline-link">
                        <i class="lnr-license btn-icon-wrapper btn-icon-lg mb-3"></i>Primary
                      </b-button>
                    </div>
                    <div class="col-sm-6 col-xl-4">
                      <b-button  class="btn-icon-vertical btn-square btn-transition" variant="outline-link">
                        <i class="lnr-map btn-icon-wrapper btn-icon-lg mb-3"></i>Secondary
                      </b-button>
                    </div>
                    <div class="col-sm-6 col-xl-4">
                      <b-button class="btn-icon-vertical btn-square btn-transition" variant="outline-link">
                        <i class="lnr-music-note btn-icon-wrapper btn-icon-lg mb-3"></i>Success
                      </b-button>
                    </div>
                    <div class="col-sm-6 col-xl-4">
                      <b-button class="btn-icon-vertical btn-square btn-transition" variant="outline-link">
                        <i class="lnr-heart btn-icon-wrapper btn-icon-lg mb-3"></i>Info
                      </b-button>
                    </div>
                    <div class="col-sm-6 col-xl-4">
                      <b-button class="btn-icon-vertical btn-square btn-transition" variant="outline-link">
                        <i class="lnr-magic-wand btn-icon-wrapper btn-icon-lg mb-3"></i>Warning
                      </b-button>
                    </div>
                    <div class="col-sm-6 col-xl-4">
                      <b-button class="btn-icon-vertical btn-square btn-transition" variant="outline-link">
                        <i class="lnr-lighter btn-icon-wrapper btn-icon-lg mb-3"></i>Danger
                      </b-button>
                    </div>
                  </div>
                </div>
                <div class="divider"></div>
                <div class="text-center">
                  <b-dropdown text="Grid Menu Inside Dropdown" class="dropdown-menu-xl">
                    <div class="dropdown-menu-header">
                      <div class="dropdown-menu-header-inner bg-dark">
                        <div class="menu-header-image dd-header-bg-1"></div>
                        <div class="menu-header-content">
                          <h5 class="menu-header-title">Settings</h5>
                          <h6 class="menu-header-subtitle">Manage all of your options</h6>
                        </div>
                      </div>
                    </div>
                    <div class="grid-menu grid-menu-xl grid-menu-3col">
                      <div class="no-gutters row">
                        <div class="col-sm-6 col-xl-4">
                          <b-button class="btn-icon-vertical btn-square btn-transition" variant="outline-link">
                            <i class="lnr-license btn-icon-wrapper btn-icon-lg mb-3"></i>Primary
                          </b-button>
                        </div>
                        <div class="col-sm-6 col-xl-4">
                          <b-button class="btn-icon-vertical btn-square btn-transition" variant="outline-link">
                            <i class="lnr-map btn-icon-wrapper btn-icon-lg mb-3"></i>Secondary
                          </b-button>
                        </div>
                        <div class="col-sm-6 col-xl-4">
                          <b-button class="btn-icon-vertical btn-square btn-transition" variant="outline-link">
                            <i class="lnr-music-note btn-icon-wrapper btn-icon-lg mb-3"></i>Success
                          </b-button>
                        </div>
                        <div class="col-sm-6 col-xl-4">
                          <b-button class="btn-icon-vertical btn-square btn-transition" variant="outline-link">
                            <i class="lnr-heart btn-icon-wrapper btn-icon-lg mb-3"></i>Info
                          </b-button>
                        </div>
                        <div class="col-sm-6 col-xl-4">
                          <b-button class="btn-icon-vertical btn-square btn-transition" variant="outline-link">
                            <i class="lnr-magic-wand btn-icon-wrapper btn-icon-lg mb-3"></i>Warning
                          </b-button>
                        </div>
                        <div class="col-sm-6 col-xl-4">
                          <b-button class="btn-icon-vertical btn-square btn-transition" variant="outline-link">
                            <i class="lnr-lighter btn-icon-wrapper btn-icon-lg mb-3"></i>Danger
                          </b-button>
                        </div>
                      </div>
                    </div>
                    <ul class="nav flex-column">
                      <li class="nav-item-divider nav-item"></li>
                      <li class="nav-item-btn text-right nav-item">
                        <b-button class="btn-pill" variant="success" size="sm">Save</b-button>
                      </li>
                    </ul>
                  </b-dropdown>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-12 col-xl-6">
            <div class="main-card mb-3 card">
              <div class="card-body">
                <h5 class="card-title">Linecons Icons Square Buttons</h5>
                <b-button class="mb-2 mr-2 btn-icon-vertical btn-square" variant="primary">
                  <i class="lnr-license btn-icon-wrapper"></i>Primary
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon-vertical btn-square" variant="secondary">
                  <i class="lnr-map btn-icon-wrapper"></i>Secondary
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon-vertical btn-square">
                  <i class="lnr-music-note btn-icon-wrapper"></i>Success
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon-vertical btn-square" variant="info">
                  <i class="lnr-heart btn-icon-wrapper"></i>Info
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon-vertical btn-square" variant="warning">
                  <i class="lnr-magic-wand btn-icon-wrapper"></i>Warning
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon-vertical btn-square" variant="danger">
                  <i class="lnr-lighter btn-icon-wrapper"></i>Danger
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon-vertical btn-square" variant="focus">
                  <i class="lnr-dice btn-icon-wrapper"></i>Focus
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon-vertical btn-square" variant="alternate">
                  <i class="lnr-apartment btn-icon-wrapper"></i>Alt
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon-vertical btn-square" variant="light">
                  <i class="lnr-database btn-icon-wrapper"></i>Light
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon-vertical btn-square" variant="dark">
                  <i class="lnr-location btn-icon-wrapper"></i>Dark
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon-vertical btn-square" variant="link">
                  <i class="lnr-inbox btn-icon-wrapper"></i>link
                </b-button>
              </div>
            </div>
            <div class="main-card mb-3 card">
              <div class="card-body">
                <h5 class="card-title">Linecons Transition Buttons without Borders</h5>
                <b-button class="mb-2 mr-2 btn-icon-vertical btn-transition border-0" variant="outline-primary">
                  <i class="lnr-license btn-icon-wrapper"></i>Primary
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon-vertical btn-transition border-0" variant="outline-secondary">
                  <i class="lnr-map btn-icon-wrapper"></i>Secondary
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon-vertical btn-transition border-0" variant="outline-success">
                  <i class="lnr-music-note btn-icon-wrapper"></i>Success
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon-vertical btn-transition border-0" variant="outline-info">
                  <i class="lnr-heart btn-icon-wrapper"></i>Info
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon-vertical btn-transition border-0" variant="outline-warning">
                  <i class="lnr-magic-wand btn-icon-wrapper"></i>Warning
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon-vertical btn-transition border-0" variant="outline-danger">
                  <i class="lnr-lighter btn-icon-wrapper"></i>Danger
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon-vertical btn-transition border-0" variant="outline-focus">
                  <i class="lnr-dice btn-icon-wrapper"></i>Focus
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon-vertical btn-transition border-0" variant="outline-alternate">
                  <i class="lnr-apartment btn-icon-wrapper"></i>Alt
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon-vertical btn-transition border-0" variant="outline-light">
                  <i class="lnr-database btn-icon-wrapper"></i>Light
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon-vertical btn-transition border-0" variant="outline-dark">
                  <i class="lnr-location btn-icon-wrapper"></i>Dark
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon-vertical btn-transition border-0" variant="outline-link">
                  <i class="lnr-inbox btn-icon-wrapper"></i>link
                </b-button>
              </div>
            </div>
            <div class="main-card mb-3 card">
              <div class="card-body">
                <h5 class="card-title">Outline 2x Shadow Linecons Icons</h5>
                <b-button class="mb-2 mr-2 btn-icon-vertical btn-shadow btn-outline-2x" variant="outline-primary">
                  <i class="lnr-store btn-icon-wrapper"></i>Primary
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon-vertical btn-shadow btn-outline-2x" variant="outline-secondary">
                  <i class="lnr-book btn-icon-wrapper"></i>Secondary
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon-vertical btn-shadow btn-outline-2x" variant="outline-success">
                  <i class="lnr-user btn-icon-wrapper"></i>Success
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon-vertical btn-shadow btn-outline-2x" variant="outline-info">
                  <i class="lnr-paperclip btn-icon-wrapper"></i>Info
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon-vertical btn-shadow btn-outline-2x" variant="outline-warning">
                  <i class="lnr-screen btn-icon-wrapper"></i>Warning
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon-vertical btn-shadow btn-outline-2x" variant="outline-danger">
                  <i class="lnr-smartphone btn-icon-wrapper"></i>Danger
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon-vertical btn-shadow btn-outline-2x" variant="outline-focus">
                  <i class="lnr-phone btn-icon-wrapper"></i>Focus
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon-vertical btn-shadow btn-outline-2x" variant="outline-alternate">
                  <i class="lnr-keyboard btn-icon-wrapper"></i>Alt
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon-vertical btn-shadow btn-outline-2x" variant="outline-light">
                  <i class="lnr-dinner btn-icon-wrapper"></i>Light
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon-vertical btn-shadow btn-outline-2x" variant="outline-dark">
                  <i class="lnr-earth btn-icon-wrapper"></i>Dark
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon-vertical btn-shadow btn-outline-2x" variant="outline-link">
                  <i class="lnr-car btn-icon-wrapper"></i>link
                </b-button>
              </div>
            </div>
            <div class="main-card mb-3 card">
              <div class="card-body">
                <h5 class="card-title">Solid Pills Linecons Icons</h5>
                <b-button class="mb-2 mr-2 btn-icon-vertical" variant="primary">
                  <i class="lnr-hand btn-icon-wrapper"></i>Primary
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon-vertical" variant="secondary">
                  <i class="lnr-funnel btn-icon-wrapper"></i>Secondary
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon-vertical" variant="success">
                  <i class="lnr-crop btn-icon-wrapper"></i>Success
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon-vertical" variant="info">
                  <i class="lnr-drop btn-icon-wrapper"></i>Info
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon-vertical" variant="warning">
                  <i class="lnr-enter btn-icon-wrapper"></i>Warning
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon-vertical" variant="danger">
                  <i class="lnr-eye btn-icon-wrapper"></i>Danger
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon-vertical" variant="focus">
                  <i class="lnr-graduation-hat btn-icon-wrapper"></i>Focus
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon-vertical" variant="alternate">
                  <i class="lnr-file-empty btn-icon-wrapper"></i>Alt
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon-vertical" variant="light">
                  <i class="lnr-camera btn-icon-wrapper"></i>Light
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon-vertical" variant="dark">
                  <i class="lnr-picture btn-icon-wrapper"></i>Dark
                </b-button>
                <b-button class="mb-2 mr-2 btn-icon-vertical" variant="link">
                  <i class="lnr-book btn-icon-wrapper"></i>link
                </b-button>
              </div>
            </div>
            <div class="main-card mb-3 card">
              <div class="card-body">
                <h5 class="card-title">Grid Menu Hover Color</h5>
                <div class="grid-menu grid-menu-3col">
                  <div class="no-gutters row">
                    <div class="col-sm-6 col-xl-4">
                      <b-button class="btn-icon-vertical btn-square btn-transition" variant="outline-primary">
                        <i class="lnr-license btn-icon-wrapper"></i>Primary
                      </b-button>
                    </div>
                    <div class="col-sm-6 col-xl-4">
                      <b-button class="btn-icon-vertical btn-square btn-transition" variant="outline-secondary">
                        <i class="lnr-map btn-icon-wrapper"></i>Secondary
                      </b-button>
                    </div>
                    <div class="col-sm-6 col-xl-4">
                      <b-button class="btn-icon-vertical btn-square btn-transition" variant="outline-success">
                        <i class="lnr-music-note btn-icon-wrapper"></i>Success
                      </b-button>
                    </div>
                    <div class="col-sm-6 col-xl-4">
                      <b-button class="btn-icon-vertical btn-square btn-transition" variant="outline-info">
                        <i class="lnr-heart btn-icon-wrapper"></i>Info
                      </b-button>
                    </div>
                    <div class="col-sm-6 col-xl-4">
                      <b-button class="btn-icon-vertical btn-square btn-transition" variant="outline-warning">
                        <i class="lnr-magic-wand btn-icon-wrapper"></i>Warning
                      </b-button>
                    </div>
                    <div class="col-sm-6 col-xl-4">
                      <b-button class="btn-icon-vertical btn-square btn-transition" variant="outline-danger">
                        <i class="lnr-lighter btn-icon-wrapper"></i>Danger
                      </b-button>
                    </div>
                  </div>
                </div>
                <div class="divider"></div>
                <div class="text-center">
                  <b-dropdown id="ddown1" text="Grid Menu Inside Dropdown" variant="primary" class="dropdown-menu-lg">
                    <div class="dropdown-menu-header">
                      <div class="dropdown-menu-header-inner bg-primary">
                        <div class="menu-header-image dd-header-bg-2"></div>
                        <div class="menu-header-content">
                          <h5 class="menu-header-title">Settings</h5>
                          <h6 class="menu-header-subtitle">Manage all of your options</h6>
                        </div>
                      </div>
                    </div>
                    <div class="grid-menu grid-menu-3col">
                      <div class="no-gutters row">
                        <div class="col-sm-6 col-xl-4">
                          <b-button class="btn-icon-vertical btn-square btn-transition" variant="outline-primary">
                            <i class="lnr-license btn-icon-wrapper"></i>Primary
                          </b-button>
                        </div>
                        <div class="col-sm-6 col-xl-4">
                          <b-button class="btn-icon-vertical btn-square btn-transition" variant="outline-secondary">
                            <i class="lnr-map btn-icon-wrapper"></i>Secondary
                          </b-button>
                        </div>
                        <div class="col-sm-6 col-xl-4">
                          <b-button class="btn-icon-vertical btn-square btn-transition" variant="outline-success">
                            <i class="lnr-music-note btn-icon-wrapper"></i>Success
                          </b-button>
                        </div>
                        <div class="col-sm-6 col-xl-4">
                          <b-button class="btn-icon-vertical btn-square btn-transition" variant="outline-info">
                            <i class="lnr-heart btn-icon-wrapper"></i>Info
                          </b-button>
                        </div>
                        <div class="col-sm-6 col-xl-4">
                          <b-button class="btn-icon-vertical btn-square btn-transition" variant="outline-warning">
                            <i class="lnr-magic-wand btn-icon-wrapper"></i>Warning
                          </b-button>
                        </div>
                        <div class="col-sm-6 col-xl-4">
                          <b-button class="btn-icon-vertical btn-square btn-transition" variant="outline-danger">
                            <i class="lnr-lighter btn-icon-wrapper"></i>Danger
                          </b-button>
                        </div>
                      </div>
                    </div>
                    <ul class="nav flex-column">
                      <li class="nav-item-divider nav-item"></li>
                      <li class="nav-item-btn text-right nav-item">
                        <b-button class="btn-pill" variant="success" size="sm">Save</b-button>
                      </li>
                    </ul>
                  </b-dropdown>
                </div>
              </div>
            </div>
            <div class="main-card mb-3 card">
              <div class="card-body">
                <h5 class="card-title">Grid Menu Two Columns</h5>
                <div class="grid-menu grid-menu-2col overflow-hidden">
                  <div class="no-gutters row">
                    <div class="col-sm-6">
                      <b-button class="btn-icon-vertical btn-square btn-transition" variant="outline-primary">
                        <i class="lnr-license btn-icon-wrapper"></i>Primary
                      </b-button>
                    </div>
                    <div class="col-sm-6">
                      <b-button class="btn-icon-vertical btn-square btn-transition" variant="outline-secondary">
                        <i class="lnr-map btn-icon-wrapper"></i>Secondary
                      </b-button>
                    </div>
                    <div class="col-sm-6">
                      <b-button class="btn-icon-vertical btn-square btn-transition" variant="outline-success">
                        <i class="lnr-music-note btn-icon-wrapper"></i>Success
                      </b-button>
                    </div>
                    <div class="col-sm-6">
                      <b-button class="btn-icon-vertical btn-square btn-transition" variant="outline-info">
                        <i class="lnr-heart btn-icon-wrapper"></i>Info
                      </b-button>
                    </div>
                  </div>
                </div>
                <div class="divider"></div>
                <div class="text-center">
                  <b-dropdown id="ddown1" text="Grid Menu Inside Dropdown" variant="primary" class="dropdown-menu-xl">
                    <div class="dropdown-menu-header">
                      <div class="dropdown-menu-header-inner bg-focus">
                        <div class="menu-header-image dd-header-bg-5"></div>
                        <div class="menu-header-content">
                          <h5 class="menu-header-title">Settings</h5>
                          <h6 class="menu-header-subtitle">Manage all of your options</h6>
                        </div>
                      </div>
                    </div>
                    <div class="grid-menu grid-menu-2col overflow-hidden">
                      <div class="no-gutters row">
                        <div class="col-sm-6">
                          <b-button class="btn-icon-vertical btn-transition" variant="outline-primary">
                            <i class="lnr-license btn-icon-wrapper"></i>Primary
                          </b-button>
                        </div>
                        <div class="col-sm-6">
                          <b-button class="btn-icon-vertical btn-transition" variant="outline-secondary">
                            <i class="lnr-map btn-icon-wrapper"></i>Secondary
                          </b-button>
                        </div>
                        <div class="col-sm-6">
                          <b-button class="btn-icon-vertical btn-transition" variant="outline-success">
                            <i class="lnr-music-note btn-icon-wrapper"></i>Success
                          </b-button>
                        </div>
                        <div class="col-sm-6">
                          <b-button class="btn-icon-vertical btn-transition" variant="outline-info">
                            <i class="lnr-heart btn-icon-wrapper"></i>Info
                          </b-button>
                        </div>
                      </div>
                    </div>
                    <ul class="nav flex-column">
                      <li class="nav-item-divider nav-item"></li>
                      <li class="nav-item-btn text-right nav-item">
                        <b-button class="btn-pill" variant="success" size="sm">Save</b-button>
                      </li>
                    </ul>
                  </b-dropdown>
                </div>
              </div>
            </div>
            <div class="main-card mb-3 card">
              <div class="card-body">
                <h5 class="card-title">Grid Menu Bigger Two Columns</h5>
                <div class="grid-menu grid-menu-2col overflow-hidden">
                  <div class="no-gutters row">
                    <div class="col-sm-6">
                      <b-button class="btn-icon-vertical btn-square btn-transition" variant="outline-link">
                        <i class="lnr-license btn-icon-wrapper btn-icon-lg mb-3"></i>Primary
                      </b-button>
                    </div>
                    <div class="col-sm-6">
                      <b-button class="btn-icon-vertical btn-square btn-transition" variant="outline-link">
                        <i class="lnr-map btn-icon-wrapper btn-icon-lg mb-3"></i>Secondary
                      </b-button>
                    </div>
                    <div class="col-sm-6">
                      <b-button class="btn-icon-vertical btn-square btn-transition" variant="outline-link">
                        <i class="lnr-music-note btn-icon-wrapper btn-icon-lg mb-3"></i>Success
                      </b-button>
                    </div>
                    <div class="col-sm-6">
                      <b-button class="btn-icon-vertical btn-square btn-transition" variant="outline-link">
                        <i class="lnr-heart btn-icon-wrapper btn-icon-lg mb-3"></i>Info
                      </b-button>
                    </div>
                  </div>
                </div>
                <div class="divider"></div>
                <div class="text-center">
                  <b-dropdown id="ddown1" text="Grid Menu Inside Dropdown" variant="primary" class="dropdown-menu-xl">
                    <div class="dropdown-menu-header">
                      <div class="dropdown-menu-header-inner bg-warning">
                        <div class="menu-header-image dd-header-bg-3"></div>
                        <div class="menu-header-content">
                          <h5 class="menu-header-title">Settings</h5>
                          <h6 class="menu-header-subtitle">Manage all of your options</h6>
                        </div>
                      </div>
                    </div>
                    <div class="grid-menu grid-menu-2col overflow-hidden">
                      <div class="no-gutters row">
                        <div class="col-sm-6">
                          <b-button class="btn-icon-vertical btn-square btn-transition" variant="outline-link">
                            <i class="lnr-license btn-icon-wrapper btn-icon-lg mb-3"></i>Primary
                          </b-button>
                        </div>
                        <div class="col-sm-6">
                          <b-button class="btn-icon-vertical btn-square btn-transition" variant="outline-link">
                            <i class="lnr-map btn-icon-wrapper btn-icon-lg mb-3"></i>Secondary
                          </b-button>
                        </div>
                        <div class="col-sm-6">
                          <b-button class="btn-icon-vertical btn-square btn-transition" variant="outline-link">
                            <i class="lnr-music-note btn-icon-wrapper btn-icon-lg mb-3"></i>Success
                          </b-button>
                        </div>
                        <div class="col-sm-6">
                          <b-button class="btn-icon-vertical btn-square btn-transition" variant="outline-link">
                            <i class="lnr-heart btn-icon-wrapper btn-icon-lg mb-3"></i>Info
                          </b-button>
                        </div>
                      </div>
                    </div>
                    <ul class="nav flex-column">
                      <li class="nav-item-divider nav-item"></li>
                      <li class="nav-item-btn text-center nav-item">
                        <b-button class="btn-shadow" variant="danger" size="sm">Delete</b-button>
                      </li>
                    </ul>
                  </b-dropdown>
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
import PageTitle from "../../../Layout/Components/PageTitle.vue";
import Tabs from "vue-tabs-with-active-line";

const TABS = [
  {
    title: "Horizontal Icons",
    value: "tab1"
  },
  {
    title: "Vertical Icons",
    value: "tab2"
  }
];

export default {
  components: {
    PageTitle,
    Tabs
  },
  data: () => ({
    heading: "Buttons with Icons",
    subheading:
      "These buttons examples contain icons with or without labels attached.\n",
    icon: "pe-7s-hourglass icon-gradient bg-ripe-malin",

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
