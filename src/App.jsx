import './App.sass'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import Home from './Components/Home/Home'
import Destination from './Components/Destination/Destination'
import { useState } from 'react'
import Crew from './Components/Crew/Crew'
import Technology from './Components/Technology/Technology'

function App() {
  let router = createBrowserRouter([
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/destination/:id",
      element:<Destination/>,
    },
    {
      path:"/crew",
      element:<Crew/>,
    },
    {
      path:"/technology",
      element:<Technology/>,
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
