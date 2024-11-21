import { Link } from "react-router-dom";
import { moviesContext } from "./Context/Store";
import { useContext } from "react";

function Home() {
  let {trendingMovies, trendingTv, trendingPeople} = useContext(moviesContext)

  return (
    <>
    <div className="row">
        <div className="col-md-4 d-flex align-items-center">
            <div className=" w-100 details-container position-relative">
            <h2>Trending<br/>Movies<br /> to watch now</h2>
            <p className="">Most watched movies by day</p>
            </div>
        </div>
    {trendingMovies.map((movie,index)=> <div key={index} className="col-md-2">
        <div className="movie">
            <Link to={`/movie/${movie.id}`}>
            <img className="w-100" src={`https://image.tmdb.org/t/p/w500`+movie.poster_path} alt="" />
            <h3 className="h6 my-2">{movie.title}</h3>
            </Link>
          
        </div>
    </div>)}  
    </div>
    <div className="row py-5">
        <div className="col-md-4 d-flex align-items-center">
            <div className=" w-100 details-container position-relative">
            <h2>Trending<br/>Tv<br /> to watch now</h2>
            <p className="">Most watched Tv show by day</p>
            </div>
        </div>
    {trendingTv.map((tv,index)=> <div key={index} className="col-md-2">
        <div className="movie">
           <img className="w-100" src={`https://image.tmdb.org/t/p/w500`+tv.poster_path} alt="" />
           <h3 className="h6 my-2">{tv.name}</h3>
        </div>
    </div>)}  
    </div>
    <div className="row">
        <div className="col-md-4 d-flex align-items-center">
            <div className=" w-100 details-container position-relative">
            <h2>Trending<br/>People<br /> Right Now</h2>
            <p className="">Most watched Actors Today</p>
            </div>
        </div>
    {trendingPeople.map((people,index)=> <div key={index} className="col-md-2">
        <div className="movie">
           <img className="w-100" src={`https://image.tmdb.org/t/p/w500`+people.profile_path} alt="" />
           <h3 className="h6 my-2">{people.name}</h3>
        </div>
    </div>)}  
    </div>
    </>
  )
}

export default Home
