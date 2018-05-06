import React from "react";
import AppBar from "material-ui/AppBar";
import { Route } from "react-router-dom";
import { 
    HomePageContainer,
    ResultPageContainer
 } from "../containers/index";


const Main=(props)=>(
    <div>
        <AppBar 
            title='Github Finder'
            showMenuIconButton={false}
        />
        <div>
            {props.children}
        </div>
        <div>
            <Route path='/' exact component={HomePageContainer}/>
            <Route path='/result' component={ResultPageContainer}/>
        </div>
    </div>
)

export default Main