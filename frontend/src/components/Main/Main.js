import React from 'react';
import Menu from '../Menu/Menu';
import PageHeader from '../PageHedaer/PageHeader';
import Form from '../Form/Form';
import List from '../List/List';
function Main() {

    return (
        <div>
            <Menu/>
            <PageHeader name="your" small="Task"/>
            <br/>
            <Form/>
            <List/>
            
        </div>

    )
}

export default Main;