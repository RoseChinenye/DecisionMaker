import React from 'react';

class Test extends React.Component {
    constructor(props) {component 
        super (props);
    }
    render(){
        return (
            <div style = {{backgroundColor : "red"}}>
            <h1 style = {{color : "#fff"}}> {this.props.title} </h1>
            <button onclick = {this.props.handleChange} type = "button"> Change text </button>
            </div>
        )
    }

}
export default Test;