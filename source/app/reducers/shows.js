import { GET_SHOWS, SEARCH_SHOWS, GET_SHOW_DETAILS, GET_RATING, GET_CACHED_SHOW_DETAILS } from '../lib/constant';
import { searchShows, showDetails } from '../lib/utils';

const initialState = {originalList : [], list : [], dataAvailable : false, showDetails : {}, rating : null};

export default function(state = initialState , action ) {
	let originalList  = JSON.parse(JSON.stringify(state.originalList));
	switch(action.type){
		case GET_SHOWS :
			let list = action.payload.shows;
			return {...state, list, originalList : list, dataAvailable : list.length};

		case SEARCH_SHOWS :
			let searchList = action.payload ? searchShows(originalList,action.payload) : originalList;
			return {...state, list:searchList};

		case GET_CACHED_SHOW_DETAILS :
			return {...state, showDetails : showDetails(originalList,action.payload), rating : null};

		case GET_SHOW_DETAILS :
			return {...state, showDetails : action.payload};

		case GET_RATING :
			return {...state, rating : action.payload};

        default :
		     return state;
    }
}
