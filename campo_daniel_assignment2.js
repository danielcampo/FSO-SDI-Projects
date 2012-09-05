var mercenaryName = "Daniel",
	classesMastered = ["Scout", "Assault"],
	classesMasteredNum = classesMastered.length,
	dropsuitClasses = ["Logistics", "Scout", "Assault", "Heavy"],
	dropsuitClassesNum = dropsuitClasses.length,
	masterAllClasses = false;

/*****************************************************************************/
secbrk("Procedure Function");
/*****************************************************************************/
var classChecklist = function (classesMasteredNum) {
	if (dropsuitClassesNum === classesMasteredNum) {
		console.log("As one of the deadliest mercernaries in the Galaxy, I'm proficient in all " + dropsuitClassesNum + " dropsuit classes.");
	}

	else {
		console.log("I still have some classes to master until I've mastered all " + dropsuitClassesNum + " dropsuit classes.");
	};
};

classChecklist(classesMasteredNum);

/*****************************************************************************/
secbrk("Boolean Function");
/*****************************************************************************/
var goTraining = function (goal, mastered) {

	if ((goal > 0) && mastered != goal) {
		goTraining = true;
		console.log("Do I need to train more to master all of the dropsuit classes? " + goTraining);
	}

	else {
		goTraining = false;
		console.log("Do I need to train more to master all of the dropsuit classes? " + goTraining);
	};

	return goTraining;
}
goTraining(dropsuitClassesNum, classesMasteredNum);

/*****************************************************************************/
secbrk("Number Function");
/*****************************************************************************/
var classesToMaster = function (classesMasteredNum) {
	var dropsuitClassesTotal = dropsuitClassesNum;

	while(classesMasteredNum != dropsuitClassesTotal+1) {
		var classesRemaining =  dropsuitClassesTotal - classesMasteredNum;
		console.log("I've mastered " + classesMasteredNum + " classes so far.");
		console.log("I have " + classesRemaining + " classes left to master.");
		classesMasteredNum++;
	};

	return dropsuitClassesTotal;
}

classesToMaster(classesMasteredNum);

/*****************************************************************************/
secbrk("String Function");
/*****************************************************************************/
var classesDisliked = function (class1, class2) {
	var classesDislikeList = class1 + " and " + class2;

	console.log("I have completely mastered " + classesMasteredNum + " dropsuit classes. I want to master all of the classes but I really dislike the " + classesDislikeList +" dropsuit classses.");

	return(classesDislikeList);

}
classesDisliked("Logistics", "Heavy");


function secbrk(name) { console.log(" ");console.log("------------------------------------------------");console.log(name);console.log("------------------------------------------------");console.log(" ");}; // For Output Purposes Only
