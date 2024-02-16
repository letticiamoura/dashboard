import { Avatar, Box, Divider, Drawer, Icon, List, ListItemButton, ListItemIcon, ListItemText, useMediaQuery, useTheme } from '@mui/material';
import { Children } from 'react';
import photo from '../../../assets/leticia.jpeg'
import { TramSharp } from '@mui/icons-material';
import { useDrawerContext } from '../../contexts';

interface ILayoutBaseDePaginaProps {
    children?: React.ReactNode,
}

export const MenuLateral: React.FC<ILayoutBaseDePaginaProps> =  ({ children }) => {

    const theme = useTheme();

    const smDown = useMediaQuery(theme.breakpoints.down('sm'));

    const { isDrawerOpen, toggleDrawerOpen } = useDrawerContext();

    return(
        <>
            <Drawer open={isDrawerOpen} variant={smDown ? 'temporary' : 'permanent'} onClose={toggleDrawerOpen}>

                <Box width={theme.spacing(28)} height='100%' display='flex' flexDirection='column' >
                    
                    <Box height={theme.spacing(28)} display='flex' justifyContent='center' alignItems='center'>
                        
                        <Avatar 
                            sx={{height: theme.spacing(13), width: theme.spacing(13)}}
                            src={photo}
                        />

                    </Box>
                    
                    <Divider />

                    <Box flex={1}>

                        <List component='nav'>

                            <ListItemButton>

                                <ListItemIcon>

                                    <Icon> home </Icon>

                                </ListItemIcon>

                                <ListItemText primary='Inbox'/>

                            </ListItemButton>

                        </List>
                            
                    </Box>

                </Box>
            </Drawer>

            <Box height='100vh' marginLeft={smDown ? 0 : theme.spacing(28)}>
                {children}
            </Box>
                
        </>

    );
};