<template>
  <div>
    <page-title :heading="heading" :subheading="subheading" :icon="icon"></page-title>
    <div class="row">
      <div class="col-lg-6">
        <div class="main-card mb-3 card">
          <div class="card-body">
            <h5 class="card-title">Basic</h5>
            <h3>
              <span class="count-up-wrapper">
                <ICountUp :startVal="startVal" :endVal="endVal" :decimals="decimals"
                  :duration="duration" :options="options" @ready="onReady"/>
              </span>
            </h3>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="main-card mb-3 card">
          <div class="card-body">
            <h5 class="card-title">Numbers</h5>
            <div class="text-center">
              <h3>
                <span class="count-up-wrapper-4">
                  <ICountUp :startVal="startVal" :endVal="endVal" :decimals="decimals"
                    :duration="duration" :options="options" @ready="onReady" />
                </span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4">
        <div class="card mb-3 widget-chart">
          <div class="icon-wrapper rounded-circle">
            <div class="icon-wrapper-bg bg-primary"></div>
            <i class="lnr-cog text-primary"></i>
          </div>
          <div class="widget-numbers">
            <span class="count-up-wrapper-2">
              <ICountUp :startVal="startVal" :endVal="endVal" :decimals="decimals"
                :duration="duration" :options="options" @ready="onReady" />
            </span>
          </div>
          <div class="widget-subheading">Total Views</div>
          <div class="widget-description text-success">
            <font-awesome-icon icon="angle-up" />
            <span class="pl-1">
              <span class="count-up-wrapper-3">96 %</span>
            </span>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card mb-3 widget-chart">
          <div class="icon-wrapper rounded-circle">
            <div class="icon-wrapper-bg bg-success"></div>
            <i class="lnr-screen text-success"></i>
          </div>
          <div class="widget-numbers">
            <span class="count-up-wrapper-2">
              <ICountUp :startVal="startVal" :endVal="endVal" :decimals="decimals"
                :duration="duration" :options="options" @ready="onReady" />
            </span>
          </div>
          <div class="widget-subheading">Profiles</div>
          <div class="widget-description text-warning">
            <span class="pr-1">
              <span class="count-up-wrapper-3">96 %</span>
            </span>
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
            <span class="count-up-wrapper-2">
              <ICountUp :startVal="startVal" :endVal="endVal" :decimals="decimals"
                :duration="duration" :options="options" @ready="onReady" />
            </span>
          </div>
          <div class="widget-subheading">Reports Submitted</div>
          <div class="widget-description text-primary">
            <span class="pr-1 count-up-wrapper-3">96 %</span>
            <font-awesome-icon icon="angle-up" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageTitle from "../../Layout/Components/PageTitle.vue";
import ICountUp from "vue-countup-v2";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  components: {
    "font-awesome-icon": FontAwesomeIcon,
    PageTitle,
    ICountUp
  },
  data: () => ({
    heading: "Count Up",
    subheading:
      "Add animations to your numbers. It'll make your next Architect app more user friendly.",
    icon: "pe-7s-signal icon-gradient bg-malibu-beach",

    startVal: 0,
    endVal: 64,
    decimals: 0,
    duration: 5.5,
    options: {
      useEasing: true,
      useGrouping: true,
      separator: ",",
      decimal: ".",
      prefix: "",
      suffix: "k"
    }
  }),

  methods: {
    onReady: function(instance) {
      const that = this;
      instance.update(that.endVal + 100);
    }
  }
};
</script>
