import React,{Component} from 'react';
import banana from '../Assets/Banana icon.png';
import '../Stylesheets/Banana.css';


class Banana extends Component{
    render(){
        var stack = new Array(30).fill(null);
        let passedBanna = this.props.bananaCurrent;
        if(passedBanna> 30){
            passedBanna = 30;
        }
        for (var i = 0; i < passedBanna; i++) {
          stack[i] = <img className="Banana-Img" key={i} src={banana} alt='banana icon' />;
        }
        return <div className="Banana">
            {stack}
          </div>
    }
}
export default Banana;