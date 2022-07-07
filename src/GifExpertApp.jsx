import {useState} from 'react'
import { AddCategory } from './components/AddCategory';
export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch','two luz']);
  

  const onAddCategory = () =>{
    setCategories(["Dragon Ball" , ...categories])
  }
  
  return (
   <>
   <h1>GifExpertApp</h1>
    <AddCategory setCategories={setCategories}/>
  
   {/*  <button onClick={onAddCategory} className="btn btn-primary mt-2"> Agregar </button> */}
   <ol>
    {categories.map( category => {
      return <li key={category}>{category}</li>;
    })
    }
   </ol>
   </>
  )
}
