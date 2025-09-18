import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Root from "./pages/Root"
import HomePage from "./pages/home/HomePage"
import DetailsPage from "./pages/details/DetailsPage"
import FavoritePage from "./pages/favorite/FavoritePage"
import { homeLoader } from "./pages/home/homeLoader"
import { detailsLoader } from "./pages/details/detailsLoader"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: homeLoader,
      },
      {
        path: '/country/:name',
        element: <DetailsPage />,
        loader: detailsLoader,
      },
      {
        path: '/favorite',
        element: <FavoritePage />,
      },
    ]
  }
])

function App() {

  return <RouterProvider router={router} />
}

export default App
