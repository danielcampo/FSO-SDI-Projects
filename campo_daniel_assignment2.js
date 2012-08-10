var pokemonMaster = "Daniel", pokemonGoal = 5;
var pokemonCaptured = ["Abra", "Pikachu", "Charmander"];

var capturedPokemon = function(pokemonCaptured) {
	if (pokemonCaptured.length == pokemonGoal) {
		console.log("Great! It looks like I've reached my goal of capturing " + pokemonGoal + " Pokemon!");
	}
	
	else {
		console.log("Nice! I've reached my goal of " + pokemonGoal + " Pokemon!");
	}
};