import '../css/w3.css';
import React, { Component } from 'react';
class Navigation extends Component{
  render(){
    return(
      <div className="w3-bar w3-border w3-black">
        <a href="#" className="w3-bar-item w3-button">Default</a>
        <a href="#" className="w3-bar-item w3-button w3-hover-none w3-text-grey w3-hover-text-white">Link 1</a>
        <a href="#" className="w3-bar-item w3-button w3-hover-none w3-text-grey w3-hover-text-white">Link 2</a>
        <a href="#" className="w3-bar-item w3-button w3-hover-none w3-text-grey w3-hover-text-white">Link 3</a>
      </div>
      );
    }
  }


export default Navigation;
