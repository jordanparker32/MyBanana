import React,{Component} from 'react';
import banana from '../Assets/Banana icon.png';
import '../Stylesheets/Banana.css';


class Banana extends Component{
    render(){
        var stack = [];
        for (var i = 0; i < this.props.bananaCurrent; i++) {
          stack.push(<img className="Banana" key={i} src={banana} alt='banana icon' />);
        }
        return stack;
    }
}
export default Banana;