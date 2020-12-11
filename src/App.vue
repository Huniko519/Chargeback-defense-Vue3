<template>
  <div id="app">
    <component :is="layout">
      <transition name="fade" mode="out-in">
          <router-view></router-view>
      </transition>
    </component>
  </div>
</template>

<script>
const default_layout = "userpages";

export default {
  computed: {
    layout() {
      return (this.$route.meta.layout || default_layout) + "-layout";
    }
  }
};
</script>

<style lang="scss">
@import "~@fullcalendar/core/main.css";
@import "~@fullcalendar/daygrid/main.css";
@import "~@fullcalendar/timegrid/main.css";
@import "assets/base.scss";
</style>
