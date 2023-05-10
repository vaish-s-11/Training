//console.log("VAISH")

//PUSH METHOD

//  Add new items

  const pets = ["Jacky", "Byra", "Ram", "Blacky"];
  pets.push("Bosse");
  console.log(pets);

//length of an array

  const sis = ["Vaish", "Nesh", "Lil", "Ruth", "Sus"];
  const sisLength = sis.length;
  console.log(sisLength); 

//----------------------------------------------------------------------------------------------//

//CONCAT METHOD

// const arr1 = ["Vaish", "Nesh"];
// const arr2 = ["Parry"];
// const frnd = arr1.concat(arr2);
// console.log(frnd);

//Slice method

// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(1,3);
// console.log(citrus)

//Splice method

// const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
// fruits.splice(2, 1,  "lemon");
// console.log(fruits);

//---------------------------------------------------------------------------//

//JOIN MEHOD

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const text = fruits.join(" and ");
// console.log(text);

//----------------------------------------------------------------------------------//

//MAP METHOD

//sqrt

// const numbers = [2,4, 9, 16, 25];
// const sqrtNumbers = numbers.map(num => Math.sqrt(num));
// console.log(sqrtNumbers);

//multiply with 10

// const numbers = [65, 44, 12, 4];
// const multipliedNumbers = numbers.map(num => num * 10);
// console.log(multipliedNumbers);

//---------------------------------------------------------------------------------------------//

//Reverse method

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.reverse();
// console.log(fruits);

//----------------------------------------------------------------------------------------------//
//Filter method

 const age = [32, 33, 16, 40];
 const result = age.filter(age => age >= 18);
 console.log(result);
 

//------------------------------------------------------------------------------------------------//
//Some method

  const ages = [3, 10, 18, 20];
  let isAdultPresent = ages.some(age => age > 18);
  console.log(isAdultPresent);

//---------------------------------------------------------------------------------------------//

//For each method

  const fruits = ["apple", "orange", "cherry"];
  fruits.forEach(function(fruit) {
    console.log(fruit);
  });

//-----------------------------------------------------------------------------------------------//

//Forloop method

 const numbers = [1, 2, 3, 4, 5];
 for (let i = 1; i <= 5; i++) {
     console.log(i);
   }
  