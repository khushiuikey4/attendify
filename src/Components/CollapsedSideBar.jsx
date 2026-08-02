import { useState } from "react";
import s from "./CollapsedSideBar.module.css"
import { GiHamburgerMenu } from "react-icons/gi";
import { GiBookshelf } from "react-icons/gi";
import ExpandedSideBar from "./ExpandedSideBar";


function CollapsedSideBar() {
    let [open, setOpen] = useState(false);
    let handleSideBar = () => {
        setOpen(prevOpen => !prevOpen);
    }
    return <>
        {!open && <div className={s.hamBurgerContainer} >
            <div className={s.CollidedLogoContainer}>
                <GiBookshelf />
            </div>
            <div className={s.hamBurgerLogoContainer} onClick={handleSideBar}>
                <GiHamburgerMenu />
            </div>
        </div>}
        {open &&
            // <div className={s.openedSideBar}>
            <ExpandedSideBar></ExpandedSideBar>
            // </div>
        }
    </>;
}
export default CollapsedSideBar;