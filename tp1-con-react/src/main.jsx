import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from './Layout/Layout';
import { MainPage } from './pages/MainPage';
import './index.css'
import { ModuleStudents } from './pages/components/ModuleStudents';
import { MainStudents } from './pages/students/MainStudents';
import { FormStudents } from './pages/students/FormStudents';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children: [
      {
        path:'/',
        element:<MainPage title={'Página Principal'} content={<ModuleStudents/>} isActive={false}/>
      },{
        path:'/students',
        element:<MainPage title={'Alumnos'} content={<MainStudents/>} isActive={true}/>
      },{
        path:'/add-students',
        element:<MainPage title={'Agregar nuevo alumno'} content={<FormStudents/>}  isActive={true}/>
      }
    ]
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
