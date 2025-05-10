
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { HomePage } from "./pages/HomePage"
import { NuevoPaciente } from "./pages/NuevoPaciente"


export default function App() {
  return (

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}  />
          <Route path="/nuevo-paciente" element={<NuevoPaciente/>}  />
        </Routes>
      
      </BrowserRouter>


        

  )
}
