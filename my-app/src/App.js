import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';


class App extends Component {

  state = {
    greeting: 'Hello!'
    
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({
        movies : [
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
          },
          {
            title: "Transporting",
            poster: "https://marketing.adobe.com/resources/help/ko_KR/sc/user/graphics/graph_stacked_horizontal.png"
          }
        ]
      })
    },5000)
  }

  // 데이터가 없을 때 '로딩' 을 띄우고, 있으면 영화정보가 보이도록 함.
  // 이게 무슨 뜻일까??
  // map을 이용해서 movie 들을 출력.
  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index} />
    })
    return movies
  }
  render() {
    return (
      <div className="App">
        {/* loading state 가 필요한 부분 */}
        {/* loading... */}
        {/* 언더스코어 쓰는 이유 : 리액트의 자체 기능과 차이를 두기 위해. 나의 기능은 언더스코어로 시작하도록 */}
        {/* 참 일경우 영화정보를, 거짓일경우 로딩을. */}
        {this.state.movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
}

export default App;
