import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { DetailsPage } from '../Page/Details/DetailsPage'
import { HomePage } from '../Page/Home/HomePage'
import { PokedexPage } from '../Page/Pokedex/PokedexPage'


export const Router = () => {
  return (
  <BrowserRouter>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/Pokedex' element={<PokedexPage/>}/>
            <Route path='/Details/:name' element={<DetailsPage/>}/>
        </Routes>
  </BrowserRouter>
  )
}
