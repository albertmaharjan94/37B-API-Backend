// Promise and file handling CRUD
// CRUD
const products = [
    { id: 1, name: "iPhone", price: 20000.21 },
    { id: 2, name: "Samsung", price: 15000.21 },
];

// Create
const newProduct = { id: 3, name: "OnePlus", price: 10000.21 };
products.push(newProduct);

// Read all 
console.log(products);
// Read one
const product = products.find( (p) => p.id == 2 ); // returns first match
console.log(product);
// Read one with index
const productIndex = product.findIndex( (p) => p.id == 2 ); // returns index of first match
console.log(productIndex, products[productIndex]);

// update
const updateIndex = products.findIndex( (p) => p.id == 2 );
products[updateIndex].price = 16000.21;
console.log(products);
// spread operator to update
products[updateIndex] = { ...products[updateIndex], price: 17000.21 }; 
products[updateIndex] = {
    ...products[updateIndex], // spread operator to copy existing properties
    ...{ name: "Samsung Galaxy", status: "inactive"} // spread operator to update/add
}
// delete
const deleteIndex = products.findIndex( (p) => p.id == 1 );
products.splice(deleteIndex, 1); // remove from index, 1 item
console.log(products);

// search
const searchResult = products.filter( (p) => p.id > 1 ); // returns all matches
console.log(searchResult);

// Converting to promise
const createProduct = (product) => new Promise(
    (resolve, reject) => {
        if(!product.id) return reject("Product id is required");

        product.name = product.name || "Unknown product";
        products.push(product);
        return resolve(product);
    }
);
const run = async() => {
    try{
        const result = await createProduct({ id: 4, price: 5000.21 });
        console.log(result);
    }catch(err){
        console.log("Error occured");
    }
}