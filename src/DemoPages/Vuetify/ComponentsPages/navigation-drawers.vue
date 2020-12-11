<template>
  <div>
    <page-title :heading="heading" :subheading="subheading"></page-title>
    <layout-wrapper>
      <demo-card heading="Basic" subheading="The navigation drawer is primarily used to house links to the pages in your application. Using null as the starting value for its v-model will initialize the drawer as closed on mobile and as open on desktop.">
        <navdrawer1></navdrawer1>
      </demo-card>
      <demo-card heading="Colored drawer" subheading="Navigation drawers can be customized to fit any application's design. While any component can be used within a drawer, the primary ones you will use are v-list, all of the list children components and v-divider">
        <navdrawer2></navdrawer2>
      </demo-card>
      <demo-card heading="Permanent floating drawer" subheading="A navigation drawer can be placed inside of a card and float over the content background.">
        <navdrawer3></navdrawer3>
      </demo-card>
      <demo-card heading="Avatars" subheading="Since drawers support the v-list component, you can easily create customized dashboard solutions.">
        <navdrawer4></navdrawer4>
      </demo-card>
      <demo-card heading="Mini" subheading="The navigation drawer also has a mini-variant which can be controlled using the prop mini-variant.sync.">
        <navdrawer5></navdrawer5>
      </demo-card>
      <demo-card heading="Temporary" subheading="A temporary drawer sits above its application and uses a scrim (overlay) to darken the background. This drawer behavior is mimicked on the persistent drawer when on mobile. Clicking outside of the drawer will cause it to close.">
        <navdrawer6></navdrawer6>
      </demo-card>
      <demo-card heading="Dark theme" subheading="Vuetify also supports the dark application theme. This will not override components that have default themes so in some cases it will be necessary to manually set the dark theme accents.">
        <navdrawer7></navdrawer7>
      </demo-card>
      <demo-card heading="Combined drawers" subheading="Drawers are flexible and are easily adapted to any use-case.">
        <navdrawer8></navdrawer8>
      </demo-card>
      <demo-card heading="Nested lists" subheading="List tiles can be nested a second level for even more options for your navigation">
        <navdrawer9></navdrawer9>
      </demo-card>
    </layout-wrapper>
  </div>
</template>

<script>
import PageTitle from "../../../Layout/Components/PageTitle2.vue";
import LayoutWrapper from "../../../Layout/Components/LayoutWrapper";
import DemoCard from "../../../Layout/Components/DemoCard";

import navdrawer1 from "../Components/navigation-drawers/usage";
import navdrawer2 from "../Components/navigation-drawers/permanentClipped";
import navdrawer3 from "../Components/navigation-drawers/permanentFloating";
import navdrawer4 from "../Components/navigation-drawers/persistent";
import navdrawer5 from "../Components/navigation-drawers/mini";
import navdrawer6 from "../Components/navigation-drawers/temporary";
import navdrawer7 from "../Components/navigation-drawers/dark";
import navdrawer8 from "../Components/navigation-drawers/combined";
import navdrawer9 from "../Components/navigation-drawers/nested";

export default {
  components: {
    PageTitle,
    "layout-wrapper": LayoutWrapper,
    "demo-card": DemoCard,

    navdrawer1,
    navdrawer2,
    navdrawer3,
    navdrawer4,
    navdrawer5,
    navdrawer6,
    navdrawer7,
    navdrawer8,
    navdrawer9
  },
  data: () => ({
    heading: "Navigation drawer",
    subheading:
      "The v-navigation-drawer component is what your users will utilize to navigate through the application. The navigation-drawer is pre-configured to work with or without vue-router right out the box.",
    icon: "pe-7s-plane icon-gradient bg-tempting-azure"
  }),

  methods: {}
};
</script>
