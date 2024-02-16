
import { useState, createContext, useCallback, useContext} from "react";

import { Box, ThemeProvider } from "@mui/material";

import { LightTheme, DarkTheme } from "../themes";

interface IDrawerContextData {
    isDrawerOpen: boolean;
    toggleDrawerOpen: () => void;
    drawerOptions: IDrawerOptions[];
    setDrawerOptions: ( newDrawerOptions: IDrawerOptions[]) => void;
}

interface IDrawerOptions {
    label: string,
    path: string,
    icon: string
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
    const [ drawerOptions, setDrawerOptions] = useState<IDrawerOptions[]>([]);


    const toggleDrawerOpen = useCallback( () => {
        setIsDrawerOpen(oldDrawerOpen => !oldDrawerOpen);
    }, []);

    const handleSetDrawerOptions = useCallback( ( newDrawerOptions: IDrawerOptions[]) => {
        setDrawerOptions(newDrawerOptions);
    }, []);

    return(

        <DrawerContext.Provider value={{isDrawerOpen, drawerOptions, setDrawerOptions: handleSetDrawerOptions, toggleDrawerOpen} }>

            {children}

        </DrawerContext.Provider>

    )

}