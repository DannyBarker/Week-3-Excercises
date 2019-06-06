// 1) Ask the db to gimmie some data
fetch("http://localhost:8088/food")
// 2) wait, using a Promise
// 3) receive the data
// 4) convert data to JS (and array of objects)
.then( data => data.json())
.then( food => {
    //  5) loop over the array of objects
    //  6) Do stuff to the data
    console.log('food :', food); //console.table(food), will return objects in table
    let foodContainer = document.querySelector("#food-list")
    // 7) Display the data in the DOM as HTML
    food.forEach( items => foodContainer.innerHTML += `<h2> I like to eat ${items.name}</h2>`);
})