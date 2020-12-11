<template>
  <div>
    <page-title :heading="heading" :subheading="subheading"></page-title>
    <layout-wrapper>
      <demo-card heading="Basic" subheading="Basic ripple functionality can be enabled just by using v-ripple directive on a component or an HTML element">
        <ripple1></ripple1>
      </demo-card>
      <demo-card heading="Custom color" subheading="Using a helper class, you can change the color of the ripple.">
        <ripple2></ripple2>
      </demo-card>
      <demo-card heading="Centered ripple" subheading="When a center option is used ripple will always originate from the center of the target.">
        <ripple3></ripple3>
      </demo-card>
      <demo-card heading="Ripple in components" subheading="Some components provide the ripple prop that allows you to controll the ripple effect. You can turn it off or customize the behaviour by using class or center options.">
        <ripple4></ripple4>
      </demo-card>
    </layout-wrapper>
  </div>
</template>

<script>
import PageTitle from "../../../Layout/Components/PageTitle2.vue";
import LayoutWrapper from "../../../Layout/Components/LayoutWrapper";
import DemoCard from "../../../Layout/Components/DemoCard";

import ripple1 from "../Components/ripples/usage";
import ripple2 from "../Components/ripples/customColor";
import ripple3 from "../Components/ripples/center";
import ripple4 from "../Components/ripples/rippleInComponents";

export default {
  components: {
    PageTitle,
    "layout-wrapper": LayoutWrapper,
    "demo-card": DemoCard,

    ripple1,
    ripple2,
    ripple3,
    ripple4
  },
  data: () => ({
    heading: "Ripples",
    subheading:
      "The v-ripple directive is used to show action from a user. It can be applied to any block level element.",
    icon: "pe-7s-plane icon-gradient bg-tempting-azure"
  }),

  methods: {}
};
</script>
