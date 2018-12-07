import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.counter.value
  };

 

  render() {
    return (
      <div>
          <h4>Counter #{this.props.counter.id}</h4>
        <span className={this.getBadgeClasses()}>
          {this.formateCount()}
        </span>
        <button
          onClick={()=> this.props.onIncreament(this.props.counter)}
          className="btn btn-secondary btn-sm m-2"
        >
          Increament
        </button>
        <button
          onClick={()=> this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
  formateCount() {
    let { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
