import React, { Component } from 'react';
import Item from './item';

export default class ItemList extends Component{
    render(){
        const {list} = this.props;
        return(
            <div>
                {
                    list.map(data => (
                        <Item
                            key={'show'+data.imdbID}
                            data={data} />
                    ))
                }
            </div>

        )
    }
}
