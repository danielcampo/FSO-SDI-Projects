var pokemonMaster = "Daniel", pokemonGoal = 5;
var pokemonCaptured = ["Abra", "Pikachu", "Charmander"];

// Procedure Function
var capturedPokemon = function (pokemonCaptured) {
	if (pokemonCaptured.length === pokemonGoal) {
		console.log("Great! It looks like I've reached my goal of capturing " + pokemonGoal + " Pokemon!");
	}

	else {
		console.log("Nice! I've reached my goal of " + pokemonGoal + " Pokemon!");
	}
};

capturedPokemon(pokemonCaptured);

// Boolean Function
var goPokemonHunting = function (goal, captured) {
	var pokemonGoal = goal, pokemonCaptured = captured, goHunting;

	if (pokemonCaptured != pokemonGoal) {
		goHunting = true;
		console.log("Do I need to go hunt some more Pokemon? " + goHunting);
	}

	else {
		goHunting = false;
		console.log("Do I need to go hunt some more Pokemon? " + goHunting);
	}

	return goHunting;
}
goPokemonHunting(pokemonGoal, pokemonCaptured);


// Number Function
var pokemonLeft = function (pokemonCaptured) {
	var pokemonCapturedTotal = pokemonCaptured.length;

	while(pokemonCapturedTotal < pokemonGoal) {
		var pokemonRemaining = pokemonGoal - pokemonCapturedTotal;
		console.log("I've captured a total of " + pokemonCapturedTotal + " Pokemon so I haven't reached my goal.");
		console.log("I have " + pokemonRemaining + " Pokemon left to capture.");
		pokemonCapturedTotal++;
	}

	return pokemonCapturedTotal;
}

pokemonLeft(pokemonCaptured);

// String Function
var interestedInPokemon = function (name1, name2) {
	var pokemonFirst = name1, pokemonSecond = name2;
	var pokemonInterestedInList = pokemonFirst + " and a " + pokemonSecond;

	console.log("For my remaining two Pokemon I would really love to capture a " + pokemonInterestedInList +".");

	return(pokemonInterestedInList);

}

interestedInPokemon("Squirtle", "Bulbasaur")

// Array Function
var pokemonWrapUp = function (goal, addToPokemonList) {
	var preferredLineUp = addToPokemonList,
		pokemonCapturedGoal = goal,
		pokemonCurrentTotal = preferredLineUp.length;

	for(currentTotal = 3; currentTotal <= 4; currentTotal++) {

		console.log("I would really love to add a " + preferredLineUp[currentTotal] + " as my number " + (currentTotal+1) + " Pokemon in my roster.");
	}

	return preferredLineUp;
}
console.log(pokemonWrapUp(pokemonCaptured, pokemonCaptured.concat(["Squirtle", "Bulbasaur"])));