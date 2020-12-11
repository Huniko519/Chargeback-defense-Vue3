<template>
  <div>
    <page-title :heading="heading" :subheading="subheading"></page-title>
    <layout-wrapper>
      <demo-card heading="Basic" subheading="The internal v-form component makes it easy to add validation to form inputs. All input components have a rules prop which takes an array of functions.">
        <forms1></forms1>
      </demo-card>
      <demo-card heading="Creating rules" subheading="Rules allow you to apply custom validation on all form components. These are validated sequentially and will display a maximum of 1 error at a time, so make sure you order your rules accordingly.">
        <forms2></forms2>
      </demo-card>
      <demo-card heading="Validation with submit & clear" subheading="The v-form component has three functions that can be accessed by setting a ref on the component. A ref allows us to access internal methods on a component.">
        <forms3></forms3>
      </demo-card>
      <demo-card heading="Vuelidate" subheading="vuelidate is a simple, lightweight model-based validation for Vue.js">
        <forms4></forms4>
      </demo-card>
      <demo-card heading="Vee-validate" subheading="vee-validate is a template Based Validation Framework for Vue.js.">
        <forms5></forms5>
      </demo-card>
    </layout-wrapper>
  </div>
</template>

<script>
import PageTitle from "../../../Layout/Components/PageTitle2.vue";
import LayoutWrapper from "../../../Layout/Components/LayoutWrapper";
import DemoCard from "../../../Layout/Components/DemoCard";

import forms1 from "../Components/forms/usage";
import forms2 from "../Components/forms/rules";
import forms3 from "../Components/forms/validationWithSubmitAndClear";
import forms4 from "../Components/forms/vuelidate";
import forms5 from "../Components/forms/veeValidate";

export default {
  components: {
    PageTitle,
    "layout-wrapper": LayoutWrapper,
    "demo-card": DemoCard,

    forms1,
    forms2,
    forms3,
    forms4,
    forms5
  },
  data: () => ({
    heading: "Form",
    subheading:
      "When it comes to form validation, Vuetify has a multitude of integrations and baked in functionality. Want to use a 3rd party validation plugin? Out of the box you can use Vee-validate and vuelidate.",
    icon: "pe-7s-plane icon-gradient bg-tempting-azure"
  }),

  methods: {}
};
</script>
