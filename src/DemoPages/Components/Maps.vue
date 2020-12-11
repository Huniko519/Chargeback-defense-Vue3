<template>
  <div>
    <page-title :heading="heading" :subheading="subheading" :icon="icon"></page-title>
    <tabs :tabs="tabs" :currentTab="currentTab" :wrapper-class="'body-tabs shadow-tabs'"
      :tab-class="'tab-item'" :tab-active-class="'tab-item-active'"
      :line-class="'tab-item-line'" @onClick="handleClick" />
    <div class="content">
      <div v-if="currentTab === 'tab1'">
        <b-card class="main-card mb-4">
          <div class="mb-3">
            <div>
              <b>Center:</b>
              {{ center }}
            </div>
            <div>
              <b>Zoom:</b>
              {{ zoom }}
            </div>
            <div>
              <b>Bounds:</b>
              {{ bounds }}
            </div>
          </div>
          <div style="height: 500px; width: 100%">
            <l-map style="height: 100%; width: 100%" :zoom="zoom" :center="center2"
              @update:zoom="zoomUpdated" @update:center="centerUpdated" @update:bounds="boundsUpdated">
              <l-tile-layer :url="url"></l-tile-layer>
            </l-map>
          </div>
        </b-card>
      </div>
      <div v-if="currentTab === 'tab2'">
        <b-card class="main-card mb-4">
          <div id="maps-root">
            <google-map :center="center" :zoom="7" style="width: 100%; height: 500px">
              <google-marker v-for="m in markers" v-bind:key="m.position.lag" :position="m.position"
                :clickable="true" :draggable="true" @click="center=m.position">
              </google-marker>
            </google-map>
          </div>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
import PageTitle from "../../Layout/Components/PageTitle.vue";
import Tabs from "vue-tabs-with-active-line";
import { LMap, LTileLayer } from "vue2-leaflet";
import Vue from "vue";
import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyDf43lPdwlF98RCBsJOFNKOkoEjkwxb5Sc"
  },
  // Demonstrating how we can customize the name of the components
  installComponents: false
});

const TABS = [
  {
    title: "Leaflet",
    value: "tab1"
  },
  {
    title: "Google Maps",
    value: "tab2"
  }
];

export default {
  components: {
    PageTitle,
    Tabs,

    LMap,
    LTileLayer,

    "google-map": VueGoogleMaps.Map,
    "google-marker": VueGoogleMaps.Marker
  },
  data: () => ({
    heading: "Maps",
    subheading: "Implement in your applications Google or vector maps.",
    icon: "pe-7s-map icon-gradient bg-premium-dark",

    tabs: TABS,
    currentTab: "tab1",

    url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
    zoom: 3,
    center2: [47.41322, -1.219482],
    bounds: null,

    center: {
      lat: 4.0,
      lng: 4.0
    },
    markers: [
      {
        position: {
          lat: 3.0,
          lng: 3.0
        }
      },
      {
        position: {
          lat: 18.0,
          lng: 18.0
        }
      }
    ]
  }),

  methods: {
    handleClick(newTab) {
      this.currentTab = newTab;
    },
    zoomUpdated(zoom) {
      this.zoom = zoom;
    },
    centerUpdated(center) {
      this.center = center;
    },
    boundsUpdated(bounds) {
      this.bounds = bounds;
    }
  }
};
</script>
