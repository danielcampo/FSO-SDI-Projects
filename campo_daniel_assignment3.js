var mercenaryName = "Daniel",
	classesMastered = ["Scout", "Assault"],
	classesMasteredNum = classesMastered.length,
	dropsuitClasses = ["Logistics", "Scout", "Assault", "Heavy"],
	masterAllClasses = false;

// A New Day Begins.


// Morning Thoughts
// Do I need to train?

// Don't need to train.
if (classesMasteredNum === dropsuitClasses.length) {
	console.log("As one of the deadliest mercernaries in the Galaxy, I'm proficient in all " + dropsuitClasses.length + " dropsuit classes.");
}

// Need to train.
else {
	console.log("I still have some classes to master until I've mastered all " + dropsuitClasses.length + " dropsuit classes.");
};

