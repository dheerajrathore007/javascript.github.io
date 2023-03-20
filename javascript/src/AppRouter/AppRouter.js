import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import StringMethod from '../Components/StringMethod'
import ArrayMethods from '../Components/ArrrayMethods'
import ObjectMethods from '../Components/ObjectMethods'
import IterationMethods from '../Components/IterationMethods'


const AppRouter = () => {

    return(
        <BrowserRouter>
           <Navbar />

           <Routes>
           <Route path='*' element={<StringMethod />} />
             
             <Route path='/stringMethod' element={<Navigate to="/arrayMethods" />} />
             <Route path='/arrayMethods' element={<ArrayMethods />} />
             <Route path='/ObjectMethods' element={<ObjectMethods />} />
             <Route path='/IterationMethods' element={<IterationMethods/>} />
           </Routes>
        </BrowserRouter>
    )
}
export default AppRouter