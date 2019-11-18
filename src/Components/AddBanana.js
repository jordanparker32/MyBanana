import React,{Component} from 'react';
import '../Stylesheets/AddBanana.css';
import Add from '../Assets/Smol Icons-10.png';
import Minus from '../Assets/Smol Icons-12.png';
import banana from '../Assets/Banana icon.png';
import water from '../Assets/Water Drop Icon.png';
import CloseOverlay from '../Assets/Smol Icons-11.png';


class AddBanana extends Component{
    constructor(props){
        super(props);
        this.state = {
            currentBanana: 0,
            currentWater: 0
        }
        this.handleUpdateBananaAdd = this.handleUpdateBananaAdd.bind(this);
        this.addCurrentBanana = this.addCurrentBanana.bind(this);
        this.handleCloseOverlay = this.handleCloseOverlay.bind(this);
        this.handleUpdateWaterAdd = this.handleUpdateWaterAdd.bind(this);
        this.addCurrentWater = this.addCurrentWater.bind(this);
        this.handleUpdateWaterMinus = this.handleUpdateWaterMinus.bind(this);
        this.minusCurrentWater = this.minusCurrentWater.bind(this);
        this.handleUpdateBananaMinus = this.handleUpdateBananaMinus.bind(this);
        this.MinusCurrentBanana = this.minusCurrentBanana.bind(this);
        this.handleUpdateTotals = this.handleUpdateTotals.bind(this);
        this.handleDisableShowAddBanana = this.handleDisableShowAddBanana.bind(this);
    }

    handleCloseOverlay(){
        this.handleDisableShowAddBanana();
    }
    handleUpdateBananaAdd(){
        this.addCurrentBanana();
    }
    handleUpdateWaterAdd(){
        this.addCurrentWater();
    }
    handleUpdateBananaMinus(){
        this.minusCurrentBanana();
    }
    handleUpdateWaterMinus(){
        this.minusCurrentWater();
    }

    handleUpdateTotals(evt){
        this.props.updateTotals(this.state.currentBanana, this.state.currentWater);
        this.handleCloseOverlay();
    }

    handleDisableShowAddBanana(){
        this.props.disableShowAddBanana();
    }

    addCurrentBanana(){
        let current = this.state.currentBanana + 1;
        this.setState({
            currentBanana: current
        })
    }
    addCurrentWater(){
        let current = this.state.currentWater + 1;
        this.setState({
            currentWater: current
        })
    }

    minusCurrentBanana(){
        let current = this.state.currentBanana - 1;
        if(current < 0 ){
            current = 0;
        }
        this.setState({
            currentBanana: current
        })
    }
    minusCurrentWater(){
        let current = this.state.currentWater - 1;
        if(current < 0 ){
            current = 0;
        }
        this.setState({
            currentWater: current
        })
    }
    

    render(){

        return(
            <div className="AddBanana">
            <input id="AddBanana-CloseOverlay" type="image" alt="X" src={CloseOverlay} onClick={this.handleCloseOverlay}/>
                <img id="AddBanana-Banana" src={banana} alt='banana icon' />
                <h3>Add Bananas Consumed</h3>
            <h2>{this.state.currentBanana}</h2>
            <div className="AddBanana-UpdateBanana">
            <input id="AddBanana-UpdateBanana-Add" type="image" alt="Account Icon" src={Add} onClick={this.handleUpdateBananaAdd}/>
            <input id="AddBanana-UpdateBanana-Minus" type="image" alt="Account Icon" src={Minus} onClick={this.handleUpdateBananaMinus}/>
            </div>

            <img id="AddBanana-Water" src={water} alt='Water icon' />
                <h3>Add Cups of Water Consumed</h3>
            <h2>{this.state.currentWater}</h2>
                <div className="AddBanana-UpdateWater">
                    <input id="AddBanana-UpdateWater-Add" type="image" alt="Account Icon" src={Add} onClick={this.handleUpdateWaterAdd}/>
                    <input id="AddBanana-UpdateWater-Minus" type="image" alt="Account Icon" src={Minus} onClick={this.handleUpdateWaterMinus}/>
                </div>
            <br/>
            <div className="AddBanana-Submit">
                <button onClick={this.handleUpdateTotals}>Submit</button>
                </div>
            </div>
            
        )
    }
}

export default AddBanana;