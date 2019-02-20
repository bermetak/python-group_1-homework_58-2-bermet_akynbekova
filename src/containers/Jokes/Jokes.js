import React, {Component, Fragment} from 'react';
import './Jokes.css';
import Joke from '../../components/Joke/Joke'


class Jokes extends Component {

    state = {
        jokes: []
    };


    componentDidMount() {
        fetch('https://api.chucknorris.io/jokes/random').then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Something went wrong with network request');
        }).then(joke => {
            this.setState({jokes: [{id: joke.id, text: joke.value, picture: joke.icon_url}]});
        }).catch(error => {
            console.log(error);
        });
    }


    render() {

        return (
            <Fragment>
                <section className="Posts">
                    {this.state.jokes.map(joke => (
                    <Joke
                        key={joke.id}
                        picture={joke.picture}
                        text={joke.text}
                    />

                    ))}

                </section>

            </Fragment>
        )
    }
}

export default Jokes;
