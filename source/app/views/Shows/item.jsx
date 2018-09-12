import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class Item extends Component {
    render(){
        const {data} = this.props;
        return(
            <Link to={'/'+data.imdbID} className="showRow">
                <img src={require('../../../static/assets/img/'+data.poster)} />
                <div className="col">
                    <div className="rowCommon dark">
                        {data.title}
                    </div>
                    <div className="rowCommon light">
                        {data.year}
                    </div>
                    <div className="rowCommon">
                        {data.description}
                    </div>
                </div>
            </Link>
        )
    }
}
