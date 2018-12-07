import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  /* state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleIncreament = data => {
    console.log(data);
    const counters = [...this.state.counters];
    const index = counters.indexOf(data);
    counters[index] = { ...data };
    counters[index].value++;
    this.setState({ counters });
  };
  handleDelete = counter_id => {
    const counters = this.state.counters.filter(c => c.id != counter_id);
    this.setState({ counters });
  };
  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  }; */
  render() {
    return (
      <div>
        <button
          onClick={() => this.props.onReset()}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>

        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.props.onDelete}
            onIncreament={this.props.onIncreament}
            counter={counter}

          />
        ))}
      </div>
    );
  }
}

export default Counters;
