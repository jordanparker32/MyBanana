import React,{Component} from 'react';
import '../Stylesheets/FullHealthInformation.css';
import closeOverlayIcon from '../Assets/Heart Button.png'

class FullHealthInformation extends Component{
    constructor(props){
        super(props);
        this.handleCloseOverlay = this.handleCloseOverlay.bind(this);
        this.handleDisableFullHealthInformation = this.handleDisableFullHealthInformation.bind(this);
    }


    handleCloseOverlay(){
        this.handleDisableFullHealthInformation();
    }
    handleDisableFullHealthInformation(){
        this.props.disableShowFullHealthInformation();
    }

    render(){
        
        return(
            <div className="FullHealthInformation">
            <input id="FullHealthInformation-CloseOverlay" type="image" alt="X" src={closeOverlayIcon} onClick={this.handleCloseOverlay}/>
                    <h3>Vitamin B6: {parseFloat(this.props.bananaCurrent * 0.5).toFixed(2)} mg</h3>
                    <h3>Manganese: {parseFloat(this.props.bananaCurrent * 0.3).toFixed(2)} mg</h3>
                    <h3>Vitamin C: {this.props.bananaCurrent * 9} mg</h3>
                    <h3>Potassium: {this.props.bananaCurrent * 450} mg</h3>
                    <h3>Dietary Fiber: {this.props.bananaCurrent * 3} g</h3>
                    <h3>Protein: {this.props.bananaCurrent * 1} g</h3>
                    <h3>Magnesium: {this.props.bananaCurrent * 34} mg</h3>
                    <h3>Folate: {parseFloat(this.props.bananaCurrent * 0.25).toFixed(2)} mg</h3>
                    <h3>Riboflavin: {parseFloat(this.props.bananaCurrent * 0.1).toFixed(2)} mg</h3>
                    <h3>Niacin: {parseFloat(this.props.bananaCurrent * 0.8).toFixed(2)} mg</h3>
                    <h3>Vitamin A: {this.props.bananaCurrent * 81} IU</h3>
                    <h3>Iron: {parseFloat(this.props.bananaCurrent * 0.3).toFixed(2)} mg</h3>
            </div>
        )
    }
}

export default FullHealthInformation;