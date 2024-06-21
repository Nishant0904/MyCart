import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import NotFound from './NotFound'

const Router = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <App />,
            errorElement: <NotFound />,
        },
        {
            path: '/:name',
            element: <App />,
        },
        {
            path: '/products/:id',
            element: <App />,
        },
    ])

    return <RouterProvider router={router} />
}

export default Router
