import { lazy, Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import AuthenticateLayout from './layouts/AuthenticateLayout'

const Register = lazy(() => import('./pages/Register'))
const Login = lazy(() => import('./pages/Login'))
export default function useRouteElements() {
  const routeElement = useRoutes([
    {
      path: '/register',
      element: (
        <AuthenticateLayout>
          <Register />
        </AuthenticateLayout>
      )
    },
    {
      path: '/login',
      element: (
        <AuthenticateLayout>
          <Login />
        </AuthenticateLayout>
      )
    }
  ])
  return <Suspense fallback={<div>Loading...</div>}>{routeElement}</Suspense>
}
