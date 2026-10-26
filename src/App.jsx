import { Routes, Route } from "react-router-dom"
import SideBarComponent from "./Components/SideBarComponent.jsx"
import SubjectComponent from "./Components/SubjectComponent.jsx"
import DashBoardComponent from "./Components/DashBoardComponent.jsx"
import Calender from "./Components/Calender.jsx"

function App() {
  return (
    <div className="Layout">
      <SideBarComponent></SideBarComponent>
      <Routes>
        <Route path="/" element={<SubjectComponent />} />
        <Route path="/subjects" element={<SubjectComponent />} />
        <Route path="/Dashboard" element={<DashBoardComponent />} />
        <Route path="/dashboard" element={<DashBoardComponent />} />
        <Route path="/Calender" element={<Calender />} />
        <Route path="/calender" element={<Calender />} />
      </Routes>
    </div>
  )
}

export default App;
