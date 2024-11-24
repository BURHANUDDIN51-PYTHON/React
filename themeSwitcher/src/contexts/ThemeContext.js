import { useContext, createContext} from "react";

// Create the context
export const ThemeContext = createContext({
    themeMode: "light",
    lightMode: () => {},
    darkMode: () => {}
})
 
// Create the context provider
export const ThemeProvider = ThemeContext.Provider;

// Custome Hook
export default function useTheme() {
    return useContext(ThemeContext)
}