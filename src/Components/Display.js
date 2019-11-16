import React,{Component} from 'react';
import Silhouette from './Silhouette';
import AccountInformation from './AccountInformation';
import FullHealthInformation from './FullHealthInformation';
import Banana from './Banana';
import Water from './Water';
import AddBanana from './AddBanana';
import logo from '../Assets/My Banana Logotype-09.png';
import AccountInfoIcon from '../Assets/Member Icon.png';
import FullHealthIcon from '../Assets/Heart Button.png';
import AddBananaIcon from '../Assets/Banana Button.png'

import '../Stylesheets/Display.css';

class Display extends Component{
    constructor(props){
        super(props);
        this.state = {
            bananaCurrent: 0,
            bananaTotal: 0,
            waterCurrent: 0,
            waterTotal: 0,
            accountInfoOverlayOn: false,
            fullHealthInforOverlayOn: false,
            addBananaOverlayOn: false
        }
        this.handleUpdateClick = this.handleUpdateClick.bind(this);
        this.updateBanana = this.updateBanana.bind(this);
        this.handleAccountClick = this.handleAccountClick.bind(this);
        this.showAccountInfo = this.showAccountInfo.bind(this);
        this.handleFullHealthClick = this.handleFullHealthClick.bind(this);
        this.showFullHealthInfo = this.showFullHealthInfo.bind(this);
        this.handleAddBananaClick = this.handleAddBananaClick.bind(this);
        this.showAddBanana = this.showAddBanana.bind(this);

    }

    handleUpdateClick(){
        this.updateBanana()
    }
    handleAccountClick(){
        this.showAccountInfo();
    }
    handleFullHealthClick(){
        this.showFullHealthInfo()
    }
    handleAddBananaClick(){
        this.showAddBanana();
    }

    showAccountInfo(){
        this.setState({
            accountInfoOverlayOn: true
        })
    }
    showFullHealthInfo(){
        this.setState({
            fullHealthInforOverlayOn: true
        })
    }
    showAddBanana(){
        this.setState({
            addBananaOverlayOn: true
        })
        this.updateBanana();
    }

    updateBanana(){
        let update =  this.state.bananaCurrent + 1;
        this.setState({
            bananaCurrent: update,
            waterCurrent: update
        })
    }

    
    render(){
        return(
            <div className="Display">
            <img id="Display-Logo" alt="Logo" src={logo} />
            <input id="Display-AccountIcon" type="image" alt="Account Icon" src={AccountInfoIcon} onClick={this.handleAccountClick}/>  
            {this.state.accountInfoOverlayOn && 
                <div>
                <AccountInformation />
                </div>
            }

            <Silhouette  
                bananaCurrent={this.state.bananaCurrent} 
                bananaTotal={this.state.bananaTotal}   
                waterCurrent={this.state.waterCurrent} 
                waterTotal={this.props.waterTotal}
            />
            {/* Show FullHealthInformation based on state */}
            <input id="Display-FullHealthIcon" type="image" alt="Account Icon" src={FullHealthIcon} onClick={this.handleFullHealthClick}/>
            {this.state.fullHealthInforOverlayOn && 
                <div>
                {console.log("full health")}
                <FullHealthInformation bananaCurrent={this.state.bananaCurrent}/>
                </div>
            }
            <input id="Display-AddBananaIcon" type="image" alt="Account Icon" src={AddBananaIcon} onClick={this.handleAddBananaClick}/>
            {this.state.addBananaOverlayOn && 
                <div>
                <AddBanana />
                </div>
            }
                <div className="Display-Banana">
                    <Banana bananaCurrent={this.state.bananaCurrent} bananaTotal={this.state.bananaTotal}/>
                </div>
            <Water waterCurrent={this.state.waterCurrent} waterTotal={this.props.waterTotal}/>
            
            </div>
        )
    }
}

export default Display;