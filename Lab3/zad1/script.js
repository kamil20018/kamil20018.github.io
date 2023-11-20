var productTable = [];
var tempTable = [];
var table;
class product{
    constructor(id, name, desc){
        this.id = id;
        this.name = name;
        this.desc = desc;
    }
}


fetch('https://dummyjson.com/products/').then((response) => response.json()).then((data) => {
    for(var i = 0; i < 30; i++){
        var id = i;
        var name = data["products"][i]["title"];
        var desc = data["products"][i]["description"];
        productTable.push(new product(id, name, desc));
    }
    createTable(productTable);
});;


function createTable(tableData) {
    table = document.createElement('table');
    var tableBody = document.createElement('tbody');

    for(var i = 0; i < 30; i++){
        var rowData = tableData[i];
        var row = document.createElement('tr');
        var cell = document.createElement('td');
        cell.appendChild(document.createTextNode(rowData.id + ", " + rowData.name + ", " + rowData.desc));
        row.appendChild(cell);
        tableBody.appendChild(row);
    }

    table.appendChild(tableBody);
    document.body.appendChild(table);
}
document.getElementById("noSort").addEventListener('click', ()=>{
    table.remove();
    tempTable = productTable;
    tempTable.sort(function (a, b){
        return a.id - b.id;
    })
    createTable(productTable);
});

document.getElementById("sNameDesc").addEventListener('click', ()=>{
    table.remove();
    tempTable = productTable;
    tempTable.sort(function (a, b) {
        if (a.name.toLowerCase() > b.name.toLowerCase()) {
            return -1;
        }
        if (b.name.toLowerCase() > a.name.toLowerCase()) {
            return 1;
        }
        return 0;
    });
    createTable(tempTable);
});

document.getElementById("sNameAsc").addEventListener('click', ()=>{
    table.remove();
    tempTable = productTable;
    tempTable.sort(function (a, b) {
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
            return -1;
        }
        if (b.name.toLowerCase() < a.name.toLowerCase()) {
            return 1;
        }
        return 0;
    });
    createTable(tempTable);
});