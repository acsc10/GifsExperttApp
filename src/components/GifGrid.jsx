
import { GifItem } from "./GifItem"

import { useFetchGifs } from "../../hooks/useFetchGifs"
export const GifGrid = ({category}) => {


    const {images , isLoading} = useFetchGifs( category);
    console.log( images , isLoading)
    
  return (
    <>
        <h4>{category}</h4>  
       <div className="card-grid">
       {images.map((image)=>(
         <GifItem key={image.id}
         {...image}   // esparce todas las propiedades del image
          />
          
       ))}      
       
       </div>
    </>
  )
}
