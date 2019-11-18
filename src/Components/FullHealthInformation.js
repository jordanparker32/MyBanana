import React,{Component} from 'react';
import '../Stylesheets/FullHealthInformation.css';
import closeOverlayIcon from '../Assets/Smol Icons-11.png';

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
            <br/>
            <br/>
            <h1>Nutritional Information</h1>
            <h3>Bananas:</h3>
            <div className="FullHealthInformation-Grid">
                <div className="FullHealthInformation-Grid-Left">
                    <p>Potassium: {this.props.bananaCurrent * 422} mg</p>
                    <p>Calories: {parseFloat(this.props.bananaCurrent * 105).toFixed(2)} mg</p>
                    <p>Sugar: {parseFloat(this.props.bananaCurrent * 14).toFixed(2)} g</p>
                    <p>Total Fat: {parseFloat(this.props.bananaCurrent * 0.4).toFixed(2)} g</p>
                    <p>Total Carbohydrates: {parseFloat(this.props.bananaCurrent * 27).toFixed(2)} g</p>
                    <p>Magnesium: {this.props.bananaCurrent * 34} mg</p>
                    <p>Vitamin A: {this.props.bananaCurrent * 81} IU</p>
                    <p>Vitamin C: {this.props.bananaCurrent * 9} mg</p>
                    

                </div>
                <div className="FullHealthInformation-Grid-Right">
                    <p>Protein: {parseFloat(this.props.bananaCurrent * 1.3).toFixed(2)} g</p>
                    <p>Sodium: {parseFloat(this.props.bananaCurrent * 1).toFixed(2)} mg</p>
                    <p>Manganese: {parseFloat(this.props.bananaCurrent * 0.3).toFixed(2)} mg</p>
                    <p>Iron: {parseFloat(this.props.bananaCurrent * 0.3).toFixed(2)} mg</p>
                    <p>Dietary fiber: {parseFloat(this.props.bananaCurrent * 3.1).toFixed(2)} g</p>
                    <p>Folate: {parseFloat(this.props.bananaCurrent * 0.25).toFixed(2)} mg</p>
                    <p>Riboflavin: {parseFloat(this.props.bananaCurrent * 0.1).toFixed(2)} mg</p>
                    <p>Vitamin B6: {parseFloat(this.props.bananaCurrent * 0.5).toFixed(2)} mg</p>
                </div>
                </div>
                <div>
                    <h3>Water: </h3>
                    <p>{this.props.waterCurrent} cups</p>
                </div>
            </div>
        )
    }
}

export default FullHealthInformation;