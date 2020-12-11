<template>
  <div>
    <page-title :heading="heading" :subheading="subheading"></page-title>
    <layout-wrapper>
      <demo-card heading="Basic" subheading="Remember to put the element that activates the menu in the activator slot.">
        <menu1></menu1>
      </demo-card>
      <demo-card heading="Absolute position" subheading="Menus can also be placed absolutely on top of the activator element using the absolute prop. Try clicking anywhere on the image.">
        <menu2></menu2>
      </demo-card>
      <demo-card heading="Absolute position without activator" subheading="Menus can also be used without an activator by using absolute together with the props position-x and position-y. Try right-clicking anywhere on the image.">
        <menu3></menu3>
      </demo-card>
      <demo-card heading="Menu with activator and tooltip" subheading="With the new v-slot syntax, nested activators such as those seen with a v-menu and v-tooltip attached to the same activator button, need a particular setup in order to function correctly.">
        <menu4></menu4>
      </demo-card>
      <demo-card heading="Hover" subheading="Menus can be accessed using hover instead of clicking with the open-on-hover prop.">
        <menu5></menu5>
      </demo-card>
      <demo-card heading="Menus" subheading="Menus can be placed within almost any component.">
        <menu6></menu6>
      </demo-card>
      <demo-card heading="Custom transitions" subheading="Vuetify comes with 3 standard transitions, scale, slide-x and slide-y. You can also create your own and pass it as the transition argument.">
        <menu7></menu7>
      </demo-card>
      <demo-card heading="Popover menu" subheading="A menu can be configured to be static when opened, allowing it to function as a popover. This can be useful when there are multiple interactive items within the menu contents.">
        <menu8></menu8>
      </demo-card>
    </layout-wrapper>
  </div>
</template>

<script>
import PageTitle from "../../../Layout/Components/PageTitle2.vue";
import LayoutWrapper from "../../../Layout/Components/LayoutWrapper";
import DemoCard from "../../../Layout/Components/DemoCard";

import menu1 from "../Components/menus/usage";
import menu2 from "../Components/menus/absolute";
import menu3 from "../Components/menus/absoluteWithoutActivator";
import menu4 from "../Components/menus/menuActivatorTooltip";
import menu5 from "../Components/menus/hover";
import menu6 from "../Components/menus/menus";
import menu7 from "../Components/menus/customTransition";
import menu8 from "../Components/menus/popover";

export default {
  components: {
    PageTitle,
    "layout-wrapper": LayoutWrapper,
    "demo-card": DemoCard,

    menu1,
    menu2,
    menu3,
    menu4,
    menu5,
    menu6,
    menu7,
    menu8
  },
  data: () => ({
    heading: "Menu",
    subheading:
      "The v-menu component shows a menu at the position of the element used to activate it.",
    icon: "pe-7s-plane icon-gradient bg-tempting-azure"
  }),

  methods: {}
};
</script>
