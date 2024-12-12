import React, {useState, useEffect, useCallback} from 'react'
import {useDispatch} from 'react-redux'
import authService from './appwrite/auth'
import {login, logout} from './features/auth/auth'
import {Header, Footer} from './components/index'
import './App.css'

function App() {

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  // Run the useEffect to know whether the user is logged in or not 
  useEffect(() => {
    authService.getCurrentUser()
    .then(userData => {
      if (userData) dispatch(login({userData}));
      else dispatch(logout());
    })
    .finally(() => setLoading(false))
  }, [])

  
  // Do the conditional rendering based on whether is loading and the user is logged in or not 
  return !loading ? (
    <div className='min-h-screen flex flex- content-between bg-gray-400'>
      <div className="w-full block">
        <Header />
        <main >
          TODO: {/* <Outlet /> */}
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App
