import Signup from "./components/Signup";
import { AuthProvider } from "./contexts/AuthContext";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";


function App() {
  return (
    <Router>
        <AuthProvider>
            <Switch>
                <Route exact path="/" component={Dashboard}/>
                <Route path="/signup" component={Signup}/>
                <Route path="/login" component={Login}/>
            </Switch>
        </AuthProvider>
    </Router>
  );
}

export default App;
