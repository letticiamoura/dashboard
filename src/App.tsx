import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { AppThemeProvider } from "./shared/contexts/ThemeContext";

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { DarkTheme, LightTheme } from "./shared/themes";

export const App = () => {

  return (

    <AppThemeProvider>

      <BrowserRouter>      
          
        <AppRoutes />
        
      </BrowserRouter>

    </AppThemeProvider>

  );
}
