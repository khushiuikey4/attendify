import s from "./Calender.module.css"
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

function Calender() {
    const years = Array.from(
        { length: 2026 - 2000 + 1 },
        (_, index) => 2000 + 26 - index
    );
    const curr = new Date();
    const currMonth = curr.getMonth();
    const currYear = curr.getFullYear();
    const startDay = new Date(currYear, currMonth, 1).getDay();
    const dayCount = new Date(currYear, currMonth + 1, 0).getDate();
    const endDay = new Date(currYear, currMonth, dayCount).getDay();

    let calendarGrid = [];
    for (let i = 0; i < startDay; i++) {
        calendarGrid.push("");
    }
    for (let i = 1; i <= dayCount; i++) {
        calendarGrid.push(i);
    }
    for (let i = 1; i <= (6 - endDay); i++) {
        calendarGrid.push("");
    }


    return <><div className={s.calenderOuterContainer}>
        <div className={s.calenderInnerContainer}>
            <div className={s.calendarHeader}>
                <div className={s.calendarTitle}>Calendar</div>
                <div className={s.calendarNavigation}>
                    <div className={s.baseControl}>
                        <div className={s.backMonth}>
                            <IoIosArrowBack />
                        </div>
                        <div className={s.forMonth}><IoIosArrowForward />
                        </div>
                    </div>
                    <div className={s.calendarSelection}>
                        <div className={s.monthSelect}>
                            <select name="month" className={s.monthSelection}>
                                <option value="january">january</option>
                                <option value="february">february</option>
                                <option value="march">march</option>
                                <option value="april">april</option>
                                <option value="may">may</option>
                                <option value="june">june</option>
                                <option value="july">july</option>
                                <option value="august">august</option>
                                <option value="september">september</option>
                                <option value="october">october</option>
                                <option value="november">november</option>
                                <option value="december">december</option>
                            </select>
                            <select name="year" className={s.yearSelection}>
                                {years.map((year) => (
                                    <option key={year} value={year} selected>{year}</option>
                                ))}
                            </select>

                        </div>
                    </div>
                </div>
            </div>
            <div className={s.calendarContainer}>
                <div className={s.calendar}>

                    {/* Weekday header */}
                    <div className={`${s.day} ${s.emptyCell}`}>Sun</div>
                    <div className={`${s.day} ${s.emptyCell}`}>Mon</div>
                    <div className={`${s.day} ${s.emptyCell}`}>Tue</div>
                    <div className={`${s.day} ${s.emptyCell}`}>Wed</div>
                    <div className={`${s.day} ${s.emptyCell}`}>Thu</div>
                    <div className={`${s.day} ${s.emptyCell}`}>Fri</div>
                    <div className={`${s.day} ${s.emptyCell}`}>Sat</div>

                    {/* Calendar dates */}
                    {calendarGrid.map((date, index) => (
                        <div
                            key={index}
                            className={date === "" ? s.emptyCell : s.dateCell}
                        >
                            {date}
                        </div>
                    ))}

                </div>
            </div>
        </div>
        <div className={s.allSubInfoContainer}>
            <div className={s.totalCounts}>
                <div className={s.totalClasses}>Total Classes : 45</div>
                <div className={s.totalPresent}>Total Present : 45</div>
                <div className={s.totalAbsent}>Total absent : 45</div>
                <div className={s.totalCancelled}>Classes Cancelled : 45</div>
            </div>
        </div>
    </div>
    </>;
}
export default Calender;