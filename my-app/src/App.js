import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';

// 각각에게 다른 제목 부여. 이게 각각의 props 임.


class App extends Component {

  state = {
    greeting: 'Hello!',
    // // 안으로 옮김.
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
      }
    ]
  }

  componentDidMount(){
    // 몇 초 뒤에 내가 원하는 행동이 실행되도록 설정할 수 있다.
    // 컴포넌트가 마운트하면, 페이지 로드 후 3초 뒤에 새로운 컴포넌트가 추가됨.(Transporting)
    setTimeout(() => {
      this.setState({
        movies: [
          // ... ~이 이전 리스트를 그대로 두고 하나를 추가한다는 뜻임. 이걸 지우면 전체를 대체해 버린다. 
          // 이렇게 state를 조작함으로서 여러가지 효과를 낼 수 있음.
          // 페이스북에서 맨 밑으로 스크롤 하면 새로운 피드들이 나타나는 것.
          // ...this.state.movies,
          {
            title: "Transporting",
            poster: "https://marketing.adobe.com/resources/help/ko_KR/sc/user/graphics/graph_stacked_horizontal.png"
          },
          ...this.state.movies
          // 맨 밑에 뒀더니 5초뒤에 맨 위에 추가됨.
        ]
      })
    },3000)
  }

  render() {
    return (
      <div className="App">
        {this.state.greeting}
        {/* this.state 추가. */}
        {this.state.movies.map((movie, index) => {
          return <Movie title={movie.title} poster={movie.poster} key={index} />
        })}
      </div>
    );
  }
}

export default App;
