// TEST DATA

let mexican = [
  { id: 1, name: "carnitas", price: 21 },
  { id: 2, name: "asada", price: 13 },
];

let american = [
  { id: 1, name: "burgers", price: 15 },
  { id: 2, name: "pizza rolls", price: 10 },
];

//MAP

// foods:[{id:number,name:string, price:number},...]

/// returns array of formatted strings[] (you choose what these look like)
console.log('--------------------------------------------------------------------------------')


const about = (foods) => {
  foods = foods.map((x) => {
    return `${x.name}: ${x.price}$, id is: ${x.id}`;
  });
  return foods;
};
console.log(about(mexican));
console.log(about(american));

// [...]

// foods:[{id:number,name:string, price:number},...]

// food: {id:number,name:string, price:number}

/// returns new array with food add
console.log('--------------------------------------------------------------------------------')


let newFood = { id: 3, name: "philly", price: 18 };

const addFood1 = (food) => {
  newFood = [...american, food];
  return newFood;
};
console.log("Original food: ", american);
console.log("new food: ", addFood1(newFood));

// [...]

// foods:[{id:number,name:string, price:number},...]

// id:number,

// name:string,

// price:number}

/// returns new array with food add
console.log('--------------------------------------------------------------------------------')


let newFood2 = { id: 3, name: "enchilada", price: 32 };

const addFood2 = (food) => {
  newFood = [...mexican, food];
  return newFood;
};
console.log("Original food: ", mexican);
console.log("new food: ", addFood2(newFood2));

//MAP

// foods:[{id:number,name:string, price:number},...]

// id:number,

// price:number}

/// returns new array with the price updated with the id given
console.log('--------------------------------------------------------------------------------')


// const updateFood1=(foods, id, price)=>{

//  // Update - Map

// }

const updateFood1 = mexican.map((p) => (p.id === 1 ? { ...p, price: 15 } : p));

console.log("Original: ", mexican);

console.log("New price: ", updateFood1);

// //MAP

// // foods:[{id:number,name:string, price:number},...]

// // id:number,

// // food:{id:number,name:string, price:number}}

// /// returns new array with the food item updated with the id given
console.log('--------------------------------------------------------------------------------')


const updateFoodName = (foods, id, name) => {
  let newFoods = foods.map((food) => {
    if (food.id === id) {
      food.name = name;
    }
    return food;
  });
  return newFoods;
};

console.log('Original: ', american)

console.log(updateFoodName(american, 2, 'steak'));

// // FILTER

// // foods:[{id:number,name:string, price:number},...]

// // id:number,

// // removes the food with the given the id
console.log('--------------------------------------------------------------------------------')


const deleteFood = (foods, id) => {
  let newFoods = foods.filter((food) => food.id !== id)
  return newFoods;
};
console.log('Original: ', american)

console.log('Removed food: ', deleteFood(american, 2));

// FILTER

// foods:[{id:number,name:string, price:number},...]

// price:number,

// removes the food with price over price given
console.log('--------------------------------------------------------------------------------')

const deleteFoodPrice = (foods, price) => {
  let newPrice = foods.filter((food) => food.price <= price)
  return newPrice;
};
console.log('Original: ', american)
console.log('Removed prices: ', deleteFoodPrice(american, 10));