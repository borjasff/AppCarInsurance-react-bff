import { CalculateProvider } from "./context/CalculateProvider"
import AppInsurance from "./components/AppInsurance"

function App() {


  return (
    <CalculateProvider>
      <AppInsurance/>
    </CalculateProvider>
  )
}

export default App
