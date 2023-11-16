import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import {Root, Home, News, Portfolio, Coins, Coin, Portfolios} from "./routes"
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import store from '../store/store.js'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />}/>
      <Route path='/coins' element={<Coins/>}/>
      <Route path='coin/:coinId' element={<Coin/>} ></Route>
      <Route path='/news' element={<News />}/>
      <Route path='/portfolios' element={<Portfolios />}/>
      <Route path='/portfolio/:portfolioName' element={<Portfolio/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)

