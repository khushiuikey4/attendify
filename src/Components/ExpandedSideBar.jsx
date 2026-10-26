import s from "./ExpandedSideBar.module.css"
import { GiBookshelf } from "react-icons/gi";
import { Link } from "react-router-dom"
import { IoSettings, IoBarChartOutline, IoBookOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import CollapsedSideBar from "./CollapsedSideBar";

function ExpandedSideBar() {
    let [open, setOpen] = useState(true);
    let handleSideBar = () => {
        setOpen(prevOpen => !prevOpen);
    }
    return <>
        {open && <div className={s.SideBarContainer}>
            <div className={s.logoOuterContainer}>
                <div className={s.hamBurgerLogoContainer} onClick={handleSideBar}>
                    <GiHamburgerMenu />
                </div>
                <div className={s.logoContainer}>
                    <GiBookshelf />
                </div>
                <div className={s.webNameContainer}><Link to="/" className={s.webNameLink}>Attendify</Link></div>
            </div>
            <Link to="/" className={s.yourSubjects}>
                <div className={s.settingLogoContainer}><IoBookOutline />
                </div>
                <div>Your Subjects</div>
            </Link>
            <Link to="/Dashboard" className={s.dashBoard}>
                <div className={s.settingLogoContainer}><IoBarChartOutline />
                </div>
                <div>Dashboard</div>
            </Link>
            <Link to="/Calender" className={s.calender}>
                <div className={s.settingLogoContainer}><SlCalender />
                </div>
                <div>Calender</div>
            </Link>
            <div className={s.divider}></div>
            <Link to="/Settings" className={s.settings}>
                <div className={s.settingLogoContainer}><IoSettings />
                </div>
                <div>Settings</div>
            </Link>
        </div>}
        {!open && <CollapsedSideBar></CollapsedSideBar>}
    </>;
}
export default ExpandedSideBar;
