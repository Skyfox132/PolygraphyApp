import { useState } from 'react'

import './App.css'
import CalcPrint from './components/CalcTable'
import FormData from './components/FormData'
import Materials from './components/Materials'

const data = {
  width: 150,
  height: 190,
  luverse: false,
  material: "Oracal MAT",
  rollsize: 160,
}
const materialsList = [ "OracalMat", "BanerLituy", "BanerLaminovaniy", "OracalTransparent",
"OracalGreyBack", "CityLight",]

function App() {
  const handleMaterial = (material:string)=> {

    
    data.material = material
    console.log(material, data.material);
  }

  return (
    <>
    <Materials matList={ materialsList } handleMaterial = {handleMaterial}/>
    <FormData>

    </FormData>
      <CalcPrint data={data} />
    </>
  )
}

export default App
