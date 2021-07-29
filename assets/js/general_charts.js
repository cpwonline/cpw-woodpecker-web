
var sales_panel = new Chart(
	document.getElementById('sales_panel'), 
	{
		type: 'line',
		data: {
			labels: [
				'January',
				'February',
				'March',
				'April',
				'May',
				'June',
			],
			datasets: [{
				label: 'Ventas',
				backgroundColor: 'rgb(60, 210, 40)',
				borderColor: 'rgb(60, 210, 40)',
				data: [0, 10, 5, 2, 20, 30, 45],
			}]
		},
		options: {}
	}
);
