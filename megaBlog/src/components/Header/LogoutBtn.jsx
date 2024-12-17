import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../features/auth/auth'


function LogoutBtn() {
    // How to logout
    const dispatch = useDispatch();
    const handleLogout = (e) => {
        authService.logout().then(() => {
            dispatch(logout());
        }).catch(() => {
            console.log('Error in the logout function', error);
        })
    }
  return (
    <button className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
        onClick={handleLogout}
    >
        Logout
    </button>
  )
}

export default LogoutBtn