import React, {Component, Fragment} from 'react';
import './Jokes.css';
import Joke from '../../components/Joke/Joke';
import Button from '../../components/Button/Button'


class Jokes extends Component {

    state = {
        jokes: []
    };


    componentDidMount() {
        const URL = 'https://api.chucknorris.io/jokes/random';

        const p1 = fetch(URL).then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Something went wrong with network request');
        });
        const p2 = fetch(URL).then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Something went wrong with network request');
        });
        const p3 = fetch(URL).then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Something went wrong with network request');
        });
        const p4 = fetch(URL).then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Something went wrong with network request');
        });
        const p5 = fetch(URL).then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Something went wrong with network request');
        });

        Promise.all([p1, p2, p3, p4, p5]).then(joke => {
            this.setState({jokes: joke})
        }).catch(error => {
            console.log(error);
        });
    }




clickedButton = () => {
    this.componentDidMount()
}

render() {

    return (
        <Fragment>
            <section className="Jokes">
                {this.state.jokes.map(joke => (
                    <Joke
                        key={joke.id}
                        picture={joke.icon_url}
                        text={joke.value}
                    />

                ))}
                {console.log(this.state.jokes)}
                <Button
                    clicked={this.clickedButton}
                />

            </section>

        </Fragment>
    )
}
}

export default Jokes;
