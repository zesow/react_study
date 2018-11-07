# 1강
리액트의 장점
1. 자바스크립트랑 동일
필요한 기술만 배우면 됨
만약 이걸 안쓰더라도 나는 자바스크립트 개발자가 되서 좋다.

2. Composition 구조가 좋다.
=구성 요소별로 쪼개서 작업이 가능함.

3. 단방향성
데이터는 일정한 장소에 있고 상태가 변했을 경우 ui만 업데이트 됨.
역으로 Ui는 데이터를 변경하지 못한다.


# 2강
영화앱을 만듦.


# 3강
리액트->자바스크립트 툴 필요 : 트랜스파일러(웹팩)
Es6 사용.
하지만 모든 브라우저가 이해하지 못함.
모든 브라우저가 이해하는 레거시 코드로 바꿔주는게 웹팩.

Create-react-app 사용하기.


# 4강
코드 바꿔보기. 
App.js를 바꿔주면 자동으로 컴파일 후 새로고침까지 되버림.


# 5강
컴포넌트 디자인
3개의 컴포넌트 만듦
이걸 각각 만듦

Hello는 app.js 에 있음. 
화면에 뿌려지는건 index.js이지만 이게 여러가지 reactDom을 불러옴.
컴포넌트 app 들. 출력을 해야함.

<index.js>
```
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

```
index.html에 있는 root에 app.js를 뿌려라.

<index.html>
```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="theme-color" content="#000000">

    <link rel="manifest" href="%PUBLIC_URL%/manifest.json">

    <title>Movie App</title>
  </head>
  <body>
    <noscript>
      You need to enable JavaScript to run this app.
    </noscript>
    <div id="root"></div>

  </body>
</html>
```

<app.js>
```
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    // 이 컴포넌트가 나에게 보여주는 것이 무엇인지를 정의.
    return (
      // 자바스크립트 안에 html = jsx
      <div className="App">
        hello!
      </div>
    );
  }
}

export default App;
```
이게 컴포넌트임. App이.
여기 안에 여러 개의 컴포넌트를 만들 수 있다.

리액트 = ui라이브러리
리액트dom = 리액트를 출력하는걸 도와주는 모델.
Reactdom = 웹
Reactnative = 모바일

리액트돔은 하나의 다큐먼트를 출력하고, 그 안에 있는 엘리먼트의 id가 root. 이건 index.html 에 있음. 

app컴포넌트가 대빵 컴포넌트, 그 안에 movie 라는 작은 컴포넌트가 있음.

모든 것은 컴포넌트다.

 컴포넌트 > render > return > JSX


# 6강
Prop란 ?
데이터가 오는 곳.
app에서 모든 이미지를 가져올 것.
메인 컴포넌트에 그래프 리스트가 있다.
그 리스트 안 카드들에는 각각의 정보가 담김 = 부모 컴포넌트가 자식 컴포넌트에게 정보를 줌 = props를 이용해서.

<App.js>
```
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
```

<Movie.js>
```
import React, { Component } from 'react';
import './Movie.css';

class Movie extends Component{
    render(){
        console.log(this.props);
        return(
        <div>
            <MoviePoseter poster={this.props.poster} />
            {/* 각각에게 맞는 제목들. movie.js 에서 가져옴. 
            괄호치는거 항상 주의
            */}
            <h1>{this.props.title}</h1>
        </div>
        )
    }
}

class MoviePoseter extends Component{
    render(){
        console.log(this.props)
        return(
            <img src={this.props.poster} />
        )
    }
}
export default Movie
```
부모에게서 데이터를 받아서 각각 뿌려진다.


# 7강 - lists with .maps
배열로 하는데는 한계가 있음.
Api로 데이터 긁어오기 위해서는 다른 방식이 필요

```
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
  render() {
    // 이 컴포넌트가 나에게 보여주는 것이 무엇인지를 정의.
    return (
      // 자바스크립트 안에 html = jsx
      <div className="App">
      {/* map 기능. 
        map 은 array를 만듦. 다른 array의 요소를 포함하는 값.
        array를 이용해서 컴포넌트들을 생성해준다.
	이게 없었으면 <Movie> 4개 써줘야함.
      */}
        {movies.map(movie => {
          return <Movie title={movie.title} poster={movie.poster} />
        })}
      </div>
    );
  }
}

export default App;

```

# 8강 - Validating Props with Prop Types

엘리먼트가 많을경우 key를 줘야함.
고유해야함.

## Prop을 통한 데이터 타입 체크 및 필수 지정
<Movie.js>

```
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

class Movie extends Component{

    // 타이틀과 포스터가 문자열. 이걸로 우리가 얻게되는 정보를 체크할 수 있다. 타입 관리.
    // 아니면 에러 메시지가 나온다. 또한 필수인지 아닌지도 설정가능.
    // 부모 컴포넌트에서 얻는 정보가 무엇인지, 있는지 없는지 알수 있음.
    static propTypes = {
        title: PropTypes.string.isRequired,
        poster: PropTypes.string
    }


    render(){
        console.log(this.props);
        return(
        <div>
            <MoviePoseter poster={this.props.poster} />
            {/* 각각에게 맞는 제목들. movie.js 에서 가져옴. 
            괄호치는거 항상 주의
            */}
            <h1>{this.props.title}</h1>
        </div>
        )
    }
}

class MoviePoseter extends Component{

    static propTypes = {
        poster: PropTypes.string.isRequired
    }
    
    render(){
        console.log(this.props)
        return(
            <img src={this.props.poster} />
        )
    }
}
export default Movie
```


# 9. component lifecycle

여러 기능을 순서대로 실행.

render : willmount -> render -> did
willmount 에서 api에 작업요청.
그다음에 데이터 관련 처리.

update : willreceive -> if shouldupdate == true -> willupdate -> render ->didupdate
빌드할 떄 도움.
각각의 스텝에서 내가 원하는 행동을 추가.
예를들어 willupdate 때 바람개비 추가

[App.js]
```
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

```

# 10. Thinking in React Component State
state = react 컴포넌트 안에 있는 객체.
컴포넌트 state 가 바뀔떄마다 render 가 발생함.

[app.js]
```
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

```

# 12. practicing this setState

...this.state.movies 를 이용해서 페이스북과 같이 이전 컨텐츠에 추가로 로딩되는 효과를 줄 수 있다.
[app.js]
```
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

```