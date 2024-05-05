
import React, { ReactNode } from 'react'

type materialList = {
    matList: string[],
}


export default function Materials(props : materialList) : JSX.Element {
    const matList = props.matList || []


    return <>
        <select name="materials" id="mat1">
            {
                matList.map((item):ReactNode=> {
                    return <option value={item}>{item}</option>
                })
            }
        </select>
    
    </>
}