
// Sidebar
	// Get the Sidebar
		var mySidebar = document.getElementById("sidebar");

	// Get the DIV with overlay effect
		var overlayBg = document.getElementById("myOverlay");

	// Toggle between showing and hiding the sidebar, and add overlay effect
		function open_sidebar() {
			if (mySidebar.style.display === 'block') {
				mySidebar.style.display = 'none';
				overlayBg.style.display = "none";
			} else {
				mySidebar.style.display = 'block';
				overlayBg.style.display = "block";
			}
		}

	// Close the sidebar with the close button
		function close_sidebar() {
			mySidebar.style.display = "none";
			overlayBg.style.display = "none";
		}