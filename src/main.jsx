import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './component/header/Header';
import Shop from './component/shoping-cart/shop';
import Home from './component/layout/Home';
import Orders from './component/orders/Orders';
import Inventory from './component/inventory/Inventory';
import Login from './component/login/Login';
import { CartProductsLoded } from './utilities/loder';
const router = createBrowserRouter([
  {
    path:'/',
    element:<Home></Home>,
    children:[
      {
        path: "/",
        element:<Shop></Shop>,
      },
      {
        path:'order',
        element: <Shop></Shop>
      },
      {
        path:'order-Review',
        element:<Orders></Orders>,
        loader:CartProductsLoded
        
      },
      {
        path:'manage',
        element:<Inventory></Inventory>
      },
      {
        path:'login',
        element:<Login></Login>
      }
    ],

  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
