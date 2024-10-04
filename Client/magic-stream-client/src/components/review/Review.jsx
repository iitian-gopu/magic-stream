import {Form, Button} from 'react-bootstrap';
import { useRef,useEffect,useState } from 'react';
import {useParams} from 'react-router-dom'
//import axiosPrivate from '../../api/axiosPrivateConfig';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import useAuth from '../../hooks/useAuth';
import Movie from '../movie/Movie'
import Spinner from '../spinner/Spinner';

const Review = () => {

    const [movie, setMovie] = useState({});
