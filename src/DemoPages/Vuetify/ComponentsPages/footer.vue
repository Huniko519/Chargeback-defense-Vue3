<template>
  <div>
    <page-title :heading="heading" :subheading="subheading"></page-title>
    <layout-wrapper>
      <demo-card heading="Basic" subheading="The footer component is just a basic container.">
        <footer1></footer1>
      </demo-card>
      <demo-card heading="Company Footer" subheading="The footer component as a basic company footer with links.">
        <footer2></footer2>
      </demo-card>
      <demo-card heading="Indigo Footer" subheading="The footer component with Indigo background color and social media icons and button.">
        <footer3></footer3>
      </demo-card>
      <demo-card heading="Teal Footer" subheading="The footer component with a Teal color header and columns and rows of links.">
        <footer4></footer4>
      </demo-card>
    </layout-wrapper>
  </div>
</template>

<script>
import PageTitle from "../../../Layout/Components/PageTitle2.vue";
import LayoutWrapper from "../../../Layout/Components/LayoutWrapper";
import DemoCard from "../../../Layout/Components/DemoCard";

import footer1 from "../Components/footer/usage";
import footer2 from "../Components/footer/companyFooter";
import footer3 from "../Components/footer/indigoFooter";
import footer4 from "../Components/footer/tealFooter";

export default {
  components: {
    PageTitle,
    "layout-wrapper": LayoutWrapper,
    "demo-card": DemoCard,

    footer1,
    footer2,
    footer3,
    footer4
  },
  data: () => ({
    heading: "Footer",
    subheading:
      "The v-footer component is used for displaying general information that a user might want to access from any page within your site.",
    icon: "pe-7s-plane icon-gradient bg-tempting-azure"
  }),

  methods: {}
};
</script>
