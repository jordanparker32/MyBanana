import React,{Component} from 'react';
import '../Stylesheets/AccountInformation.css';
import closeOverlayIcon from '../Assets/Smol Icons-11.png'

class AccountInformation extends Component{
    constructor(props){
        super(props);
        this.handleCloseOverlay = this.handleCloseOverlay.bind(this);
        this.handleDisableShowAccountInfo = this.handleDisableShowAccountInfo.bind(this);
    }


    handleCloseOverlay(){
        this.handleDisableShowAccountInfo();
    }
    handleDisableShowAccountInfo(){
        this.props.disableShowAccountInfo();
    }

    render(){
        
        return(
            <div className="AccountInformation">
            <input id="AccountInformation-CloseOverlay" type="image" alt="X" src={closeOverlayIcon} onClick={this.handleCloseOverlay}/>
            <h1>Welcome {this.props.username}</h1>
            <h3>Here's how you're doing today</h3>
            <h4>Bananas: </h4>
            <p>{this.props.bananaCurrent} / {this.props.bananaTotal}</p>
            <h4>Cups of Water:</h4>
            <p>{this.props.waterCurrent} / {this.props.waterTotal}</p>
            </div>
        )
    }
}

export default AccountInformation;
