<template>
  <div>
    <page-title :heading="heading" :subheading="subheading"></page-title>
    <layout-wrapper>
      <demo-card heading="Basic" subheading="Subheaders work great with lists for describing the information below.">
        <subheaders1></subheaders1>
      </demo-card>
      <demo-card heading="Grid subheaders" subheading="A subheader can add context to what a user is looking at.">
        <subheaders2></subheaders2>
      </demo-card>
      <demo-card heading="Menu subheaders" subheading="Using a subheader can help separate different types of actions.">
        <subheaders3></subheaders3>
      </demo-card>
      <demo-card heading="Subheaders with social media" subheading="Using a subheader with social media interaction.">
        <subheaders4></subheaders4>
      </demo-card>
    </layout-wrapper>
  </div>
</template>

<script>
import PageTitle from "../../../Layout/Components/PageTitle2.vue";
import LayoutWrapper from "../../../Layout/Components/LayoutWrapper";
import DemoCard from "../../../Layout/Components/DemoCard";

import subheaders1 from "../Components/subheaders/usage";
import subheaders2 from "../Components/subheaders/grid";
import subheaders3 from "../Components/subheaders/menu";
import subheaders4 from "../Components/subheaders/social";

export default {
  components: {
    PageTitle,
    "layout-wrapper": LayoutWrapper,
    "demo-card": DemoCard,

    subheaders1,
    subheaders2,
    subheaders3,
    subheaders4
  },
  data: () => ({
    heading: "Subheaders",
    subheading:
      "The v-subheader component is used to separate sections of lists.",
    icon: "pe-7s-plane icon-gradient bg-tempting-azure"
  }),

  methods: {}
};
</script>
