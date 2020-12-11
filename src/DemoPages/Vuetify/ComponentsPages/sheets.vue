<template>
  <div>
    <page-title :heading="heading" :subheading="subheading"></page-title>
    <layout-wrapper>
      <demo-card heading="Basic" subheading="The v-sheet component is a malleable piece of paper that can be morphed to facilitate other components. In this example we utilize custom color, theme (dark/light) and size.">
        <sheets1></sheets1>
      </demo-card>
      <demo-card heading="Using elevation" subheading="Sheets can accept a custom elevation between 0 and 24 (0 is default).">
        <sheets2></sheets2>
      </demo-card>
    </layout-wrapper>
  </div>
</template>

<script>
import PageTitle from "../../../Layout/Components/PageTitle2.vue";
import LayoutWrapper from "../../../Layout/Components/LayoutWrapper";
import DemoCard from "../../../Layout/Components/DemoCard";

import sheets1 from "../Components/sheets/usage";
import sheets2 from "../Components/sheets/elevation";

export default {
  components: {
    PageTitle,
    "layout-wrapper": LayoutWrapper,
    "demo-card": DemoCard,

    sheets1,
    sheets2
  },
  data: () => ({
    heading: "Sheet",
    subheading:
      "The v-sheet is designed to power other paper components within Vuetify. It is meant to be used as a low level component.",
    icon: "pe-7s-plane icon-gradient bg-tempting-azure"
  }),

  methods: {}
};
</script>
