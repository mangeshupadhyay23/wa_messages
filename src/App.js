import Signup from "./components/Signup";
import { AuthProvider } from "./contexts/AuthContext";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import ForgotPassword from "./components/ForgotPassword"
import { PrivateRoute } from "./components/PrivateRoute";
import Home from "./components/Home";


function App() {
    
  return (
    <Router basename={process.env.PUBLIC_URL}>
        <AuthProvider>
            <Switch>
                <PrivateRoute exact path="/dashboard" component={Dashboard}/>
                <Route path="/signup" component={Signup}/>
                <Route path="/login" component={Login}/>
                <Route path="/forgotpassword" component={ForgotPassword}/>
                <Route exct path="/" component={Home}/>
            </Switch>
        </AuthProvider>
    </Router>
  );
}

export default App;
