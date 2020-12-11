<template>
  <div>
    <page-title :heading="heading" :subheading="subheading"></page-title>
    <layout-wrapper>
      <demo-card heading="Basic" subheading="A card has 3 basic components, v-card-title, v-card-text and v-card-actions.">
        <card1></card1>
      </demo-card>
      <demo-card heading="Media with text" subheading="Using the layout system, we can add custom text anywhere within the background.">
        <card2></card2>
      </demo-card>
      <demo-card heading="Horizontal cards"
        subheading="Using v-flex, you can create customized horizontal cards. Use the contain property to shrink the v-img to fit inside the container, instead of covering.">
        <card3></card3>
      </demo-card>
      <demo-card heading="Grid" subheading="Using grid lists, you can create beautiful layouts.">
        <card4></card4>
      </demo-card>
      <demo-card heading="Custom actions"
        subheading="With a simple conditional, you can easily add supplementary text that is hidden until opened.">
        <card5></card5>
      </demo-card>
      <demo-card heading="Twitter card"
        subheading="The v-card component has multiple children components that help you build complex examples without having to worry about spacing. This example is comprised of the v-card-title, v-card-text and v-card-actions components.">
        <card6></card6>
      </demo-card>
    </layout-wrapper>
  </div>
</template>

<script>
import PageTitle from "../../../Layout/Components/PageTitle2.vue";
import LayoutWrapper from "../../../Layout/Components/LayoutWrapper";
import DemoCard from "../../../Layout/Components/DemoCard";

import card1 from "../Components/cards/usage";
import card2 from "../Components/cards/mediaWithText";
import card3 from "../Components/cards/horizontal";
import card4 from "../Components/cards/grids";
import card5 from "../Components/cards/customActions";
import card6 from "../Components/cards/twitterCard";

export default {
  components: {
    PageTitle,
    "layout-wrapper": LayoutWrapper,
    "demo-card": DemoCard,

    card1,
    card2,
    card3,
    card4,
    card5,
    card6
  },
  data: () => ({
    heading: "Cards",
    subheading:
      "The v-card component is a versatile component that can be used for anything from a panel to a static image. The card component has numerous helper components to make markup as easy as possible.",
    icon: "pe-7s-plane icon-gradient bg-tempting-azure"
  }),

  methods: {}
};
</script>
