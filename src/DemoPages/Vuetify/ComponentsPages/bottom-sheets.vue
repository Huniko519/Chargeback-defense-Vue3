<template>
  <div>
    <page-title :heading="heading" :subheading="subheading"></page-title>
    <layout-wrapper>
      <demo-card heading="Basic" subheading="Here we display an example list of actions that could be present in an application.">
        <bs2></bs2>
      </demo-card>
      <demo-card heading="Inset bottom sheets" subheading="Bottom sheets can be inset, reducing their maximum width on desktop to 70%. This can be further reduced manually using the width prop. We also showcase dynamic class binding using the Vuetify breakpoint object.">
        <bs1></bs1>
      </demo-card>
    </layout-wrapper>
  </div>
</template>

<script>
import PageTitle from "../../../Layout/Components/PageTitle2.vue";
import LayoutWrapper from "../../../Layout/Components/LayoutWrapper";
import DemoCard from "../../../Layout/Components/DemoCard";

import bs1 from "../Components/bottom-sheets/inset";
import bs2 from "../Components/bottom-sheets/usage";

export default {
  components: {
    PageTitle,
    "layout-wrapper": LayoutWrapper,
    "demo-card": DemoCard,

    bs1,
    bs2
  },
  data: () => ({
    heading: "Bottom sheet",
    subheading:
      "The bottom sheet is a modified v-dialog that slides from the bottom of the screen, similar to a v-bottom-nav. Whereas a bottom navigation component is for buttons and specific application level actions, a bottom sheet can contain anything.",
    icon: "pe-7s-plane icon-gradient bg-tempting-azure"
  }),

  methods: {}
};
</script>
