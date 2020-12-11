<template>
  <div>
    <page-title :heading="heading" :subheading="subheading"></page-title>
    <layout-wrapper>
      <demo-card heading="Basic" subheading="Chips come in 4 primary variations. Regular, with icon, with portrait and closeable.">
        <chips1></chips1>
      </demo-card>
      <demo-card heading="Colored" subheading="Any color from the Material Design palette can be used to change a chips color.">
        <chips2></chips2>
      </demo-card>
      <demo-card heading="Icon" subheading="Chips can use text or any icon available in the Material Icons font library.">
        <chips3></chips3>
      </demo-card>
      <demo-card heading="Outline" subheading="Outlined chips inherit their border color from the current text color.">
        <chips4></chips4>
      </demo-card>
      <demo-card heading="Label" subheading="Label chips use the v-card border-radius.">
        <chips5></chips5>
      </demo-card>
      <demo-card heading="Closable"
        subheading="Closable chips can be controlled with a v-model. Listen to the input event if you want to know when a chip has been closed.">
        <chips6></chips6>
      </demo-card>
      <demo-card heading="In selects" subheading="Selects can use chips to display the selected data. Try adding your own tags below.">
        <chips7></chips7>
      </demo-card>
    </layout-wrapper>
  </div>
</template>

<script>
import PageTitle from "../../../Layout/Components/PageTitle2.vue";
import LayoutWrapper from "../../../Layout/Components/LayoutWrapper";
import DemoCard from "../../../Layout/Components/DemoCard";

import chips1 from "../Components/chips/usage";
import chips2 from "../Components/chips/colored";
import chips3 from "../Components/chips/icon";
import chips4 from "../Components/chips/outline";
import chips5 from "../Components/chips/label";
import chips6 from "../Components/chips/closable";
import chips7 from "../Components/chips/inSelects";

export default {
  components: {
    PageTitle,
    "layout-wrapper": LayoutWrapper,
    "demo-card": DemoCard,

    chips1,
    chips2,
    chips3,
    chips4,
    chips5,
    chips6,
    chips7
  },
  data: () => ({
    heading: "Chip",
    subheading:
      "The v-chip component is used to convey small pieces of information. Using the close property, the chip becomes interactive, allowing user interaction.",
    icon: "pe-7s-plane icon-gradient bg-tempting-azure"
  }),

  methods: {}
};
</script>
