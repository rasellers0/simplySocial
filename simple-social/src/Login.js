import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

let userName = '';
let passWord = '';

function Login() {
    return (
        <div className="App app-container">
            <div className="container">
                <div className="app-body">
                    <div className="statuscard col-sm-12">
                        <div className="card">
                            <div className="card-header">Login</div> 
                            <div className="card-body col-sm-12">
                            <form>
                                <div className="form-group col-sm-12 row">
                                    <label className="col-sm-2">User Name:</label>
                                    <input className="form-control col-sm-8" value={userName} />
                                </div>
                                <div className="form-group col-sm-12 row">
                                    <label className="col-sm-2">Password:</label>
                                    <input className="form-control col-sm-8" value={passWord} />
                                </div>
                            </form>
                        </div>
                        <div className="card-footer">
                            <div className="btn-group float-right">
                                <button className="btn btn-default">Clear Fields</button>
                                <button className="btn btn-primary">Logins</button>
                            </div>
                        </div>
                            

                        </div>
                        

                    </div>
                </div>
            </div>

        </div>
    );
}

export default Login;