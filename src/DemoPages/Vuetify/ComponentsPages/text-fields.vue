<template>
  <div>
    <page-title :heading="heading" :subheading="subheading"></page-title>
    <layout-wrapper>
      <demo-card heading="Basic" subheading="A simple text field with placeholder and/or label.">
        <textfield1></textfield1>
      </demo-card>
      <demo-card heading="Single line" subheading="Single line text fields do not float their label on focus or with data.">
        <textfield2></textfield2>
      </demo-card>
      <demo-card heading="Disabled and readonly" subheading="Text fields can be disabled or readonly.">
        <textfield3></textfield3>
      </demo-card>
      <demo-card heading="Icons" subheading="You can add icons to the text field with prepend-icon, append-icon and append-outer-icon props.">
        <textfield4></textfield4>
      </demo-card>
      <demo-card heading="Clearable" subheading="When clearable, you can customize the clear icon with clear-icon.">
        <textfield5></textfield5>
      </demo-card>
      <demo-card heading="Icon events" subheading="click:prepend, click:append, click:append-outer, and click:clear will be emitted when you click on the respective icon. Note that these events will not be fired if the slot is used instead.">
        <textfield6></textfield6>
      </demo-card>
      <demo-card heading="Icon slots" subheading="Instead of using prepend / append / append-outer icons you can use slots to extend input's functionality.">
        <textfield7></textfield7>
      </demo-card>
      <demo-card heading="Label slot" subheading="Text field label can be defined in label slot - that will allow to use HTML content">
        <textfield8></textfield8>
      </demo-card>
      <demo-card heading="Character counter" subheading="Use a counter prop to inform a user of the character limit. The counter does not perform any validation by itself. You will need to pair it with either the internal validation system, or a 3rd party library. You can use it on regular, box or outline text fields.">
        <textfield9></textfield9>
      </demo-card>
      <demo-card heading="Password input" subheading="A password input can be used with an appended icon and callback to control the visibility.">
        <textfield10></textfield10>
      </demo-card>
      <demo-card heading="Validation" subheading="Vuetify includes simple validation through the rules prop. The prop accepts an array of callbacks. While validating rules, the current v-model value will be passed to the callback. This callback should return either true or a String, the error message.">
        <textfield11></textfield11>
      </demo-card>
      <demo-card heading="Full-width text field with character counter" subheading="Full width text fields allow you to create boundless inputs. In this example, we use a v-divider to separate the fields.">
        <textfield12></textfield12>
      </demo-card>
      <demo-card heading="Hint text" subheading="The hint property on text fields adds the provided string beneath the text field. Using persistent-hint keeps the hint visible when the text field is not focused. Hint prop is not supported in solo mode.">
        <textfield13></textfield13>
      </demo-card>
      <demo-card heading="Prefixes & suffixes" subheading="The prefix and suffix properties allows you to prepend and append inline non-modifiable text next to the text field.">
        <textfield14></textfield14>
      </demo-card>
      <demo-card heading="Custom validation" subheading="While the built in v-form or 3rd party plugin such as vuelidate or vee-validation can help streamline your validation process, you can choose to simply control it yourself.">
        <textfield15></textfield15>
      </demo-card>
      <demo-card heading="Box style" subheading="Text fields can be used with an alternative box design. Append and prepend icon props are not supported in this mode.">
        <textfield16></textfield16>
      </demo-card>
      <demo-card heading="Solo style" subheading="Text fields can be used with an alternative solo design.">
        <textfield17></textfield17>
      </demo-card>
      <demo-card heading="Outline style" subheading="Text fields can be used with an alternative outline design.">
        <textfield18></textfield18>
      </demo-card>
      <demo-card heading="Progress bar" subheading="You can display a progress bar instead of the bottom line. You can use the default indeterminate progress having same color as the text field or designate a custom one using the progress slot">
        <textfield19></textfield19>
      </demo-card>
    </layout-wrapper>
  </div>
</template>

<script>
import PageTitle from "../../../Layout/Components/PageTitle2.vue";
import LayoutWrapper from "../../../Layout/Components/LayoutWrapper";
import DemoCard from "../../../Layout/Components/DemoCard";

import textfield1 from "../Components/text-fields/usage";
import textfield2 from "../Components/text-fields/singleLine";
import textfield3 from "../Components/text-fields/disabledAndReadonly";
import textfield4 from "../Components/text-fields/icon";
import textfield5 from "../Components/text-fields/clearable";
import textfield6 from "../Components/text-fields/iconEvents";
import textfield7 from "../Components/text-fields/iconSlots";
import textfield8 from "../Components/text-fields/labelSlot";
import textfield9 from "../Components/text-fields/characterCounter";
import textfield10 from "../Components/text-fields/password";
import textfield11 from "../Components/text-fields/validation";
import textfield12 from "../Components/text-fields/fullWidthWithCharacterCounter";
import textfield13 from "../Components/text-fields/hint";
import textfield14 from "../Components/text-fields/prefixesAndSuffixes";
import textfield15 from "../Components/text-fields/customValidation";
import textfield16 from "../Components/text-fields/box";
import textfield17 from "../Components/text-fields/solo";
import textfield18 from "../Components/text-fields/outline";
import textfield19 from "../Components/text-fields/customColors";

export default {
  components: {
    PageTitle,
    "layout-wrapper": LayoutWrapper,
    "demo-card": DemoCard,

    textfield1,
    textfield2,
    textfield3,
    textfield4,
    textfield5,
    textfield6,
    textfield7,
    textfield8,
    textfield9,
    textfield10,
    textfield11,
    textfield12,
    textfield13,
    textfield14,
    textfield15,
    textfield16,
    textfield17,
    textfield18,
    textfield19
  },
  data: () => ({
    heading: "Text field",
    subheading:
      "Text fields components are used for collecting user provided information.",
    icon: "pe-7s-plane icon-gradient bg-tempting-azure"
  }),

  methods: {}
};
</script>
