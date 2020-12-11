<template>
  <div>
    <page-title :heading="heading" :subheading="subheading"></page-title>
    <layout-wrapper>
      <demo-card heading="Basic" subheading="Icons come in two themes (light and dark), and four different sizes (standard, medium, large, and x-large). ">
        <icons1></icons1>
      </demo-card>
      <demo-card heading="Color" subheading="Using color helpers you can change the color of an icon from the standard dark and light themes.">
        <icons4></icons4>
      </demo-card>
      <demo-card heading="Buttons" subheading="Icons can be used inside of buttons to add emphasis to the action.">
        <icons5></icons5>
      </demo-card>
      <demo-card heading="Clickable" subheading="Binding any click event to v-icon will automatically change the cursor to a pointer.">
        <icons6></icons6>
      </demo-card>
    </layout-wrapper>
  </div>
</template>

<script>
import PageTitle from "../../../Layout/Components/PageTitle2.vue";
import LayoutWrapper from "../../../Layout/Components/LayoutWrapper";
import DemoCard from "../../../Layout/Components/DemoCard";

import icons1 from "../Components/icons/usage";
import icons4 from "../Components/icons/color";
import icons5 from "../Components/icons/buttons";
import icons6 from "../Components/icons/clickable";

export default {
  components: {
    PageTitle,
    "layout-wrapper": LayoutWrapper,
    "demo-card": DemoCard,

    icons1,
    icons4,
    icons5,
    icons6
  },
  data: () => ({
    heading: "Icons",
    subheading:
      "The v-icon component provides a large set of glyphs to provide context to various aspects of your application. Vuetify icons utilize Google's Material Icons font library.",
    icon: "pe-7s-plane icon-gradient bg-tempting-azure"
  }),

  methods: {}
};
</script>
