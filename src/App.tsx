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
"OracalSilverBack", "SityLight",]

function App() {


  return (
    <>
    <Materials matList={ materialsList }/>
    <FormData>

    </FormData>
      <CalcPrint data={data} />
    </>
  )
}

export default App
