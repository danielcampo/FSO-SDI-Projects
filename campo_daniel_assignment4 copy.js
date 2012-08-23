/* Project 4 Assignment */


/* Strong Functions */

/* Function 1 - Check Phone Number Pattern */
/* Does a string follow a 123-456-7890 pattern like a phone number? */
var console;

var checkPhoneNum = function(myString) {
	var stringLength = myString.length; /* Get length of string */
	
	var stringMinLength = 10; /* Maximum Length of a Phone Number (Includes Hyphens) */
	var stringMaxLength = 12; /* Maximum Length of a Phone Number (Includes Hyphens) */
	
	var stringSeparator = "-";
	
	var firstHyphenIndex = 3, secondHyphenIndex = 7;
	
	var firstHyphenChar = myString.charAt(firstHyphenIndex);
	var secondHyphenChar = myString.charAt(secondHyphenIndex);
	
	var phoneAreaCode = myString.substring(0, myString.indexOf(stringSeparator, 0));
	var phonePrefix = myString.substring(myString.indexOf(stringSeparator, 0)+1, myString.lastIndexOf(stringSeparator, 12));
	var phoneSuffix = myString.substring(8, 12);	
	
	
	stringResults();
	
	if (stringLength > stringMaxLength) {
		console.log("Fail! Reason:");
		console.log("-----------------------------------------");	
		console.log("Too Many Characters.");
		return false;
	}
	
	else if (stringLength < stringMinLength) {
		console.log("Fail! Reason:");
		console.log("-----------------------------------------");	
		console.log("Too Little Characters.");
		return false;
	}
	
	else if (firstHyphenChar != stringSeparator || secondHyphenChar != stringSeparator) {
		console.log("Fail! Reason:");
		console.log("-----------------------------------------");	
		console.log("Improperly Formatted. Use XXX"+stringSeparator+"XXX"+stringSeparator+"XXXX (Include '"+stringSeparator+"')");
		return false;
	}
	
	else {	
		phonePass();
	};

		/* Results Formatting */
		/* ------------------------------ */		
		function stringResults() {
			console.log("String Analysis Results");
			console.log("-----------------------------------------");	
			console.log("-----------------------------------------");
			console.log(" ");
			console.log("String: "+myString);	
			console.log(" ");
			console.log("First Location Char.: "+firstHyphenChar);
			console.log("Second Location Char.: "+secondHyphenChar);	
			console.log("String Length: "+stringLength);	
			console.log("-----------------------------------------");
			console.log(" ");	
			console.log("Result");
			console.log("-------------");
			console.log("-------------");	
			console.log(" ");	
		};
		
		function phonePass() {
			console.log("Pass! Phone Number Analysis:");
			console.log("-----------------------------------------");	
			console.log("Area Code: "+phoneAreaCode);
			console.log("Prefix: "+phonePrefix);
			console.log("Suffix: "+phoneSuffix);
			console.log(" ");						
			console.log("Phone Number: "+phoneAreaCode + stringSeparator + phonePrefix + stringSeparator + phoneSuffix);
			return true;	
		};
	
};

if (checkPhoneNum("305-576-1234")) {
	console.log("Does a string follow a 123-456-7890 pattern like a phone number? True");
}