import React from "react";
import "./App.css";
import { Header, HomePage, Work, ProjectPage } from "./components/index";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/work" component={Work} />
                    <Route path="/work/:title" component={ProjectPage} />
                    <Route exact path="/" component={HomePage} />
                    <Redirect to="/" />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
