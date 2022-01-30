import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {
    
    const { data:gifs, loading} = useFetchGifs(category);
    return (    
        <>
            <h3 className=" animate__animated animate__fadeInTopLeft"> {category} </h3>
            { loading && <p className="card animate__animated animate__flash">Loading...</p> }
            <div className='card-grid'>
                { gifs.map( (gif)=> (
                    // document.write('<li>'+ gif.title +'<li/>')
                    <GifGridItem 
                    key={gif.id}
                    { ...gif }
                    />
                    ))}
            </div>
        </>
    )
};
