// input: name, description
// work: construct an html string that we can hand off to document.write
// output: an html article with placeholder pic, name, and description

// pseudocode
// input: name - "fluffy", description - "softest cat ever"
// work:
// '<article>' +
//   '<img src="http://placekitten.com/200/300">' +
//     '<h3>' +
//       'Another cat again' +
//       '</h3>' +
//     '<p>' +
//       'Cat info goes here' +
//     '</p>' +
//   '</article>'
// output:
/*
<article>
  <img src="http://placekitten.com/200/300">
    <p>Photo by Ramiz Dedaković on Unsplash</p>
    <h3>
      Fluffy
        </h3>
    <p>
      softest cat ever
    </p>
</article>
*/

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

// wantsToAddCat = wantsToAddCat.toLowerCase();
// while (wantsToAddCat === 'yes')

while (wantsToAddCat === 'yes' || wantsToAddCat === 'Yes' || wantsToAddCat === 'YES') {
  // if so, ask for name and description
  var catName = prompt("What is the cat's name?");
  var catDescription = prompt("What is the cat's description?");

  // give name and description to the constructCatHTML function to let it do its thing
  var newCatHtml = constructCatHTML(catName, catDescription);

  // hand the resulting HTML off to document.write
  console.log(newCatHtml);
  document.write(newCatHtml);

  wantsToAddCat = prompt('Do you want to add another cat?');
}
