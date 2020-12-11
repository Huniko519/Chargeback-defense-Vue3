<template>
  <div class="text-xs-center">
    <v-badge left color="purple">
      <template v-slot:badge>
        <v-icon dark small>mdi-adjust</v-icon>
      </template>
      <span>MDI icon</span>
    </v-badge>
    &nbsp;&nbsp;
    <v-badge color="orange">
      <template v-slot:badge>
        <v-icon dark small>mdi-adjust</v-icon>
      </template>
      <span>MDI icon 2</span>
    </v-badge>
  </div>
</template>
