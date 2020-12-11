<template>
  <div>
    <page-title :heading="heading" :subheading="subheading"></page-title>
    <layout-wrapper>
      <demo-card heading="Basic" subheading="The autocomplete component extends v-select and adds the ability to filter items.">
        <autocomplete1></autocomplete1>
      </demo-card>
      <demo-card heading="Searching an API" subheading="Easily hook up dynamic data and create a unique experience. The v-autocomplete's expansive prop list makes it easy to fine tune every aspect of the input.">
        <autocomplete2></autocomplete2>
      </demo-card>
      <demo-card heading="Scoped slots" subheading="With the power of scoped slots, you can customize the visual output of the select. In this example we add a profile picture for both the chips and list items.">
        <autocomplete3></autocomplete3>
      </demo-card>
      <demo-card heading="Custom filter on autocomplete" subheading="The filter prop can be used to filter each individual item with custom logic. In this example we filter items by name.">
        <autocomplete4></autocomplete4>
      </demo-card>
      <demo-card heading="Asynchronous items" subheading="Sometimes you need to load data externally based upon a search query. Use the search-input prop with the .sync modifier when using the autocomplete prop.">
        <autocomplete5></autocomplete5>
      </demo-card>
      <demo-card heading="Advanced slots" subheading="The v-autocomplete component is extremely flexible and can fit in just about any use-case. Create custom displays for no-data, item and selection slots to provide a unique user experience.">
        <autocomplete6></autocomplete6>
      </demo-card>
    </layout-wrapper>
  </div>
</template>

<script>
import PageTitle from "../../../Layout/Components/PageTitle2.vue";
import LayoutWrapper from "../../../Layout/Components/LayoutWrapper";
import DemoCard from "../../../Layout/Components/DemoCard";

import autocomplete1 from "../Components/autocompletes/usage";
import autocomplete2 from "../Components/autocompletes/api";
import autocomplete3 from "../Components/autocompletes/scopedSlots";
import autocomplete4 from "../Components/autocompletes/customFilter";
import autocomplete5 from "../Components/autocompletes/asynchronous";
import autocomplete6 from "../Components/autocompletes/advanced";

export default {
  components: {
    PageTitle,
    "layout-wrapper": LayoutWrapper,
    "demo-card": DemoCard,

    autocomplete1,
    autocomplete2,
    autocomplete3,
    autocomplete4,
    autocomplete5,
    autocomplete6
  },
  data: () => ({
    heading: "Autocomplete",
    subheading:
      "The v-autocomplete component offers simple and flexible type-ahead functionality. This is useful when searching large sets of data or even dynamically requesting information from an API.",
    icon: "pe-7s-plane icon-gradient bg-tempting-azure"
  }),

  methods: {}
};
</script>
