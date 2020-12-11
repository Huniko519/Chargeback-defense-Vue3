<template>
  <div>
    <page-title :heading="heading" :subheading="subheading"></page-title>
    <layout-wrapper>
      <demo-card heading="Basic" subheading="The v-rating component provides a simple interface for gathering user feedback.">
        <rating1></rating1>
      </demo-card>
      <demo-card heading="Size variants" subheading="Utilize the same sizing classes available in v-icon or provide your own with the size prop.">
        <rating2></rating2>
      </demo-card>
      <demo-card heading="Custom length" subheading="Sometimes an application will call for a customized implementation. Easily change length or displayed icons.">
        <rating3></rating3>
      </demo-card>
      <demo-card heading="Incremented" subheading="A rating can have 3 defined icons, full-icon, half-icon (with the half-increments prop) and empty-icon.">
        <rating4></rating4>
      </demo-card>
      <demo-card heading="Scoped slots" subheading="A scoped slot is provided to give you even more freedom in how you display the rating.">
        <rating5></rating5>
      </demo-card>
      <demo-card heading="Card ratings" subheading="The rating component pairs well with products allowing you to gather and display customer feedback.">
        <rating6></rating6>
      </demo-card>
      <demo-card heading="Advanced usage" subheading="The v-rating component fits right in with existing components. Build truly complex examples with rich features and beautiful designs.">
        <rating7></rating7>
      </demo-card>
    </layout-wrapper>
  </div>
</template>

<script>
import PageTitle from "../../../Layout/Components/PageTitle2.vue";
import LayoutWrapper from "../../../Layout/Components/LayoutWrapper";
import DemoCard from "../../../Layout/Components/DemoCard";

import rating1 from "../Components/ratings/usage";
import rating2 from "../Components/ratings/usage";
import rating3 from "../Components/ratings/usage";
import rating4 from "../Components/ratings/usage";
import rating5 from "../Components/ratings/usage";
import rating6 from "../Components/ratings/usage";
import rating7 from "../Components/ratings/usage";

export default {
  components: {
    PageTitle,
    "layout-wrapper": LayoutWrapper,
    "demo-card": DemoCard,

    rating1,
    rating2,
    rating3,
    rating4,
    rating5,
    rating6,
    rating7
  },
  data: () => ({
    heading: "Ratings",
    subheading:
      "The rating component is a specialized but crucial piece in building user widgets. Collecting user feedback via ratings is a simple analytic that can provide a lot of feedback to your product or application.",
    icon: "pe-7s-plane icon-gradient bg-tempting-azure"
  }),

  methods: {}
};
</script>
