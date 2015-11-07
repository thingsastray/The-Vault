
'use strict';
module.exports = function() {
	var vault = {
		setValue: function (key, value){
			vault.key = value;
		},
		getValue: function (key) {
			if(vault.hasOwnProperty('key')){
				return vault.key;
			}else {
				return null;
			}
		}
	};
return vault;
};
