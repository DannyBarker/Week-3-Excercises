// const blogContainer = document.querySelector(".blogPosts");
// console.log(blogContainer);
// const myArticles = document.querySelectorAll(".blogArticle");
// console.log(myArticles);
// for (let i = 0; i < myArticles.length; i++) {
//   myArticles[i].classList.add("currentBlog");
// }
// blogContainer.classList.add("currentBlog");
// console.log(blogContainer);

// Dot notation example
// Dot notation example
// Dot  and bracket notation example

// let lassie = {
//   name: "Lassie",
//   age: 8,
//   breed: "collie"
// };

// Setting a value with dot notation
// Setting a value with dot notation

// lassie.age = 9;
// console.log("change lassie age", lassie);
// //  adding property value with dot notation

// lassie.barksToday = 20;

// bracket notation
// bracket notation

// console.log("lassie's breed", lassie["breed"]);

// let keyToLookup = "breed";

// console.log("bracket var", lassie[keyToLookup]);

//  adding property value with bracket notation

// lassie["color"] = "brown and white";

for (let foo in lassie) {
  console.log(`lassie's ${foo}`, lassie[foo])
}


// object values can be any datat type
// object values can be any datat type

// lassie.nicknames = ["Lass", "Pooch", "Doggo", "Lassie McBarkbark"]

// lassie.family = {owner: "Timmy", personWhoFeeds: "Mom", humanWhoThrowsStick: "Dad"}

// lassie.nicknames = {faveNick: "Doggo", leastFaveNick: "Lassie McBarkbark"}


// Dot and square-bracket notation Lighting exercises 
// Dot and square-bracket notation Lighting exercises 
// Dot and square-bracket notation Lighting exercises 

// const empireStateBuilding = {
//   stories: 103,
//   height: 1453,
//   address: "350 Fifth Avenue, Manhattan, New York 10118",
//   squareFeet: 2768591,
//   constructionDate: 1931,
//   cost: 40948900,
//   owner: "Empire State Realty Trust",
//   eastWestLength: 424,
//   northSouthLength: 187,
//   architect: "Shreve, Lamb & Harmon"
// }

// let empireStateBuildingAddress = "address"
// let empireStateBuildingDate = "constructionDate"
// let empireStateBuildingCost = "cost"
// let empireStateBuildingOwner = "owner"
// let empireStateBuildingArchitect = "architect"

// console.log('stories', empireStateBuilding.stories, 'height', empireStateBuilding.height, 'squareFeet', empireStateBuilding.squareFeet,'eastWestLength', empireStateBuilding.eastWestLength, 'northSouthLength', empireStateBuilding.northSouthLength)
// console.log('address', empireStateBuilding[empireStateBuildingAddress], 'architect', empireStateBuilding[empireStateBuildingArchitect], 'cost', empireStateBuilding[empireStateBuildingDate], 'date', empireStateBuilding[empireStateBuildingDate], 'owner', empireStateBuilding[empireStateBuildingOwner])

// Arrays as Values Lightning excersises
// Arrays as Values Lightning excersises
// Arrays as Values Lightning excersises

// const nashvilleSoftwareSchool = {
//   founded: 2012,
//   director: "John Wark",
//   instructors: {
//       fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
//       partTime: ["Zoe", "Nathan"]
//   },
//   address: "500 Interstate Blvd. S"
// }

// console.log('partTime Instr.', nashvilleSoftwareSchool.instructors.partTime, 'fullTime Instr.', nashvilleSoftwareSchool.instructors.fullTime)
// console.log('index notation', nashvilleSoftwareSchool.instructors.fullTime[4], nashvilleSoftwareSchool.instructors.partTime[0])

// Examples
// Examples
// Examples
// Examples

// function sayHello() {
//     console.log("hello")
// }

// let result = sayHello()


// function sayHelloName() {
//   return "Hello, Fred";
// }

// sayHelloName()
// let greeting = sayHelloName

// function createMessage() {
//   return `When I see my friend, I say ${sayHelloName()}`
// }

// function sayHello(name) {
//   return `Hello, ${name}`;
// }

// console.log(sayHello("Madi"))

// let names = ["fred", "Jon", "bill"]

// for (let i = 0; i < names.length; i++) {
//   sayHello(names[i]);
//   console.log(sayHello(names[i]));
// }


