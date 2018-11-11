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