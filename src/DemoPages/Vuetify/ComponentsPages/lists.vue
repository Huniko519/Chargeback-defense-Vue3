<template>
  <div>
    <page-title :heading="heading" :subheading="subheading"></page-title>
    <layout-wrapper>
      <demo-card heading="Basic" subheading="Lists can take an array of list items. When given an array, the list component will figure out the classes that are needed depending on what it was given. You can also define headers or dividers within the items array.">
        <list1></list1>
      </demo-card>
      <demo-card heading="Avatar with title and action" subheading="Lists also contain slots for a more explicit approach. If you choose this approach, remember you must provide additional props for correct spacing. In this example, we have a tile with an avatar, so we must provide an avatar property.">
        <list2></list2>
      </demo-card>
      <demo-card heading="Icon with 2 lines and action" subheading="Lists can contain subheaders, dividers, and can contain 1 or more lines. The subtitle will overflow with ellipsis if it extends past one line.">
        <list3></list3>
      </demo-card>
      <demo-card heading="Avatar with 3 lines" subheading="For three line lists, the subtitle will clamp vertically at 2 lines and then ellipsis. If you need more than 3 lines, it is advised to use a card.">
        <list4></list4>
      </demo-card>
      <demo-card heading="Avatar with title and action" subheading="When a lists slot is used, you must manually define whether it contains headers, or if the items contain an avatar. This is required to maintain proper spacing.">
        <list5></list5>
      </demo-card>
      <demo-card heading="Subheadings and dividers" subheading="Lists can contain multiple subheaders and dividers.">
        <list6></list6>
      </demo-card>
      <demo-card heading="Card image with toolbar and list" subheading="A list can be combined with a card">
        <list7></list7>
      </demo-card>
      <demo-card heading="Title with sub-title, actions and action-text" subheading="A list can contain a stack within an action. Ripple and router props can be passed through the main v-list, to the v-list-tile or as a property in the items array.">
        <list8></list8>
      </demo-card>
      <demo-card heading="Action with title and sub-title" subheading="A list can contain up to 3 lines.">
        <list9></list9>
      </demo-card>
      <demo-card heading="Expansion Lists" subheading="A list can contain a group of items which will display on click. Expansion lists are also used within the v-navigation-drawer component.">
        <list10></list10>
      </demo-card>
    </layout-wrapper>
  </div>
</template>

<script>
import PageTitle from "../../../Layout/Components/PageTitle2.vue";
import LayoutWrapper from "../../../Layout/Components/LayoutWrapper";
import DemoCard from "../../../Layout/Components/DemoCard";

import list1 from "../Components/lists/usage";
import list2 from "../Components/lists/avatarTitleAndAction";
import list3 from "../Components/lists/iconTwoLinesAndAction";
import list4 from "../Components/lists/avatarThreeLines";
import list5 from "../Components/lists/avatarTitleAndAction";
import list6 from "../Components/lists/subheadingsAndDividers";
import list7 from "../Components/lists/cardList";
import list8 from "../Components/lists/titleSubtitleActionsAndActionText";
import list9 from "../Components/lists/actionWithTitleAndSubtitle";
import list10 from "../Components/lists/expansionLists";

export default {
  components: {
    PageTitle,
    "layout-wrapper": LayoutWrapper,
    "demo-card": DemoCard,

    list1,
    list2,
    list3,
    list4,
    list5,
    list6,
    list7,
    list8,
    list9,
    list10
  },
  data: () => ({
    heading: "List",
    subheading:
      "The v-list component is used to display information. It can contain an avatar, content, actions, subheaders and much more. Lists can contain children and are used in the sidebar.",
    icon: "pe-7s-plane icon-gradient bg-tempting-azure"
  }),

  methods: {}
};
</script>
