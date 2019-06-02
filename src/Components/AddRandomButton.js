import React, { Component } from 'react'

export default class AddRandomButton extends Component {
    render() {
        return (
            <button id="add-random"
                onClick={this.props.addRandomBook}
            >
                {this.props.buttonText}</button>
        )
    }
}