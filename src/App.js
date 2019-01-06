import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Navbar from "./components/lauout/Navbar"
import Dashboard from "./components/dashboard/Dashboard";
import  projectDetails from "./components/projects/projectDetails";
import SingIn from "./components/auth/SignIn";
import SingUp from "./components/auth/SignUp";
import CreateProject from './components/projects/createProject'



class App extends Component {
    render() {
        return (
            <BrowserRouter>

                <div className="App">
                    <Navbar/>
                    <Switch>

                        <Route exact path='/' component={Dashboard}/>
                        <Route path='/project/:id' component={projectDetails}/>
                        <Route path='/signin' component={SingIn}/>
                        <Route path='/signup' component={SingUp}/>
                        <Route path='/create' component={CreateProject}/>

                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
