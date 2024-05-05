
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



export default function CalcPrint( props : data) : JSX.Element {
    const {width, height, luverse, material, rollsize} = props.data

    const printSquere = (width:number, height:number):number=> {
        let squere = (width * height / 10000)
        return parseFloat(squere.toFixed(2))
    }

    const printOverUsed = ():number=> {
        let totalSquere = (rollsize * height / 10000)
        let overprint = totalSquere - printSquere(width, height)
        return parseFloat(overprint.toFixed(2))
    }    
    
    const calculateLuverse = (width:number, height: number):number =>{
        let perimetr = ((width + height) / 100) * 2
        let luverseCount = Math.round(perimetr / 0.3)
        return luverseCount
    }
    

    
    return (<>
        <table>
            <tbody>

                    <tr>width: {width}</tr>
                    <tr>luverse: {luverse ? luverse : "без люверсов"}</tr>
                    <tr>height: {material}</tr>
                    <tr>height: {rollsize}</tr>
                    <tr>height: {height}</tr>
            </tbody>

        </table>

    
    </>)
}