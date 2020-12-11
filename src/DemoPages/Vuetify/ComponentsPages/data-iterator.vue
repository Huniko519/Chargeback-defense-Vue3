<template>
  <div>
    <page-title :heading="heading" :subheading="subheading"></page-title>
    <layout-wrapper>
      <demo-card heading="Basic"
        subheading="The v-data-iterator allows you to customize exactly how to display your data. In this example we are using a grid list with cards.">
        <iterator1></iterator1>
      </demo-card>
      <demo-card heading="Slots"
        subheading="The v-data-iterator has both a header and footer slot for adding extra content.">
        <iterator2></iterator2>
      </demo-card>
      <demo-card heading="Expand"
        subheading="v-data-iterator can leverage the power of the expand prop and props.expanded inside the item slot to control the visibility of item data.">
        <iterator3></iterator3>
      </demo-card>
    </layout-wrapper>
  </div>
</template>

<script>
import PageTitle from "../../../Layout/Components/PageTitle2.vue";
import LayoutWrapper from "../../../Layout/Components/LayoutWrapper";
import DemoCard from "../../../Layout/Components/DemoCard";

import iterator1 from "../Components/data-iterator/usage";
import iterator2 from "../Components/data-iterator/slots";
import iterator3 from "../Components/data-iterator/expand";

export default {
  components: {
    PageTitle,
    "layout-wrapper": LayoutWrapper,
    "demo-card": DemoCard,

    iterator1,
    iterator2,
    iterator3
  },
  data: () => ({
    heading: "Data iterator",
    subheading:
      "The v-data-iterator component is used for displaying data, and shares a majority of its functionality with the v-data-table component. Features include sorting, searching, pagination, and selection.",
    icon: "pe-7s-plane icon-gradient bg-tempting-azure"
  }),

  methods: {}
};
</script>
