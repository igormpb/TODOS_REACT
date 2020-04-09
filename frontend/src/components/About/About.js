import React from 'react';
import Menu from '../Menu/Menu';
import PageHeader from '../PageHedaer/PageHeader'
import './style.css'
function About(){
    return(
        <div>
            <Menu/>
            <div className="about">
            <PageHeader name="Sobre" small="Nós" />

            <br/>
            
            <div className="container ">
                <h2>
                Task App was created to make life easier for users who forget to perform their tasks, this app was specially made for this type of user
                </h2>
            </div>

            </div>
        </div>

    )
}

export default About;