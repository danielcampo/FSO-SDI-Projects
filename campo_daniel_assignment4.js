/*
Daniel Campo
Scalable Data Infrastructures - 1209
Project 4 Assignment
*/
var console;

/****************************************************/
/* String Functions */
/****************************************************/
/****************************************************/

function stringPhoneCheck() {
	/* Function 1 - Check Phone Number Pattern */
	/* Does a string follow a 123-456-7890 pattern like a phone number? */

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


		if (stringLength > stringMaxLength || stringLength < stringMinLength || firstHyphenChar != stringSeparator || secondHyphenChar != stringSeparator) {
			return false;
		}

		else {
			return true;
		}; // MAKEUP: missing semi-colons for if/else statements

	};

	var phoneCorrect = "123-456-7890", phoneIncorrect = "1234567890"; // MAKEUP: use double quotes instead of single

	console.log("1: Phone Check Function");
	console.log("-------------------------");

	/* True */
	if (checkPhoneNum(phoneCorrect)) {
		console.log("String: "+phoneCorrect);
		console.log("Does a string follow a 123-456-7890 pattern like a phone number? "+checkPhoneNum(phoneCorrect));
	}

	console.log(" ");

	/* False */
	if (!checkPhoneNum(phoneIncorrect)) {
		console.log("String: "+phoneIncorrect);
		console.log("Does a string follow a 123-456-7890 pattern like a phone number? "+checkPhoneNum(phoneIncorrect));
	};

	console.log("-------------------------");
	console.log("-------------------------");
	/* Function 1 - Check Phone Number Pattern */
	/****************************************************/
};

stringPhoneCheck(); console.log(" ");