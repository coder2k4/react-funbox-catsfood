import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import HomePage from "../../pages/Home";

function App() {
    return (
        <Router>
            <Route path="/" component={HomePage} exact/>
        </Router>
    );
}

export default App;
