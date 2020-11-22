import React from "react";
import logingImg from "../../../src/images.png";

export class login extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return <div className="base-container">
            <div className="header">Login</div>
            <div className="content"></div>
                <div className="image">
                    <img src={loginImg} />
                </div>
                <div className="form"> 
                    <div className="form-group">
                        <label htmlfor="username">username</label>
                        <input type="text" name="username" placeholder="username"/>
                    </div>
                    <div className="form-group">
                        <label htmlfor="password">Password</label>
                        <input type="password" name="password" placeholder="password"/>
                </div>

            </div>
            <div className="footer">
                <buttom type="button"className="btn">Login</buttom>
            </div>
        </div>
    }
}