import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Navbar = () => {


    const navigate = useNavigate()//Will return a function 

    return(
        <div> 
             
        <button onClick={() => navigate('/stringMethod')} className='navbarBtn' > String Method</button>
        <button onClick={() => navigate('/ArrayMethods')} className='navbarBtn'> Array Method</button>
        <button onClick={() => navigate('/IterationMethods')} className='navbarBtn'> Array Iteration Methods</button>
        <button onClick={() => navigate('/ObjectMethods')} className='navbarBtn'> Object Methods</button>
        <Link to="/IterationMethods">Click Me </Link>
 
     </div>
    )
} 

export default Navbar