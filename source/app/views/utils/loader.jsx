import React, {Component} from 'react';

export default class Loader extends Component {
    render(){
        return(
            <img className="load" src={require('../../../static/assets/img/loading.png')} />
        )
    }
}
