import React from 'react'
import {Switch,Route} from "react-router-dom";
import Home from '../pages/Home';
import AddCar from '../pages/AddCar';

export default function Content() {
    return (
        <div className="main__content">
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/add-car' component={AddCar}/>
            </Switch>
        </div>
    )
}
