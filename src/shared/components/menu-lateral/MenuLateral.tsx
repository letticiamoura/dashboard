import { Avatar, Box, Divider, Drawer, Icon, List, ListItemButton, ListItemIcon, ListItemText, useMediaQuery, useTheme } from '@mui/material';
import { Children } from 'react';
import photo from '../../../assets/leticia.jpeg'
import { TramSharp } from '@mui/icons-material';
import { useDrawerContext } from '../../contexts';
import { useMatch, useNavigate, useResolvedPath } from 'react-router-dom';

interface IListItemLinkProps {
  to: string,
  icon: string,
  label: string,
  onClick: (() => void) | undefined
}

const ListItemLink: React.FC<IListItemLinkProps> = ({to, icon, label, onClick}) => {
    
    const navigate = useNavigate();

    const resolvedPath = useResolvedPath(to);

    const match = useMatch({ path: resolvedPath.pathname, end: false });

    const handleClick = () => {
        navigate(to);
        onClick?.();
    }

    return(

    <ListItemButton selected={!!match} onClick={handleClick}> 

        <ListItemIcon>

            <Icon> {icon} </Icon>

        </ListItemIcon>

         <ListItemText primary={label}/>

    </ListItemButton>

    )
}

interface ILayoutBaseDePaginaProps {
    children?: React.ReactNode,
}

export const MenuLateral: React.FC<ILayoutBaseDePaginaProps> =  ({ children }) => {

    const theme = useTheme();

    const smDown = useMediaQuery(theme.breakpoints.down('sm'));

    const { isDrawerOpen, toggleDrawerOpen, drawerOptions } = useDrawerContext();

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

                            {drawerOptions.map(drawerOptions => (
                                <ListItemLink
                                to={drawerOptions.path}
                                key={drawerOptions.path}
                                icon={drawerOptions.icon}
                                label={drawerOptions.label}
                                onClick={smDown ? toggleDrawerOpen : undefined}
                            />
                            ))}

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