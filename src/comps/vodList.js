import React from 'react';
import VodItem from './vodItem';

export default function VodList(props) {
    return (
        <div className='container-fluid'>
            <div className='container'>
                <div className='row'>
                    {props.vod_ar.map(item => {
                        return (
                            <VodItem key={item.imdbID} item={item} />
                        );
                    })}
                </div>
            </div>
        </div>
    )
}
