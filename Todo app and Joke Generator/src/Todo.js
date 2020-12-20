import React from "react";
import './components/Todo.css';
import InputTodo from "./components/InputTodo";
import ListTodo from "./components/ListTodo";
import FilterTodo from "./components/FilterTodo";

export default class Todo extends React.Component{
    constructor(){
        super();
        this.state={
            todos:[],
            allTodos:[],
        };
    }
    addTodo=(title)=>{
        let todo={  
            title,
            active:1,
        };
        let newTodoArray=[...this.state.todos,todo];
        this.setState({
            todos:newTodoArray,
            allTodos:newTodoArray,
        })
    }
    updateTodo=(todo)=>{
        let todoObjectIndex = this.state.todos.indexOf(todo);
        let previousArray=[...this.state.todos];
        previousArray[todoObjectIndex].active=!previousArray[todoObjectIndex].active;
        this.setState({
            todos:previousArray,
            allTodos:previousArray,
        });
    };
    deleteTodo=(todo)=>{
        let todoObjectIndex = this.state.todos.indexOf(todo);
        console.log(todoObjectIndex);
        let previousArray=[...this.state.todos];
        previousArray.splice(todoObjectIndex,1);
        this.setState({
            todos:previousArray,
            allTodos:previousArray,
        });
    };
    FilterTodo=(filter)=>{
        switch (filter){
            case "Active":
                let activeTodos=this.state.allTodos.filter((todo)=>todo.active);
                this.setState({
                    todos:activeTodos,
                })
                break;
            case "Completed":
                let completedTodos=this.state.allTodos.filter((todo)=>!todo.active);
                this.setState({
                    todos:completedTodos,
                })
                break;
            default:
                this.setState({
                    todos:[...this.state.allTodos],
                })
        }
    }
    render(){
        return(
            <>
                <div className="Todo">
                    <InputTodo addTodo={this.addTodo}/>
                    <ListTodo 
                        items={this.state.todos} 
                        deleteTodo={this.deleteTodo} 
                        updateTodo={this.updateTodo}
                    />
                    <FilterTodo filterButtons={["All","Active","Completed"]}FilterTodo={this.FilterTodo}/>

                    <button
                            onClick={()=>{
                                this.props.history.push("/path2");
                                // this.props.history.goBack();
                            }}>Go to Joke  Generator Route</button>
                </div>
            </>
        )
    }
}