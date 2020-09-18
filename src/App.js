import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import "react-step-progress-bar/styles.css";
import { ProgressBar } from "react-step-progress-bar";

class App extends React.Component {

  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { counter: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
export default App;
