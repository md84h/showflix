import React, { Component } from 'react';
import { connect } from 'react-redux';
import debounce from 'lodash.debounce';
import { searchShows } from '../../actions/shows';

class SearchBar extends Component {
    constructor(){
        super();
        this.state = {
            autoCompleteValue : ''
        }
        this.debounceInput = debounce(this.debounceInput.bind(this),400);
    }
    removeAutoCompleteValue = () =>{
        this.props.searchShows('');
        this.setState({autoCompleteValue:''});
    }
    autoComplete = e => {
        const autoCompleteValue = e.target.value;
        this.setState({autoCompleteValue});
        this.debounceInput(autoCompleteValue);
    }
    debounceInput = val => this.props.searchShows(val);
    render(){
        const {autoCompleteValue} = this.state;
        return(
            <div style={{display: 'initial'}} className="searchBar">
                <input type="text" value={autoCompleteValue} onChange={this.autoComplete.bind(this)} placeholder="Search Shows" />
                {
                    autoCompleteValue ?
                        <div onClick={e=>{this.removeAutoCompleteValue()}} className="close">x</div>
                    : null
                }
            </div>
        )
    }
}

export default connect(()=>({}), {searchShows})(SearchBar);
