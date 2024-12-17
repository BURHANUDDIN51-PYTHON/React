import React from 'react'
import {Container, Logo, LogoutBtn} from '../index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
// Use to go to a specific path with the help of a function
import { useNavigate } from 'react-router-dom'
import { nanoid } from '@reduxjs/toolkit'


const Header = () => {

  const authStatus = useSelector(state => state.auth.status)
  const navigate = useNavigate();

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  ]

  return (
    <Header className="py-3 shadow bg-gray-500">
      <Container>
            <nav className="flex">
              <div className="mr-4">
                <Link to='/'>
                  <Logo />
                </Link>
              </div>
              {/* Create the navigation items */}
              <ul className="flex ml-auto">
                {navItems.map(item => 
                  (item.active && (
                    <li key={nanoid()}>
                      <button 
                        className='inline-block px-6 ypy-2 duration-200
                        hover: bg-blue-100 rounded-full'
                        onClick={() => navigate(item.slug)}
                      >
                        {item.name}
                      </button>
                    </li>)
                  )
                )}
                {authStatus && (
                  <li>
                    <LogoutBtn />
                  </li>
                )}
              </ul>
            </nav>
      </Container>
    </Header>
  )
}

export default Header