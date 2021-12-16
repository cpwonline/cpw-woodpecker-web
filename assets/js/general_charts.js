
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
			datasets: [
				{
					label: 'Ventas',
					backgroundColor: '#444444',
					borderColor: '#444444',
					data: [0, 10, 5, 2, 20, 30, 45],
				},
				{
					label: 'Compras',
					backgroundColor: '#9e9e9e',
					borderColor: '#9e9e9e',
					data: [12, 15, 2, 3, 0, 5, 23],
				}
			]
		},
		options: {}
	}
);
