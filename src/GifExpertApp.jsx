import {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch']);
  

  const onAddCategory = (newCategoty) =>{
    if(categories.includes(newCategoty)) return;
    setCategories([newCategoty , ...categories])
  }
  
  return (
   <>
    <h1>GifExpertApp</h1>
      <AddCategory /* setCategories={setCategories} */
        onNewCategory = {onAddCategory}
      />
      {categories.map( category => 
        (
          <GifGrid
            key={category} 
            category={category}
          />
        )
      )}
   </>
  )
}
