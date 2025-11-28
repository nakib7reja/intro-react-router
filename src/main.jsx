import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import Mobile from './components/Mobile/Mobile.jsx';
import Laptops from './components/Laptops/Laptops.jsx';
import Users from './components/Users/Users.jsx';
import User2 from './components/User2/User2.jsx';

const UserPromise = fetch('https://jsonplaceholder.typicode.com/users').then(
  res => res.json()
);

const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: 'mobile', Component: Mobile },
      { path: 'laptops', Component: Laptops },
      {
        path: 'users',
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        Component: Users
      },
      {
        path: 'user2',
        element: <Suspense fallback={<span>Loading...</span>}>
            <User2 UserPromise={UserPromise}></User2>
        </Suspense>
      }
    ]

  },
  {
    path: 'about',
    element: <div>About me here</div>
  },
  {
    path: 'blogs',
    element: <div>All blogs are here</div>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)