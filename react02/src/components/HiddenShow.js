import { createContext, useState } from "react"
import CustomBtn from "./CustomBtn"

const DisplayContext = createContext()

function HiddenShow() {

    let [visible, setVisible] = useState('block')

    return (
        <>
        <DisplayContext.Provider value={{ visible }}>
            <CustomBtn func={() => {
                setVisible(visible === 'block' ? 'none' : 'block')
            }}/>
        </DisplayContext.Provider>
        
        <div style={{ display: visible }}>
            <p>Teste</p>
        </div>
        </>
    )

}

export default HiddenShow