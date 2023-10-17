import { useContext } from "react";
import CalculateContext from "../context/CalculateProvider";

const useCalculate = () => {

    return useContext(CalculateContext)
}

export default useCalculate
