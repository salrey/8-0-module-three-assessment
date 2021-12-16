import { Component } from "react";
import "./Movies.css";


class Movies extends Component {
    constructor() {
        super() 
        this.state = {
            movies: [],
            movieSelected: {}
        }
    }

    handleMovies = (event) => {
        const { movies } = this.state;

        const movieFound = movies.find((film) => film.title === event.target.value)

        this.setState({ movieSelected: movieFound})
    }

    componentDidMount() {
        fetch('https://ghibliapi.herokuapp.com/films/')
        .then((response) => response.json())
        .then((movies) => this.setState({movies: movies}))
    }

    render() {
        const { movies, movieSelected } = this.state
        const titles = movies.map((film) => <option key={film.id} value={film.title}>{film.title}</option>)

        return (
            <div className="movies">
                <h1>Select a Movie</h1>
                <select
                    className='movie-selection'
                    name="films"
                    id="film"
                    onChange={this.handleMovies}
                >
                    <option value=''></option>
                    {titles}
                </select>
                {movieSelected?.title && 
                <div className="movie-details">
                    <h3>Title: {movieSelected.title}</h3>
                    <h3>Release Date: {movieSelected.release_date}</h3>
                    <h3>Description: {movieSelected.description}</h3>
                </div>}
            </div>
        )
    }
};

export default Movies;