import React from 'react'
import {Router,Routes, Route,Redirect, BrowserRouter} from 'react-router-dom'
import { authRoutes, publicRoutes } from '../routes'

const AppRouter=()=>{
    const isAuth = false
    return(
        
            <Router>
                <Routes>
                    {
                    isAuth && authRoutes.map(({path, Component})=><Route key={path} path={path} component={Component} exact></Route>)
                }
                {
                    publicRoutes.map(({path, Component})=><Route key={path} path={path} component={Component} exact></Route>)
                }
                </Routes>
                
            </Router>        
    )
}

export default AppRouter