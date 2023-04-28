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
import Signin from './component/signIn/Signin';
import Context from './component/Context/Context';
import Privateroutes from './component/routs/Privateroutes';
import Cheakout from './component/cheakout/Cheakout';
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
      },
      {
        path:'/order-Review',
        element:<Orders></Orders>
      },
      {
        path:'/signin',
        element:<Signin></Signin>
      },
      {
        path:'/cheakout',
        element:<Privateroutes><Cheakout></Cheakout></Privateroutes>
      }
    ],

  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Context>
    <RouterProvider router={router} />
    </Context>
  </React.StrictMode>,
)
