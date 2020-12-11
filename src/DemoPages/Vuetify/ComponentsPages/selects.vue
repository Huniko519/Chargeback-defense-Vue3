<template>
  <div>
    <page-title :heading="heading" :subheading="subheading"></page-title>
    <layout-wrapper>
      <demo-card heading="Basic" subheading="Basic form select examples below.">
        <select1></select1>
      </demo-card>
      <demo-card heading="Light theme" subheading="A standard single select has a multitude of configuration options.">
        <select2></select2>
      </demo-card>
      <demo-card heading="Icons" subheading="Use a custom prepended or appended icon.">
        <select3></select3>
      </demo-card>
      <demo-card heading="Multiple" subheading="A multi-select can utilize v-chip as the display for selected items.">
        <select4></select4>
      </demo-card>
      <demo-card heading="Customized item text and value" subheading="You can specify the specific properties within your items array correspond to the text and value fields. By default, this is text and value.">
        <select5></select5>
      </demo-card>
      <demo-card heading="Prepend/Append item slots" subheading="The v-select components can be optionally expanded with prepended and appended items. This is perfect for customized select-all functionality.">
        <select6></select6>
      </demo-card>
      <demo-card heading="Change selection appearance" subheading="The selection scoped slot can be used to customize the way selected values are shown in the input.">
        <select7></select7>
      </demo-card>
    </layout-wrapper>
  </div>
</template>

<script>
import PageTitle from "../../../Layout/Components/PageTitle2.vue";
import LayoutWrapper from "../../../Layout/Components/LayoutWrapper";
import DemoCard from "../../../Layout/Components/DemoCard";

import select1 from "../Components/selects/usage";
import select2 from "../Components/selects/light";
import select3 from "../Components/selects/icons";
import select4 from "../Components/selects/multiple";
import select5 from "../Components/selects/customTextAndValue";
import select6 from "../Components/selects/slots";
import select7 from "../Components/selects/selectionAppearance";

export default {
  components: {
    PageTitle,
    "layout-wrapper": LayoutWrapper,
    "demo-card": DemoCard,

    select1,
    select2,
    select3,
    select4,
    select5,
    select6,
    select7
  },
  data: () => ({
    heading: "Select",
    subheading:
      "Select fields components are used for collecting user provided information from a list of options.",
    icon: "pe-7s-plane icon-gradient bg-tempting-azure"
  }),

  methods: {}
};
</script>
