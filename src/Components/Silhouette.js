import React,{Component} from 'react';
import '../Stylesheets/Silhouette.css';
import body from '../Assets/Silhouette Icon-05.png';

class Silhouette extends Component{
    static defaultProps ={
        bananaCurrent: 0,
        bananaTotal: 0,
        waterCurrent: 0,
        waterTotal: 0
    }
    render(){
        return(
            <div className="Silhouette">
                <img id="Silhouette-Img" src={body} alt={`User Silhouette: Banana: ${this.props.bananaCurrent}/${this.props.bananaTotal} Water:${this.props.waterCurrent}/${this.props.waterTotal}`}/> 
            </div>
        )
    }
}

export default Silhouette;