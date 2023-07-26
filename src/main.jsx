
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './pages/Home'
import { Hortaliças } from './pages/hortaliças.jsx'
import { Legumes } from './pages/legumes.jsx'
import { Frutas } from './pages/Frutas'
import { Registro } from './pages/registro.jsx' 
import App from './App.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path:"/",
    element: <App />,
    children: [
      {
        path:"/",
        element: <Home />,
      },
      {
        path:"/hortaliças",
        element: <Hortaliças />,
      },
      {
        path:"/legumes",
        element: <Legumes />,
      },
      {
        path:"/frutas",
        element: <Frutas />,
      },
      {
        path:"/cadastro",
        element: <Registro />,
      },
    ],
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
 <RouterProvider router={router} />
)
