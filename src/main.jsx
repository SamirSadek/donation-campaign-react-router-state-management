import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './root/Root'
import Home from './pages/Home'
import DonationDetails from './components/DonationDetails'
import Donation from './pages/Donation'
import Statistics from './pages/Statistics'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path:"/",
        element:<Home></Home>
      },
      {
         path:"donation",
         element: <Donation></Donation>,
         loader: ()=> fetch('../donation.json')
      },
      {
         path:"statistics",
         element: <Statistics></Statistics>,
         loader: ()=> fetch('../donation.json')
      },
      {
        path:'/donation/:id',
        element:<DonationDetails></DonationDetails>,
        loader: ()=> fetch('../donation.json')
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
