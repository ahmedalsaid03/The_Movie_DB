import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"



function Movie() {

  let params = useParams();
  const[movieDetails , setMovieDetails] = useState(null) 

  async function getMovieDetails(id){
    let {data} = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=5b1e348081a2dd256cfd28334617b88a`)
     setMovieDetails(data);
     console.log(movieDetails)
  }

  useEffect(()=>{
    getMovieDetails(params.id)

  },[])

  return (
    <div>
      {movieDetails?<div className="row">
        <div className="col-md-3">
          <img className="w-100" src={`https://image.tmdb.org/t/p/w500`+movieDetails.poster_path} alt="" />
        </div>
        <div className="col-md-9">
           <h2>{movieDetails.title}</h2>
           <p className="py-3">{movieDetails.overview}</p>
           <ul>
            <li>budget : {movieDetails.budget}</li>
            <li>vote : {movieDetails.vote_average}</li>
            <li>popularity : {movieDetails.popularity}</li>
            <li>vote_count : {movieDetails.vote_count}</li>
           </ul>
        </div>
      </div>:<div className="vh-100 d-flex justify-content-center align-items-center"><i className="fas fa-spinner fa-spin fa-3x"></i></div>}


    </div>
  )
}

export default Movie

