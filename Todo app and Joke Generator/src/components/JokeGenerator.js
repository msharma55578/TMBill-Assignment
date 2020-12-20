import React from "react";
import axios from "axios";

export default class JokeGenerator extends React.Component{
    constructor(){
        super()
        this.state={
            setup:"",
            punchline:"",
        }
    }
    componentDidMount(){
        this.GeneratenextJoke();
    }
    showPunchline=()=>{
        this.setState({
            showPunchline:true,
        })
    }
    GeneratenextJoke=()=>{
        axios.get("https://official-joke-api.appspot.com/random_joke")
        .then((result)=>{
            //console.log(result);
            let {setup,punchline}=result.data;
            this.punchline=punchline;
            this.setState({
                setup,
                punchline,
                showPunchline:false,
            });
        })
        .catch((error)=>{
            console.log("Error",error);
        })
    }
    render(){
        return(
            <>
                <div>{this.state.setup}</div>
                {this.state.showPunchline?<div>{this.state.punchline}</div>:null}
        
                <button onClick={this.showPunchline}>Tell me</button>
                <button onClick={this.GeneratenextJoke}>Next Joke</button>
                <div>
                    <button
                        onClick={()=>{
                            // this.props.history.push("/path2");
                            this.props.history.goBack();
                        }}>Go back</button>
                </div>
            </>
        )
    }
}