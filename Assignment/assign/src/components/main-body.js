import React from 'react';
import NavBar from './nav-bar';
import LogInForm from './log-in-form';

export default class MainBody extends React.Component {
    render () {
        return (
            <div className="container">
                <div className="container1">
                    <div className="d-flex p-2">
                        <div>
                            <NavBar />
                        </div> <br/>
                        <div>           
                            <LogInForm />
                        </div>
                    </div>
                </div>
             </div>
        );
    }
}