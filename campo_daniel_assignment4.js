/* Project 4 Assignment */
var console;

/* String Functions */

function functionStringOne() {
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
	
	console.log("Phone Check Function");
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
	}
	/* Function 1 - Check Phone Number Pattern */
	/****************************************************/
};

// functionStringOne();


function functionStringTwo() {
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
	}
	

	/* Email Domain Name */
	var emailDomainSeparator = '.';
	var emailDomainSeparatorIndex = myString.indexOf(emailDomainSeparator, 0); /* Location of . Symbol in myString */
	
	var emailDomain = myString.substring(emailDomainSeparatorIndex, emailStringLength);
	var emailDomainLength = emailDomain.length;	
	var emailDomainMaxChar = 4, emailDomainMinChar = 2; /* Min and Max Sizes for Domain Names */
	
	/* Fail if there is there are issues with the domain name */
	if (emailDomainSeparatorIndex == -1 || emailDomainLength < emailDomainMinChar || emailDomainLength > emailDomainMaxChar) {
		return false;
	}

	var emailPrefix = myString.substring(0, emailAtSymbolIndex);
	var emailSuffix = myString.substring(emailAtSymbolIndex+1, emailDomainSeparatorIndex);
	
	return true;
	
	
};

	var emailCorrect = "abc@123.com", emailIncorrect = "abc123.com";
	
	console.log("Email Check Function");
	console.log("-------------------------");
	
	/* True */
	if (checkStringEmail(emailCorrect)) {
		console.log("String: "+emailCorrect);
		console.log("Does a string follow an aaa@bbb.ccc pattern like an email address? "+checkStringEmail(emailCorrect));
	}
	
	console.log(" ");
	
	/* False */
	if (!checkStringEmail(emailIncorrect)) {
		console.log("String: "+emailIncorrect);
		console.log("Does a string follow an aaa@bbb.ccc pattern like an email address? "+checkStringEmail(emailIncorrect));
	}
	/* Function 2 - Check Email Pattern */
	/****************************************************/	
};

// functionStringTwo();

