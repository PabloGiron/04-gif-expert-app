import { useState } from "react"
import { useEffect } from "react/cjs/react.development";
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = ( category ) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

        useEffect(() => {
        getGifs( category )
            .then( gifs =>{

                // console.log(gifs);
                setTimeout(() =>{
                    setState({
                        data: gifs,
                        loading: false
                    });
                },30)

            })
            //.then(setImages)
    }, [ category ])



    return state //{data:[], loading:true}

}





