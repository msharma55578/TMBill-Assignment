import React, { Component } from "react";
import { render } from "@testing-library/react";

export default class FilterTodo extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <>
        {this.props.filterButtons.map((filterButton) => {
          return (
            <button
              onClick={() => {
                this.props.FilterTodo(filterButton);
              }}
            >
              {filterButton}
            </button>
          );
        })}
      </>
    );
  }
}
// {this.props.filterButtons.map((filterButton)=>{
//     return <button onClick={()=>{
//         this.props.filterTodo(filterButton)
//     }}>{filterButton}</button>
// })}
