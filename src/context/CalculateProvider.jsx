import { useState ,createContext } from "react";
import { getYearDifference, calculateBrand, calculatePlan, formatMoney } from "../helpers";

//need to create context
const CalculateContext = createContext()
//children for anywhere data
const CalculateProvider = ({children}) => {
// to create context with this values, that is in the form
    const [datas, setDatas] = useState({
        brand: '',
        year: '',
        plain: ''
    })
    //definitions error messages
    const  [error, setError] = useState('')
    const  [result, setResult] = useState(0)
    const [load, setLoad] = useState(false)

     //function to pass to constructor
    const handleChangeDatas = e => {
        setDatas({
            ...datas,
            [e.target.name]: e.target.value
        })
    }

    const calculateInsurance = () => {
        //base calculation
        let result = 2000

        //get years
        const yearDifference = getYearDifference(datas.year)
        //console.log(yearDifference)

        //rest 3% for each year
        result -= ((yearDifference * 3) * result) / 100
        //console.log(result)
        
        //European 30%   
        //american 15%
        //Asian 5%
        result *= calculateBrand(datas.brand)
        //console.log(result)


        //plan basic 20%
        //full 50%
        //premium 75%
        result *= calculatePlan(datas.plain)
        result = result.toFixed(2)
        //console.log(result)
        
        //Format money
        result = formatMoney(result)
        //console.log(result)

        setLoad(true)
        setTimeout(() => {
            setLoad(false)
        }, 3000);

        setResult(result)
    }
    return (
        <CalculateContext.Provider
        //habitily in others components
        value={{
            datas,
            handleChangeDatas,
            error,
            setError,
            calculateInsurance,
            result,
            load
        }}>
            {children}
        </CalculateContext.Provider>
    )
}

export {
    CalculateProvider
}
export default CalculateContext