import React from 'react';

export default class LogInForm extends React.Component {
    render () {
        return (
                <div className="form-container">
                    <form>
                        <div className="form">
                        <h3 id="log-in">Log In</h3>
                        <label>Username: </label>
                        <input type="text" name="username"></input> <br/>
                        <label>Password: </label>
                        <input type="text" name="password"></input>
                        <button className="button">Log In</button>
                    </div>
                </form>
            </div>
        );
    }
}

