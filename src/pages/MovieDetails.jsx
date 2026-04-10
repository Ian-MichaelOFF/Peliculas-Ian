import {useEffect,useState} from "react";
import { useParams} from "react-router-dom";
import { get } from "../data/httpClient";
import { getMovieImg } from "../utils/getMovieImg";
import "../pages/movieDetails.css";
export function MovieDetails(){
    const {movieId} = useParams();
    const [movie, setMovie] = useState(null);
    const [generos, setGeneros] = useState(null);
    useEffect(()=>{
        get("/movie/" + movieId).then(data =>{
            setMovie(data)
            setGeneros(data.genres[0])
        })
    },[movieId]);
    if (!movie) return <p>Cargando...</p>;

    const imageUrl =getMovieImg(movie.poster_path, 500)
    return(
    <div className="detailsContainer">
        <img src={imageUrl} alt={movie.title} className="MovieImage"/>
        <div className="col movieDetails"> 
            <p className="col titulo">
                <strong>Titulo: </strong>
                {movie.title}
            </p>
            <p>
                <strong>Genero: </strong>
                {generos.name}
            </p>
            <p>
                <strong>Descripcion: </strong>
                {movie.overview}
            </p>

        </div>
    </div>
    );
}