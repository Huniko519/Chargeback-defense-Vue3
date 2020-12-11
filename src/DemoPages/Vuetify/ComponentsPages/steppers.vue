<template>
  <div>
    <page-title :heading="heading" :subheading="subheading"></page-title>
    <layout-wrapper>
      <demo-card heading="Basic" subheading="A stepper can be used for a multitude of scenarios, including shopping carts, record creation and more.">
        <stepper1></stepper1>
      </demo-card>
      <demo-card heading="Editable steps" subheading="An editable step can be selected by a user at any point and will navigate them to that step.">
        <stepper2></stepper2>
      </demo-card>
      <demo-card heading="Non-editable steps" subheading="Non-editable steps force a user to process linearly through your process.">
        <stepper3></stepper3>
      </demo-card>
      <demo-card heading="Optional steps" subheading="An optional step can be called out with sub-text.">
        <stepper4></stepper4>
      </demo-card>
      <demo-card heading="Horizontal steps" subheading="Horizontal steppers move users along the x-axis through the defined steps.">
        <stepper5></stepper5>
      </demo-card>
      <demo-card heading="Vertical steppers" subheading="Vertical steppers move users along the y-axis and otherwise work exactly the same as their horizontal counterpart.">
        <stepper6></stepper6>
      </demo-card>
      <demo-card heading="Linear steppers" subheading="Linear steppers will always move a user through your defined path.">
        <stepper7></stepper7>
      </demo-card>
      <demo-card heading="Non-linear steppers" subheading="Non-linear steppers allow the user to move through your process in whatever way they choose.">
        <stepper8></stepper8>
      </demo-card>
      <demo-card heading="Alternate labels" subheading="Steppers also have an alternative label style which places the title under the step itself.">
        <stepper9></stepper9>
      </demo-card>
      <demo-card heading="Multi-line error state" subheading="An error state can be displayed to notify the user of some action that must be taken.">
        <stepper10></stepper10>
      </demo-card>
      <demo-card heading="Alternative label multi-line error state" subheading="The error state can also be applied to the alternative label style.">
        <stepper11></stepper11>
      </demo-card>
      <demo-card heading="Vertical multi-line error state" subheading="The same state also applies to Vertical steppers.">
        <stepper12></stepper12>
      </demo-card>
      <demo-card heading="Dynamic steps" subheading="Steppers can have their steps dynamically added or removed. If a currently active step is removed, be sure to account for this by changing the applied model.">
        <stepper13></stepper13>
      </demo-card>
    </layout-wrapper>
  </div>
</template>

<script>
import PageTitle from "../../../Layout/Components/PageTitle2.vue";
import LayoutWrapper from "../../../Layout/Components/LayoutWrapper";
import DemoCard from "../../../Layout/Components/DemoCard";

import stepper1 from "../Components/steppers/usage";
import stepper2 from "../Components/steppers/editable";
import stepper3 from "../Components/steppers/nonEditable";
import stepper4 from "../Components/steppers/optional";
import stepper5 from "../Components/steppers/horizontal";
import stepper6 from "../Components/steppers/vertical";
import stepper7 from "../Components/steppers/linear";
import stepper8 from "../Components/steppers/nonLinear";
import stepper9 from "../Components/steppers/alternateLabels";
import stepper10 from "../Components/steppers/error";
import stepper11 from "../Components/steppers/alternateError";
import stepper12 from "../Components/steppers/verticalError";
import stepper13 from "../Components/steppers/dynamic";

export default {
  components: {
    PageTitle,
    "layout-wrapper": LayoutWrapper,
    "demo-card": DemoCard,

    stepper1,
    stepper2,
    stepper3,
    stepper4,
    stepper5,
    stepper6,
    stepper7,
    stepper8,
    stepper9,
    stepper10,
    stepper11,
    stepper12,
    stepper13
  },
  data: () => ({
    heading: "Stepper",
    subheading:
      "The v-stepper component displays progress through numbered steps.",
    icon: "pe-7s-plane icon-gradient bg-tempting-azure"
  }),

  methods: {}
};
</script>
