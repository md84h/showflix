import Api from '../api';
import { GET_SHOWS, SEARCH_SHOWS, GET_SHOW_DETAILS, RATING_URL, GET_RATING, GET_CACHED_SHOW_DETAILS} from '../lib/constant';
import { showDetails } from '../lib/utils';

var showsData = require('../lib/shows.json');

export function getShows(){
    return function(dispatch){
        dispatch({type:GET_SHOWS, payload:showsData});
    }
}

export function searchShows(keyword){
    return function(dispatch){
        dispatch({type:SEARCH_SHOWS, payload:keyword});
    }
}

export function getCachedShowDetails(id){
    return function(dispatch){
        dispatch({type:GET_CACHED_SHOW_DETAILS, payload:id});
    }
}

export function getShowDetails(id){
    return function(dispatch){
        dispatch({type:GET_SHOW_DETAILS, payload:showDetails(showsData.shows,id)});
    }
}

export function getRating(id){
    const request = Api.get(RATING_URL+id);
    return (dispatch) => {
        request.then(({data}) => {
            dispatch({type:GET_RATING,payload:data.imdbRating})
        }).catch((data) => {
            dispatch({type:GET_RATING,payload:false})
        })
    };
}
