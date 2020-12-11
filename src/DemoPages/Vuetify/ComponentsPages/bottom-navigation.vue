<template>
  <div>
    <page-title :heading="heading" :subheading="subheading"></page-title>
    <layout-wrapper>
      <demo-card heading="Basic" subheading="While the bottom nav is meant to be used with the vue-router, you can also programmatically control the active state of the buttons by using the active.sync prop. You can change a button's value by using its value attribute.">
        <bn3></bn3>
      </demo-card>
      <demo-card heading="Color & shift"
        subheading="When using a colored background, it is recommended to use the light prop. The shift prop will hide the button text until active. Keep in mind, v-btn text is required to be wrapped in a <span> tag.">
        <bn1></bn1>
      </demo-card>
      <demo-card heading="Toggle" subheading="As with other Vuetify components, you can control the display state with v-model.">
        <bn2></bn2>
      </demo-card>
    </layout-wrapper>
  </div>
</template>

<script>
import PageTitle from "../../../Layout/Components/PageTitle2.vue";
import LayoutWrapper from "../../../Layout/Components/LayoutWrapper";
import DemoCard from "../../../Layout/Components/DemoCard";

import bn1 from "../Components/bottom-navigation/colorAndShift";
import bn2 from "../Components/bottom-navigation/toggle";
import bn3 from "../Components/bottom-navigation/usage";

export default {
  components: {
    PageTitle,
    "layout-wrapper": LayoutWrapper,
    "demo-card": DemoCard,

    bn1,
    bn2,
    bn3
  },
  data: () => ({
    heading: "Bottom navigation",
    subheading:
      "The v-bottom-nav is an alternative to the sidebar. It is primarily used on mobile and comes in two variants, icons and text, and shift.",
    icon: "pe-7s-plane icon-gradient bg-tempting-azure"
  }),

  methods: {}
};
</script>
