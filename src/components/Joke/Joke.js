import React, {Component, Fragment} from 'react';
import './Joke.css';


class Joke extends Component {



    render() {

        return (
            <div key={this.props.key}>
                <img src={this.props.picture} alt=""/>
                <p>{this.props.text}</p>
            </div>

        )
    }
}

export default Joke;
