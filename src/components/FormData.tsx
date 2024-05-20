import { useState } from "react"

const initialSizes:size = {
    width: "",
    height: "",
    material: "OracalMat",
    luverse: false,
    rollSize: 160,
    printType: "Solvient",
}


export type size = {
    width: number | "",
    height: number | "",
    material: "OracalMat" | "BanerLituy" | "BanerLaminovaniy" | "OracalTransparent" |
            "OracalSilverBack" | "SityLight",
    luverse: false,
    rollSize: 160,
    printType: string,
}


export default function FormData():JSX.Element {
    const [sizes, setSizes] = useState(initialSizes)
    const handleChangeSize = (event:React.FocusEvent<HTMLInputElement>):void => {
        if (event.target.placeholder === "width") {
            setSizes({
                ...sizes,
                width: parseFloat( event.currentTarget.value)
            })
        } else if (event.target.placeholder === "height") {
            setSizes({
                ...sizes,
                height: parseFloat( event.currentTarget.value)
            })
        }
        
        
        


    }
    


    return <>
        <form>
            <input type="number" value={sizes.width} placeholder="width" onChange={ handleChangeSize }/>
            <input type="number" value={sizes.height} placeholder="height" onChange={ handleChangeSize }/>

        </form>

    </>
}