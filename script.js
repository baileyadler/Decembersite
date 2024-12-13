//generate prefix of name
function genPrefix(firstName) {
  if (firstName.length > 4) {
    return "The Great";
  } else {
    return "Master";
  }
}
//generate first name of name
function genFirstName(firstName) {
  const firstLetter = firstName.charAt(0).toLowerCase();
  if (firstLetter === "a") {
    return "Jeff";
  } else if (firstLetter === "b") {
    return "Mary";
  } else if (firstLetter === "c") {
    return "Henry";
  } else if (firstLetter === "d") {
    return "Patty";
  } else if (firstLetter === "e") {
    return "Fred";
  } else if (firstLetter === "f") {
    return "Eddy";
  } else {
    return "Joe";
  }
}

//Generate middle name
function genMiddleName(roadType, favColor) {
  if (roadType === "road") {
    return `${favColor}ridge`;
  } else if (roadType === "street") {
    return `${favColor}son`;
  } else if (roadType === `court`) {
    return `${favColor}field`;
  } else if (roadType === "lane") {
    return `${favColor}man`;
  } else {
    return `${favColor}stone`;
  }
}

//generate last name
function genLastName(lastName) {
  const lastLetter = lastName.charAt(lastName.length - 1).toLowerCase();
  if (lastLetter === "a") {
    return "Sweepy";
  } else if (lastLetter === "b") {
    return "Stormy";
  } else if (lastLetter === "c") {
    return "Spotty";
  } else {
    return "Sunny";
  }
}

//generate suffix
function genSuffix(favAnimal) {
  return `of the ${favAnimal}`;
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
  const genMiddleName = genMiddleName(roadType, favColor);
  const newLastName = genLastName(lastName);
  const suffix = genSuffix(favAnimal);
  // functions to capital word
  const capitalizedPrefix = tocapitalize(prefix);
  const capitalizedFirstName = tocapitalize(newFirstName);
  const capitalizedMiddleName = tocapitalize(MiddleName);
  const capitalizedLastName = tocapitalize(newLastName);

  //combine all parts to create full name
  const fullName = `${capitalizePrefix} ${capitalizedFirstName} ${capitalizedMiddleName} ${capitalizedLastName}`;

  document.getElementById("result").textContent = fullName;
}
//capitalizer function
function tocapitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}
