import './styles/App.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from './globals'
import Home from './components/Home'
import Nav from './components/Nav'

const App = () => {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    const getMovies = async () => {
      const response = await axios.get(`${BASE_URL}/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}`)
      setMovies(response.data.results)
    }
    getMovies()
    console.log(movies)
  }, [])



  return (
    <div className="App">
      <header>
        <div className="nav">
          <Nav />
        </div>
      </header>
      <main>
        <Home/>
      </main>
    </div>
  )}

export default App;
