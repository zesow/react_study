import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';

// 각각에게 다른 제목 부여. 이게 각각의 props 임.
const movieTitles = [
  "열연",
  "냉연",
  "순환품",
  "STS"
]

const movieImages = [
  "https://marketing.adobe.com/resources/help/ko_KR/sc/user/graphics/graph_trend_line.png",
  "https://marketing.adobe.com/resources/help/ko_KR/sc/user/graphics/graph_smooth_line.png",
  "https://marketing.adobe.com/resources/help/ko_KR/sc/user/graphics/graph_stacked_area.png",
  "https://marketing.adobe.com/resources/help/ko_KR/sc/user/graphics/graph_stacked_horizontal.png"
]

class App extends Component {
  render() {
    // 이 컴포넌트가 나에게 보여주는 것이 무엇인지를 정의.
    return (
      // 자바스크립트 안에 html = jsx
      <div className="App">
        <Movie title={movieTitles[0]} poster={movieImages[0]}/>
        <Movie title={movieTitles[1]} poster={movieImages[1]}/>
        <Movie title={movieTitles[2]} poster={movieImages[2]}/>
        <Movie title={movieTitles[3]} poster={movieImages[3]}/> 

      </div>
    );
  }
}

export default App;
