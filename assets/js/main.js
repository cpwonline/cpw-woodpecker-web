
/* --- jQuery functions --- */

$(function(){
	// Open a page
		// Click function
			$('#cpw-woodpecker nav#sidebar div#menu a').click(function(e){
				// Variables
					menu_list = new Array();
					menu_list = GetMenus();
					var iam = $(this).attr('tag');

				// Activate and deactivate menus
					for(var a = 0; a < menu_list.length; a++){
						var attr_menu_class = $('#cpw-woodpecker nav#sidebar  div#menu a[tag="'+menu_list[a]+'"]').attr('class');
						var new_attr_menu_class = attr_menu_class.replace('w3-theme', '');

						if(menu_list[a] === iam){
							new_attr_menu_class += ' w3-theme';
							$('#cpw-woodpecker article#page_'+menu_list[a]).css("display", "block");
							$('#cpw-woodpecker nav#sidebar  div#menu a[tag="'+menu_list[a]+'"]').attr('class', new_attr_menu_class);
						}else{
							$('#cpw-woodpecker article#page_'+menu_list[a]).css("display", "none");
							$('#cpw-woodpecker nav#sidebar  div#menu a[tag="'+menu_list[a]+'"]').attr('class', new_attr_menu_class);
						}
					}
			});

		// Throught URL on startup
			OpenMenu(window.location.hash);

	// Calls to functions

});

/* --- Javascript functions --- */

// Sidebar functions
	function OpenSidebar() {
		let my_sidebar = document.getElementById("sidebar");
		let overlay_bg = document.getElementById("myOverlay");

		if (my_sidebar.style.display === 'block') {
			my_sidebar.style.display = 'none';
			overlay_bg.style.display = "none";
		} else {
			my_sidebar.style.display = 'block';
			overlay_bg.style.display = "block";
		}
	}

	function CloseSidebar() {
		let my_sidebar = document.getElementById("sidebar");
		let overlay_bg = document.getElementById("myOverlay");

		my_sidebar.style.display = "none";
		overlay_bg.style.display = "none";
	}

// Menus functions

	function GetMenus(){
		menu_list = new Array(
			'dashboard',
			'business',
			'banks',
			'currency',
			'inventaries',
			'accounts',
			'deals',
			'pays',
			'billing',
			'reports'
		);
		return menu_list;
	}

	function OpenMenu(menu){
		// Generate menu from URL
			var new_menu = "";
			for(var a = 0; a < menu.length; a++){
				if(menu[a] != "#"){
					new_menu += menu[a];
				}
			}
		// Get and verify menu
			menu_list = new Array();
			menu_list = GetMenus();
			var menu_exists = false;

			for(var a = 0; a < menu_list.length; a++){
				if(menu_list[a] === new_menu){
					menu_exists = true;
					break;
				}
			}
		// Activate a menu
			if(menu_exists){
				$('#cpw-woodpecker nav#sidebar div#menu a[tag="'+new_menu+'"]').click();
			}else{
				console.log("menu no exists");
				$('#cpw-woodpecker nav#sidebar div#menu a[tag="dashboard"]').click();
			}
	}
