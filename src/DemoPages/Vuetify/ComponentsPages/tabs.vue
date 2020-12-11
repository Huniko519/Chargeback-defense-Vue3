<template>
  <div>
    <page-title :heading="heading" :subheading="subheading"></page-title>
    <layout-wrapper>
      <demo-card heading="Basic" subheading="Basic material design tabs examples.">
        <tabs1></tabs1>
      </demo-card>
      <demo-card heading="Fixed tabs" subheading="The fixed-tabs prop sets a higher minimum width and applies a new maximum width to v-tabs-items. On desktop screens, the tab items will be centered within the v-tabs component and switch to evenly fill on mobile.">
        <tabs2></tabs2>
      </demo-card>
      <demo-card heading="Right aligned tabs" subheading="The right prop aligns the tabs to the right">
        <tabs3></tabs3>
      </demo-card>
      <demo-card heading="Content" subheading="Tabs are not the only thing you can put inside the v-tabs component. In this example we've also added a toolbar.">
        <tabs4></tabs4>
      </demo-card>
      <demo-card heading="With search" subheading="Here is another example of additional content inside the v-tabs component.">
        <tabs5></tabs5>
      </demo-card>
      <demo-card heading="Icons and text" subheading="By using the icons-and-text prop you can add icons to each tab item.">
        <tabs6></tabs6>
      </demo-card>
      <demo-card heading="Desktop tabs" subheading="Basic examples of tabs with desktop style.">
        <tabs7></tabs7>
      </demo-card>
      <demo-card heading="Align tabs with toolbar title" subheading="Make v-tabs lined up with the v-toolbar-title component (v-toolbar-side-icon or v-btn must be used in v-toolbar). May not work if the tab text is wrapped.">
        <tabs8></tabs8>
      </demo-card>
      <demo-card heading="Grow" subheading="The grow prop will make the tab items take up all available space.">
        <tabs9></tabs9>
      </demo-card>
      <demo-card heading="With menu" subheading="You can use a menu to hold additional tabs, swapping them out on the fly">
        <tabs10></tabs10>
      </demo-card>
      <demo-card heading="Pagination" subheading="If the tab items overflow their container, pagination controls will appear.">
        <tabs11></tabs11>
      </demo-card>
      <demo-card heading="Custom icons" subheading="prev-icon and next-icon can be used for applying custom pagination icons.">
        <tabs12></tabs12>
      </demo-card>
    </layout-wrapper>
  </div>
</template>

<script>
import PageTitle from "../../../Layout/Components/PageTitle2.vue";
import LayoutWrapper from "../../../Layout/Components/LayoutWrapper";
import DemoCard from "../../../Layout/Components/DemoCard";

import tabs1 from "../Components/tabs/usage";
import tabs2 from "../Components/tabs/fixedTabs";
import tabs3 from "../Components/tabs/right";
import tabs4 from "../Components/tabs/content";
import tabs5 from "../Components/tabs/search";
import tabs6 from "../Components/tabs/iconsAndText";
import tabs7 from "../Components/tabs/desktop";
import tabs8 from "../Components/tabs/alignWithTitle";
import tabs9 from "../Components/tabs/grow";
import tabs10 from "../Components/tabs/overflowToMenu";
import tabs11 from "../Components/tabs/pagination";
import tabs12 from "../Components/tabs/icons";

export default {
  components: {
    PageTitle,
    "layout-wrapper": LayoutWrapper,
    "demo-card": DemoCard,

    tabs1,
    tabs2,
    tabs3,
    tabs4,
    tabs5,
    tabs6,
    tabs7,
    tabs8,
    tabs9,
    tabs10,
    tabs11,
    tabs12
  },
  data: () => ({
    heading: "Tab",
    subheading:
      "The v-tabs component is used for hiding content behind a selectable item. This can also be used as a pseudo-navigation for a page, where the tabs are links and the tab-items are the content.",
    icon: "pe-7s-plane icon-gradient bg-tempting-azure"
  }),

  methods: {}
};
</script>
