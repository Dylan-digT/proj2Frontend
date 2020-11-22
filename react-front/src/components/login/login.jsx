import React from "react";
import logingImg from "../../../src/images.png";

export class Login extends React.Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);
    }
    render(){
        return <div className="base-container" ref={this.props.containerRef}>
            <div className="header">Login</div>
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
                        <label htmlfor="password">Password</label>
                        <input type="password" name="password" placeholder="password"/>
                </div>

            </div>
            <div className="footer">
                <button type="button"className="btn">Login</button>
            </div>
        </div>
    }
}