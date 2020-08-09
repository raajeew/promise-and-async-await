class ArrayOperations{
    constructor(arr){
        this.arrItems = arr;
    }

    printSumOfArray(){
        let sumOfArray = this.arrItems.reduce(function(acc,item){
            return  acc+item;
        });
        console.log(sumOfArray);
    }

    filterItem(fitem){
        let filteredItems = this.arrItems.filter(function(item){
            return item > fitem;
        })
        console.log(filteredItems);
    }

    filterItem(fitem){
        let filteredItems = this.arrItems.filter(function(item){
            return item > fitem;
        })
        console.log(filteredItems);
    }

    someOfItems(fitem){
        let someItems = this.arrItems.some(function(item){
            return item > fitem;
        })
        console.log(someItems);
    }

    checkEveryItems(fitem){
        let everyItems = this.arrItems.every(function(item){
            return item < fitem;
        })
        console.log(everyItems);
    }
    findAnItem(fitem){
        let foundItems = this.arrItems.find(function(item){
            return item == fitem;
        })
        console.log(foundItems);
    }
}

class NewArrayMethods extends ArrayOperations{
    printHello(){
        console.log("Hello from NewArrayMethods class");
    }
}

let arrayOps= new ArrayOperations([2,1,2,3,5]);
arrayOps.printSumOfArray();
arrayOps.filterItem(1);
arrayOps.someOfItems(2);
arrayOps.checkEveryItems(10);
arrayOps.findAnItem(1);


let newarrayOps= new NewArrayMethods([2,1,2,3,5]);
newarrayOps.printHello();
newarrayOps.printSumOfArray();
