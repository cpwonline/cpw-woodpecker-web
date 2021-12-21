/* --- Sidebar functions --- */

const OpenSidebar = () => {
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

const CloseSidebar = () => {
	let my_sidebar = document.getElementById("sidebar");
	let overlay_bg = document.getElementById("myOverlay");

	my_sidebar.style.display = "none";
	overlay_bg.style.display = "none";
}
