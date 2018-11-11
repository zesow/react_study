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

# 13. Loading state
내가 원하는 데이터가 바로 존재하지 않을 수도 있음.
데이터 없이 컴포넌트가 로딩을 하고, 데이터를 위해 API를 불러서 API 가 데이터를 주면 나의 State를 업데이트 하는것.
-> API 콜을 타임앙웃으로.

[app.js]
```
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

```

# 14. dumb component
state랑 시간 흐름 다 없앰.
간단하게 코딩 가능.
[App.js]
```
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';


class App extends Component {

  state = {

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

```

[Movie.js]
```
import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

// dumb
// stateless, no function render, no lifecycle
// 이벤트들이 다 사라짐. 하지만 간단하게 만들 수 있다.
// return 만 있음.
// 오직 하나의 props, html만 필요.
// class 다 지워버림! 따라서 props 다 삭제 ??

function Movie({title, poster}){
    return (
        <div>
            <MoviePoster poster={poster} />
            <h1>{title}</h1>
        </div>         
    )
}
Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
}
function MoviePoster({poster}){
    return (
        <img src={poster} alt="Movie Poster" />
    )
}

// proptypes 확인
// number 가 아니므로 에러 발생.
MoviePoster.propTypes = {
    poster: PropTypes.number.isRequired
}

export default Movie
```

#15. Ajax on React

url에서 정보 가져오기 = fetch()

#16. promise
새로운 자바스크립트 컨셉.
1. 비동기 - 첫번째 라인이 끝나지 않아도 두번째 라인이 실행된다.
예를들어 여러 종류의 api를 동시에 가져올 수 있음. = 다른 작업을 스케쥴링 해 놓을 수 있다.
2. 다른 기능은 시나리오를 잡는 방법을 알려줌.
여자친구와
  1. 영화를 보러간다.
  2. 영화를 못보러간다.
와 비슷함.
![](https://www.dropbox.com/s/e5l1lvq692wi28i/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202018-11-10%2023.54.09.jpg?dl=0)
readablestream = byte 스트림 = 0101. 

[app.js]
```
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

```

# 17. async, await

```
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

```

# update movie : component (add genre,...)
![image](https://user-images.githubusercontent.com/14235802/48309421-0decc300-e5bd-11e8-8c9a-94326ac94a61.png)

[App.js]
```
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

// console.log로 movie 각각 띄운 다음에 필요한 정보만 랜더링 하도록 함.
  _renderMovies = () => {
    const movies = this.state.movies.map(movie => {
      console.log(movie)
      return <Movie
       title={movie.title_english} 
       poster={movie.medium_cover_image}
       key={movie.id} 
       genres={movie.genres}
       synopsis={movie.synopsis}
      />
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

```

[Movie.js]
```
import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

// dumb
// stateless, no function render, no lifecycle
// 이벤트들이 다 사라짐. 하지만 간단하게 만들 수 있다.
// return 만 있음.
// 오직 하나의 props, html만 필요.
// class 다 지워버림! 따라서 props 다 삭제 ??

function Movie({title, poster, genres, synopsis}){
    return (
        <div className="Movie">
            <div className="Movie_Columns">
                <MoviePoster poster={poster} alt={title}/>
            </div>
            <div className="Movie_Columns">
                <h1>{title}</h1>
                <div className="Movie_Genres">
                    {genres.map((genre,index) => <MovieGenre genre={genre} key={index} />)}
                </div>
                <p className="Movie_Synopsis">
                    {synopsis}
                </p>
            </div>
        </div>         
    )
}

function MoviePoster({poster, alt}){
    return (
        <img src={poster} alt={alt} title={alt} className="Movie_Poster" />
    )

}

// 그냥 Movie 내에 span을 바로 줄 수도 있지만, 기능별로 컴포넌트로 쪼개고 작게 만드는게 더 좋음.
function MovieGenre({genre}){
    return (
        <span className="Movie_Genre">{genre}</span>
    )
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    synopsis: PropTypes.string.isRequired
}

MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
}

MovieGenre.propTypes = {
    genre: PropTypes.string.isRequired
}




export default Movie
```