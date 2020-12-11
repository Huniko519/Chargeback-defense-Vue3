<template>
  <div>
    <page-title :heading="heading" :subheading="subheading"></page-title>
    <layout-wrapper>
      <demo-card heading="Basic" subheading="A dialog contains two slots, one for its activator and one for its content (default). Good for Privacy Policies.">
        <dialogs1></dialogs1>
      </demo-card>
      <demo-card heading="Without activator" subheading="If for some reason you are unable to use the activator slot, be sure to add the .stop modifier to the event that triggers the dialog.">
        <dialogs2></dialogs2>
      </demo-card>
      <demo-card heading="Modal" subheading="Similar to a Simple Dialog, except that it's not dismissed when touching outside.">
        <dialogs3></dialogs3>
      </demo-card>
      <demo-card heading="Fullscreen" subheading="Due to limited space, full-screen dialogs may be more appropriate for mobile devices than dialogs used on devices with larger screens.">
        <dialogs4></dialogs4>
      </demo-card>
      <demo-card heading="Form" subheading="Just a simple example of a form in a dialog.">
        <dialogs5></dialogs5>
      </demo-card>
      <demo-card heading="Scrollable" subheading="Example of a dialog with scrollable content.">
        <dialogs6></dialogs6>
      </demo-card>
      <demo-card heading="Overflowed" subheading="Modals that do not fit within the available window space will scroll the container.">
        <dialogs7></dialogs7>
      </demo-card>
      <demo-card heading="Simple dialogs" subheading="Choosing an option immediately closes the menu. Touching outside of the dialog, or pressing Back, cancels the action and closes the dialog.">
        <dialogs8></dialogs8>
      </demo-card>
      <demo-card heading="Loader" subheading="The v-dialog component makes it easy to create a customized loading experience for your application.">
        <dialogs9></dialogs9>
      </demo-card>
    </layout-wrapper>
  </div>
</template>

<script>
import PageTitle from "../../../Layout/Components/PageTitle2.vue";
import LayoutWrapper from "../../../Layout/Components/LayoutWrapper";
import DemoCard from "../../../Layout/Components/DemoCard";

import dialogs1 from "../Components/dialogs/usage";
import dialogs2 from "../Components/dialogs/withoutActivator";
import dialogs3 from "../Components/dialogs/modal";
import dialogs4 from "../Components/dialogs/fullscreen";
import dialogs5 from "../Components/dialogs/form";
import dialogs6 from "../Components/dialogs/scrollable";
import dialogs7 from "../Components/dialogs/overflowed";
import dialogs8 from "../Components/dialogs/advanced";
import dialogs9 from "../Components/dialogs/loader";

export default {
  components: {
    PageTitle,
    "layout-wrapper": LayoutWrapper,
    "demo-card": DemoCard,

    dialogs1,
    dialogs2,
    dialogs3,
    dialogs4,
    dialogs5,
    dialogs6,
    dialogs7,
    dialogs8,
    dialogs9
  },
  data: () => ({
    heading: "Dialog",
    subheading:
      "The v-dialog component inform users about a specific task and may contain critical information, require decisions, or involve multiple tasks. Use dialogs sparingly because they are interruptive.",
    icon: "pe-7s-plane icon-gradient bg-tempting-azure"
  }),

  methods: {}
};
</script>
