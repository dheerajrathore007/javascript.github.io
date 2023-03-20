import React from 'react'



const StringMethods = () => {
  
    let a  = "Dheeraj"
    let b = '"I Am a React Native Developer"'
    let c = "Rathore"
     let d = `My name is ${a}`
    return (

        <>
          <h1>Methods of String is here:-</h1>
          <h1> Length of {a} is : {a.length} </h1>
          <h1> slice of  of {a} between(4,7) is : {a.slice(4,7)} </h1>
          <h1> substring of  of {a} between(4,7) is : {a.substring(4,7)} </h1>
          <h1> substr of  of {a} between(4,7) is : {a.substr(4,7)} </h1>
          <h1> replace of {a} is : {a.replace("Dheeraj","Druv")} </h1>
          <h1> replace of {b} is : {b.replace("Native","Js")} </h1>
          <h2> To uppercase of {b} is :{b.toUpperCase()}</h2>
          <h2> To LowerCase of {b} is :{b.toLowerCase()}</h2>
          <h2> concate of "'A & C'" is : {a.concat(c)}</h2>
          <h2> template leteral is {d} </h2>

        </>
    )
}
export default StringMethods