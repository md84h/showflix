import React, {Component} from 'react';

export default class Item extends Component {
    render(){
        const {showDetails, rating} = this.props;
        return(
            <div className="showDetails">
                <div className="details">
                    <p className="dark title">{showDetails.title}</p>
                    <p className="light year">({showDetails.year})</p>
                    {
                        rating ?
                            <p className="rating">Rating : {rating}</p>
                        : null
                    }
                    <p className="light">{showDetails.description}</p>
                </div>
                <div className="video" dangerouslySetInnerHTML={{ __html: '<iframe src="https://www.youtube-nocookie.com/embed/'+showDetails.trailer+'?rel=0&amp;amp;controls=0&amp;amp;showinfo=0" frameborder="0" allowfullscreen=""></iframe>' }} />
            </div>
        )
    }
}
