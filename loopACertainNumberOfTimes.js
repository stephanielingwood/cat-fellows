function constructCatHTML(name, description) {
  var newCat = '<article>' +
    '<img src="http://placekitten.com/200/300">' +
    '<h3>' +
    name +
    '</h3>' +
    '<p>' +
    description +
    '</p>' +
    '</article>';
  return newCat;
}

// prompt user if they want to add a cat
var wantsToAddCat = prompt("Do you want to add a cat?");

var numberOfCats = prompt('How many cats do you want to add?');

// while (numberOfCats > 0) {
//   // if so, ask for name and description
//   var catName = prompt("What is the cat's name?");
//   var catDescription = prompt("What is the cat's description?");

//   // give name and description to the constructCatHTML function to let it do its thing
//   var newCatHtml = constructCatHTML(catName, catDescription);

//   // hand the resulting HTML off to document.write
//   console.log(newCatHtml);
//   document.write(newCatHtml);

//   numberOfCats--;
// }

for (numberOfCats; numberOfCats > 0; numberOfCats--) {
  // if so, ask for name and description
  var catName = prompt("What is the cat's name?");
  var catDescription = prompt("What is the cat's description?");

  // give name and description to the constructCatHTML function to let it do its thing
  var newCatHtml = constructCatHTML(catName, catDescription);

  // hand the resulting HTML off to document.write
  console.log(newCatHtml);
  document.write(newCatHtml);
}
