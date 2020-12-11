<template>
  <div>
    <page-title :heading="heading" :subheading="subheading"></page-title>
    <v-tabs fixed-tabs color="primary" dark slider-color="white" centered>
      <v-tab ripple>Button Groups</v-tab>
      <v-tab ripple>Item Groups</v-tab>
      <v-tab ripple>Windows</v-tab>
      <v-tab-item>
        <layout-wrapper>
          <demo-card heading="Basic" subheading="Toggle buttons allow you to create a styled group of buttons that can selected or toggled under a single v-model">
            <btngroup1></btngroup1>
          </demo-card>
          <demo-card heading="In toolbar" subheading="Easily integrate customized button solutions with a v-toolbar">
            <btngroup1></btngroup1>
          </demo-card>
        </layout-wrapper>
      </v-tab-item>
      <v-tab-item>
        <layout-wrapper>
          <demo-card heading="Basic" subheading="The core usage of the v-item-group is to create groups of anything that should be controlled by a model.">
            <itemgroup1></itemgroup1>
          </demo-card>
          <demo-card heading="Childs" subheading="Easily hook up a custom chip group.">
            <itemgroup2></itemgroup2>
          </demo-card>
        </layout-wrapper>
      </v-tab-item>
      <v-tab-item>
        <layout-wrapper>
          <demo-card heading="Basic" subheading="Designed to easily cycle through content, v-window provides a simple interface to create truly custom implementations.">
            <windowgroup1></windowgroup1>
          </demo-card>
          <demo-card heading="Onboarding" subheading="v-window makes it easy to create custom components such as a different styled stepper.">
            <windowgroup2></windowgroup2>
          </demo-card>
          <demo-card heading="Account creation" subheading="Create rich forms with smooth animations. v-window automatically tracks the current selection index to automatically change the transition direction. This can be manually controlled with the reverse prop.">
            <windowgroup3></windowgroup3>
          </demo-card>
        </layout-wrapper>
      </v-tab-item>
    </v-tabs>
  </div>
</template>

<script>
import PageTitle from "../../../Layout/Components/PageTitle2.vue";
import LayoutWrapper from "../../../Layout/Components/LayoutWrapper";
import DemoCard from "../../../Layout/Components/DemoCard";

import btngroup1 from "../Components/button-groups/usage";

import itemgroup1 from "../Components/item-groups/usage";
import itemgroup2 from "../Components/item-groups/post";

import windowgroup1 from "../Components/windows/usage";
import windowgroup2 from "../Components/windows/onboarding";
import windowgroup3 from "../Components/windows/account";

export default {
  components: {
    PageTitle,
    "layout-wrapper": LayoutWrapper,
    "demo-card": DemoCard,

    btngroup1,

    itemgroup1,
    itemgroup2,

    windowgroup1,
    windowgroup2,
    windowgroup3
  },
  data: () => ({
    heading: "Groups",
    subheading:
      "Provides ability to create a group of selectable items out of any component.",
    icon: "pe-7s-plane icon-gradient bg-tempting-azure"
  }),

  methods: {}
};
</script>
