import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/Card'
import './App.css'

export default function App() {
  // Creating a object
  let cardDetails = {
    username: 'Burhanuddin Jamali',
    technology: "React"
  }
  return (
   <>
   <Card username="Burhanuddin Jamali"/>
   <Card username="Hitesh agarwal"/>
   </>
  );
}


