import { Component } from "react";
import "./Locations.css";


class Locations extends Component {
    constructor() {
        super()
        this.state = {
            buttonText: "Show Locations",
            locations: []
        }
    }

    toggleDisplay = (event) => {
        const text = this.state.buttonText === "Show Locations" ? "Hide Locations" : "Show Locations"

        this.setState({[event.target.name]: text})
    }

    componentDidMount() {
        fetch(`https://ghibliapi.herokuapp.com/locations/`)
        .then((response) => response.json())
        .then((locations) => this.setState({locations: locations}))
        .catch(console.log);
    }

    render() {
        const { buttonText, locations } = this.state;
        const results = buttonText === "Hide Locations" && locations.map((location) => {
            return (
                <li key={location.id} className="location">
                    <h3>Name: {location.name}</h3>
                    <h3>Climate: {location.climate}</h3>
                    <h3>Terrain: {location.terrain}</h3>
                </li>
            )
        })

        return (
            <div className="locations">
                <h1>List of Locations</h1>
                <button onClick={this.toggleDisplay} type="submit" name="buttonText" >{buttonText}</button>
                <ul className="location-details">
                    {results}
                </ul>
            </div>
        )
    }
};

export default Locations;