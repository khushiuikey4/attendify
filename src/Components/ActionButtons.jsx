import s from "./ActionButtons.module.css"
import { VscAddCompact } from "react-icons/vsc";
import { IoCheckmarkDoneSharp } from "react-icons/io5";


function ActionButtons() {
    return <>
        <div className={s.actionButtonsContainer}>
            <button className={s.AddSubjectButton}>
                <VscAddCompact />
                Add Subject
            </button>
            <button className={s.AddBulk}>
                <IoCheckmarkDoneSharp />

                Mark All
            </button>
        </div>
    </>;
}
export default ActionButtons;