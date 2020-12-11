<template>
  <div>
    <page-title :heading="heading" :subheading="subheading"></page-title>
    <layout-wrapper>
      <demo-card heading="Basic" subheading="Any element can be used with a badge.">
        <badge4></badge4>
      </demo-card>
      <demo-card heading="Overlap" subheading="The badge will overlap its content when using the overlap prop">
        <badge3></badge3>
      </demo-card>
      <demo-card heading="Inline" subheading="Badges can also be placed inline with text.">
        <badge2></badge2>
      </demo-card>
      <demo-card heading="Icon" subheading="The badge can use all of the currently supported icon sets.">
        <badge1></badge1>
      </demo-card>
      <demo-card heading="Visibility" subheading="The visibility of badges can be controlled using v-model.">
        <badge5></badge5>
      </demo-card>
    </layout-wrapper>
  </div>
</template>

<script>
import PageTitle from "../../../Layout/Components/PageTitle2.vue";
import LayoutWrapper from "../../../Layout/Components/LayoutWrapper";
import DemoCard from "../../../Layout/Components/DemoCard";

import badge1 from "../Components/badges/icon";
import badge2 from "../Components/badges/inline";
import badge3 from "../Components/badges/overlap";
import badge4 from "../Components/badges/usage";
import badge5 from "../Components/badges/visibility";

export default {
  components: {
    PageTitle,
    "layout-wrapper": LayoutWrapper,
    "demo-card": DemoCard,

    badge1,
    badge2,
    badge3,
    badge4,
    badge5
  },
  data: () => ({
    heading: "Badge",
    subheading:
      "The v-badge component can wrap any type of content to highlight information to a user or to just draw attention to a specific element.",
    icon: "pe-7s-plane icon-gradient bg-tempting-azure"
  }),

  methods: {}
};
</script>
