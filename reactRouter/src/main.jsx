import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import './index.css'
import Layout from './Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import User from './components/User/User'
import Github, { githubInfoLoader } from './components/Github/Github'


// Making the routes
const router = createBrowserRouter(
  createRoutesFromElements(
    /* The foremost router */
    <Route  path='/' element={<Layout />} >
      <Route path="" element={<Home/>} />
      <Route path="about" element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userId' element={<User />} />
      <Route
        loader={githubInfoLoader}
        path='github'
        element={<Github />} />
    </Route>
  )
);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
