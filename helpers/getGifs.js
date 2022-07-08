
import axios from "axios";
export const getGifs = async(category)=>{
    try {
       const {data} = await axios.get(`https://api.giphy.com/v1/gifs/search?q=${category}&limit=10&api_key=KMHOEEcmBT1mwvwpFgvFaLYbcOaTHy3L`);
       const gifs = data.data.map( img => (
        {
            id: img.id,
            title: img.title,
            url:img.images.downsized_medium.url
        }
       ));
      
       return gifs;
    } catch (error) {
        console.error(error);
    }
    
}

