/*

// my original solution
function extractRegion(locale) {
	return locale.substring(3, 5);
}

*/

// better, easier to understand
function extractRegion(locale) {
	return locale.split('.')[0]
							 .split('_')[1];
}