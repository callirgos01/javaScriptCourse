//rest parameters vs arguments keyword

function Store() {
    var aisle = {
        fruits:[],
        vegetable:[]
    }
    return {
        add: function(category, ...items){
            aisle[category].push(...items);
        },
        aisle: aisle
    }
}
var myGroceryStore = new Store();

myGroceryStore.add('fruits', 'banana', 'apple');

console.log(myGroceryStore.aisle);