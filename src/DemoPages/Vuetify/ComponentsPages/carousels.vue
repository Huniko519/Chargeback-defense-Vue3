<template>
  <div>
    <page-title :heading="heading" :subheading="subheading"></page-title>
    <layout-wrapper>
      <demo-card heading="Basic" subheading="A carousel by default has a slide transition.">
        <carousel1></carousel1>
      </demo-card>
      <demo-card heading="Custom transition" subheading="You can also apply your own custom transition.">
        <carousel2></carousel2>
      </demo-card>
      <demo-card heading="Custom icons" subheading="You can also change the icon for the carousel delimiter and previous/next icons.">
        <carousel3></carousel3>
      </demo-card>
      <demo-card heading="Hide controls" subheading="You can hide the navigation controls with the hide-controls prop.">
        <carousel4></carousel4>
      </demo-card>
      <demo-card heading="Hide delimiters" subheading="You can hide the bottom controls with the hide-delimiters prop.">
        <carousel5></carousel5>
      </demo-card>
    </layout-wrapper>
  </div>
</template>

<script>
import PageTitle from "../../../Layout/Components/PageTitle2.vue";
import LayoutWrapper from "../../../Layout/Components/LayoutWrapper";
import DemoCard from "../../../Layout/Components/DemoCard";

import carousel1 from "../Components/carousels/usage";
import carousel2 from "../Components/carousels/customTransition";
import carousel3 from "../Components/carousels/customIcons";
import carousel4 from "../Components/carousels/hideControls";
import carousel5 from "../Components/carousels/hideDelimiters";

export default {
  components: {
    PageTitle,
    "layout-wrapper": LayoutWrapper,
    "demo-card": DemoCard,

    carousel1,
    carousel2,
    carousel3,
    carousel4,
    carousel5
  },
  data: () => ({
    heading: "Carousel",
    subheading:
      "The v-carousel component is used to display large numbers of visual content on a rotating timer.",
    icon: "pe-7s-plane icon-gradient bg-tempting-azure"
  }),

  methods: {}
};
</script>
