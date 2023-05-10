//OBJECTS//

const mine = {
    firstName: "Vaish", 
    lastName: "RP", 
    course: "BTech",
    branch: "CSE",
    eyeColor: "brown",
    college:"PU BNC",
    id: 0662,
    age: 21,
    fullName: function() {
      return this.firstName + " " + this.lastName;
    
    }
  };
  console.log(mine.firstName + " " + mine.lastName + " is " + mine.age + " years old and studies " + mine.course + " in " + mine.college);
  console.log("");
  console.log("------------------------------------------------------");

  console.log(mine.firstName + " " + mine.lastName + " is " + mine.age + " years old and has " + mine.eyeColor + " eyes.");
  console.log("");
  console.log("------------------------------------------------------");

  console.log(mine.fullName());
  console.log("");
  console.log("------------------------------------------------------");


  //--------------------------------------------------------------------------------------------------------------------------------------//

  //ITERABLES//
  //over a string

  const name = "VAISHRP";
  for (const x of name) {
    console.log(x);
  }
  console.log("");
  console.log("------------------------------------------------------");

 console.log("Length of given string is" + " " + name.length);
 console.log("");
 console.log("------------------------------------------------------");

 //MAP

  //over a map

  const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
  let map = "";
  for (const y of fruits) {
    map += y + "<br>";
    console.log(y);
  } 
  console.log("------------------------------------------------------");

   console.log("");
   fruits.delete("apples");
  console.log(fruits);
  console.log("------------------------------------------------------");
  console.log("");
  

  //map.set

const fruit = new Map();
fruit.set("apples", 500);
fruit.set("bananas", 300);
fruit.set("oranges", 200);
console.log("Value of the oranges is" + " " + fruit.get("oranges"));
console.log(""); 
console.log("------------------------------------------------------");

  //over an array

const letter = ["V","R","P"];
let text = "";
for (const z of letter) {
  text += z + "<br>";
  console.log(z);
}
  console.log("");
  console.log("------------------------------------------------------");


  //over an set
  const pet = new Set(["Jacky","Byra","Ram"]);
  let set = "";
  for (const v of pet) {
    set += v + "<br>";
    console.log(v);
  }
  console.log("");
  console.log("------------------------------------------------------");

  console.log("Size of the set is" + " " + pet.size);
