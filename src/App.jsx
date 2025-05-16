import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import FormPage from './Pages/FormPage'
import ResultPage from './Pages/ResultPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <FormPage/>
  },
  {
    path: '/result',
    element: <ResultPage/>
  },
])

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App