
import React, { ChangeEvent, ReactNode, useState } from 'react'

type materialList = {
    matList: string[],
    handleMaterial: (material:string)=> void,
}


export default function Materials(props : materialList,) : JSX.Element {
    const matList = props.matList || []
    const handleMaterial = props.handleMaterial
    const [materialPrint, setMaterialPrint] = useState("OracalMat")
    const handleChangeMaterial = (event:ChangeEvent<HTMLSelectElement>):void=>{
        
        setMaterialPrint(event.currentTarget.value)
        handleMaterial(event.currentTarget.value)
    }

    return <>
        <select name="materials" id="mat1" onChange={ handleChangeMaterial }>
            {
                matList.map((item):ReactNode=> {
                    return <option value={item} key={item}>{item}</option>
                })
            }
        </select>
        <div>Вибраний матеріал: {materialPrint ? materialPrint : "Виберіть матеріал"} </div>
    </>
}