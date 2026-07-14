import React from 'react'
import { SideNavBar } from './Util'
import '../styles/Home.css'
export function Home() {

    return <div> 
        {SideNavBar('Home', '')}
        <div class="container-fluid bg-2 text-center">
            <img src={require("./pfp.jpg")} class="img-responsive img-circle margin" alt="Bird" width="300" height="300" />
            <h3 className="aboutText">
                Hi I'm Cindy, welcome and thank you for stopping by my personal website :) 
            </h3>
        </div>
        
    </div>
};