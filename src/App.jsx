import SideBarComponent from "./Components/SideBarComponent.jsx"
import SubjectComponent from "./Components/SubjectComponent.jsx"
import DashBoardComponent from "./Components/DashBoardComponent.jsx"
import Calender from "./Components/Calender.jsx"
function App() {
  return <div className="Layout">
    <SideBarComponent></SideBarComponent>
    {/* <SubjectComponent></SubjectComponent> */}
    <DashBoardComponent></DashBoardComponent>
    {/* <Calender></Calender> */}


  </div>
}
export default App;