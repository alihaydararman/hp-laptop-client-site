import React from 'react';

import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import { Button } from '@mui/material';
import Manageservices from '../Manageservices/Manageservices';
import Addservice from '../Addservice/Addservice';
// import UpdateData from '../UpdateData/UpdateData';
import Myorder from '../Myorder/Myorder';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import UserProfile from '../UserProfile/UserProfile';
import Home from '../../Home/Home/Home';
import MyAllOrder from '../MyAllOrder/MyAllOrder';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import useAuth from '../../../Hooks/useAuth';
// import useAuth from '../../../Hooks/useAuth';





const drawerWidth = 200;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();
    const { admin, user } = useAuth()

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>

            <Toolbar />
            <Divider />
            <Link to="/orderproducts"><Button color="inherit">PRODUCTS ORDER</Button></Link>
            <Box>

                {
                    admin && user.email && <Box>
                        <Link to={`${url}/makeadmin`}><Button color="inherit">Make Admin</Button></Link>
                        <Link to={`${url}/manageservices`}><Button color="inherit">Manage Product</Button></Link>
                        <Link to={`${url}/addproducts`}><Button color="inherit">Add Products</Button></Link>
                    </Box>
                }

                <Link to={`${url}/myorder`}><Button color="inherit">My all Order</Button></Link>
                <Link to={`${url}/myallorder`}><Button color="inherit">My Order</Button></Link>


                {/* <Link to={`${url}/products/updatedata/:serviceId`}><Button color="inherit">Update Product</Button></Link> */}
            </Box>


            {/* {admin && <Box><Link to={`${url}/makeadmin`}><Button color="inherit">Make Admin</Button></Link>
                <Link to={`${url}/addDoctors`}><Button color="inherit">Add Doctors</Button></Link></Box>} */}

            <List>
                {[].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                        <Link style={{ textDecoration: 'none', color: 'white' }} to="/home"><Button color="inherit">Home</Button></Link>
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Switch>
                    <AdminRoute path={`${path}/manageservices`}>
                        <Manageservices></Manageservices>
                    </AdminRoute>
                    {/* <Route path={`${path}/products/updatedata/:serviceId`}>
                        <UpdateData></UpdateData>
                    </Route> */}
                    <AdminRoute path={`${path}/addproducts`}>
                        <Addservice></Addservice>
                    </AdminRoute>
                    <Route path={`${path}/myorder`}>
                        <Myorder></Myorder>
                    </Route>
                    <AdminRoute path={`${path}/makeadmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <Route path={`${path}/myallorder`}>
                        <MyAllOrder></MyAllOrder>
                    </Route>
                    <Route path={`${path}/home`}>
                        <Home></Home>
                    </Route>
                    <UserProfile></UserProfile>
                </Switch>

            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;

