<template>
  <div>
    <page-title :heading="heading" :subheading="subheading" :icon="icon"></page-title>
    <tabs :tabs="tabs" :currentTab="currentTab" :wrapper-class="'body-tabs shadow-tabs'"
      :tab-class="'tab-item'" :tab-active-class="'tab-item-active'"
      :line-class="'tab-item-line'" @onClick="handleClick" />
    <div class="content">
      <div v-if="currentTab === 'tab1'">
        <b-card class="main-card mb-3 text-center">
          <b-button class="mr-2 mb-2" @click="showSuccessMsg()" variant="primary">Success</b-button>
          <b-button class="mr-2 mb-2" @click="showInfoMsg()" variant="primary">Info</b-button>
          <b-button class="mr-2 mb-2" @click="showWarnMsg()" variant="primary">Warning</b-button>
          <b-button class="mr-2 mb-2" @click="showErrorMsg()" variant="primary">Error</b-button>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

import PageTitle from "../../Layout/Components/PageTitle.vue";
import Tabs from "vue-tabs-with-active-line";
import VueNotifications from "vue-notifications";
import swal from "sweetalert";

function toast({ title, message, type }) {
  if (type === VueNotifications.types.warn) type = "warning";
  return swal(title, message, type);
}

const options = {
  success: toast,
  error: toast,
  info: toast,
  warn: toast
};

Vue.use(VueNotifications, options);

const TABS = [
  {
    title: "Basic",
    value: "tab1"
  }
];

export default {
  components: {
    PageTitle,
    Tabs
  },
  data: () => ({
    heading: "Notifications",
    subheading:
      "Notifications represent one of the best ways to give feedback for various users actions.",
    icon: "pe-7s-glasses icon-gradient bg-love-kiss",

    tabs: TABS,
    currentTab: "tab1"
  }),
  notifications: {
    showSuccessMsg: {
      type: VueNotifications.types.success, // or just 'success' or any other string
      title: "Hello there",
      message: "That's the success!"
    },
    showInfoMsg: {
      type: VueNotifications.types.info,
      title: "Hey you",
      message: "Here is some info for you"
    },
    showWarnMsg: {
      type: VueNotifications.types.warn,
      title: "Wow, man",
      message: "That's the kind of warning"
    },
    showErrorMsg: {
      type: VueNotifications.types.error,
      title: "Wow-wow",
      message: "That's the error"
    }
  },
  methods: {
    handleClick(newTab) {
      this.currentTab = newTab;
    }
  }
};
</script>
