<template>
  <div>
    <page-title :heading="heading" :subheading="subheading"></page-title>
    <layout-wrapper>
      <demo-card heading="Basic" subheading="Full bleed dividers extend the entire content width.">
        <dividers1></dividers1>
      </demo-card>
      <demo-card heading="Light and dark" subheading="Dividers have light and dark variants.">
        <dividers2></dividers2>
      </demo-card>
      <demo-card heading="Inset dividers" subheading="Inset dividers are moved 72px to the right. This will cause them to line up with list items.">
        <dividers3></dividers3>
      </demo-card>
      <demo-card heading="Subheaders and dividers" subheading="Subheaders can be lined up with inset dividers by using the same prop.">
        <dividers4></dividers4>
      </demo-card>
      <demo-card heading="List dividers" subheading="Inset dividers and subheaders can help break up content">
        <dividers5></dividers5>
      </demo-card>
      <demo-card heading="Dividers in Portrait View" subheading="Create custom cards to fit any use-case">
        <dividers6></dividers6>
      </demo-card>
      <demo-card heading="Vertical dividers" subheading="Vertical dividers give you even more tools for unique layouts.">
        <dividers7></dividers7>
      </demo-card>
    </layout-wrapper>
  </div>
</template>

<script>
import PageTitle from "../../../Layout/Components/PageTitle2.vue";
import LayoutWrapper from "../../../Layout/Components/LayoutWrapper";
import DemoCard from "../../../Layout/Components/DemoCard";

import dividers1 from "../Components/dividers/usage";
import dividers2 from "../Components/dividers/lightAndDark";
import dividers3 from "../Components/dividers/inset";
import dividers4 from "../Components/dividers/subheaders";
import dividers5 from "../Components/dividers/dividerList";
import dividers6 from "../Components/dividers/dividerListPortrait";
import dividers7 from "../Components/dividers/vertical";

export default {
  components: {
    PageTitle,
    "layout-wrapper": LayoutWrapper,
    "demo-card": DemoCard,

    dividers1,
    dividers2,
    dividers3,
    dividers4,
    dividers5,
    dividers6,
    dividers7
  },
  data: () => ({
    heading: "Divider",
    subheading:
      "The v-divider component is used to separate sections of lists.",
    icon: "pe-7s-plane icon-gradient bg-tempting-azure"
  }),

  methods: {}
};
</script>
