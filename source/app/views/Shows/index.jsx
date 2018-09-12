import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getShows } from '../../actions/shows';
import ItemList from './itemList';
import Loader from '../utils/loader';
import Header from '../utils/header';

class Shows extends Component {
    componentDidMount(){
        this.props.getShows();
    }
    render() {
        let {list, dataAvailable} = this.props;
        return (
            <div className="container">
                <Header searchBar={true} />
                {
                    dataAvailable ?
                        <div>
                            {
                                list.length ?
                                    <div>
                                        <ItemList list={list}/>
                                    </div>

                                :
                                    <p className="no-result">No Shows Available with search keyword!</p>
                            }
                        </div>
                    :
                        <Loader />
                }
            </div>
        );
    }
}
function mapStateToProps(state){
    const {list, dataAvailable} = state.shows;
    return {list, dataAvailable};
}
export default connect(mapStateToProps, {getShows})(Shows);
