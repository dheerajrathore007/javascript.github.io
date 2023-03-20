import { clear } from "@testing-library/user-event/dist/clear";
import React, { useState } from "react";

const ArrayMethods = () => {

    let bikes = ["Bajaj", "ninjaKawasaki", "splender", "TVS", "Duke"]
    const cars =["bmw","mercidies","verna","scaripon","fortunere"]

    const [bike, setBike] = useState(bikes)


    // Function to pop the element from the Array.
    function popFunc() {
        let newArr = [...bike]
        newArr.pop()
        setBike(newArr)
    }

   

    //Function to push new element to the Array.
    function pushFunc() {
        let newArr = [...bike]
        newArr.push("Fz")
        setBike(newArr)
    }

    //Function to Shift new element to the Array.
    function shiftFunc() {
        let newArr = [...bike]
        newArr.shift()
        setBike(newArr)
    }

    //Function to unShift new element to the Array.
    function unShiftFunc() {
        let newArr = [...bike]
        newArr.unshift("ZX10R")
        setBike(newArr)
    }

     //Function to delete new element to the Array.
     function deleteFunc() {
        let newArr = [...bike]
        delete newArr[0]
        console.log(newArr)
       
    }
    
    //Function to sort new element to the Array.
    function sortFunc() {
        let newArr = [...bike]
        newArr.sort()
        setBike(newArr)
    }


    //Function to reverse new element to the Array.
    function reverseFunc() {
        let newArr = [...bike]
        newArr.reverse()
        setBike(newArr)
    }


    //Function to concat new element to the Array.
    function concatFunc() {
          let newArr =  bikes.concat(["Abhishek", "Dheeraj"])
         setBike(newArr)
    }

    //Function to splice new element to the Array.
    function spliceFunc() {
        let newArr = [...bike]
        newArr.splice(2,2,"HFdelux","BMW")
        setBike(newArr)
    }

     //Function to slice new element to the Array.
     function sliceFunc() {
        console.log("Called")
        let newArr = bike.slice(2,4)
        console.log(bike)
        console.log(newArr)
        setBike(newArr)
    }
    
    return (
        <div>
         
            {bike.map((e) => {
                return <h1> {e}</h1>
            })}

            <h3>Remove the last element from the Array :</h3> 
            <button onClick={popFunc}> Remove</button>
            <button onClick={pushFunc}> Add </button>
            <button onClick={shiftFunc}>Shift</button>
            <button onClick={unShiftFunc}>unShift</button>
            <button onClick={deleteFunc}>delete</button>
            <button onClick={sortFunc}>sort</button>
            <button onClick={reverseFunc}>reverse</button>
            <button onClick={concatFunc}>Concat</button> 
            <button onClick={spliceFunc}>splice</button> 
            <button onClick={sliceFunc}>slice</button> 
        </div>
    )

}
export default ArrayMethods