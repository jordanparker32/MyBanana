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
            addBananaOverlayOn: false,
            username: "myBanana"
        }
        this.handleUpdateClick = this.handleUpdateClick.bind(this);
        this.updateTotals = this.updateTotals.bind(this);
        this.handleAccountClick = this.handleAccountClick.bind(this);
        this.showAccountInfo = this.showAccountInfo.bind(this);
        this.handleFullHealthClick = this.handleFullHealthClick.bind(this);
        this.showFullHealthInfo = this.showFullHealthInfo.bind(this);
        this.handleAddBananaClick = this.handleAddBananaClick.bind(this);
        this.showAddBanana = this.showAddBanana.bind(this);
        this.disableShowAddBanana = this.disableShowAddBanana.bind(this);
        this.disableShowFullHealthInformation = this.disableShowFullHealthInformation.bind(this);
        this.disableShowAccountInfo = this.disableShowAccountInfo.bind(this);

    }

    handleUpdateClick(){
        this.updateTotals()
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
        this.disableShowAddBanana();
        this.disableShowFullHealthInformation();
    }
    showFullHealthInfo(){
        this.setState({
            fullHealthInforOverlayOn: true
        })
        this.disableShowAddBanana();
        this.disableShowAccountInfo();
    }
    showAddBanana(){
        this.setState({
            addBananaOverlayOn: true
        })
        this.disableShowAccountInfo();
        this.disableShowFullHealthInformation();
    }

    disableShowAddBanana(){
        this.setState({
            addBananaOverlayOn: false
        })
    }
    disableShowFullHealthInformation(){
        this.setState({
            fullHealthInforOverlayOn: false
        })
    }
    disableShowAccountInfo(){
        this.setState({
            accountInfoOverlayOn : false
        })
    }

    updateTotals(banana, water){
        let currentbanana = this.state.bananaCurrent + banana;
        let currentWater = this.state.waterCurrent + water;

        this.setState({
            bananaCurrent: currentbanana,
            waterCurrent: currentWater
        })
    }

    
    render(){
        return(
            <div className="Display">
            {console.log(this.state.bananaCurrent , this.state.waterCurrent)}
            <img id="Display-Logo" alt="Logo" src={logo} />
            <input id="Display-AccountIcon" type="image" alt="Account Icon" src={AccountInfoIcon} onClick={this.handleAccountClick}/>  
            {this.state.accountInfoOverlayOn && 
                <div>
                <AccountInformation 
                    username={this.state.username} 
                    bananaCurrent={this.state.bananaCurrent} 
                    bananaTotal={this.state.bananaTotal}
                    waterCurrent={this.state.waterCurrent}
                    waterTotal={this.state.waterTotal}
                    disableShowAccountInfo={this.disableShowAccountInfo}
                    />
                </div>
            }

            <div className="Display-Column">
                <Water waterCurrent={this.state.waterCurrent} waterTotal={this.props.waterTotal}/>
                <div className="Display-Column-Hidden">
                    <p>water</p>
                    </div>
            </div>
            <div className="Display-Column Display-Column-Silhouette">
            <Silhouette  
                bananaCurrent={this.state.bananaCurrent} 
                bananaTotal={this.state.bananaTotal}   
                waterCurrent={this.state.waterCurrent} 
                waterTotal={this.props.waterTotal}
            />
            </div>
            <div className="Display-Column">
                    <Banana bananaCurrent={this.state.bananaCurrent} bananaTotal={this.state.bananaTotal}/>
                    <div className="Display-Column-Hidden">

                    </div>
            </div>




            
            {/* Show FullHealthInformation based on state */}
            <div className="Display-Buttons">
            <input id="Display-FullHealthIcon" type="image" alt="Account Icon" src={FullHealthIcon} onClick={this.handleFullHealthClick}/>
            {this.state.fullHealthInforOverlayOn && 
                <div>
                {console.log("full health")}
                <FullHealthInformation bananaCurrent={this.state.bananaCurrent} waterCurrent={this.state.waterCurrent} disableShowFullHealthInformation={this.disableShowFullHealthInformation}/>
                </div>
            }
            <input id="Display-AddBananaIcon" type="image" alt="Account Icon" src={AddBananaIcon} onClick={this.handleAddBananaClick}/>
            {this.state.addBananaOverlayOn && 
                <div>
                <AddBanana updateTotals={this.updateTotals} disableShowAddBanana={this.disableShowAddBanana}/>
                </div>
            }
            </div>
            
            </div>
        )
    }
}

export default Display;