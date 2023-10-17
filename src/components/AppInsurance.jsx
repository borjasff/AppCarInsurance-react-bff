import useCalculate from "../hooks/useCalculate"
import Form from "./Form"
import Spinner from "./Spinner"
import Result from "./Result"


export default function AppInsurance() {

  const {result, load} = useCalculate()
  return (
    <>
        <header className="my-10">
            <h1 className="text-white text-center text-4xl font-black"
            >Car Insurance Calculator</h1>
        </header>
        <main className="bg-white md:w-2/3 lg:2/4 mx-auto shadow rounded-lg p-10">
            <Form/>
            {load ? <Spinner/> : <Result/>}
        </main>
    </>
  )
}
