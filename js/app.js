/* app.js
 * JavaScript file to handle the Beterschap Frank! website
 * Made on 2016-03-30
 * by GeOdin
 * Last modified on 2016-03-30
 *
 *=========================================================
 * This file includes the following functions: *
 *=========================================================
 * main()
 * showPicture()
 */

////////////
// main() //
////////////

// Function to start the game
var main = function() {
	// Set the variables
	var showPicture;
	var interval = 2000;
	var counter = 0;

	setup = window.setInterval(showPicture, interval);
	setup;

	// Function to handle the different iterations
	function showPicture() {

		if (counter == 0) {
			// Show picture of fruit basket
			document.getElementById("image").innerHTML = "<a href='http://www.1800baskets.com/Get-Well-Gift-Baskets-11089'><img src='http://cdn1.1800baskets.com/wcsstore/Baskets/images/catalog/96283z.jpg' /></a>";
		} else if (counter == 1) {
			// Show picture of cute cat
			document.getElementById("image").innerHTML = "<a href='https://www.pinterest.com/pin/525091637776229600/'><img src='https://s-media-cache-ak0.pinimg.com/736x/83/b5/dc/83b5dc6fe23c498c6cc842abfbd60a71.jpg' /></a>";
			// Set counter to -1
			return;
		}
		counter += 1;
	}
}

$(document).ready(main);
