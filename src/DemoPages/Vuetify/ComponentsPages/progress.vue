<template>
  <div>
    <page-title :heading="heading" :subheading="subheading"></page-title>
    <layout-wrapper>
      <demo-card heading="Basic" subheading="By default, progress circular uses the applications secondary color.">
        <progress1></progress1>
      </demo-card>
      <demo-card heading="Colored" subheading="Alternate colors can be applied.">
        <progress2></progress2>
      </demo-card>
      <demo-card heading="Indeterminate" subheading="An indeterminate progress circular animates forever.">
        <progress3></progress3>
      </demo-card>
      <demo-card heading="Size & Width" subheading="The progress circular component can have an altered width and size.">
        <progress4></progress4>
      </demo-card>
      <demo-card heading="Rotate" subheading="The progress origin can be rotated.">
        <progress5></progress5>
      </demo-card>
      <demo-card heading="Determinate" subheading="The progress linear component can have a determinate state modified by v-model.">
        <progress6></progress6>
      </demo-card>
      <demo-card heading="Indeterminate" subheading="Just as with the progress circular component, progress linear has an indeterminate state.">
        <progress7></progress7>
      </demo-card>
      <demo-card heading="Buffer" subheading="A buffer state represents two values simultaneously. The primary value is controled by the model, whereas the buffer is controlled by the buffer-value prop.">
        <progress8></progress8>
      </demo-card>
      <demo-card heading="Query Indeterminate and Determinate" subheading="To query state is controlled by the truthiness of indeterminate with the query prop set to true.">
        <progress9></progress9>
      </demo-card>
      <demo-card heading="Custom height and contextual colors" subheading="A custom height or contextual color can be applied to a progress bar. The bars primary color is your applications primary color.">
        <progress10></progress10>
      </demo-card>
      <demo-card heading="Custom colors" subheading="You can also set the color using the props color and background-color.">
        <progress11></progress11>
      </demo-card>
    </layout-wrapper>
  </div>
</template>

<script>
import PageTitle from "../../../Layout/Components/PageTitle2.vue";
import LayoutWrapper from "../../../Layout/Components/LayoutWrapper";
import DemoCard from "../../../Layout/Components/DemoCard";

import progress1 from "../Components/progress/usage";
import progress2 from "../Components/progress/circularColored";
import progress3 from "../Components/progress/circularIndeterminate";
import progress4 from "../Components/progress/circularSizeAndWidth";
import progress5 from "../Components/progress/circularRotate";
import progress6 from "../Components/progress/linearDeterminate";
import progress7 from "../Components/progress/linearIndeterminate";
import progress8 from "../Components/progress/linearBuffer";
import progress9 from "../Components/progress/linearQueryIndeterminateAndDeterminate";
import progress10 from "../Components/progress/linearCustomHeightAndContextualColors";
import progress11 from "../Components/progress/linearCustomColors";

export default {
  components: {
    PageTitle,
    "layout-wrapper": LayoutWrapper,
    "demo-card": DemoCard,

    progress1,
    progress2,
    progress3,
    progress4,
    progress5,
    progress6,
    progress7,
    progress8,
    progress9,
    progress10,
    progress11
  },
  data: () => ({
    heading: "Progress",
    subheading:
      "The v-progress-circular and v-progress-linear components are used to convey data visually to users. They can also represent an indeterminate amount, such as loading or processing. The circular progress component contains a slot that is centered within the circle.",
    icon: "pe-7s-plane icon-gradient bg-tempting-azure"
  }),

  methods: {}
};
</script>
