import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Productsorder from './Pages/Productsorder/Productsorder/Productsorder';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import Details from './Pages/Details/Details';
import OrderProduct from './Pages/Details/OrderProduct/OrderProduct';
import UpdateData from './Pages/Dashboard/UpdateData/UpdateData';
import AuthProvider from './Contexts/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Login/Login/PrivateRoute/PrivateRoute';
import AboutUs from './Pages/Aboutus/Aboutus';
import NotFound from './Pages/NotFound/NotFound';
import Contact from './Pages/Contact/Contact';
// import Addservice from './Pages/Dashboard/Addservice/Addservice';




function App() {
  return (
    <div className="">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/home'>
              <Home />
            </Route>
            <Route path='/orderproducts'>
              <Productsorder />
            </Route>
            <Route path='/dashboard'>
              <Dashboard />
            </Route>
            <Route path='/login'>
              <Login />
            </Route>
            <Route path='/register'>
              <Register />
            </Route>
            <PrivateRoute path="/booking/:serviceId">
              <Details></Details>
            </PrivateRoute>
            <Route path='/orderproduct'>
              <OrderProduct></OrderProduct>
            </Route>
            <Route path='/aboutus'>
              <AboutUs></AboutUs>
            </Route>
            <Route path='/contactus'>
              <Contact></Contact>
            </Route>
            <Route path='/products/updatedata/:serviceId'>
              <UpdateData></UpdateData>
            </Route>
            {/* <Route path='/addservice'>
            <Addservice />
          </Route> */}

            <Route path='*'>
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
