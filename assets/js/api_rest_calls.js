/* --- jQuery functions --- */

$(function(){

	/* --- Call to API REST System --- */
		// Click on menus
			$('#cpw-woodpecker #sidebar_section #main_menu a[href="#business"]').click(function(e){
				GetBusinessTable();
			});

});

/* --- Javascript functions --- */

var options = '<td><div class="dropdown"><a href="#" class="dropdown-toggle btn fs-6" data-bs-toggle="dropdown">Opciones</a><ul class="dropdown-menu"><li><a class="dropdown-item" href="#"><i class="fas fa-eye me-2"></i>Ver</a></li><li><a class="dropdown-item" href="#"><i class="fas fa-pen me-2"></i>Editar</a></li><li><a class="dropdown-item" href="#"><i class="fas fa-trash me-2"></i>Borrar</a></li></ul></div></td>';

const GetBusinessTable = () => {
	let data = {"pair-information": [{"auth": {"user": "root", "password": "root_password"}}, {"data": [{"type": "fields", "contents": ["id", "name", "reg_date"]}]}]};
	let call = new APIRESTSystem("business", "GET", data);

	call.MakeHTTPRequest().then(data => {
		$("#cpw-woodpecker #business_table tbody").empty();
		for(let element in data.results){
			let row = $("<tr></tr>");
			let cell1 = $("<th scope='row'></th>").text(data.results[element].id);
			let cell2 = $("<td></td>").text(data.results[element].name);
			let cell3 = $("<td></td>").text(data.results[element].reg_date);

			$(row).append(cell1, cell2, cell3, options);
			$("#cpw-woodpecker #business_table tbody").append(row);
		}
	});
}