import React from "react";
import logingImg from "../../../src/register.png";

export class Register extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return <div className="base-container" ref={this.props.containerRef}>
            <div className="header">Register</div>
            <div className="content"></div>
                <div className="image">
                    <img src={logingImg} />
                </div>
                <div className="form"> 
                    <div className="form-group">
                        <label htmlfor="username">username</label>
                        <input type="text" name="username" placeholder="username"/>
                    </div>
                    <div className="form-group">
                        <label htmlfor="email">Email</label>
                        <input type="email" name="email" placeholder="email"/>
                    </div>
                    <div className="form-group">
                        <label htmlfor="password">Password</label>
                        <input type="password" name="password" placeholder="password"/>
                </div>

            </div>
            <div className="footer">
                <button type="button"className="btn">Register</button>
            </div>
        </div>
    }
}