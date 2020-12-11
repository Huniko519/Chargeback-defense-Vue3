<template>
  <div>
    <page-title :heading="heading" :subheading="subheading"></page-title>
    <layout-wrapper>
      <demo-card heading="Basic" subheading="Basic usage examples of images in UI.">
        <images1></images1>
      </demo-card>
      <demo-card heading="Contain and Cover" subheading="If the provided aspect ratio doesn't match that of the actual image, the default behavior is to fill as much space as possible, clipping the sides of the image.">
        <images2></images2>
      </demo-card>
      <demo-card heading="Height" subheading="v-img will automatically grow to the size of its src, preserving the correct aspect ratio. You can limit this with the height and max-height props.">
        <images3></images3>
      </demo-card>
      <demo-card heading="Fixed ratio" subheading="Maintains the aspect ratio when resized.">
        <images4></images4>
      </demo-card>
      <demo-card heading="Gradients" subheading="The gradient prop can be used to apply a simple gradient overlay to the image. More complex gradients should be written as a class on the content slot instead.">
        <images5></images5>
      </demo-card>
    </layout-wrapper>
  </div>
</template>

<script>
import PageTitle from "../../../Layout/Components/PageTitle2.vue";
import LayoutWrapper from "../../../Layout/Components/LayoutWrapper";
import DemoCard from "../../../Layout/Components/DemoCard";

import images1 from "../Components/images/usage";
import images2 from "../Components/images/containCover";
import images3 from "../Components/images/maxHeight";
import images4 from "../Components/images/ratio";
import images5 from "../Components/images/gradients";

export default {
  components: {
    PageTitle,
    "layout-wrapper": LayoutWrapper,
    "demo-card": DemoCard,

    images1,
    images2,
    images3,
    images4,
    images5
  },
  data: () => ({
    heading: "Images",
    subheading:
      "The v-img component is packed with features to support rich media. Combined with the vuetify-loader, you can add dynamic progressive images to provide a better user experience.",
    icon: "pe-7s-plane icon-gradient bg-tempting-azure"
  }),

  methods: {}
};
</script>
