// Functions have three parts:

// inputs (parameters)
// work
// outputs (return value)

// .. and then we have to tell them to run.

// inputs/parameters: meat, cheese, bread
// work: assemble our sandwich from these supplied ingredients (parameters)
// output (return value): sandwich

// pseudocode
// parameters: meat - "turkey", cheese - "pepperjack", bread - "wheat"
// work: "Here is your beautiful sandwich. It has " + meat + " and " + cheese + " on " + bread + "."
// return value: "Here is your beautiful sandwich. It has turkey and cheese on wheat. Enjoy!"

// parameters
function makeSandwich(meat, cheese, bread) {
  // work goes in here
  var newSandwich = "Here is your beautiful sandwich. It has " + meat + " and " + cheese + " on " + bread + ".";
  // tell JavaScript to return
  return newSandwich;
}

// "call" (or run) the function with these specific input values (aka "arguments")
var stephaniesSandwich = makeSandwich("turkey", "pepperjack", "wheat");
console.log(stephaniesSandwich);

var brendonsSandwich = makeSandwich("tuna", "cheddar", "pita");
console.log(brendonsSandwich);
