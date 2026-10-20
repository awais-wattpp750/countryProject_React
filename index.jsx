import ReactDom from "react-dom/client";
import  App from './App'
import React, { Children } from "react";
import Contact from "./components/Contact";

import {createBrowserRouter,RouterProvider} from "react-router";
import Allcomponents from "./components/Allcomponents";
import CountryDetail from "./components/CountryDetail";
 const router = createBrowserRouter([
    {
        path: '/', 
        element:<App/>, 

        children:[
            {
                path:'/contactus', 
                element:<Contact/>

            }
            , 
            {
                path:'/', 
                element: <Allcomponents/>
            } 
            ,
            {
                path:'/:country', 
                element:<CountryDetail/>
            }
        ]
    },
   
 ])
const root = ReactDom.createRoot(document.querySelector('.root'));

root.render(<RouterProvider router={router}/>)