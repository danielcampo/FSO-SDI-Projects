/*
Daniel Campo
Scalable Data Infrastructures - 1209
Project 4 Assignment
*/

/****************************************************/
/* String Functions */
/****************************************************/
/****************************************************/

function stringPhoneCheck(myString) {
	/* Function 1 - Check Phone Number Pattern */
	/* Does a string follow a 123-456-7890 pattern like a phone number? */
	var stringLength = myString.length, /* Get length of string */
		stringMinLength = 10, /* Maximum Length of a Phone Number (Includes Hyphens) */
		stringMaxLength = 12, /* Maximum Length of a Phone Number (Includes Hyphens) */
		stringSeparator = "-",
		firstHyphenIndex = 3,
		secondHyphenIndex = 7,
		firstHyphenChar = myString.charAt(firstHyphenIndex),
		secondHyphenChar = myString.charAt(secondHyphenIndex),
		phoneAreaCode = myString.substring(0, myString.indexOf(stringSeparator, 0)),
		phonePrefix = myString.substring(myString.indexOf(stringSeparator, 0)+1, myString.lastIndexOf(stringSeparator, 12)),
		phoneSuffix = myString.substring(8, 12);


	if (stringLength > stringMaxLength || stringLength < stringMinLength || firstHyphenChar != stringSeparator || secondHyphenChar != stringSeparator) {
		return false;
	}

	else {
		return true;
	};
};

/*************************************************************************************/
/*************************************************************************************/
/*************************************************************************************/
/*************************************************************************************/

function stringEmailCheck(myString) {
	/* Function 2 - Check Email Pattern */
	/* Does a string follow an aaa@bbb.ccc pattern like an email address? */
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

/*************************************************************************************/
/*************************************************************************************/
/*************************************************************************************/
/*************************************************************************************/

function stringCheckUrl(myString) {
	/* Function 3 - Check URL */
	/* Is the string a URL? (Does it start with http: or https:?) */
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

/*************************************************************************************/
/*************************************************************************************/
/*************************************************************************************/
/*************************************************************************************/

function stringTitleCase(myString) {
	/* Function 4 - Case String */
	/* Title-case a string (split into words, then uppercase the first letter of each word) */
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

/*************************************************************************************/
/*************************************************************************************/
/*************************************************************************************/
/*************************************************************************************/

function stringSeparatorChanger(myString, alternateSeparator) {
	/* Function 5 - Change List Separator */
	/*
		Given a string that is a list of things separated by a given string, as well as another string separator, return a string
		with the first separator changed to the second: "a,b,c" + "," + "/" → "a/b/c".
	*/
	if (!alternateSeparator) { alternateSeparator = "/"; };
	return myString.replace(/,/g, alternateSeparator);
};

/*************************************************************************************/
/*************************************************************************************/
/*************************************************************************************/
/*************************************************************************************/
/*************************************************************************************/
/*************************************************************************************/
/*************************************************************************************/
/*************************************************************************************/
/*************************************************************************************/
/*************************************************************************************/
/*************************************************************************************/
/*************************************************************************************/

/****************************************************/
/* Number Functions */
/****************************************************/
/****************************************************/

function numberSetDecimalPoint(myNumber, numberDecimalPoints) {
	/* Function 6 - Set Amount of Trailing Decimal Points */
	/* Format a number to use a specific number of decimal places, as for money: 2.1 → 2.10 */
	return myNumber.toFixed(numberDecimalPoints);
};


/*************************************************************************************/
/*************************************************************************************/
/*************************************************************************************/
/*************************************************************************************/


function numberDaysBetweenTwoDates(date1, date2) {
	/* Function 7 - Number of Days Between Two Dates */
	/* Find the number of hours or days difference between two dates. */
		var daySingle = 1000 * 60 * 60 * 24;

		var date1 = new Date(date1);
		var date2 = new Date(date2);

		date1_ms = date1.getTime();
		date2_ms = date2.getTime();

		return (date2_ms-date1_ms)/daySingle;

};

/*************************************************************************************/
/*************************************************************************************/
/*************************************************************************************/
/*************************************************************************************/

function stringToNumber(myString) {
	/* Function 8 - String to Number */
	/* Given a string version of a number such as "42", return the value as an actual Number, such as 42. */
		if (!isNaN(parseInt(myString))) {
			return parseInt(myString);
		}

		else {
			return "Not a Number.";
		};
};