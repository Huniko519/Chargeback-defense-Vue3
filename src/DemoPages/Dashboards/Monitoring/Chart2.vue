<template>
  <div class="mb-3 card">
    <div class="card-header-tab card-header">
      <div class="card-header-title font-size-lg text-capitalize font-weight-normal">Income</div>
      <div class="btn-actions-pane-right text-capitalize actions-icon-btn">
        <button @click="updateChart" class="btn btn-focus">Update</button>
      </div>
    </div>
    <div class="p-0 card-body">
      <apexchart ref="donut" height="380px" type="donut" :options="chartOptions" :series="series"></apexchart>
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
        labels: ["Blue", "Green", "Yellow", "Red"],
        legend: {
          show: false
        }
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
