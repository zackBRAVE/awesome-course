import { createBrowserRouter, RouteObject } from 'react-router-dom'
import ErrorPage from './error-page'
import { RootLayout } from './layouts/RootLayout'
import { Courses } from './pages/Courses'
import { Home } from './pages/Home'
import { Me } from './pages/Me'

export const routes: (RouteObject & { title: string })[] = [
  {
    path: '',
    title: 'Home',
    element: <Home />
  },
  {
    path: 'courses',
    title: 'Courses',
    element: <Courses />
  },
  {
    path: 'me',
    title: 'Me',
    element: <Me />
  }
]

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: routes,
  },
])
