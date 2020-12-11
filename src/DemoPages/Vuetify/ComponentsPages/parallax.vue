<template>
  <div>
    <page-title :heading="heading" :subheading="subheading"></page-title>
    <layout-wrapper>
      <demo-card heading="Basic" subheading="A parallax causes a shift in a background image when the user scrolls the page.">
        <parallax1></parallax1>
      </demo-card>
      <demo-card heading="With content" subheading="You can also place any content inside of the parallax. This allows you to use the parallax as a hero image.">
        <parallax2></parallax2>
      </demo-card>
      <demo-card heading="Custom height" subheading="You can specify a custom height on a parallax. Keep in mind this can break the parallax if your image is not sized properly">
        <parallax3></parallax3>
      </demo-card>
    </layout-wrapper>
  </div>
</template>

<script>
import PageTitle from "../../../Layout/Components/PageTitle2.vue";
import LayoutWrapper from "../../../Layout/Components/LayoutWrapper";
import DemoCard from "../../../Layout/Components/DemoCard";

import parallax1 from "../Components/parallax/usage";
import parallax2 from "../Components/parallax/content";
import parallax3 from "../Components/parallax/customHeight";

export default {
  components: {
    PageTitle,
    "layout-wrapper": LayoutWrapper,
    "demo-card": DemoCard,

    parallax1,
    parallax2,
    parallax3
  },
  data: () => ({
    heading: "Parallax",
    subheading:
      "The v-parallax component creates a 3d effect that makes an image appear to scroll slower than the window.",
    icon: "pe-7s-plane icon-gradient bg-tempting-azure"
  }),

  methods: {}
};
</script>
