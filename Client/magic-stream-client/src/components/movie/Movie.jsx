import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCirclePlay} from '@fortawesome/free-solid-svg-icons';
import "./Movie.css";
const Movie = ({movie,updateMovieReview}) => {
    return (
        <div className="col-md-4 mb-4" key={movie._id}>
            <Link
                to={`/stream/${movie.youtube_id}`}
                style={{ textDecoration: 'none', color: 'inherit' }}
            >
            <div className="card h-100 shadow-sm movie-card">
                <div style={{position:"relative"}}>
                    <img src={movie.poster_path} alt={movie.title} 
                        className="card-img-top"
                        style={{
                            objectFit: "contain",
                            height: "250px",
                            width: "100%"
                        }}
                    />
