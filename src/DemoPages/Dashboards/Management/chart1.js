//Importing Line class from the vue-chartjs wrapper
import { Line } from 'vue-chartjs'

//Exporting this so it can be used in other components
export default {
    extends: Line,
    data() {
        return {

            datacollection: {
                //Data to be represented on x-axis
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',],
                datasets: [
                    {
                        label: 'My First dataset',
                        fill: true,
                        lineTension: 0.5,
                        backgroundColor: 'rgba(58, 196, 125, 0.2)',
                        borderColor: '#3ac47d',
                        borderCapStyle: 'round',
                        borderDash: [],
                        borderWidth: 4,
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'round',
                        pointBorderColor: '#3ac47d',
                        pointBackgroundColor: '#ffffff',
                        pointBorderWidth: 0,
                        pointHoverRadius: 0,
                        pointHoverBackgroundColor: '#ffffff',
                        pointHoverBorderColor: '#3ac47d',
                        pointHoverBorderWidth: 0,
                        pointRadius: 0,
                        pointHitRadius: 0,
                        data: [65, 59, 80, 81, 46, 55, 38, 59, 80,]
                    }
                ]
            },
            //Chart.js options that controls the appearance of the chart
            options: {
                layout: {
                    padding: {
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0
                    }
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            display: false,
                            beginAtZero: true
                        },
                        gridLines: {
                            display: false
                        }
                    }],
                    xAxes: [{
                        ticks: {
                            display: false
                        },
                        gridLines: {
                            display: false
                        }
                    }]
                },
                legend: {
                    display: false
                },
                responsive: true,
                maintainAspectRatio: false
            }
        }
    },
    mounted() {
        //renderChart function renders the chart with the datacollection and options object.
        this.renderChart(this.datacollection, this.options)
    }
}