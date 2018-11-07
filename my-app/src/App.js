import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';

// 각각에게 다른 제목 부여. 이게 각각의 props 임.

const movies = [
  {
    title: "열연",
    poster: "https://marketing.adobe.com/resources/help/ko_KR/sc/user/graphics/graph_trend_line.png"
  },
  {
    title: "냉연",
    poster: "https://marketing.adobe.com/resources/help/ko_KR/sc/user/graphics/graph_smooth_line.png"
  },
  {
    title: "순환품",
    poster: "https://marketing.adobe.com/resources/help/ko_KR/sc/user/graphics/graph_stacked_area.png"
  },
  {
    title: "STS",
    poster: "https://marketing.adobe.com/resources/help/ko_KR/sc/user/graphics/graph_stacked_horizontal.png"
  }
]
class App extends Component {

  componentWillMount(){
    // 사이클이 시작
    console.log('will mount')
  }

  componentDidMount(){
    // 리액트 세계에 컴포넌트가 자리잡음.
    console.log('did mount')
  }

  render() {
    // 컴포넌트가 리액트 세계에 존재.
    console.log('did rander')
    // 이 컴포넌트가 나에게 보여주는 것이 무엇인지를 정의.
    return (
      // 자바스크립트 안에 html = jsx
      <div className="App">
      {/* map 기능. 
        map 은 array를 만듦. 다른 array의 요소를 포함하는 값.
        array를 이용해서 컴포넌트들을 생성해준다.
        index를 추가하면 저절로 고유한 키값이 부여된다.
      */}
        {movies.map((movie, index) => {
          return <Movie title={movie.title} poster={movie.poster} key={index} />
        })}
      </div>
    );
  }
}

export default App;
