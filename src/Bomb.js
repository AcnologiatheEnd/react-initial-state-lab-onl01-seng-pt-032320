import React, { Component } from 'react';

export default class Bomb extends Component {
    constructor(props){
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    response = (stateValue) => {
        if (stateValue >= 1){
            return(
                <div>
                {stateValue} seconds left before I go boom!
                </div>
            )
        } else {
            return(
                <div>
                    Boom!
                </div>
            )
        }
    }
    render() {
        return(
        this.response(this.state.secondsLeft)
        )
      }
        
}
