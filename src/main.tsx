import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.tsx'
import './index.css'
import router from './routes/Routes.tsx';




createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
