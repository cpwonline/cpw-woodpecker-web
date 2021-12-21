
/* --- Menus functions --- */

const GetMenus = () => {
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

const ClickToOpenMenu = (menu) => {
	// Generate menu from URL
		let new_menu = VerifyMenuURL(menu);

	// Activate a menu
		if(ExistsMenu(new_menu)){
			$('#cpw-woodpecker #sidebar_section #main_menu a[href="#'+new_menu+'"]').click();
		}else{
			console.log('menu not found');
			$('#cpw-woodpecker #sidebar_section #main_menu a[href="#dashboard"]').click();
		}
}

const ExistsMenu = (menu) => {
	menu_list = new Array();
	menu_list = GetMenus();

	for(let a = 0; a < menu_list.length; a++){
		if(menu_list[a] === menu){
			return true;
		}
	}
	return false;
}

const VerifyMenuURL = (menu) => {
	let new_menu = "";
	for(let a = 0; a < menu.length; a++){
		if(menu[a] != "#"){
			new_menu += menu[a];
		}
	}
	return new_menu;
}

const ActivateMenu = (menu_href, menu_html) => {
	let menus_list = GetMenus();

	for(let a = 0; a < menus_list.length; a++){
		let current_class = $('#cpw-woodpecker #main_menu a[href="#'+menus_list[a]+'"]').attr('class');
		let new_class = current_class.replace('active', '');
		new_class = new_class.replace('text-secondary', '');

		if(menus_list[a] === menu_href){
			new_class += ' active';
			$('#cpw-woodpecker article#'+menus_list[a]+'_page').css("display", "block");
		}else{
			new_class += ' text-secondary';
			$('#cpw-woodpecker article#'+menus_list[a]+'_page').css("display", "none");
		}

		ChangeContentsHeader(menu_html);
		$('#cpw-woodpecker #sidebar_section #main_menu a[href="#'+menus_list[a]+'"]').attr('class', new_class);
	}
}

const ChangeContentsHeader = (menu_html) => {
	$('#cpw-woodpecker #contents_header #contents_header_title').html(menu_html);
	let header_class = $('#cpw-woodpecker #contents_header #contents_header_title i').attr('class');
	header_class = header_class.replace('col-2', '');
	header_class += ' me-2'

	$('#cpw-woodpecker #contents_header #contents_header_title i').attr('class', header_class);
}
