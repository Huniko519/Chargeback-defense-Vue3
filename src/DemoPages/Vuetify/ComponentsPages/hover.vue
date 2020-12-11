<template>
  <div>
    <page-title :heading="heading" :subheading="subheading"></page-title>
    <layout-wrapper>
      <demo-card heading="Basic" subheading="Easily change the elevation of a card.">
        <hover1></hover1>
      </demo-card>
      <demo-card heading="Transitions" subheading="Create highly customized components that respond to user interaction.">
        <hover2></hover2>
      </demo-card>
    </layout-wrapper>
  </div>
</template>

<script>
import PageTitle from "../../../Layout/Components/PageTitle2.vue";
import LayoutWrapper from "../../../Layout/Components/LayoutWrapper";
import DemoCard from "../../../Layout/Components/DemoCard";

import hover1 from "../Components/hover/usage";
import hover2 from "../Components/hover/transition";

export default {
  components: {
    PageTitle,
    "layout-wrapper": LayoutWrapper,
    "demo-card": DemoCard,

    hover1,
    hover2
  },
  data: () => ({
    heading: "Hover",
    subheading:
      "The v-hover component provides a clean interface for handling hover states for any component.",
    icon: "pe-7s-plane icon-gradient bg-tempting-azure"
  }),

  methods: {}
};
</script>
