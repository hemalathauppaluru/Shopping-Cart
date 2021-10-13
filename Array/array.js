var friuts = ["Apple", "Banana", "Orange", "Mango"];
console.log("-------Friuts----");
console.log(friuts[0]);
console.log(friuts[1]);

console.log("---------------");
for (var i = 0; i < friuts.length; i++) {
  console.log("friuts at index " + i + " " + friuts[i]);
}

console.log("----------------------------");
for (var i = friuts.length - 1; i> 0; i--) {
  console.log(`friut at index ${i} ${friuts[i]}`);
}
console.log("---------------------");

var person = ["Hemalatha", 22, "White", false];
for (var i = 0; i < person.length; i++) {
  console.log(person[i]);
}

console.log("----------1---------------");
var data = [null, undefined, "string", 13, true, , ,];
for (var i = 0; i < data.length; i++) {
  console.log(data[i]);
  console.log(data.length);
}

console.log("---------------new keyword--------------");
var movies = new Array(
  "KGF 2",
  "Pushpa",
  "RRR",
  "Spiderman no way home",
  "Jersey",
  "83"
);
for (var i = 0; i < movies.length; i++) {
  console.log(movies[i]);
}
console.log("----------------");
// movies.length =0
movies = [];  //--->for removing ALL elements 
console.log("Movies", movies);
console.log("-----------------");

var books = [
  {
    title: "Java",
    price: 1500,
  },
  {
    title: "Javascript",
    price: 1750,
  },
  {
    title: "Python",
    price: 500,
  },
];
for (var i = 0; i < books.length; i++) {
  if (books[i].price > 1000) {
    console.log(books[i]);
  }
}
console.log("-------===============----------");
for (var i = 0; i < books.length; i++) {
  if (books[i].title.length > 4) {
    console.log(books[i]);
  }
}

