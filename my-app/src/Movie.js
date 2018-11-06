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