import React,{Component} from 'react';
import '../Stylesheets/Water.css';
import water from '../Assets/Water Drop Icon.png'

class Water extends Component{
    render(){
        var stack = [];
        for (var i = 0; i < this.props.waterCurrent; i++) {
          stack.push(<img className="Banana" key={i} src={water} alt='water icon' />);
        }
        return stack;
    }
}

export default Water;