import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {Root, Home, News, Exchanges, Portfolio, Coins} from "./routes"
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />}/>
      <Route path='/coins' element={<Coins/>}/>
      <Route path='/news' element={<News />}/>
      <Route path='/exchanges' element={<Exchanges />}/>
      <Route path='/portfolio' element={<Portfolio />}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

