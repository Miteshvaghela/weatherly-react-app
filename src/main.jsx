import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import About from './pages/About';
import Contact from './pages/Contact';
import './index.css';
import ErrorPage from './pages/Errors';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path : '/',
    element : <App />,
    errorElement : <ErrorPage />,
    children : [
      {
        path : '/about',
        element : <About />
      },
      {
        path : '/contact',
        element : <Contact />
      },
      
    ]
  } 
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
