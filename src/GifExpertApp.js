import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


const GifExpertApp = (  ) => {

    // const categories = ['Agua','Planta','Veneno'];
    const [categories, setCategories] = useState(['Agua']);

    // const handleAdd = ()=> {
    //     setCategories( [...categories,'Veneno']);
        
    // }

    return(
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr/>

            <ol>
                { 
                    categories.map( (category,idx) => {
                        return <GifGrid 
                            
                            key={ category }
                            category={ category } 
                            
                            />
                    })
                }
            </ol>

        </>
    )

}


export default GifExpertApp;