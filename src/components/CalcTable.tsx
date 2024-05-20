
export type calcData = {
    width: number,
    height: number,
    luverse: boolean,
    material: string,
    rollsize: number,
}
type data = {
    data: calcData;
}

type calculateSumm = {
    width: number,
    height: number,
    rollSize: number,
    material: string,
    printSquere: (width:number, height:number)=> number,
    overPrint: ()=> number,
    price: number,
    luverse: boolean,
    luverseCost: number,

}


export default function CalcPrint( props : data) : JSX.Element {
    const {width, height, luverse, material, rollsize} = props.data

    const printedSquere = (width:number, height:number):number=> {
        let squere = (width * height / 10000)
        return parseFloat(squere.toFixed(2))
    }

    const printOverUsed = ():number=> {
        let totalSquere = (rollsize * height / 10000)
        let overprint = totalSquere - printedSquere(width, height)
        return parseFloat(overprint.toFixed(2))
    }    
    
    const calculateLuverse = (width:number, height: number):number =>{
        let perimetr = ((width + height) / 100) * 2
        let luverseCount = Math.round(perimetr / 0.3)
        let luversePrice = 6.5
        return luverseCount * luversePrice
    }

    const calculatePrice = ()=> {

    }
    
    const handleCalculate = (): calculateSumm => {
        let calculatedPrint = {
            width: width,
            height: height,
            rollSize: rollsize,
            material: material,
            printSquere: printedSquere,
            overPrint: printOverUsed,
            price: calculatePrice,
            luverse: luverse,
            luverseCount: calculateLuverse,
            luverseCost: calculateLuverse,

        }
        return calculatedPrint
    }

    return (<>
        <div className="button-create" onClick={ handleCalculate }>Порахувати!</div>

        <table>
            <tbody>

                    <tr>Ширина: {width}</tr>
                    <tr>Висота: {height}</tr>
                    <tr>Люверси: {luverse ? luverse : "без люверсов"}</tr>
                    <tr>Матеріал: {material}</tr>
                    <tr>Шир.Рулону: {rollsize}</tr>
            </tbody>

        </table>

    
    </>)
}