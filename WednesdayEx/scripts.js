// 1) Make an array from the one below called fave_demo that contains only ages from 18 - 49

let ages = [12, 23, 89, 16, 34, 19, 2, 7, 45, 50, 26, 102];

let fave_demo = []; 
ages.forEach(certainAge => {
    if (certainAge >= 18 && certainAge <= 49) {
        fave_demo.push(certainAge)
    }
});
console.log(fave_demo);

// 2) Loop over the following array and
// * capitalize 'the'
// * insert a comma after 'teacher'
// * output "Yoda says, "The greatest teacher, failure is"

let yoda_quote = ["the", "greatest", "teacher", "failure", "is"]

let outPut = "";
let YodaSays = [];
yoda_quote.forEach(words => {
    if (words === 'the') {
        words = 'The'
    }
    if (words === "teacher" ) {
        words = 'teacher,'
    }
   YodaSays.push(words)
});
console.log(`Yoda says, "${YodaSays.join(' ')}."`)



// if (words === 'the') {
//     words = "The";
//     let caps = words;
//     outPut += caps;
// } else {
//     outPut += words;
// }
// if (words === 'teacher') {
//     let puncuation = `${words}, `
//     outPut += puncuation;
// }
//     console.log(outPut);

