<template>
  <div>
    <page-title :heading="heading" :subheading="subheading"></page-title>
    <layout-wrapper>
      <demo-card heading="Basic" subheading="Basic radios and checkboxes examples.">
        <selection1></selection1>
      </demo-card>
      <demo-card heading="Checkboxes - Boolean" subheading>
        <selection2></selection2>
      </demo-card>
      <demo-card heading="Checkboxes - Array" subheading>
        <selection3></selection3>
      </demo-card>
      <demo-card heading="Checkboxes - States" subheading>
        <selection4></selection4>
      </demo-card>
      <demo-card heading="Checkboxes - Colors" subheading>
        <selection5></selection5>
      </demo-card>
      <demo-card heading="Checkboxes - Inline with a textfield" subheading>
        <selection6></selection6>
      </demo-card>
      <demo-card heading="Radios - Default" subheading>
        <selection7></selection7>
      </demo-card>
      <demo-card heading="Radios - Direction" subheading>
        <selection8></selection8>
      </demo-card>
      <demo-card heading="Radios - Colors" subheading>
        <selection9></selection9>
      </demo-card>
      <demo-card heading="Switches - Boolean" subheading>
        <selection11></selection11>
      </demo-card>
      <demo-card heading="Switches - Array" subheading>
        <selection12></selection12>
      </demo-card>
      <demo-card heading="Switches - Colors" subheading>
        <selection13></selection13>
      </demo-card>
      <demo-card heading="Label slots" subheading>
        <selection14></selection14>
      </demo-card>
    </layout-wrapper>
  </div>
</template>

<script>
import PageTitle from "../../../Layout/Components/PageTitle2.vue";
import LayoutWrapper from "../../../Layout/Components/LayoutWrapper";
import DemoCard from "../../../Layout/Components/DemoCard";

import selection1 from "../Components/selection-controls/usage";
import selection2 from "../Components/selection-controls/checkboxesBoolean";
import selection3 from "../Components/selection-controls/checkboxesArray";
import selection4 from "../Components/selection-controls/checkboxesStates";
import selection5 from "../Components/selection-controls/checkboxesColors";
import selection6 from "../Components/selection-controls/checkboxesInlineTexfield";
import selection7 from "../Components/selection-controls/radiosDefault";
import selection8 from "../Components/selection-controls/radiosDirection";
import selection9 from "../Components/selection-controls/radiosColors";
import selection11 from "../Components/selection-controls/switchesArray";
import selection12 from "../Components/selection-controls/switchesStates";
import selection13 from "../Components/selection-controls/switchesColors";
import selection14 from "../Components/selection-controls/labelSlot";

export default {
  components: {
    PageTitle,
    "layout-wrapper": LayoutWrapper,
    "demo-card": DemoCard,

    selection1,
    selection2,
    selection3,
    selection4,
    selection5,
    selection6,
    selection7,
    selection8,
    selection9,
    selection11,
    selection12,
    selection13,
    selection14
  },
  data: () => ({
    heading: "Selection controls",
    subheading:
      "Selection control components allow a user to select options. These components must be used with the v-model prop as they do not maintain their own state.",
    icon: "pe-7s-plane icon-gradient bg-tempting-azure"
  }),

  methods: {}
};
</script>
