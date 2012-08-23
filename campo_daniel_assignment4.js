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
	var firstHyphen = 3, secondHyphen = 7;
	
	var firstHyphenCheck = myString.charAt(firstHyphen);
	var secondHyphenCheck = myString.charAt(secondHyphen);	
	console.log("String Analysis Results");
	console.log("-----------------------------------------");	
	console.log("-----------------------------------------");
	console.log("First Location: "+firstHyphenCheck);
	console.log(" ");
	console.log("Second Location: "+secondHyphenCheck);	
	console.log(" ");
	console.log("String Length: "+stringLength);	
	console.log("-----------------------------------------");
	console.log(" ");	
	console.log("Result");		
	console.log("-------------");
	console.log(" ");	
	
	
	if (stringLength > stringMaxLength) {
		console.log("Too Many Characters.");
		return false;
	}
	
	else if (stringLength < stringMinLength) {
		console.log("Too Little Characters.");
		return false;
	}
	
	else if (firstHyphen != stringSeparator || secondHyphen != stringSeparator) {
		console.log("Improperly Formatted. Use XXX"+stringSeparator+"XXX"+stringSeparator+"XXXX (Include '"+stringSeparator+"')");
		return false;
	
	}
	
	
};

checkPhoneNum("305-576-1234");