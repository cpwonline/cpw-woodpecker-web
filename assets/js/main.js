
/* --- jQuery functions --- */

$(function(){
	// Open a page
		// Click function
			$('#cpw-woodpecker #sidebar_section #main_menu a').click(function(e){

					let menu_href = VerifyMenuURL($(this).attr('href'));
					let menu_html = $(this).html();

					ActivateMenu(menu_href, menu_html);
			});

		// Throught URL on startup
			ClickToOpenMenu(window.location.hash);

	// Calls to functions

});

/* --- Javascript functions --- */
