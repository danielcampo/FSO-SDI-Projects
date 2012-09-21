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


/*************************************************************************************/
/*************************************************************************************/
/*************************************************************************************/
/*************************************************************************************/



function stringEmailCheck() {
	/* Function 2 - Check Email Pattern */
	/* Does a string follow an aaa@bbb.ccc pattern like an email address? */
	var checkStringEmail = function(myString) {

		var emailStringLength = myString.length;


		/* Illegal Characters */
		/* Check String for Illegal Characters */
		var emailIllegalSymbols = [
			"!", "#", "$" , "%" ,"&" , "'", "\"" ,"*" , "+" , "," , "=" , "?" , "^" , "`" , "{" , "|" , "}" ,"~", " "
		];


		for (symbol in emailIllegalSymbols) {
			var emailIllegalSymbolIndexes = myString.indexOf(emailIllegalSymbols[symbol], 0); /* Location of Illegal Symbols in myString */

			/* Return False if String Contains Illegal Characters */
			if (emailIllegalSymbolIndexes != -1) {
				return false;
			};
		};
		/* END Illegal Characters */


		/* @ Symbol */
		/* Check String for an @ Symbol */
		var emailAtSymbol = "@";
		var emailAtSymbolIndex = myString.indexOf(emailAtSymbol, 0); /* Location of @ Symbol in myString */

		/* Fail if there is no @ symbol index number */
		if (emailAtSymbolIndex == -1) {
			return false;
		};
		/* END @ Symbol */


		/* Email Domain Name */
		/* Check String for a Proper Domain Suffix */
		var emailDomainSeparator = '.';
		var emailDomainSeparatorIndex = myString.indexOf(emailDomainSeparator, 0); /* Location of . Symbol in myString */

		var emailDomain = myString.substring(emailDomainSeparatorIndex, emailStringLength);
		var emailDomainLength = emailDomain.length;
		var emailDomainMaxChar = 4, emailDomainMinChar = 2; /* Min and Max Sizes for Domain Names */

		/* Fail if there is there are issues with the domain name */
		if (emailDomainSeparatorIndex == -1 || emailDomainLength < emailDomainMinChar || emailDomainLength > emailDomainMaxChar) {
			return false;
		};
		/* END Email Domain Name */

		var emailPrefix = myString.substring(0, emailAtSymbolIndex);
		var emailSuffix = myString.substring(emailAtSymbolIndex+1, emailDomainSeparatorIndex);

		return true;


	};

	var emailCorrect = "abc@123.com", emailIncorrect = "abc123.com";

	console.log("2: Email Check Function");
	console.log("-------------------------");

	/* True */
	if (checkStringEmail(emailCorrect)) {
		console.log("String: "+emailCorrect);
		console.log("Does a string follow an aaa@bbb.ccc pattern like an email address? "+checkStringEmail(emailCorrect));
	};

	console.log(" ");

	/* False */
	if (!checkStringEmail(emailIncorrect)) {
		console.log("String: "+emailIncorrect);
		console.log("Does a string follow an aaa@bbb.ccc pattern like an email address? "+checkStringEmail(emailIncorrect));
	};

	console.log("-------------------------");
	console.log("-------------------------");
	/* Function 2 - Check Email Pattern */
	/****************************************************/
};

stringEmailCheck(); console.log(" ");




/*************************************************************************************/
/*************************************************************************************/
/*************************************************************************************/
/*************************************************************************************/


function stringCheckUrl() {
	/* Function 3 - Check URL */
	/* Is the string a URL? (Does it start with http: or https:?) */
	var checkStringURL = function(myString) {

		var stringHttp = "http://", stringHttps = "https://";

		var httpRegular = myString.substring(0,stringHttp.length);
		var httpSecure = myString.substring(0,stringHttps.length);

		/* Return False If String Does Not Begin with Regular HTTP */
		if (httpRegular == stringHttp ) {
			return true;
		}

		else if (httpSecure == stringHttps ) {
			return true;
		}

		else {
			return false;
		};
	};
	/* Function 3 - Check URL */
	/****************************************************/

		var linkCorrect = "http://test.com/", linkIncorrect = "link://test.com/";

		console.log("3: URL Check Function");
		console.log("-------------------------");

		/* True */
		if (checkStringURL(linkCorrect)) {
			console.log("String: "+linkCorrect);
			console.log("Is the string a URL? (Does it start with http: or https:?)? "+checkStringURL(linkCorrect));
		}

		console.log(" ");

		/* False */
		if (!checkStringURL(linkIncorrect)) {
			console.log("String: "+linkIncorrect);
			console.log("Is the string a URL? (Does it start with http: or https:?)? "+checkStringURL(linkIncorrect));
		}

		console.log("-------------------------");
		console.log("-------------------------");
		/* Function 3 - Check URL */
		/****************************************************/
};

stringCheckUrl(); console.log(" ");




/*************************************************************************************/
/*************************************************************************************/
/*************************************************************************************/
/*************************************************************************************/



function stringTitleCase() {
	/* Function 4 - Case String */
	/* Title-case a string (split into words, then uppercase the first letter of each word) */
	var titleCaseString = function(myString) {

		var myStringLength = myString.length;
		var result = "";

		var symbolSpace = " ",
			stringSpaces = myString.indexOf(symbolSpace, 0),
			stringSpacesIndexes = [];


		/* Check to See if String Contains a Space */
		if (stringSpaces > -1) {

			/* Array to hold all of the words between spaces */
			var stringWords = [];

			/* Add All Space Indexes to An Array */
			while (stringSpaces > -1) {
				stringSpacesIndexes.push(stringSpaces);
				stringSpaces = myString.indexOf(symbolSpace, stringSpaces+1);
			};

			/* Add all words between each space to an array */
			var spaceCount = 0;

			for (i = 0; i <= stringSpacesIndexes.length-1; i++) {

				stringWords.push(
					myString.charAt(spaceCount).toUpperCase() +
					myString.substring(spaceCount+1, stringSpacesIndexes[i])
				);

				/* If the last space has been reached, then add the rest of the string to the array */
				if (i == stringSpacesIndexes.length-1) {
					stringWords.push(
						myString.charAt(stringSpacesIndexes[i]+1).toUpperCase() +
						myString.substring(stringSpacesIndexes[i]+2, myStringLength)
					);
				}

				/* If last space HAS NOT been reached, proceed with next space index */
				else {
					spaceCount = stringSpacesIndexes[i]+1;
				};
			};


			for (i = 0; i <= stringWords.length-1; i++) {
				result += stringWords[i] + " ";
			}

			return result;
		}

		/* No Space Strings */
		else {
			var stringSplitIndex = 6, /* Random Number */
				firstName = myString.charAt(0).toUpperCase() + myString.substring(1, stringSplitIndex),
				lastName = myString.charAt(stringSplitIndex).toUpperCase() + myString.substring(stringSplitIndex+1, myStringLength),
				lastNameInitial = myString.substring(stringSplitIndex, stringSplitIndex+1).toUpperCase();

			result = firstName + ' ' + lastName;

			return result;
		};

	};


	var myString = "this is a string with spaces";

	console.log("4: String Title Case Function");
	console.log("-------------------------");

	console.log("Original String: "+ myString);
	console.log("Result: "+ titleCaseString(myString));

	console.log("-------------------------");
	console.log("-------------------------");
	/* Function 4 - Case String */
};

stringTitleCase(); console.log(" ");