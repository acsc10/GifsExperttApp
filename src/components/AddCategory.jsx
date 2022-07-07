import { useState } from "react"


export const AddCategory = ({setCategories}) => {
const [inputValue, setInputValue] = useState('Dragon Ball GT');
    const onInputChage = (event) => {
        //console.log(event.target.value)
        setInputValue(event.target.value)
    }
    const onSubmit = (event)=>{
        event.preventDefault();
        if(inputValue.trim().length <=1 ) return; //valida si tenemos mas de un caracter en el imput

        setCategories( categories => [inputValue, ...categories]);
        setInputValue("")
    }

  return (
    <form onSubmit={onSubmit}>
        <input
        type = "text"
        placeholder = "Buscar Gifs"
        value={inputValue}
        onChange={onInputChage}
    />
    </form>
    
    
  )
}
