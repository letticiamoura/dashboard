
import { Button } from '@mui/material';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDrawerContext } from '../shared/contexts';
import { useEffect } from 'react';

export const AppRoutes = () => {

    const { toggleDrawerOpen, setDrawerOptions } = useDrawerContext();

    useEffect( () => {
        setDrawerOptions([
            {
                icon: "home",
                path: "/home",
                label: "Home",
            }
        ])
    })

    return(

        <Routes>

            <Route path="/" element={ <Button variant='outlined' color='primary' onClick={toggleDrawerOpen}> toggleTheme </Button>} />

            <Route path="*" element={ <Navigate to='/' /> }/>
        </Routes>

    );
};