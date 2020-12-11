<template>
  <div>
    <page-title :heading="heading" :subheading="subheading"></page-title>
    <layout-wrapper>
      <demo-card heading="Basic" subheading="A basic example of a treeview material design component.">
        <treeview1></treeview1>
      </demo-card>
      <demo-card heading="Searching a directory" subheading="Easily filter your treeview by using the search prop. You can easily apply your custom filtering function if you need case-sensitive or fuzzy filtering by setting the filter prop.">
        <treeview2></treeview2>
      </demo-card>
      <demo-card heading="Scoped slots" subheading="Using scoped slots we are able to create an intuitive file explorer. Apart from the prepend slot, there is also one for the label, and an append slot.">
        <treeview3></treeview3>
      </demo-card>
      <demo-card heading="Async items" subheading="You can dynamically load child data by supplying a Promise callback to the load-children prop. This callback will be executed the first time a user tries to expand an item that has a children property that is an empty array.">
        <treeview4></treeview4>
      </demo-card>
      <demo-card heading="Custom selectable icons" subheading="Customize the on, off and indeterminate icons for your selectable tree. Combine with other advanced functionality like API loaded items.">
        <treeview5></treeview5>
      </demo-card>
    </layout-wrapper>
  </div>
</template>

<script>
import PageTitle from "../../../Layout/Components/PageTitle2.vue";
import LayoutWrapper from "../../../Layout/Components/LayoutWrapper";
import DemoCard from "../../../Layout/Components/DemoCard";

import treeview1 from "../Components/treeview/usage";
import treeview2 from "../Components/treeview/humanResources";
import treeview3 from "../Components/treeview/fileExplorer";
import treeview4 from "../Components/treeview/directory";
import treeview5 from "../Components/treeview/hotspots";

export default {
  components: {
    PageTitle,
    "layout-wrapper": LayoutWrapper,
    "demo-card": DemoCard,

    treeview1,
    treeview2,
    treeview3,
    treeview4,
    treeview5
  },
  data: () => ({
    heading: "Treeview",
    subheading:
      "The v-treeview component is useful for displaying large amounts of nested data.",
    icon: "pe-7s-plane icon-gradient bg-tempting-azure"
  }),

  methods: {}
};
</script>
