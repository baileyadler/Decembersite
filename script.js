"use strict";
//generate prefix of name
function genPrefix(firstName) {
  if (firstName.length > 4) {
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
  } else {
    return "Home";
  }
}

//Generate middle name
function genMiddleName(roadType, favColor) {
  if (roadType === "road") {
    return `${favColor}ridge`;
  } else if (roadType === "street") {
    return `${favColor}son`;
  } else if (roadType === "court") {
    return `${favColor}field`;
  } else if (roadType === "avenue") {
    return `${favColor}man`;
  } else {
    return `${favColor}stone`;
  }
}

//generate last name
function genLastName(lastName) {
  const lastLetter = lastName.charAt(lastName.length - 1).toLowerCase();
  if (lastLetter === "a") {
    return "Dinner";
  } else if (lastLetter === "b") {
    return "Breakfast";
  } else if (lastLetter === "c") {
    return "Lunch";
  } else {
    return "Coffee";
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
  const favoriteColor = document.getElementById("favoriteColor").value.trim();
  const favoriteAnimal = document.getElementById("favoriteAnimal").value.trim();

  //generate each part of the name using helper functions
  const prefix = genPrefix(firstName);
  const newFirstName = genFirstName(firstName);
  const genMiddleNamee = genMiddleName(roadType, favoriteColor);
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
