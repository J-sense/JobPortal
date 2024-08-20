import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Statics from './components/Statics.jsx';
import JonDetails from './components/JonDetails.jsx';
import Appliedjob from './components/Appliedjob.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path: "/",
        element: <Statics></Statics>,
        loader:()=>fetch('../public/jobs.json')
      },
      {
        path: "/jobs/:id",
        element:<JonDetails></JonDetails>,
        loader:()=>fetch('../public/jobs.json')
      },
      {
        path: "/applied",
        element:<Appliedjob></Appliedjob>,
        loader:()=>fetch('../public/jobs.json')
      },

    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
