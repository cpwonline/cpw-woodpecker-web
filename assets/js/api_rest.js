
/* --- HTTP Requests --- */

const GETRequest = () => {
	let data = JSON.stringify({
		"pair-information": [
			{"auth": {"user": "root", "password": "root_password"}}
			,{"data": [
				{"type": "fields", "contents": ["id", "name", "reg_date"]}
			]}
		]
	});

	let request = new XMLHttpRequest();
	request.open("GET", "/api/v0/business?json=" + data, true);

	request.send();
}

const POSTRequest = () => {
	let data = JSON.stringify({
		"pair-information": [
			{"auth": {"user": "root", "password": "root_password"}}
			,{"data": [
				{"type": "fields", "contents": ["name"]}
				,{"type": "values", "contents": [["ecorp"], ["mattermost"], ["fsociety"]]}
			]}
		]
	});

	let request = new XMLHttpRequest();
	request.open("POST", "/api/v0/business", true);
	request.setRequestHeader("Content-Type", "application/json");

	request.send(data);
}

const PUTRequest = () => {
	let data = JSON.stringify({
		"pair-information": [
			{"auth": {"user": "root", "password": "root_password"}}
			,{"data": [
				{"type": "iqual", "col": "name", "content": "mattermost"}
				,{"type": "set", "col": "name", "content": "jquery-corp"}
				,{"type": "set", "col": "reg_date", "content": "2021-01-01 12:00:00"}
			]}
		]
	});

	let request = new XMLHttpRequest();
	request.open("PUT", "/api/v0/business", true);
	request.setRequestHeader("Content-Type", "application/json");

	request.send(data);
}

const DELRequest = () => {
	let data = JSON.stringify({
		"pair-information": [
			{"auth": {"user": "root", "password": "root_password"}}
			,{"data": [
				{"type": "iqual", "col": "name", "content": "ecorp"}
			]}
		]
	});

	let request = new XMLHttpRequest();
	request.open("DEL", "/api/v0/business", true);
	request.setRequestHeader("Content-Type", "application/json");

	request.send(data);
}
