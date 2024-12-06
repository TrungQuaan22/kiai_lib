import { useRoutes } from 'react-router-dom'
import AuthLayout from 'src/layout/AuthLayout'
import DefaultLayout from 'src/layout/DefaultLayout'
import Home from 'src/pages/Home'
import Login from 'src/pages/Login'
import NotFoundPage from 'src/pages/NotFound/NotFound'
import Register from 'src/pages/Register'

export default function useRouteElements() {
  const routeElements = useRoutes([
    {
      path: '/',
      element: (
        <DefaultLayout>
          <Home />
        </DefaultLayout>
      )
    },
    {
      path: '/login',
      element: (
        <AuthLayout>
          <Login />
        </AuthLayout>
      )
    },
    {
      path: '/register',
      element: (
        <AuthLayout>
          <Register />
        </AuthLayout>
      )
    },
    {
      path: '/404',
      element: (
        <DefaultLayout>
          <NotFoundPage />
        </DefaultLayout>
      )
    }
  ])
  return routeElements
}
