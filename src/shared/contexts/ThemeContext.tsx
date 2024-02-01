
import { useState, createContext, useCallback, useMemo, useContext} from "react";

import { Box, ThemeProvider } from "@mui/material";

import { LightTheme, DarkTheme } from "../themes";

interface IThemeContextData {
    themeName: 'light' | 'dark';
    toggleTheme: () => void;
}

const ThemeContext = createContext({} as IThemeContextData);

export const useAppThemeContext = () => {
    return useContext(ThemeContext);
}

type Props = {
    children?: React.ReactNode,
}

export const AppThemeProvider: React.FC<Props> = ( {children}) => {

    const [ themeName, setThemeName] = useState<'light' | 'dark'>('light');

    const toggleTheme = useCallback( () => {
        setThemeName(themeName => themeName === 'light' ? 'dark': 'light');
    }, []);

    const theme = useMemo( () => {
        if (themeName === 'light')  return LightTheme;
        return DarkTheme;
    }, [themeName]);

    return(

        <ThemeContext.Provider value={{themeName, toggleTheme} }>

            <ThemeProvider theme={theme}>

                <Box width="100vw" height="100vh" bgcolor={theme.palette.background.default}>

                {children}

                </Box>
     
            </ThemeProvider>

        </ThemeContext.Provider>

    )

}