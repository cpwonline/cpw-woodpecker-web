
/* --- HTTP Requests --- */

class APIRESTSystem{
	constructor(endpoint = '', method = 'GET', data = {},  url = "http://127.0.0.1:8080/api/v0/"){
		this.endpoint = endpoint;
		this.method = method;
		this.data = data
		this.url = url;
	}

	MakeHTTPRequest(){
		switch(this.method){
			case "GET":
				return this.GETRequest();
				break;
			case "POST":
				return this.POSTRequest();
				break;
			case "PUT":
				return this.PUTRequest();
				break;
			case "DEL":
				return this.DELRequest();
				break;
			default:
				return this.GETRequest();
				break;
		}
	}

	async GETRequest() {
		const response = await fetch(this.url + this.endpoint + "?json=" + JSON.stringify(this.data), {
			method: 'GET'
			,mode: 'cors'
			,cache: 'no-cache'
			,credentials: 'same-origin'
			,redirect: 'follow'
			,referrerPolicy: 'no-referrer'
		});
		return response.json();
	}

	async POSTRequest() {
		const response = await fetch(this.url + this.endpoint, {
			method: 'POST'
			,mode: 'cors'
			,cache: 'no-cache'
			,credentials: 'same-origin'
			,redirect: 'follow'
			,referrerPolicy: 'no-referrer'
			,headers: {'Content-Type': 'application/json'}
			,body: JSON.stringify(this.data)
		});
		return response.json();
	}

	async PUTRequest() {
		const response = await fetch(this.url + this.endpoint, {
			method: 'PUT'
			,mode: 'cors'
			,cache: 'no-cache'
			,credentials: 'same-origin'
			,redirect: 'follow'
			,referrerPolicy: 'no-referrer'
			,headers: {'Content-Type': 'application/json'}
			,body: JSON.stringify(data)
		});
		return response.json();
	}

	async DELRequest() {
		const response = await fetch(this.url + this.endpoint, {
			method: 'DEL'
			,mode: 'cors'
			,cache: 'no-cache'
			,credentials: 'same-origin'
			,redirect: 'follow'
			,referrerPolicy: 'no-referrer'
			,headers: {'Content-Type': 'application/json'}
			,body: JSON.stringify(this.data)
		});
		return response.json();
	}
}
