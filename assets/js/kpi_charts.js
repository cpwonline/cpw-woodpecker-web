
var chart_deals = new Chart(
	document.getElementById('chart_deals'),
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
					label: 'Negociaciones',
					backgroundColor: '#0478c6',
					borderColor: '#0478c6',
					data: [0, 10, 5, 2, 20, 30, 45],
				}
			]
		},
		options: {}
	}
);

var chart_bills = new Chart(
	document.getElementById('chart_bills'),
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
					label: 'Facturas',
					backgroundColor: '#0478c6',
					borderColor: '#0478c6',
					data: [3, 0, 2, 4, 2, 7, 12],
				}
			]
		},
		options: {}
	}
);

var chart_incomes = new Chart(
	document.getElementById('chart_incomes'),
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
					label: 'Ingresos',
					backgroundColor: '#0478c6',
					borderColor: '#0478c6',
					data: [6, 0, 24, 4, 2, 45, 12],
				}
			]
		},
		options: {}
	}
);

var chart_expenses = new Chart(
	document.getElementById('chart_expenses'),
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
					label: 'Gastos',
					backgroundColor: '#0478c6',
					borderColor: '#0478c6',
					data: [3, 6, 2, 4, 2, 7, 1],
				}
			]
		},
		options: {}
	}
);
