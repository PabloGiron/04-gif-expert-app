


export const getGifs = async(category) =>{


    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&lang=es&rating=R&limit=8&api_key=8HAtRkhV5JVMKRSWXHMhtMNdp1F3geE0`

    const resp = await fetch(url);

    const { data } = await resp.json();

    const gifs = data.map( img => {
        return{
            id: img.id,
            title: img.title,
            downsized_medium: img.downsized_medium,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs;

}