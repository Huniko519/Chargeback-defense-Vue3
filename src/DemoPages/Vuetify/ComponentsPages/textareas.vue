<template>
  <div>
    <page-title :heading="heading" :subheading="subheading"></page-title>
    <layout-wrapper>
      <demo-card heading="Basic" subheading="A multi-line text-field is useful for larger amounts of text.">
        <textarea1></textarea1>
      </demo-card>
      <demo-card heading="Auto grow" subheading="Textarea can automatically resize when entered text exceeds its size.">
        <textarea2></textarea2>
      </demo-card>
      <demo-card heading="Beautiful Forms" subheading="Utilizing alternative input styles, you can create amazing interfaces that are easy to build and easy to use.">
        <textarea3></textarea3>
      </demo-card>
    </layout-wrapper>
  </div>
</template>

<script>
import PageTitle from "../../../Layout/Components/PageTitle2.vue";
import LayoutWrapper from "../../../Layout/Components/LayoutWrapper";
import DemoCard from "../../../Layout/Components/DemoCard";

import textarea1 from "../Components/textarea/usage";
import textarea2 from "../Components/textarea/autoGrow";
import textarea3 from "../Components/textarea/signupBox";

export default {
  components: {
    PageTitle,
    "layout-wrapper": LayoutWrapper,
    "demo-card": DemoCard,

    textarea1,
    textarea2,
    textarea3
  },
  data: () => ({
    heading: "Textarea",
    subheading:
      "Textarea components are used for collecting large amounts of textual data.",
    icon: "pe-7s-plane icon-gradient bg-tempting-azure"
  }),

  methods: {}
};
</script>
