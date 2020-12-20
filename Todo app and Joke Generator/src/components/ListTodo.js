import React from "react";

export default class ListTodo extends React.Component{
    constructor(){
        super();
    }
    render(){
        let {items}=this.props;
        return(
            <>
                <ul>
                    {items.map((item)=>(
                        <li>
                            <span
                                onClick={()=>{
                                    this.props.updateTodo(item);
                                }}
                                    style={{textDecoration:!item.active?"line-through":"none"}}
                                >
                                    {item.title}
                                </span>

                            <button onClick={()=>{
                                this.props.deleteTodo(item)
                            }}>Delete</button>
                        </li>
                    ))}
                </ul>
            </> 
        )
    }
}