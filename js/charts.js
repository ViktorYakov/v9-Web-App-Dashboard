//ADDING GLOBAL VARIABLES

var ctx1 = document.getElementById("lineChart1");
var ctx2 = document.getElementById("lineChart2");
var ctx3 = document.getElementById("lineChart3");
var ctx4 = document.getElementById("lineChart4");
var cty = document.getElementById("barChart");
var ctz = document.getElementById("doughChart");

//ADDING & STYLINGLINE CHART 
var myLineChart1 = new Chart(ctx1, {
	type: 'line',
	data: {
        labels: ["00:00-4:00", "4:00-8:00", "8:00-12:00", "12:00-16:00", "16:00-20:00", "20:00-00:00"],
        datasets: [{
            lineTension: 0,
            backgroundColor: 'rgba(115,119,191, 0.6)',
            borderCapStyle: 'square',
            borderColor: "rgba(165, 42, 42, 1)",
            label: 'Hourly Traffic',
            pointBorderColor: "rgba(0, 0, 0, 0.8)",
            pointBackgroundColor: "rgba(255, 20, 147, 1)",
            pointBorderWidth: 2,
            pointRadius: 6,
            pointHoverRadius: 8,
            data: [800, 1800, 1000, 1100, 2000, 700]
        }]
    },
    options: {
        legend: false,
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: false
                }
            }]
        }
    }
});

var myLineChart2 = new Chart(ctx2, {
	type: 'line',
	data: {
        labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
        datasets: [
            {
                label: "Daily Traffic",
                fill: true,
                lineTension: 0.1,
                backgroundColor: "rgba(75,192,192,0.4)",
                borderColor: "rgba(75,192,192,1)",
                borderCapStyle: 'square',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgba(75,192,192,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(75,192,192,1)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 6,
                pointHitRadius: 10,
                data: [700, 900, 800, 1100, 1200, 1500, 1800, 2000, 2100, 1400, 1700],
            }
        ]
    },
    options: {
         legend: false,
         scales: {
             yAxes: [{
                 stacked: true,
                 gridLines: {
                     tickMarkLength: 0.1,
                     lineWidth: 2
                 },
                 ticks: {
                     begintAtZero: false,
                 maxTicksLimit: 10,
                 max: 2200,
                 min: 500
             }
             }]
         }
     }
});
var myLineChart3 = new Chart(ctx3, {
	type: 'line',
	data: {
        labels: ["00-02", "03-05", "06-08", "09-11", "12-14", "15-17", "18-20", "21-23"],
        datasets: [{
            lineTension: 0,
            backgroundColor: 'rgba(147, 112, 219, 0.6)',
            borderCapStyle: 'square',
            borderColor: "rgba(165, 42, 42, 1)",
            label: 'Weekly Traffic',
            pointBorderColor: "rgba(0, 0, 0, 0.8)",
            pointBackgroundColor: "rgba(255, 20, 147, 1)",
            pointBorderWidth: 2,
            pointRadius: 6,
            pointHoverRadius: 8,
            data: [0, 500, 1000, 1500, 2000, 2500, 800, 900]
        }]
    },
    options: {
        legend: false,
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: false
                }
            }]
        }
    }
});

var myLineChart4 = new Chart(ctx4, {
	type: 'line',
	data: {
        labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
        datasets: [
            {
                label: "Monthly Traffic",
                fill: true,
                lineTension: 0.1,
                backgroundColor: "rgba(75,192,192,0.4)",
                borderColor: "rgba(75,192,192,1)",
                borderCapStyle: 'square',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgba(75,192,192,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(75,192,192,1)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 6,
                pointHitRadius: 10,
                data: [800, 1300, 1000, 1100, 1200, 1500, 1800, 2000, 1600, 1400, 2000, 1100],
            }
        ]
    },
    options: {
         legend: false,
         scales: {
             yAxes: [{
                 stacked: true,
                 gridLines: {
                     tickMarkLength: 0.1,
                     lineWidth: 2
                 },
                 ticks: {
                     begintAtZero: false,
                 maxTicksLimit: 5,
                 max: 2200,
                 min: 500
             }
             }]
         }
     }
});
	


//ADDING AND STYLING BAR CHART

var myBarChart = new Chart(cty, {
	type: 'bar',
	data:  {
        labels: ["S", "M", "T", "W", "T", "F", "S"],
        datasets: [
            {
                label: 'US Visitors',               
                data: [230, 110, 190, 140, 80, 200, 100],
                backgroundColor: "rgba(115,119,191, 0.8)",
                borderWidth: 1,
                borderColor: "rgba(115,119,191, 1)"

            },
            {
                label: 'EU Visitors',
                data: [110, 60, 110, 130, 90, 115, 130],
                backgroundColor: "rgba(112, 219, 147, 0.6)",
                borderWidth: 1,
                borderColor: "rgba(255, 193, 193, 1)"

            }
        ]
    },
	options: {
		legend: {
			labels: {
				boxWidth: 15
			}
		},
		scales: {
			yAxes: [{
				beginAtZero: false,
				ticks: {
					maxTicksLimit: 5,
					max: 250,
					min: 50
				}
			}]
		}
	}
});

//ADDING AND STYLING DOUGHNUT CHART

var myDoughChar = new Chart(ctz, {
	type: 'doughnut',
	data: data = {
	    labels: [
	        "Mobile",
	        "Tablet",
	        "Desktop",
	        "Others"
	    ],
	    datasets: [
	        {
	            data: [300, 50, 100, 200],
	            backgroundColor: [
	                "#7377bf",
	                "#81C98F",
	                "#00CED1",
	                "#73B1BF"
	            ],
	            hoverBackgroundColor: [
	                "#C00000",
	                "#23238E",
	                "#FFD700",
	                "#426F42"
	            ]
	        }]
	},
	options: {
		legend: {
			display: true,

			labels: {
				boxWidth: 15
			}
		},
		animation:{
			animateScale: true
		}
	}
});