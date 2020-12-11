<template>
  <div>
    <page-title :heading="heading" :subheading="subheading"></page-title>
    <layout-wrapper>
      <demo-card heading="Basic" subheading="The standard snackbar is useful for calling attention to some function that has just happened.">
        <snack1></snack1>
      </demo-card>
      <demo-card heading="Contextual" subheading="You can also apply a color to the snackbar to better fit your implementation.">
        <snack2></snack2>
      </demo-card>
    </layout-wrapper>
  </div>
</template>

<script>
import PageTitle from "../../../Layout/Components/PageTitle2.vue";
import LayoutWrapper from "../../../Layout/Components/LayoutWrapper";
import DemoCard from "../../../Layout/Components/DemoCard";

import snack1 from "../Components/snackbars/usage";
import snack2 from "../Components/snackbars/contextual";

export default {
  components: {
    PageTitle,
    "layout-wrapper": LayoutWrapper,
    "demo-card": DemoCard,

    snack1,
    snack2
  },
  data: () => ({
    heading: "Snackbar",
    subheading:
      "The v-snackbar component is used to display a quick message to a user. Snackbars support positioning, removal delay and callbacks.",
    icon: "pe-7s-plane icon-gradient bg-tempting-azure"
  }),

  methods: {}
};
</script>
