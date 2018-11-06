import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';

class App extends Component {
  render() {
    // 이 컴포넌트가 나에게 보여주는 것이 무엇인지를 정의.
    return (
      // 자바스크립트 안에 html = jsx
      <div className="App">
        <Movie /> 입니다.
        
      </div>
    );
  }
}

export default App;
