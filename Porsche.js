import React from 'react';
import PorscheDisplay from "./PorscheDisplay";
import PorsceButton from "./PorscheButton";
import "..//App.css"

export class Porsche extends React.Component {
    render() {
        return(
            <div id="">
                <button>{this.props.text}</button>  
            </div>
        )
    }
}