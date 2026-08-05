import s from "./SubjectCard.module.css"
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { IoCloseCircle } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import AttendanceChart from "./PIchart";
import { FiDelete } from "react-icons/fi";

import { RiDeleteBack2Fill } from "react-icons/ri";
import { useState } from "react";




function SubjectCard({ onDeleteHandle }) {
    let [active, setActive] = useState(false);
    let handleCardClick = () => {
        setActive(true);
        setTimeout(() => {
            setActive(false);
        }, 250);
    }
    return <>
        <div className={`${s.subjectCardBox} ${active ? s.lifted : ""}`} onClick={handleCardClick}>
            <div className={s.subjectDeleteIcon} onClick={onDeleteHandle}>
                {/* <FiDelete /> */}
                <RiDeleteBack2Fill />
            </div>
            <div className={s.subjectName}>Basics of Robotics And Algorithms and Analysis of whatever the hell</div>

            <div className={s.subjectContentContainer}>
                <div className={s.attendenceInfo}>
                    <div className={s.presentCount}>
                        <span className={s.presentLogo}><IoCheckmarkCircleSharp />
                        </span>
                        <span className={s.presentNumber}>Classes Attended : 25</span>
                    </div>

                    <div className={s.absentCount}>
                        <span className={s.absentLogo}><IoCloseCircle />
                        </span>
                        <span className={s.absentNumber}>Classes not Attended : 5</span>
                    </div>
                    <div className={s.totalCount}>
                        <span className={s.totalLogo}><SlCalender />
                        </span>
                        <span className={s.totalNumber}>Total Classes : 30</span>
                    </div>
                </div>
                <div className={s.percentageProgress}>
                    <div className={s.circularProgress}>
                        <svg viewBox="0 0 100 100">
                            {/* Background circle */}
                            <circle
                                className={s.progressBackground}
                                cx="50"
                                cy="50"
                                r="42"
                            />

                            {/* Progress circle */}
                            <circle
                                className={s.progressCircle}
                                cx="50"
                                cy="50"
                                r="42"
                            />
                        </svg>

                        <div className={s.progressText}>
                            82.5%
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className={s.removeSubject}>
            <button className={s.removeSubjectButton}>Remove</button>
        </div> */}
        </div></>;
}
export default SubjectCard;