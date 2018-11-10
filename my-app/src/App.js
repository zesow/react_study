import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';


class App extends Component {

  state = {

  }

  componentDidMount(){
    // fetch가 끝나면 then을 해라. 그런데 에러가 발생하면 err를 실행해라.
    // json 으로  바꿈.
    // cors 에러 해결. proxyurl 을 추가해준다. https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe
    // api 받아서 콘솔에 출력 성공.
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = 'https://yts.ag/api/v2/list_movies.json?sort_by=rating'
    fetch(proxyurl + url)
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.log(err))
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
        {this.state.movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
}

export default App;
