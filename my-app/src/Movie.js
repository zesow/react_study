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