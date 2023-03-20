import React from "react";


const IterationMethods = () => {
  
// let arr = [
//     {name:"add", func: add5},
//     {name:"sub", func: sub5},


// ]
//     function add5(element, index) {

//         console.log(index, ":")

//     }

//     const add = (elem, ind, arr) => {console.log(elem+5)} 

//     function sub5(element, index ,array) {

//         console.log(element - 5)

//     }
     

//     function MapFunc(value, index,array){
//         value = arr * 2
//         return value
    
//     }

//  const a= [1,2,5,6]

//  const b= a.map(MapMethod);

//  function MapMethod(value,index,array){
//     console.log("value",value)
//     // return value*2;
   
//  }

//  function toReduce(){


//ForEach Method.
let sum = 0;
const numbers = [65,4, 44, 12, 4];
numbers.forEach(myFunction);
function myFunction(item) {
  sum += item;
}
 

//map Methods
 let A = [65,4, 44, 12, 4];
 function mapFunction(){ 
const newArr = A.map(myFunction)
console.log(newArr)
function myFunction(num) {
  return num * 10;
 }
}


//filter methods
function FilterFunction(){
const result = A.filter(Adult);
console.log(result)
function Adult(A) {
  return A >= 20;
}
}

//Some methods
function SomeFunction(){
    const result = A.some(Adult);
    console.log(result)
    function Adult(A) {
      return A >= 20;
    }
    }

//Every methods
function EveryFunction(){
    const result = A.every(Adult);
    console.log(result)
    function Adult(A) {
      return A >= 20;
    }
    }

    //index of method
    function indexofFunction(){
    const value = A.indexOf(4, 2);
    console.log(value)
}
    //lastindexof Methods
    function LastindexofFunction(){
        const value = A.lastIndexOf(4,2);
        console.log(value)
    }

    return(
        <>
            <h1>All IterationMethods Are here:-</h1>
            {/* <button onClick={newfunc}>foreach method</button> */}
            <button onClick={mapFunction}>Map method</button>
            <button onClick={FilterFunction}>filter method</button>
            <button onClick={SomeFunction}>Some method</button>
            <button onClick={EveryFunction}>Every method</button>
            <button onClick={indexofFunction}>indexOf method</button>
            <button onClick={LastindexofFunction}>LastindexOf method</button>

          {/* <button onClick={() => arr.forEach( (elem) => {console.log(elem+5)})}>
            Add 5</button>
            {arr.map((ele,idx) => <button onClick={add5}> {idx}</button> )}
          <button onClick={() => arr.forEach(sub5)}>Sub 5</button>
          <button onClick={() => arr.map(MapFunc)}>Mapping</button>
          <button onClick={MapMethod}>Map method</button> */}
         </>
    )

        }
export default IterationMethods