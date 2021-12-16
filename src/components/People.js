import { Component } from "react";
import "./People.css";
import searchimg from "./search.png";



class People extends Component {
    constructor() {
        super() 
        this.state = {
            people: [],
            personFound: "",
            userInput: "",
        }
    };

    handleUserInput = (event) => {
        this.setState({[event.target.name]: event.target.value});
    };

    handleSubmit = (event) => {
        event.preventDefault();

        const { people, userInput } = this.state;

        const found = people.find((person) => person.name.toLowerCase() === userInput.toLowerCase())

        found ? this.setState({personFound: found}) : this.setState({personFound: <h3>Person Not Found</h3>})

        event.target.reset();
    };

    componentDidMount() {
        fetch(`https://ghibliapi.herokuapp.com/people/`)
        .then((response) => response.json())
        .then((people) => this.setState({people: people}))
        .catch(console.log);
    }

    render() {
        const { personFound } = this.state;
        const personInfo = personFound?.name && <div className="person-details">
            <h3>Name: {personFound.name}</h3>
            <h3>Age: {personFound.age}</h3>
            <h3>Gender: {personFound.gender}</h3>
        </div>

        return (
            <div className="people">
                <h1>Search for a Person</h1>
                <div className="search">
                    <form onSubmit={this.handleSubmit}>
                        <input
                            className='UserInput'
                            id='UserInput'
                            type="text"
                            placeholder="Find a Person"
                            name='userInput'
                            onChange={this.handleUserInput}
                            required
                        />
                        <button type="submit"><img src={searchimg} alt="search-pic" height="15"/></button>
                    </form>
                </div>
                <div className="people-details">
                    {personInfo || personFound}
                </div>
            </div>
        )
    }
};

export default People;