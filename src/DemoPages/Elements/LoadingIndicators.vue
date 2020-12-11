<template>
  <div>
    <page-title :heading="heading" :subheading="subheading" :icon="icon"></page-title>
    <tabs :tabs="tabs" :currentTab="currentTab" :wrapper-class="'body-tabs shadow-tabs'"
      :tab-class="'tab-item'" :tab-active-class="'tab-item-active'"
      :line-class="'tab-item-line'" @onClick="handleClick" />
    <div class="content">
      <div v-if="currentTab === 'tab1'">
        <b-row>
          <b-col lg="12">
            <div class="main-card mb-3 card">
              <div class="card-body">
                <template>
                  <div class="font-icon-wrapper float-left mr-3 mb-3">
                    <div class="loader-wrapper d-flex justify-content-center align-items-center">
                      <pulse-loader :color="color"></pulse-loader>
                    </div>
                    <p></p>
                  </div>
                  <div class="font-icon-wrapper float-left mr-3 mb-3">
                    <div class="loader-wrapper d-flex justify-content-center align-items-center">
                      <clip-loader :color="color"></clip-loader>
                    </div>
                    <p></p>
                  </div>
                  <div class="font-icon-wrapper float-left mr-3 mb-3">
                    <div class="loader-wrapper d-flex justify-content-center align-items-center">
                      <rise-loader :color="color"></rise-loader>
                    </div>
                    <p></p>
                  </div>
                  <div class="font-icon-wrapper float-left mr-3 mb-3">
                    <div class="loader-wrapper d-flex justify-content-center align-items-center">
                      <sync-loader :color="color"></sync-loader>
                    </div>
                    <p></p>
                  </div>
                  <div class="font-icon-wrapper float-left mr-3 mb-3">
                    <div class="loader-wrapper d-flex justify-content-center align-items-center">
                      <beat-loader :color="color"></beat-loader>
                    </div>
                    <p></p>
                  </div>
                  <div class="font-icon-wrapper float-left mr-3 mb-3">
                    <div class="loader-wrapper d-flex justify-content-center align-items-center">
                      <rotate-loader :color="color"></rotate-loader>
                    </div>
                    <p></p>
                  </div>
                  <div class="font-icon-wrapper float-left mr-3 mb-3">
                    <div class="loader-wrapper d-flex justify-content-center align-items-center">
                      <pacman-loader :color="color"></pacman-loader>
                    </div>
                    <p></p>
                  </div>
                  <div class="font-icon-wrapper float-left mr-3 mb-3">
                    <div class="loader-wrapper d-flex justify-content-center align-items-center">
                      <square-loader :color="color"></square-loader>
                    </div>
                    <p></p>
                  </div>
                  <div class="font-icon-wrapper float-left mr-3 mb-3">
                    <div class="loader-wrapper d-flex justify-content-center align-items-center">
                      <skew-loader :color="color"></skew-loader>
                    </div>
                    <p></p>
                  </div>
                  <div class="font-icon-wrapper float-left mr-3 mb-3">
                    <div class="loader-wrapper d-flex justify-content-center align-items-center"
                      style="padding-left: 40px;">
                      <moon-loader :color="color"></moon-loader>
                    </div>
                    <p></p>
                  </div>
                  <div class="font-icon-wrapper float-left mr-3 mb-3">
                    <div class="loader-wrapper d-flex justify-content-center align-items-center"
                      style="padding-left: 40px;">
                      <ring-loader :color="color"></ring-loader>
                    </div>
                    <p></p>
                  </div>
                  <div class="font-icon-wrapper float-left mr-3 mb-3">
                    <div class="loader-wrapper d-flex justify-content-center align-items-center"
                      style="padding-left: 40px;">
                      <bounce-loader :color="color"></bounce-loader>
                    </div>
                    <p></p>
                  </div>
                  <div class="font-icon-wrapper float-left mr-3 mb-3">
                    <div class="loader-wrapper d-flex justify-content-center align-items-center"
                      style="padding-left: 40px;">
                      <dot-loader :color="color"></dot-loader>
                    </div>
                    <p></p>
                  </div>
                </template>
              </div>
            </div>
          </b-col>
        </b-row>
      </div>
      <div v-if="currentTab === 'tab4'">
        <div class="main-card mb-3 card">
          <div class="card-body">
            <div class="card-title">Elements Block Loading</div>
            <div class="text-center">
              <div class="row">
                <div class="col-lg-3 col-md-6">
                  <button @click="show1 = !show1" class="btn btn-primary mb-5 mt-2 block-element-btn-example-1">
                    Toggle Spinner Example
                  </button>
                  <div class="card">
                    <VueElementLoading :active="show1" spinner="bar-fade-scale" color="var(--primary)"/>
                    <div class="card-header">Header</div>
                    <div class="card-body">
                      <p>With supporting text below as a natural lead-in to additional content.</p>
                      <div class="d-block text-right card-footer">
                        <button class="mr-2 btn btn-link btn-sm">Cancel</button>
                        <button class="btn btn-success btn-lg">Save</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6">
                  <button @click="show2 = !show2" class="btn btn-primary mb-5 mt-2 block-element-btn-example-1">
                    Toggle Ring Example
                  </button>
                  <div class="card">
                    <VueElementLoading :active="show2" spinner="ring" color="var(--success)" />
                    <div class="card-header">Header</div>
                    <div class="card-body">
                      <p>With supporting text below as a natural lead-in to additional content.</p>
                      <div class="d-block text-right card-footer">
                        <button class="mr-2 btn btn-link btn-sm">Cancel</button>
                        <button class="btn btn-success btn-lg">Save</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6">
                  <button @click="show3 = !show3" class="btn btn-primary mb-5 mt-2 block-element-btn-example-1">
                    Toggle Bar Fade Example
                  </button>
                  <div class="card">
                    <VueElementLoading :active="show3" spinner="bar-fade" color="var(--danger)" />
                    <div class="card-header">Header</div>
                    <div class="card-body">
                      <p>With supporting text below as a natural lead-in to additional content.</p>
                    </div>
                    <div class="d-block text-right card-footer">
                      <button class="mr-2 btn btn-link btn-sm">Cancel</button>
                      <button class="btn btn-success btn-lg">Save</button>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6">
                  <button @click="show4 = !show4" class="btn btn-primary mb-5 mt-2 block-element-btn-example-1">
                    Toggle Line Scale Example
                  </button>
                  <div class="card">
                    <VueElementLoading :active="show4" spinner="line-scale" color="var(--info)" />
                    <div class="card-header">Header</div>
                    <div class="card-body">
                      <p>With supporting text below as a natural lead-in to additional content.</p>
                    </div>
                    <div class="d-block text-right card-footer">
                      <button class="mr-2 btn btn-link btn-sm">Cancel</button>
                      <button class="btn btn-success btn-lg">Save</button>
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
</template>

<script>
import PageTitle from "../../Layout/Components/PageTitle.vue";
import Tabs from "vue-tabs-with-active-line";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import ClipLoader from "vue-spinner/src/ClipLoader.vue";
import RiseLoader from "vue-spinner/src/RiseLoader.vue";
import BeatLoader from "vue-spinner/src/BeatLoader.vue";
import SyncLoader from "vue-spinner/src/SyncLoader.vue";
import RotateLoader from "vue-spinner/src/RotateLoader.vue";
import PacmanLoader from "vue-spinner/src/PacmanLoader.vue";
import SquareLoader from "vue-spinner/src/SquareLoader.vue";
import SkewLoader from "vue-spinner/src/SkewLoader.vue";
import MoonLoader from "vue-spinner/src/MoonLoader.vue";
import RingLoader from "vue-spinner/src/RingLoader.vue";
import BounceLoader from "vue-spinner/src/BounceLoader.vue";
import DotLoader from "vue-spinner/src/DotLoader.vue";
import VueElementLoading from "vue-element-loading";

const TABS = [
  {
    title: "SpinKit",
    value: "tab1"
  },
  {
    title: "Block Loading",
    value: "tab4"
  }
];

export default {
  components: {
    PageTitle,
    Tabs,
    PulseLoader,
    ClipLoader,
    RiseLoader,
    BeatLoader,
    SyncLoader,
    RotateLoader,
    PacmanLoader,
    SquareLoader,
    SkewLoader,
    MoonLoader,
    RingLoader,
    BounceLoader,
    DotLoader,
    VueElementLoading
  },
  data: () => ({
    heading: "Loading Indicators",
    subheading:
      "Use these loading indicators in combination with other elements to show current app status to users.",
    icon: "pe-7s-moon icon-gradient bg-amy-crisp",

    tabs: TABS,
    currentTab: "tab1",

    show1: false,
    show2: false,
    show3: false,
    show4: false,
    color: "#3f6ad8"
  }),

  methods: {
    handleClick(newTab) {
      this.currentTab = newTab;
    }
  }
};
</script>
