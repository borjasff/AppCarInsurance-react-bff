import useCalculate from "../hooks/useCalculate"
import { BRANDS, PLAINS } from "../constants"
import { useCallback, useMemo, useRef } from "react"

export default function Result() {
    //if we have a result, we need import the objects in the constants
    const {result, datas} = useCalculate()
    const { brand, plain, year } = datas
    const yearRef = useRef(year)
    //need filter by id value and useCallback to dont render it
    const [nameBrand] = useMemo( () =>
        BRANDS.filter(b => b.id === Number(brand)
        ),[result])
    //console.log(nameBrand)
    const [namePlain] = useMemo(  () =>
        PLAINS.filter(p => p.id === Number(plain))    
    ,[result])


    if(result === 0) return null
    
  return (
    <div className="bg-gray-100 text-center mt-5 p-5 shadow">
        <h2 className="text-gray-600 font-black text-3xl">Abstract</h2>
        <p className="my-2">
            <span className="font-bold">Brand: </span>
            {nameBrand.name}
        </p>
        <p className="my-2">
            <span className="font-bold">Plain: </span>
            {namePlain.name}
        </p>
        <p className="my-2">
            <span className="font-bold">Year of the car: </span>
            {yearRef.current}
        </p>
        <p className="my-2 text-2xl">
            <span className="font-bold">Total calculation: </span>
            ${result} 
        </p>
    </div>
  )
}
