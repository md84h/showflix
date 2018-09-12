import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getShowDetails, getRating, getCachedShowDetails } from '../../actions/shows';
import Header from '../utils/header';
import Loader from '../utils/loader';
import Details from './details';

class ShowDetails extends Component {
    componentDidMount(){
        const { showId } = this.props.match.params;
        const { dataAvailable, getShowDetails, getCachedShowDetails } = this.props;
        if(dataAvailable){
            getCachedShowDetails(showId);
        } else{
            getShowDetails(showId);
        }
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.showDetails && nextProps.showDetails.title && nextProps.rating === null){
            this.props.getRating(this.props.match.params.showId);
        }
    }
    render() {
        const {showDetails, rating} = this.props;
        return (
            <div className="container">
                <Header />
                {
                    showDetails !== null ?
                        <div>
                            {
                                showDetails ?
                                    <Details
                                        showDetails={showDetails}
                                        rating={rating} />
                                :
                                    <p className="no-result">Show information is not Available!</p>
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
    const {dataAvailable, showDetails, rating} = state.shows;
    return { dataAvailable, showDetails, rating };
}
export default connect(mapStateToProps, {getShowDetails, getRating, getCachedShowDetails})(ShowDetails);
