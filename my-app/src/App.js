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

  state = {
    greeting: 'Hello!'
  }

  // component mount 후 5초 기다리고 greeting 업데이트.
  // 컴포넌트가 mount 할 떄마다 greeting 을 hello again 으로 변경.
  // state를 바꿀 수 있고ㅡ, 자동으로 render 가 작동.
  componentDidMount(){
    setTimeout(() => {
      // 직접적으로 변경하면 안됨!
      // this.state.greeting = 'something'
      this.setState({
        greeting: 'Hello again!'
      })
    }, 5000)
  }

  render() {
    return (
      <div className="App">
        {this.state.greeting}
        {movies.map((movie, index) => {
          return <Movie title={movie.title} poster={movie.poster} key={index} />
        })}
      </div>
    );
  }
}

export default App;
