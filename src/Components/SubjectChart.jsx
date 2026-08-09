import s from "./SubjectChart.module.css"
function SubjectChart() {
    return <div className={s.subjectChart}>
        <div className={s.subejctTitle}>Introduction to Artificial Intelligence</div>
        <div className={s.mainChartComponent}>
            <div className={s.chartProgressBar}>
                <div className={s.chartProgress}></div>
            </div>
            <div className={s.attendancePercentage}>84%</div>
        </div>
    </div>;
}
export default SubjectChart;