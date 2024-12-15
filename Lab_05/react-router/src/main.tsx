import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import AddPage from './pages/AddPage';
import ArticlePage from './pages/ArticlePage';

import './css/index.css'


const router = createBrowserRouter([

  {
    path: '/',
    element: <HomePage/>,
    errorElement: <div> 404 Nie znaleziono </div>
  },
  {
    path: '/blog',
    element: <BlogPage/>,
  },
  {
    path: '/dodaj',
    element: <AddPage/>,
  },
  {
    path: '/article/:id',
    element: <ArticlePage/>,
  }


]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
