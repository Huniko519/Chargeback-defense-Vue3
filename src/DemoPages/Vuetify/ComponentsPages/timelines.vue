<template>
  <div>
    <page-title :heading="heading" :subheading="subheading"></page-title>
    <layout-wrapper>
      <demo-card heading="Basic" subheading="Basic timeline example below.">
        <timelines1></timelines1>
      </demo-card>
      <demo-card heading="Small dots" subheading="Easily alternate styles to provide a unique design.">
        <timelines2></timelines2>
      </demo-card>
      <demo-card heading="Icon dots" subheading="Conditionally use icons within the v-timeline-item's dot to provide additional context.">
        <timelines3></timelines3>
      </demo-card>
      <demo-card heading="Avatar dots" subheading="Insert avatars into dots with use of icon slot and v-avatar.">
        <timelines4></timelines4>
      </demo-card>
      <demo-card heading="Colored dots" subheading="Colors dots create visual breakpoints that make your timelines easier to read.">
        <timelines5></timelines5>
      </demo-card>
      <demo-card heading="Opposite slot" subheading="The opposite slot provides an additional layer of customization within your timelines.">
        <timelines6></timelines6>
      </demo-card>
      <demo-card heading="Dense alert" subheading="Dense timelines position all content to the right. In this example, v-alert replaces the card to provide a different design.">
        <timelines7></timelines7>
      </demo-card>
      <demo-card heading="Advanced" subheading="Modular components allow you to create highly customized solutions that just work.">
        <timelines8></timelines8>
      </demo-card>
    </layout-wrapper>
  </div>
</template>

<script>
import PageTitle from "../../../Layout/Components/PageTitle2.vue";
import LayoutWrapper from "../../../Layout/Components/LayoutWrapper";
import DemoCard from "../../../Layout/Components/DemoCard";

import timelines1 from "../Components/timelines/usage";
import timelines2 from "../Components/timelines/small";
import timelines3 from "../Components/timelines/icons";
import timelines4 from "../Components/timelines/avatars";
import timelines5 from "../Components/timelines/color";
import timelines6 from "../Components/timelines/slot";
import timelines7 from "../Components/timelines/alert";
import timelines8 from "../Components/timelines/advanced";

export default {
  components: {
    PageTitle,
    "layout-wrapper": LayoutWrapper,
    "demo-card": DemoCard,

    timelines1,
    timelines2,
    timelines3,
    timelines4,
    timelines5,
    timelines6,
    timelines7,
    timelines8
  },
  data: () => ({
    heading: "Timelines",
    subheading:
      "The v-timeline is useful for stylistically displaying chronological information.",
    icon: "pe-7s-plane icon-gradient bg-tempting-azure"
  }),

  methods: {}
};
</script>
