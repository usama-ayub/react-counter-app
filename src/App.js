import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counters from './components/counters';
import NavBar from './components/navbar';
class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleIncreament = data => {
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
  };
  render() {
    return (
      <div>
      <NavBar
      totalCounter={this.state.counters.filter(c=>c.value>0).length}
      />
      <main className="container">
      <Counters
      onDelete={this.handleDelete}
      onIncreament={this.handleIncreament}
      onReset={this.handleReset}
      counters={this.state.counters}
      />
      </main>
      
      </div>
    );
  }
}

export default App;
