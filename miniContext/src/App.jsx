import React from 'react'
import './App.css'
import UserContextProvider from './context/UserContextProvide'
import Login from './components/Login'
import Profile from './components/Profile'
function App() {
  
  return (
    <UserContextProvider>
      <Login />
      {"  "}
      <Profile />
    </UserContextProvider>
  )
}

export default App
