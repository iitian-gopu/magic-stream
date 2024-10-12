import {useParams} from 'react-router-dom';
import ReactPlayer from 'react-player';
import './StreamMovie.css';

const StreamMovie = () => {

    let params = useParams();
    let key = params.yt_id;

