import './App.sass'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import Home from './Components/Home/Home'
import Destination from './Components/Destination/Destination'

function App() {
  let router = createBrowserRouter([
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/destination/:id",
      element:<Destination/>,
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
