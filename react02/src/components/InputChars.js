import { useState } from "react"
import ItemList from "./ItemList"


function InputChars() {

    let [txtValue, setTxtValue] = useState('')

    let [errorVisible, setErrorVisible] = useState('block')

    let [items, setItems] = useState([])


    const handleInput = (event) => {

        const inputValue = event.target.value
        setTxtValue(inputValue)

        inputValue.length < 3 ? setErrorVisible('block') : setErrorVisible('none')

    }

    const addItem = (event) => {
        const inputValue = event.target.value
        if(event.key === "Enter") {
            console.log('teste')
            setItems([...items, inputValue])
        }
    }

    return (
        <>
        <div className="customDiv">
            <input type="text" onKeyUp={addItem} onInput={handleInput} value={txtValue}></input>
            
            <p style={{display: errorVisible, color: 'red', marginLeft: '10px'}}>Valor MENOR do que 3</p>
        </div>

        
        <ItemList items={items}/>
        
        </>
    )
}

export default InputChars