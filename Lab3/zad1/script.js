var productTable = [];

for(i = 1; i < 31; i++){
    productTable.push('https://dummyjson.com/products/' + i);
    console.log(productTable[i - 1])
}
//productTable.map((product) => console.log("chujowy "  + product));
fetch('https://dummyjson.com/products/').then((response) => response.json()).then((data) => {
    console.log(data);
});;


// Promise.allSettled(productTable.map(product => fetch(product))).then(productTable.map(response=>response.json())).then((result) => {console.log(result)});