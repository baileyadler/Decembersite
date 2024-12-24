"use strict";
//generate prefix of name (used or operator)
function genPrefix(firstName) {
  if (firstName.length > 4 || firstName.length === 2) {
    return "Plane";
  } else {
    return "Ferry";
  }
}
//generate first name of name
function genFirstName(firstName) {
  const firstLetter = firstName.charAt(0).toLowerCase();
  if (firstLetter === "a") {
    return "Aruba";
  } else if (firstLetter === "b") {
    return "Bermuda";
  } else if (firstLetter === "c") {
    return "Connecticut";
  } else if (firstLetter === "d") {
    return "Delaware";
  } else if (firstLetter === "e") {
    return "Europe";
  } else if (firstLetter === "f") {
    return "Florida";
  } else if (firstLetter === "g") {
    return "Georgia";
  } else if (firstLetter === "h") {
    return "Hawaii";
  } else if (firstLetter === "i") {
    return "Indiana";
  } else if (firstLetter === "j") {
    return "Japan";
  } else if (firstLetter === "k") {
    return "Kenya";
  } else if (firstLetter === "l") {
    return "Louisiana";
  } else if (firstLetter === "m") {
    return "Maine";
  } else if (firstLetter === "n") {
    return "Netherlands";
  } else if (firstLetter === "o") {
    return "Ohio";
  } else if (firstLetter === "p") {
    return "Portugal";
  } else if (firstLetter === "q") {
    return "Quebec";
  } else if (firstLetter === "r") {
    return "Rome";
  } else if (firstLetter === "s") {
    return "Spain";
  } else if (firstLetter === "t") {
    return "Thailand";
  } else if (firstLetter === "u") {
    return "Ukraine";
  } else if (firstLetter === "v") {
    return "Virginia";
  } else if (firstLetter === "w") {
    return "Wisconsin";
  } else if (firstLetter === "x") {
    return "Italy";
  } else if (firstLetter === "y") {
    return "Yemen";
  } else if (firstLetter === "z") {
    return "Zurich";
  } else {
    return "Home";
  }
}

//Generate middle name
function genMiddleName(roadType, favSport) {
  if (roadType === "road") {
    return `${favSport}sunny`;
  } else if (roadType === "street") {
    return `${favSport}rainy`;
  } else if (roadType === "court") {
    return `${favSport}stormy`;
  } else if (roadType === "avenue") {
    return `${favSport}snowy`;
  } else {
    return `${favSport}windy`;
  }
}

//generate last name (used or operator)
function genLastName(lastName) {
  const lastLetter = lastName.charAt(lastName.length - 1).toLowerCase();
  if (lastLetter === "a") {
    return "Beach";
  } else if (lastLetter === "b" || lastLetter === "f") {
    return "Pool";
  } else if (lastLetter === "c" || lastLetter === 'g') {
    return "Ocean";
  } else if (lastLetter === "d" || lastLetter === 'h') {
    return "Shore";
  } else if (lastLetter === "e" || lastLetter === 'i') {
    return "Sea";
  } else {
    return "Bay";
  }
}

//generate suffix
function genSuffix(favoriteAnimal) {
  return `of the ${favoriteAnimal}`;
}

//master function to assemble full name
function genFullName() {
  //define variables from inputs
  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const roadType = document.getElementById("roadType").value;
  const favoriteSport = document.getElementById("favoriteSport").value.trim();
  const favoriteAnimal = document.getElementById("favoriteAnimal").value.trim();

  //generate each part of the name using helper functions
  const prefix = genPrefix(firstName);
  const newFirstName = genFirstName(firstName);
  const genMiddleNamee = genMiddleName(roadType, favoriteSport);
  const newLastName = genLastName(lastName);
  const newSuffix = genSuffix(favoriteAnimal);
  // functions to capital word
  const capitalizePrefix = tocapitalize(prefix);
  const capitalizedFirstName = tocapitalize(newFirstName);
  const capitalizedMiddleName = tocapitalize(genMiddleNamee);
  const capitalizedLastName = tocapitalize(newLastName);
  const capitalizednewsuffix = tocapitalize(newSuffix);

  //combine all parts to create full name
  const fullName = `${capitalizePrefix} ${capitalizedFirstName} ${capitalizedMiddleName} ${capitalizedLastName} ${capitalizednewsuffix}`;

  document.getElementById("result").textContent = fullName;
}
//capitalizer function
function tocapitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}
