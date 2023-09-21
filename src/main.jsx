import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/Home/Home.jsx';
import About from './component/About/About.jsx';
import Contact from './component/Contact/Contact.jsx';
import Header from './component/Header/Header.jsx';
import Glary from './component/Glary/Glary.jsx';
import Photos from './component/Photos/Photos.jsx';
import PhotoDitals from './component/Photos/PhotoDitals.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Header></Header> ,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/glary",
        element:<Glary></Glary>
      },
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:"/photos",
        loader:()=> fetch('https://jsonplaceholder.typicode.com/photos'),
        element:<Photos></Photos>,
      },
      {
        path:"/photo/:id",
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/photos/${params.id}`),
        element:<PhotoDitals></PhotoDitals>
      },
      {
        path:'/contact',
        element:<Contact></Contact>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
