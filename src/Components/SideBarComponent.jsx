import s from "./SideBarComponent.module.css"
import { GiBookshelf } from "react-icons/gi";
import { Link } from "react-router-dom"
import { IoSettings } from "react-icons/io5";
import { IoBarChartOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { useEffect, useState } from "react";
import ExpandedSideBar from "./ExpandedSideBar.jsx"
import CollapsedSideBar from "./CollapsedSideBar.jsx"



function SideBarComponent() {
    let [wideArea, setWideArea] = useState(window.innerWidth > 768);
    useEffect(() => {
        const handleResize = () => {
            setWideArea(window.innerWidth > 768);
        }
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, []);

    return <>{wideArea ? <ExpandedSideBar /> : <CollapsedSideBar />}</>;
}
export default SideBarComponent;