import React from 'react'
import {Router,Routes, Route,Redirect, BrowserRouter} from 'react-router-dom'
import { authRoutes, publicRoutes } from '../routes'

const AppRouter=()=>{
    const isAuth = true
    return(
        <Routes>  
                {
                    isAuth && authRoutes.map(({path, Component})=><Route key={path} path={path} element={<Component/>} exact></Route>)
                }
                {
                    publicRoutes.map(({path, Component})=><Route key={path} path={path} element={<Component/>} exact></Route>)
                }                
        </Routes>      
    )
}

export default AppRouter