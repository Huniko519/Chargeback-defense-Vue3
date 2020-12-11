<template>
  <div>
    <page-title :heading="heading" :subheading="subheading" :icon="icon"></page-title>
    <b-row>
      <b-col md="6">
        <b-card title="Area" class="main-card mb-3">
          <AreaExample></AreaExample>
        </b-card>
        <b-card title="Bar" class="main-card mb-3">
          <BarExample></BarExample>
        </b-card>
        <b-card title="Column" class="main-card mb-3">
          <ColumnExample></ColumnExample>
        </b-card>
        <b-card title="Scatter" class="main-card mb-3">
          <ScatterExample></ScatterExample>
        </b-card>
        <b-card title="Heatmap" class="main-card mb-3">
          <HeatmapExample></HeatmapExample>
        </b-card>
      </b-col>
      <b-col md="6">
        <b-card title="Mixed" class="main-card mb-3">
          <MixedExample></MixedExample>
        </b-card>
        <b-card title="Donut" class="main-card mb-3">
          <DonutExample></DonutExample>
        </b-card>
        <b-card title="Radial Bar" class="main-card mb-3">
          <RadialBarExample></RadialBarExample>
        </b-card>
        <b-card title="Bubble" class="main-card mb-3">
          <BubbleExample></BubbleExample>
        </b-card>
        <b-card title="Line" class="main-card mb-3">
          <LineExample></LineExample>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import PageTitle from "../../Layout/Components/PageTitle.vue";

import AreaExample from "./Apex/AreaExample";
import BarExample from "./Apex/BarExample";
import ColumnExample from "./Apex/ColumnExample";
import ScatterExample from "./Apex/ScatterExample";
import MixedExample from "./Apex/MixedExample";
import DonutExample from "./Apex/DonutExample";
import RadialBarExample from "./Apex/RadialBarExample";
import BubbleExample from "./Apex/BubbleExample";
import HeatmapExample from "./Apex/HeatmapExample";
import LineExample from "./Apex/LineExample";

export default {
  components: {
    PageTitle,

    AreaExample,
    BarExample,
    ColumnExample,
    ScatterExample,
    MixedExample,
    DonutExample,
    RadialBarExample,
    BubbleExample,
    HeatmapExample,
    LineExample
  },
  data: () => ({
    heading: "Apex Charts",
    subheading: "Wonderful animated charts built as a Vue component.",
    icon: "pe-7s-graph2 icon-gradient bg-happy-green"
  }),

  methods: {}
};
</script>
