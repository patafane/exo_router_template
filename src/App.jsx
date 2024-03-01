import './App.sass'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import Home from './Components/Home/Home'
import Destination from './Components/Destination/Destination'
import { useState } from 'react'
import Crew from './Components/Crew/Crew'

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
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
