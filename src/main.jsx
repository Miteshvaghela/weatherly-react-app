import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/Root'; 
import './index.css';
import App from './App';
import Contact from './pages/Contact';
import About from './pages/About'; 
import Services from './pages/Services'; 
import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter([
  {
    path : '/',
    element : <Root />,
    errorElement : <ErrorPage />,
    children : [
      {
        path : 'home',
        element : <App />
      },
      {
        path : 'contact',
        element : <Contact />
      },
      {
        path : 'about',
        element : <About />
      },
      {
        path : 'services',
        element : <Services />
      }
    ]
  } 
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
