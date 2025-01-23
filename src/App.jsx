import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import {Routes, Route } from 'react-router-dom'
import { Home } from './components/Home'
//import { About } from './components/About'

import { Navbar } from './components/Navbar'
import { OrderSummary } from './components/OrderSummary'
import { NoMatch } from './components/NoMatch'
import { Products } from './components/Products'
import { FeaturedProducts } from './components/FeaturedProducts'
import { NewProducts } from './components/NewProducts'
import { Users } from './components/Users'
import { UserDetails } from './components/UserDetails'
import { Admin } from './components/Admin'
import { AuthProvider } from './components/Auth'
import { Profile } from './components/Profile'
import { Login } from './components/Login'
import { RequiredAuth } from './components/RequiredAuth'
const LazyAbout = React.lazy(() => import('./components/About'))
const apple = () =>{
  return(
    <AuthProvider>
    <Navbar/>
    <Routes>
      <Route path = '/' element = {<Home/>}></Route>
      <Route path = 'about' element = {<React.Suspense fallback='Loading...'><LazyAbout/></React.Suspense>}></Route>
      <Route path = 'users' element = {<Users/>}>
      <Route path = ':userId' element = {<UserDetails/>}></Route>
      <Route path = 'admin' element = {<Admin/>}></Route>
      </Route>
      <Route path = "*" element = {<NoMatch/>}></Route>
      <Route path = 'products' element = {<Products/>}>
      <Route index element = {<FeaturedProducts/>}></Route>
        <Route path='new' element = {<NewProducts/>}></Route>
        <Route path='featured' element = {<FeaturedProducts/>}></Route>
      </Route>
      <Route path = "profile" element = {<RequiredAuth><Profile/></RequiredAuth>}></Route>
      <Route path = "login" element = {<Login/>}></Route>
      </Routes>
    </AuthProvider>
  )
};

export default apple;


