var pokemonMaster = "Daniel", pokemonGoal = 5;
var pokemonCaptured = ["Abra", "Pikachu", "Charmander"];

// Procedure Function
var capturedPokemon = function(pokemonCaptured) {
	if (pokemonCaptured.length == pokemonGoal) {
		console.log("Great! It looks like I've reached my goal of capturing " + pokemonGoal + " Pokemon!");
	}
	
	else {
		console.log("Nice! I've reached my goal of " + pokemonGoal + " Pokemon!");
	}
};

// Boolean Function
var goPokemonHunting = function(goal, captured) {
	var pokemonGoal = goal;
	var pokemonCaptured = captured;
	var goHunting;
	
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


// Number Function
var pokemonLeft = function(pokemonCaptured) {
	var pokemonCapturedTotal = pokemonCaptured.length;
	
	while(pokemonCapturedTotal < pokemonGoal) {
		var pokemonRemaining = pokemonGoal - pokemonCapturedTotal;
		console.log("I've captured a total of " + pokemonCapturedTotal + " Pokemon so I haven't reached my goal.");
		console.log("I have " + pokemonRemaining + " Pokemon left to capture.");
		pokemonCapturedTotal++;
	}
	
	return pokemonCapturedTotal;
}

