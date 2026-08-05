import SideBarComponent from "./Components/SideBarComponent.jsx"
import BodyComponent from "./Components/BodyComponent.jsx"
import DashBoardComponent from "./Components/DashBoardComponent.jsx"
function App() {
  return <div className="Layout">
    <SideBarComponent></SideBarComponent>
    {/* <BodyComponent></BodyComponent> */}
    <DashBoardComponent></DashBoardComponent>


  </div>
}
export default App;