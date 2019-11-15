import React,{Component} from 'react';
import Silhouette from './Silhouette';
import AccountInformation from './AccountInformation';
import FullHealthInformation from './FullHealthInformation';
import Banana from './Banana';
import Water from './Water';
import AddBanana from './AddBanana';

import '../Stylesheets/Display.css';

class Display extends Component{
    render(){
        return(
            <div className="Display">
            <Silhouette  />
            <AccountInformation />
            <FullHealthInformation />
            <Banana />
            <Water />
            <AddBanana />
            </div>
        )
    }
}

export default Display;