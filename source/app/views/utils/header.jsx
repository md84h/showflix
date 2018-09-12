import React, {Component} from 'react';
import SearchBar from './searchBar';

export default class Header extends Component {
    render(){
        return(
            <div className="header">
                <span>ShowFlix</span>
                {
                    this.props.searchBar ?
                        <SearchBar />
                    : null
                }
            </div>
        )
    }
}
