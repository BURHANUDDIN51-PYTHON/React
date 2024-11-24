import React, { useEffect, useState } from "react"
import Card from './componenets/Card'
import ThemeBtn from './componenets/ThemeBtn'
import useTheme, {ThemeProvider} from './contexts/ThemeContext'
function App() {

  const [themeMode, setThemeMode] = useState("light");
  
  // when to make changes in the html
  useEffect(() => {
    document.querySelector('html').classList.remove('dark', 'light');
    document.querySelector('html').classList.add(themeMode);
  }, [themeMode])


  // defining the function
  function lightMode() {
    setThemeMode('light');
  }

  function darkMode(){
    setThemeMode('dark');
  }
  return (
    <ThemeProvider value={{themeMode, lightMode, darkMode}}>
        <div className="flex flex-wrap min-h-screen items-center">
            <div className="w-full">
                <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                      <ThemeBtn/>
                </div>

                <div className="w-full max-w-sm mx-auto">
                    <Card />
                </div>
              </div>
        </div>
    </ThemeProvider>
  )
}

export default App
