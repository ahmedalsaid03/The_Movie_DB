// import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Navbar from './Navbar';
import Footer from './assets/Footer';
import Movie from './Movie';
import Notfound from './Notfound';
import Home from './Home';
import Tv from './Tv';
import Movies from './Movies';
import MoviesContextProvider from './Context/Store';
import { Provider } from 'react-redux';
import { counterStore } from './Context/ReduxStore';
import TestforRedux from './TestforRedux';




function App() {




  return (
    <>
    <Provider store={counterStore}>
    <MoviesContextProvider>
    <Navbar/>
    <div className="container">
    <Routes>
      <Route path='' element={<Home/>}/>
      <Route path='home' element={<Home/>}/>
      <Route path='movies' element={<Movies/>}/>
      <Route path='movie' element={<Movie/>}>
         <Route path=':id' element={<Movie/>}/>
      </Route>
      <Route path='tvshow' element={<Tv/>}/>
      <Route path='test' element={<TestforRedux/>}/>
      <Route path='*' element={<Notfound/>}/>
    </Routes>
    </div>
    <Footer/>
    </MoviesContextProvider>
    </Provider>
    </>
  )
}

export default App
