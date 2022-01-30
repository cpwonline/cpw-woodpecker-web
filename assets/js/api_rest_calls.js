/* --- jQuery functions --- */

$(function(){

	/* --- Call to API REST System --- */
		// Create
			$('#cpw-woodpecker .business_add').click(function(e){
				let form_add = VerifyMenuURL($(this).attr('tag'));
				let name = $("#cpw-woodpecker #" + form_add + " .add_business_name").val();
				let image = $("#cpw-woodpecker #" + form_add + " .add_business_name").val();
			});

		// Read
			GetBusinessTable();
			GetUsersTable();
			GetLevelsTable();

		// Update

		// Delete

});

/* --- Javascript functions --- */

var options = '<td><div class="dropdown"><a href="#" class="dropdown-toggle btn fs-6" data-bs-toggle="dropdown">Opciones</a><ul class="dropdown-menu"><li><a class="dropdown-item" href="#"><i class="fas fa-eye me-2"></i>Ver</a></li><li><a class="dropdown-item" href="#"><i class="fas fa-pen me-2"></i>Editar</a></li><li><a class="dropdown-item" href="#"><i class="fas fa-trash me-2"></i>Borrar</a></li></ul></div></td>';

const GetBusinessTable = () => {
	let data = {"pair-information": [{"auth": {"user": "root", "password": "root_password"}}, {"data": [{"type": "fields", "contents": ["id", "name", "image", "reg_date"]}]}]};
	let call = new APIRESTSystem("business", "GET", data);

	call.MakeHTTPRequest().then(data => {
		$("#cpw-woodpecker #business_table tbody").empty();

		for(let key in data.results){
			let cell1 = $("<th scope='row'></th>").text(data.results[key].id);
			let cell2 = $("<td></td>").text(data.results[key].name);

			let cell3;
			if(data.results[key].image === undefined)
				cell3 = $("<td></td>").append("<img width='40' src='../../assets/images/blank_avatar.svg'/>");
			else{
				let image = $('<img alt="' + data.results[key].name + '" />');
				let blob = new Blob([data.results[key].image], {type: 'image/jpeg'});
				$(image).attr("src", window.URL.createObjectURL(blob));
				cell3 = $("<td></td>").append(image);
			}

			let cell4 = $("<td></td>").text(data.results[key].reg_date);

			let row = $("<tr></tr>").append(cell1, cell2, cell3, cell4, options);
			$("#cpw-woodpecker #business_table tbody").append(row);
		}
	});
}

const GetUsersTable = () => {
	let data = {"pair-information": [{"auth": {"user": "root", "password": "root_password"}}, {"data": [{"type": "fields", "contents": ["id", "username", "image", "reg_date"]}]}]};
	let call = new APIRESTSystem("users", "GET", data);

	call.MakeHTTPRequest().then(data => {
		$("#cpw-woodpecker #users_table tbody").empty();

		for(let key in data.results){
			let cell1 = $("<th scope='row'></th>").text(data.results[key].id);
			let cell2 = $("<td></td>").text(data.results[key].username);

			let cell3;
			if(data.results[key].image === undefined)
				cell3 = $("<td></td>").append("<img width='40' src='../../assets/images/blank_avatar.svg'/>");
			else{
				let image = $('<img alt="' + data.results[key].username + '" />');
				let blob = new Blob([data.results[key].image], {type: 'image/jpeg'});
				$(image).attr("src", window.URL.createObjectURL(blob));
				cell3 = $("<td></td>").append(image);
			}

			let cell4 = $("<td></td>").text(data.results[key].reg_date);

			let row = $("<tr></tr>").append(cell1, cell2, cell3, cell4, options);
			$("#cpw-woodpecker #users_table tbody").append(row);
		}
	});
}

const GetLevelsTable = () => {
	let data = {"pair-information": [{"auth": {"user": "root", "password": "root_password"}}, {"data": [{"type": "fields", "contents": ["id", "name", "number", "reg_date"]}]}]};
	let call = new APIRESTSystem("business/levels", "GET", data);

	call.MakeHTTPRequest().then(data => {
		$("#cpw-woodpecker #users_table tbody").empty();

		for(let key in data.results){
			let cell1 = $("<th scope='row'></th>").text(data.results[key].id);
			let cell2 = $("<td></td>").text(data.results[key].name);
			let cell3 = $("<td></td>").text(data.results[key].number);
			let cell4 = $("<td></td>").text(data.results[key].reg_date);

			let row = $("<tr></tr>").append(cell1, cell2, cell3, cell4, options);
			$("#cpw-woodpecker #levels_table tbody").append(row);
		}
	});
}
