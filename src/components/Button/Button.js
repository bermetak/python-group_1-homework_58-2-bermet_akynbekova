import React, {Component, Fragment} from 'react';
import './Button.css';

class Button extends Component {

    shouldComponentUpdate(nextProps, nextState){
        return false;
    }

    render() {
        return <button
            type='button'
            onClick={this.props.clicked}>
            More jokes
        </button>


    };
}


export default Button;