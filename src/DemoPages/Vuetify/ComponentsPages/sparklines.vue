<template>
  <div>
    <page-title :heading="heading" :subheading="subheading"></page-title>
    <layout-wrapper>
      <demo-card heading="Basic" subheading="The sparkline component comes in 2 variations, trend(default) and bar. Each support a multitude of options for customizing the look and feel of the sparkline.">
        <sparkline1></sparkline1>
      </demo-card>
      <demo-card heading="Take a break" subheading="For concise information, a complete chart might be overkill. Using a trend line with gradient provides enough detail for the user without showing too much information.">
        <sparkline2></sparkline2>
      </demo-card>
      <demo-card heading="Dashboard card" subheading="The v-sparkline component pairs nicely with v-card and v-sheet to create customized information cards, perfect for admin dashboards. Here we use custom labels to provide additional context for the sparkline.">
        <sparkline3></sparkline3>
      </demo-card>
      <demo-card heading="Custom labels" subheading="By providing a scoped slot label, we are able to modify the displayed content adding a dollar sign ($).">
        <sparkline4></sparkline4>
      </demo-card>
      <demo-card heading="Fill" subheading="You can create a v-sparkline with fill using the fill property.">
        <sparkline5></sparkline5>
      </demo-card>
    </layout-wrapper>
  </div>
</template>

<script>
import PageTitle from "../../../Layout/Components/PageTitle2.vue";
import LayoutWrapper from "../../../Layout/Components/LayoutWrapper";
import DemoCard from "../../../Layout/Components/DemoCard";

import sparkline1 from "../Components/sparklines/playground";
import sparkline2 from "../Components/sparklines/heartRate";
import sparkline3 from "../Components/sparklines/dashboardCard";
import sparkline4 from "../Components/sparklines/salesCard";
import sparkline5 from "../Components/sparklines/fill";

export default {
  components: {
    PageTitle,
    "layout-wrapper": LayoutWrapper,
    "demo-card": DemoCard,

    sparkline1,
    sparkline2,
    sparkline3,
    sparkline4,
    sparkline5
  },
  data: () => ({
    heading: "Sparkline",
    subheading:
      "The sparkline component can be used to create simple graphs, like GitHub's contribution chart.",
    icon: "pe-7s-plane icon-gradient bg-tempting-azure"
  }),

  methods: {}
};
</script>
