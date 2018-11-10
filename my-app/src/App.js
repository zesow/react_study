import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';


class App extends Component {

  state = {

  }

  componentDidMount(){
    // didmount 의 크기를 줄임. function 별로 크기를 줄이는게 좋은 것.
    this._getMovies(); 
  }

  // 비동기. 이전 라인의 작업이 끝날때까지 기다리는 게 아닐 때 사용.
  _getMovies = async () => {
    // callApi 를 await 에서. callApi가 끝나기를 기다렸다가 그 리턴값을 movies에 넣음.
    const movies = await this._callApi()
    // await 를 했기 때문에 callApi가 값을 다 받아온 다음에 setState 가 실행된다.
    this.setState({
      movies
    })
  }

  _callApi = () => {
    // then 이 많아진다 = 콜백 지옥. 해결책이 필요함.
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = 'https://yts.ag/api/v2/list_movies.json?sort_by=rating'
    return fetch(proxyurl + url)
    .then(response => response.json())
    // 화살표 함수 = 화살표에 return 이 내포되어 있음.
    .then(json => json.data.movies)
    .catch(err => console.log(err))
  }

  // 데이터가 없을 때 '로딩' 을 띄우고, 있으면 영화정보가 보이도록 함.
  // 이게 무슨 뜻일까??
  // map을 이용해서 movie 들을 출력.
  _renderMovies = () => {
    const movies = this.state.movies.map(movie => {
      return <Movie title={movie.title} poster={movie.large_cover_image} key={movie.id} />
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
