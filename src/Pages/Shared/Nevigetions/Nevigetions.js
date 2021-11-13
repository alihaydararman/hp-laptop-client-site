import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Container } from '@mui/material';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';



const Nevigetions = () => {
    const { user, logout } = useAuth()
    return (
        <Container>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            HP TECH

                        </Typography>
                        <Link style={{ textDecoration: 'none', color: 'white' }} to='/home'><Button color="inherit">Home</Button></Link>


                        {user?.email ? <Box>
                            <Link style={{ textDecoration: 'none', color: 'white' }} to='/orderproducts'><Button color="inherit">Products Order</Button></Link>
                            <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/dashboard">
                                <Button color="inherit">Dashboard</Button>
                            </NavLink>

                            <Button onClick={logout} color="inherit">Logout</Button>

                        </Box> :
                            <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/login">
                                <Button color="inherit">Login</Button>
                            </NavLink>
                        }

                    </Toolbar>
                </AppBar>
            </Box>
        </Container>
    );
};

export default Nevigetions;