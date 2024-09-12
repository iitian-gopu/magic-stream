import {useState, useEffect} from 'react';
import axiosClient from '../../api/axiosConfig'
import Movies from '../movies/Movies';
import Spinner from '../spinner/Spinner';

const Home =({updateMovieReview}) => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState();

    useEffect(() => {
        const fetchMovies = async () => {
