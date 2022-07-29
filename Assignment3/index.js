

const arr = [1,2,3,4];

// arr.forEach((e,i)=>{
//      console.log(e+100,i);    
//})

Array.prototype.ourForEach = function(cb){
    // console.log(this);
    for (let i=0; i< this.length; i++){
        cb(this[i]);
    }
}

arr.ourForEach((e)=>{
    console.log(e+100);
})


// map function callback(currentValue, index=optional, array=optional)
// return new array

Array.prototype.ourMap = function(callback){
    const array = [];
    for (let i=0; i<this.length; i++) {
        const value  = callback(this[i],i,this)
        array.push(value);
    }
    return array;
}
/*
const a2 = arr.ourMap((e) =>{
    //console.log(e, i,arr);
    return e*10;
})

console.log(a2);
*/

// filter function callback(element, index, array)
// return new array

Array.prototype.ourFilter = function(callback){
    const array = [];
    for (let i=0; i<this.length; i++) {
        const flag  = callback(this[i],i,this);
        if(flag === true){
            array.push(this[i]);
        }  
    }
    return array;
}
/*
function isBigEnough(element) {
    return element >= 10;
  }
let filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
console.log(filtered);
*/

// reduce function callback(previousValue, currentValue, currentIndex, array) and initialValue
// return results

Array.prototype.ourReduce = function(callback,initialValue) {
    let previousValue, currentValue, currentIndex;
    if(initialValue){
        previousValue = initialValue;
        currentValue = this[0];
        currentIndex = 0;
        for(let i=0; i<this.length; i++){
            previousValue = callback(previousValue,currentValue, currentIndex);
            currentValue = this[i+1];
            currentIndex+=1;
        }
    } else {
        previousValue = this[0];
        currentValue = this[1];
        currentIndex = 1;
        for(let i=1; i<this.length; i++){
            previousValue = callback(previousValue,currentValue,currentIndex);
            currentValue = this[i+1];
            currentIndex+=1;
        }
    }
    return previousValue + currentValue;


}


const array = [15, 16, 17, 18, 19];

function reducer(previous, current, index) {
  const returns = previous + current;
  console.log(`previous: ${previous}, current: ${current}, index: ${index}, returns: ${returns}`);
  return returns;
}

array.ourReduce(reducer);


function foo() {
    return setTimeout(() => {
        return 5}, 2000)
}

const a = foo();
console.log(a)

setTimeout(() => {
    console.log(a)
}, 3000)



