import { useRoutes } from 'react-router-dom'
import AuthLayout from 'src/layout/AuthLayout'
import DefaultLayout from 'src/layout/DefaultLayout'
import About from 'src/pages/About/About'
import Contact from 'src/pages/Contact/Contact'
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
      path: '/contact',
      element: (
        <DefaultLayout>
          <Contact />
        </DefaultLayout>
      )
    },
    {
      path:'/about',
      element: (
        <DefaultLayout>
          <About />
        </DefaultLayout>
      )
    },
    {
      path: '*',
      element: (
        <DefaultLayout>
          <NotFoundPage />
        </DefaultLayout>
      )
    }
  ])
  return routeElements
}
