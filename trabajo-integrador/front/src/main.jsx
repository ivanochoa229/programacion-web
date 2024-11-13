import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from './Layout/Layout';
import { MainPage } from './pages/MainPage';
import {MainStudents} from './pages/students/MainStudents'
import {FormStudents} from './pages/students/FormStudents'
import {LoginPage} from './pages/Login/LoginPage'
import './index.css'
import ProtectedRoutes from './pages/Login/components/ProtectedRoutes';
import { AuthProvider } from './pages/Login/components/AuthProvider';
import { RegisterPage } from './pages/Login/RegisterPage';

const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage /> 
  },
  {
    path:'/register',
    element: <RegisterPage />
  },
  {
    element: <ProtectedRoutes />, 
    children: [
      {
        path: '/',
        element: <Layout />,
        children: [
          { path: '/', element: <MainPage /> },
          { path: '/students', element: <MainStudents /> },
          { path: '/add-student', element: <FormStudents /> }
        ]
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);