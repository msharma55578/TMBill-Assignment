import React, { Component } from "react";

export default class Form extends Component{
    constructor(){
        super();
        this.state={
            name:" ",
        }
    }
    handleInputChange=(event)=>{
        this.setState({
            name:event.target.value,
        });
    };
    render(){
        return(
            <>
                <input type="text"
                onChange={this.handleInputChange}
                value={this.state.name}
                ></input>
                <input type="password"></input>
                <button type="submit">Submit</button>
            </>
        )
    }
}