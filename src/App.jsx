import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import FormPage from './Pages/FormPage'
import ResultPage from './Pages/ResultPage'
import { Provider } from 'react-redux'
import { store } from './redux/store'

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
    <Provider store={store} >
      <RouterProvider router={router} />
    </Provider>
  )
}

export default App