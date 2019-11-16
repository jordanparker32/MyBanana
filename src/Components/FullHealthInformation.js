import React,{Component} from 'react';
import '../Stylesheets/FullHealthInformation.css';

class FullHealthInformation extends Component{
    render(){
        
        return(
            <div className="FullHealthInformation">
                <ul>
                    <li>Vitamin B6: {parseFloat(this.props.bananaCurrent * 0.5).toFixed(2)} mg</li>
                    <li>Manganese: {parseFloat(this.props.bananaCurrent * 0.3).toFixed(2)} mg</li>
                    <li>Vitamin C: {this.props.bananaCurrent * 9} mg</li>
                    <li>Potassium: {this.props.bananaCurrent * 450} mg</li>
                    <li>Dietary Fiber: {this.props.bananaCurrent * 3} g</li>
                    <li>Protein: {this.props.bananaCurrent * 1} g</li>
                    <li>Magnesium: {this.props.bananaCurrent * 34} mg</li>
                    <li>Folate: {parseFloat(this.props.bananaCurrent * 0.25).toFixed(2)} mg</li>
                    <li>Riboflavin: {parseFloat(this.props.bananaCurrent * 0.1).toFixed(2)} mg</li>
                    <li>Niacin: {parseFloat(this.props.bananaCurrent * 0.8).toFixed(2)} mg</li>
                    <li>Vitamin A: {this.props.bananaCurrent * 81} IU</li>
                    <li>Iron: {parseFloat(this.props.bananaCurrent * 0.3).toFixed(2)} mg</li>
                </ul>
            </div>
        )
    }
}

export default FullHealthInformation;