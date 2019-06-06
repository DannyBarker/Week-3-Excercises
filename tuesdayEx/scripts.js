// Tuesday Exercise 1
// Tuesday Exercise 1
// Tuesday Exercise 1

let listOfObjects = [
  {
    name: "Bob",
    department: "sales",
    title: "sales manager"
  },
  {
    name: "Tina",
    department: "finance",
    title: "director of finance"
  },
  {
    name: "Randy",
    department: "IT",
    title: "hardware guy"
  },
  {
    name: "Glenda",
    department: "C-suite",
    title: "CEO"
  }
];

for (let i = 0; i < listOfObjects.length; i++) {
  let name = listOfObjects[i].name;
  let title = listOfObjects[i].title;
  console.log(`${name}'s job title is ${title}`);
}

let nums = [1, 2, 3, 4, 5];
nums.forEach(function(item) {
  console.log("This is a number:", item);
});

//   Tuesday Exercise 2
//   Tuesday Exercise 2
//   Tuesday Exercise 2

function dogBreed(breed) {
  if (breed) {
    return `my favorite dog breed is ${breed}.`;
  } else {
    return `I like cats`;
  }
}
let message = dogBreed("Mountain Mastiff");
console.log(`When it comes to pets,`, message);
let sad = dogBreed();
console.log(`When it comes to pets,`, sad);



// Lightning Exercise 1
// Lightning Exercise 1
// Lightning Exercise 1
// #1 Use dot notation to access the value of the key "meaning_of_life" in this object
// Now access it using a variable called "meaning": `let meaning = "meaning_of_life"`

let hitchhikers_guide = {
    characters: ["Zaphod", "Arthur", "Ford", "Trillian"],
    catchphrase: "Don't Panic",
    random_facts: {
        copies_sold: 14000000,
        formats: ["radio", "TV", "film", "graphic novel"],
        ultimate_answer: {
            meaning_of_life: 42
        }
    }
};

console.log(hitchhikers_guide.random_facts.ultimate_answer.meaning_of_life)
let meaning = hitchhikers_guide.random_facts.ultimate_answer.meaning_of_life;
console.log(meaning)


// Lightning Exercise 2
// Lightning Exercise 2
// Lightning Exercise 2
// 1. Using the object above, console log "Our company's lawyer is Jeff Winger"
//  using dot notation to access 'name'
// 2. Console log "Jeff was hired on 09/22/2010" using bracket notation.
// 3. Add a new key, `vacation_days`, and its value, `20`, to `employee`. Use either dot or
//  bracket notation. Does it matter which one you use? Try both to find out.

let employee = {
    name: "Jeff Winger",
    age: 37,
    department: "legal",
    hire_date: "09/22/2010",
  }

  console.log(`Our company's lawyer is ${employee.name}`)
  console.log(`Jeff was hired on ${employee['hire_date']}`)
  employee.vacation_days = 20;
  console.log(employee);
  
  let eom = "employee_of_the_month";
  //   4. Use the variable above to add a new property to `employee`.
  //  Set its value to `false`. Should you use dot or bracket notation?
  employee[eom] = false;



  // Lightning Exercise 3
  // Lightning Exercise 3
  // Lightning Exercise 3
//   1. Add an action that the painter can perform.
// 2. Have her take that action by execucting the method you created.

  let painter = {
    tools: ["brush", "roller", "caulk", "sandpaper", "dropcloth"],
    uniform: "white overalls",
    cost_per_hour: 25.00,
    insured: true,
    service: [],
    addService: function(need) {
        this.service.push(need);
        console.log(`${need} has been added to service!`);
    },
    action: function(object) {
        return `The painter will paint the ${object}`;
    },
    newTools: function(tool) {
        this.tools.push(tool);
        console.log(`${tool} has been added!`);
    },
  }
  
console.log(painter);

painter.addService('paint-job');
painter.addService('redo');

console.log(painter.action('wall'));
painter.newTools('water-bucket');



// Create an index.html file with a section element with an ID of 'family':
// Loop over this array of objects and insert the names of the family member
// s into `<h3>` tags, and append them to the DOM.


let family = [
    {
      name: "Fred Jones",
      age: 49,
      title: "parent"
    },
    {
      name: "Pat Jones",
      age: 50,
      title: "parent"
    },
    {
      name: "Bubba Jones",
      age: 20,
      title: "adult child"
    },
    {
      name: "Kelly Jones",
      age: 12,
      title: "dependent child"
    },
    {
      name: "Bartleby",
      age: 3,
      title: "pet"
    }
  ]

let famContainer = document.querySelector("#family");

let layout = function nameList(arrayObject) {
    return `<h3>${arrayObject.name}</h3>`
}

family.forEach( function(taco) {
    famContainer.innerHTML += layout(taco)
})

// This also works
// let layout = function (arrayObject) {
//     return `<h3>${arrayObject.name}</h3>`;
// }

// function listOfFamilyNames() {
//     for (let i = 0; i < family.length; i++)
//     famContainer.innerHTML += layout(family[i]);
// }

