<template>
  <div class="example">
    <apexchart ref="donut" width="350" type="donut" :options="chartOptions" :series="series"></apexchart>
    <div class="text-center">
      <button @click="updateChart" class="btn btn-primary">Update!</button>
    </div>
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";

export default {
  name: "DonutExample",
  components: {
    apexchart: VueApexCharts
  },
  data: function() {
    return {
      chartOptions: {
        labels: ["Blue", "Green", "Yellow", "Red"]
      },
      series: [11, 32, 45, 32]
    };
  },
  methods: {
    updateChart() {
      const max = 90;
      const min = 20;
      const newData = this.series.map(() => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      });

      this.series = newData;
    }
  }
};
</script>
