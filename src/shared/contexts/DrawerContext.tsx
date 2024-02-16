
import { useState, createContext, useCallback, useContext} from "react";

import { Box, ThemeProvider } from "@mui/material";

import { LightTheme, DarkTheme } from "../themes";

interface IDrawerContextData {
    isDrawerOpen: boolean;
    toggleDrawerOpen: () => void;
}

const DrawerContext = createContext({} as IDrawerContextData);

export const useDrawerContext = () => {
    return useContext(DrawerContext);
}

type Props = {
    children?: React.ReactNode,
}

export const DrawerProvider: React.FC<Props> = ( {children}) => {

    const [ isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawerOpen = useCallback( () => {
        setIsDrawerOpen(oldDrawerOpen => !oldDrawerOpen);
    }, []);

    return(

        <DrawerContext.Provider value={{isDrawerOpen, toggleDrawerOpen} }>

            {children}

        </DrawerContext.Provider>

    )

}