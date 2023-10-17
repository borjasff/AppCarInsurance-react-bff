import { Fragment } from 'react'
import { BRANDS, YEARS, PLAINS } from "../constants"
import useCalculate from '../hooks/useCalculate'
import Error from './Error'

const Form = () => {
    // search all information in the return of calculateProvider and access the context
    const { datas, handleChangeDatas, error, setError, calculateInsurance } = useCalculate()

    const handleSubmit = e => {
        e.preventDefault()

        if(Object.values(datas).includes('')){
            setError('Error, no data found')  
            setTimeout(() => {
                setError('')  
            }, 5000);
            return
        }

        //when we have all datas
        calculateInsurance()
    }

  return (
    <>  
        {error && <Error/>}
        <form onSubmit={handleSubmit}>
            <div className="my-5">
                <label className="block mb-3  font-bold text-gray-400 uppercase">
                Brand
                </label>
                <select name="brand" className="w-full p-3  bg-white border border-gray-200"
                        onChange={e => handleChangeDatas(e)}
                        value={datas.brand}
                >
                    <option value="">--Select Brand--</option>
                    {BRANDS.map(brand => (
                        <option key={brand.id} value={brand.id}>{brand.name}</option>
                    ))}
                    
                </select>
            </div>
            <div>
                <label className="block mb-3  font-bold text-gray-400 uppercase">
                Year
                </label>
                <select name="year" className="w-full p-3  bg-white border border-gray-200"
                        onChange={e => handleChangeDatas(e)}
                        value={datas.year}
                    >
                    <option value="">--Select Year--</option>
                    {YEARS.map(year => (
                        <option key={year} value={year}>{year}</option>
                    ))}
                    
                </select>
            </div>
            <div>
                <label className="block mb-3 font-bold text-gray-400 uppercase">
                Plains
                </label>
                <div className="flex gap-3 items-center">
                    {PLAINS.map(plain => (
                        <Fragment key={plain.id}>
                            <label>
                                {plain.name}
                            </label>
                            <input type="radio" name="plain" value={plain.id} onChange={e => handleChangeDatas(e)}/>
                        </Fragment>
                    ))}
                </div>
            </div>
            <input type="submit" className="w-full bg-indigo-500 hover:bg-indigo-600 transition-colors text-white cursor-pointer p-3 uppercase font-bold" value="calculate" />
        </form>
    </>
  )
}
export default Form