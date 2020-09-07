import React from 'react';
import Home from './Components/Home';
import { BrowserRouter, Route } from 'react-router-dom';
import Signin from './Components/Signin';

function App() {
    
    return <BrowserRouter>
        <Route path="/" exact={ true } component={Signin} />
        <Route path="/home" exact={ true } component={Home} />
    </BrowserRouter>;
}

export default App;