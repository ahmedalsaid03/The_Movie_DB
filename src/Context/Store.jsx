import { createContext } from "react";
import axios from "axios";
import { useEffect, useState } from "react"

export let moviesContext = createContext();

export default function MoviesContextProvider(props){

    const [trendingMovies, setTrendingMovies] = useState([]);
    const [trendingTv, setTrendingTv] = useState([]);
    const [trendingPeople, setTrendingPeople] = useState([]);

    async function getTrending(mediaType,callback){
        let {data} = await axios.get(`https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=5b1e348081a2dd256cfd28334617b88a`)
  
        callback(data.results.slice(0,10));
    }
     
    useEffect(()=>{
        getTrending("movie",setTrendingMovies)
        getTrending("tv",setTrendingTv)
        getTrending("person",setTrendingPeople) 
    },[])
    return <moviesContext.Provider value={{trendingMovies, trendingTv, trendingPeople}}>
        {props.children}
    </moviesContext.Provider>
}