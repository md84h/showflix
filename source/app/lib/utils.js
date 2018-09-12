export function searchShows(list,val){
	return list.filter(data => {return data.title.toLowerCase().indexOf(val.toLowerCase()) > -1;});
}

export function showDetails(list,id){
	return list.find(data => data.imdbID == id);
}
