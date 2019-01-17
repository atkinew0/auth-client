import React, {Component} from 'react';
import requireAuth from './requireAuth';




class Feature extends Component{



    render(){
        return<div>THis is the feature terminal, you are at the feature</div>
    }
}

export default requireAuth(Feature);