import s from "./DashBoardComponent.module.css"
import { CiViewList } from "react-icons/ci";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { MdCheckCircle } from "react-icons/md";

import { TbXboxXFilled } from "react-icons/tb";

function DashBoardComponent() {
    return <div className={s.OuterDashBoardContainer}>
        <div className={s.InnerDashBoardContainer}>
            <div className={s.dashBoardGeneralInfo}>
                <div className={s.dashBoardInfoBox}>
                    <div className={s.dashTitle}>Total Attendence Percentage</div>
                    <div className={s.totalPercentage}>
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
                <div className={s.dashBoardInfoBox}>
                    <div className={s.dashCardLogo}>
                        <CiViewList />
                    </div>
                    <div className={s.dashTitle}>Total Classes Conducted Across All Subjects</div>
                    <div className={s.dashFigure}>105</div>
                </div>
                <div className={s.dashBoardInfoBox}>
                    <div className={s.dashCardLogo} style={{ color: "mediumseagreen" }}>
                        {/* <IoMdCheckmarkCircleOutline /> */}
                        <MdCheckCircle />
                    </div>
                    <div className={s.dashTitle}>Classes Attended Across All Subjects</div>
                    <div className={s.dashFigure}>105</div>
                </div>
                <div className={s.dashBoardInfoBox}>
                    <div className={s.dashCardLogo} style={{ color: "#dc3545" }}>
                        <TbXboxXFilled />
                    </div>
                    <div className={s.dashTitle}>Classes not attended Across All Subjects</div>
                    <div className={s.dashFigure}>105</div>
                </div>
            </div>
            {/* subjectWise percentage and insights */}
            <div className={s.ChartAndInsightContainer}>
                <div className={s.attendanceChartContainer} >
                    <div className={s.chartContainer}>
                        <div className={s.dashBar} style={{ width: "56%" }}>Introduction to Artificial Intelligence Introduction to Artificial Intelligence</div>
                        <div className={s.dashBar} style={{ width: "78%" }}>Introduction to Artificial Intelligence</div>
                        <div className={s.dashBar}>Introduction to Artificial Intelligence</div>
                        <div className={s.dashBar}>Introduction to Artificial Intelligence</div>
                        <div className={s.dashBar}>Introduction to Artificial Intelligence</div>
                    </div>
                </div>
                <div className={s.attendanceInsightContainer}></div>
            </div>
        </div>
    </div>;
}
export default DashBoardComponent;