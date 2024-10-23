import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from './Layout/Layout';
import { MainPage } from './pages/MainPage';
import {MainStudents} from './pages/students/MainStudents'
import {FormStudents} from './pages/students/FormStudents'
import './index.css'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children: [
      {
        path:'/',
        element:<MainPage />
      },
      {
        path:'/students',
        element:<MainStudents />
      },
      {
        path:'/add-student',
        element:<FormStudents/>
      }
    ]
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
