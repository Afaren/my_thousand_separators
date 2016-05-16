'use strict';

function thousands_separators(num) {
	var parts;

	if ( !isNaN(parseFloat(num)) && isFinite(num) ) {

		num = Number(num);
		num = num.toString();
		parts = num.split(".");

		parts[0] = parts[0].toString().replace().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + ',');
		return parts.join(".");
	}
	
	return NaN;
}

module.exports = thousands_separators;
