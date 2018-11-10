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