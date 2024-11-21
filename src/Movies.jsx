import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import $ from 'jquery'



function Movies() {
    const [trendingMovies, setTrendingMovies] = useState([]);
    let nums = new Array(13).fill(1).map((elem,index)=> index+1);

    async function getTrending(pageNumber){
        let {data} = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=5b1e348081a2dd256cfd28334617b88a&language=en-US&page=${pageNumber}&sort_by=popularity.desc%27`)
  
        setTrendingMovies(data.results);
    }
     
    useEffect(()=>{
        getTrending(1)
    },[])
  return (
    <>
    <div>
        {trendingMovies? <div className="row justify-content-center">
    {trendingMovies.map((movie,index)=> <div key={index} className="col-md-2">
        <div className="movie">
            <Link to={`/movie/${movie.id}`}>
            <img className="w-100" src={`https://image.tmdb.org/t/p/w500`+movie.poster_path} alt="" />
            <h3 className="h6 my-2">{movie.title}</h3>
            </Link>
          
        </div>
    </div>)}  
    </div>: <div className="vh-100 d-flex justify-content-center align-items-center"><i className="fas fa-spinner fa-spin fa-3x"></i></div>}

    </div>
     <ul className="pagination m-3 d-flex justify-content-center">
     {nums.map((num)=><li key={num} onClick={()=>getTrending(num)} className="page-item"><Link className="page-link bg-transparent text-white" >{num}</Link></li>)}
   </ul>
   </>
  )
}

export default Movies
