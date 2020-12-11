<template>
  <div>
    <page-title :heading="heading" :subheading="subheading"></page-title>
    <layout-wrapper>
      <demo-card heading="Basic" subheading="Tooltips can wrap any element.">
        <tooltip1></tooltip1>
      </demo-card>
      <demo-card heading="Alignment" subheading="Tooltip can be aligned to any of the four sides of the activator element">
        <tooltip2></tooltip2>
      </demo-card>
      <demo-card heading="Visibility" subheading="Tooltip visibility can be programmatically changed using v-model.">
        <tooltip3></tooltip3>
      </demo-card>
    </layout-wrapper>
  </div>
</template>

<script>
import PageTitle from "../../../Layout/Components/PageTitle2.vue";
import LayoutWrapper from "../../../Layout/Components/LayoutWrapper";
import DemoCard from "../../../Layout/Components/DemoCard";

import tooltip1 from "../Components/tooltips/usage";
import tooltip2 from "../Components/tooltips/alignment";
import tooltip3 from "../Components/tooltips/visibility";

export default {
  components: {
    PageTitle,
    "layout-wrapper": LayoutWrapper,
    "demo-card": DemoCard,

    tooltip1,
    tooltip2,
    tooltip3
  },
  data: () => ({
    heading: "Tooltip",
    subheading:
      "The v-tooltip component is useful for conveying information when a user hovers over an element. You can also programmatically control the display of tooltips through a v-model",
    icon: "pe-7s-plane icon-gradient bg-tempting-azure"
  }),

  methods: {}
};
</script>
