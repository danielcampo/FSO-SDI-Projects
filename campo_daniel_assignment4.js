/* Project 4 Assignment */
var console;

/****************************************************/
/* String Functions */
/****************************************************/
/****************************************************/

function functionOne() {
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
		}; // MAKEUP: missing semi-colons for if/else statements, deliverable 1-2

	};

	var phoneCorrect = "123-456-7890", phoneIncorrect = "1234567890";

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

functionOne(); console.log(" ");


function functionTwo() {
	/* Function 2 - Check Email Pattern */
	/* Does a string follow an aaa@bbb.ccc pattern like an email address? */
	var checkStringEmail = function(myString) {

		var emailStringLength = myString.length;

		/* @ Symbol */
		var emailAtSymbol = "@";
		var emailAtSymbolIndex = myString.indexOf(emailAtSymbol, 0); /* Location of @ Symbol in myString */

		/* Fail if there is no @ symbol index number */
		if (emailAtSymbolIndex == -1) {
			return false;
		};


		/* Email Domain Name */
		var emailDomainSeparator = '.';
		var emailDomainSeparatorIndex = myString.indexOf(emailDomainSeparator, 0); /* Location of . Symbol in myString */

		var emailDomain = myString.substring(emailDomainSeparatorIndex, emailStringLength);
		var emailDomainLength = emailDomain.length;
		var emailDomainMaxChar = 4, emailDomainMinChar = 2; /* Min and Max Sizes for Domain Names */

		/* Fail if there is there are issues with the domain name */
		if (emailDomainSeparatorIndex == -1 || emailDomainLength < emailDomainMinChar || emailDomainLength > emailDomainMaxChar) {
			return false;
		};

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

functionTwo(); console.log(" ");



function functionThree() {
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

functionThree(); console.log(" ");



function functionFour() {
	/* Function 4 - Case String */
	/* Title-case a string (split into words, then uppercase the first letter of each word) */
	var titleCaseString = function(myString) {

		var stringLength = myString.length;
		var stringSplitIndex = 6; /* Random: Length of My Name */

		var firstName = myString.charAt(0).toUpperCase() + myString.substring(1, stringSplitIndex);
		var lastName = myString.charAt(stringSplitIndex).toUpperCase() + myString.substring(stringSplitIndex+1, stringLength);
		var lastNameInitial = myString.substring(stringSplitIndex, stringSplitIndex+1).toUpperCase();

		var fullName = firstName + ' ' + lastName;

		return fullName;
	};


	var myName = "danielcampo";

	console.log("4: String Title Case Function");
	console.log("-------------------------");

	console.log("String: "+ myName);
	console.log("Full Name: "+ titleCaseString(myName));

	console.log("-------------------------");
	console.log("-------------------------");
	/* Function 4 - Case String */
};

functionFour(); console.log(" ");




function functionFive() {
	/* Function 5 - Change List Separator */
	/*
		Given a string that is a list of things separated by a given string, as well as another string separator, return a string with the first separator changed to the second: "a,b,c" + "," + "/" → "a/b/c".
	*/
	var changeListSeparator = function(myString, alternateSeparator) {
		if (!alternateSeparator) { alternateSeparator = "/"; };
		return myString.replace(/,/g, alternateSeparator);
	};


	var myList = "a,b,c,d";

	console.log("5: Change List Separator Function");
	console.log("-------------------------");

	console.log("String: "+ myList);
	console.log("String [Revised]: "+ changeListSeparator(myList, "-"));

	console.log("-------------------------");
	console.log("-------------------------");

	/* Function 5 - Change List Separator */
	/****************************************************/

};

functionFive(); console.log(" ");


/****************************************************/
/* Number Functions */
/****************************************************/
/****************************************************/

function functionSix() {
	/* Function 6 - Set Amount of Trailing Decimal Points */
	/* Format a number to use a specific number of decimal places, as for money: 2.1 → 2.10 */
	var setDecimalPoint = function(myNumber, numberDecimalPoints) {
		return myNumber.toFixed(numberDecimalPoints);
	};

	var myNumber = 2.1;
	var numberDecimalPoints = 2;

	console.log("6: Set Amount of Trailing Decimal Points Function");
	console.log("-------------------------");

	console.log("Number: "+ myNumber);
	console.log("Number [Revised]: "+ setDecimalPoint(myNumber, numberDecimalPoints));

	console.log("-------------------------");
	console.log("-------------------------");

	setDecimalPoint(2.1, 2);
};

functionSix(); console.log(" ");



function functionSeven() {
	/* Function 7 - Number of Days Between Two Dates */
	/* Find the number of hours or days difference between two dates. */
	var daysBetweenDates = function(date1, date2) {
		var daySingle = 1000 * 60 * 60 * 24;

		var date1 = new Date(date1);
		var date2 = new Date(date2);

		date1_ms = date1.getTime();
		date2_ms = date2.getTime();

		return (date2_ms-date1_ms)/daySingle;

	};
	/* Function 7 - Number of Days Between Two Dates */
	/****************************************************/
	var day1 = "2012/12/12", day2 = "2012/12/24";

	console.log("7: Days Between Dates Function");
	console.log("-------------------------");

	console.log("Day 1: "+ day1);
	console.log("Day 2: "+ day2);
	console.log("Days Between Dates: "+ daysBetweenDates(day1, day2));
	console.log("-------------------------");
	console.log("-------------------------");
};

functionSeven(); console.log(" ");


function functionEight() {
	/* Function 8 - String to Number */
	/* Given a string version of a number such as "42", return the value as an actual Number, such as 42. */
	var stringToNumber = function(myString) {
		if (!isNaN(parseInt(myString))) {
			return parseInt(myString);
		}

		else  return "Not a Number.";
	};
	/* Function 8 - String to Number */
	/****************************************************/

	var string1 = "88", string2 = "number";

	console.log("8: String to Number");
	console.log("-------------------------");

	console.log("String 1: "+ string1);
	console.log("String 1 to Number: " + stringToNumber(string1));
	console.log(" ");
	console.log("String 2: "+ string2);
	console.log("String 2 to Number: " + stringToNumber(string2));
	console.log("-------------------------");
	console.log("-------------------------");
};

functionEight();