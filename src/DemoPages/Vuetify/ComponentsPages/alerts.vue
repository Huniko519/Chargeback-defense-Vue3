<template>
  <div>
    <page-title :heading="heading" :subheading="subheading"></page-title>
    <layout-wrapper>
      <demo-card heading="Basic" subheading="Alerts can have a contextual color and are hidden by default.">
        <alert4></alert4>
      </demo-card>
      <demo-card heading="Closable" subheading="Using v-model, you can control the state of the Alert. If you don't want to assign a v-model and just display the alert, you can simply assign the prop value.">
        <alert1></alert1>
      </demo-card>
      <demo-card heading="Icons" subheading="You can easily assign a custom icon or remove it altogether.">
        <alert5></alert5>
      </demo-card>
      <demo-card heading="Display transition" subheading="You can apply a custom transition to the show/hide of the alert.">
        <alert3></alert3>
      </demo-card>
      <demo-card heading="Outline" subheading="Outline alerts inherit their borders from the current color applied.">
        <alert2></alert2>
      </demo-card>
    </layout-wrapper>
  </div>
</template>

<script>
import PageTitle from "../../../Layout/Components/PageTitle2.vue";
import LayoutWrapper from "../../../Layout/Components/LayoutWrapper";
import DemoCard from "../../../Layout/Components/DemoCard";

import alert1 from "../Components/alerts/closable";
import alert2 from "../Components/alerts/outline";
import alert3 from "../Components/alerts/transition";
import alert4 from "../Components/alerts/usage";
import alert5 from "../Components/alerts/icon";

export default {
  components: {
    PageTitle,
    "layout-wrapper": LayoutWrapper,
    "demo-card": DemoCard,
    alert1,
    alert2,
    alert3,
    alert4,
    alert5
  },
  data: () => ({
    heading: "Alerts",
    subheading:
      "This is an example dashboard created using build-in elements and components.",
    icon: "pe-7s-plane icon-gradient bg-tempting-azure"
  }),

  methods: {}
};
</script>
