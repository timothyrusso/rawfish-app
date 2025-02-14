import { locales } from "@localization/locales";
import { useCalendarLogic } from "./Calendar.logic";
import styles from "./Calendar.module.css";
import { CalendarButton } from "./components/CalendarButton/CalendarButton";
import { CalendarDay } from "./components/CalendarDay/CalendarDay";
import { CalendarHeaderTitle } from "./components/CalendarHeaderTitle/CalendarHeaderTitle";
import { NavButton } from "./components/NavButton/NavButton";

export const Calendar = () => {
	const {
		calendarDays,
		currentMonth,
		currentYear,
		changeMonth,
		changeYear,
		handleDateClick,
		isDateInRange,
		handleCancel,
		selectedStartDate,
		selectedEndDate,
		handleApply,
		weekNames,
	} = useCalendarLogic();

	return (
		<div className={styles.date_picker_container}>
			<div className={styles.calendar_header}>
				<div className={styles.navigation_container}>
					<NavButton onClick={() => changeYear(-1)} label="⟪" />
					<NavButton onClick={() => changeMonth(-1)} label="‹" />
				</div>

				<CalendarHeaderTitle
					currentMonth={currentMonth}
					currentYear={currentYear}
				/>

				<div className={styles.navigation_container}>
					<NavButton onClick={() => changeMonth(1)} label="›" />
					<NavButton onClick={() => changeYear(1)} label="⟫" />
				</div>
			</div>

			<div className={styles.week_days}>
				{weekNames.map((day) => (
					<div key={day} className={styles.week_day}>
						{day}
					</div>
				))}
			</div>

			<div className={styles.calendar_grid}>
				<CalendarDay
					calendarDays={calendarDays}
					selectedStartDate={selectedStartDate}
					selectedEndDate={selectedEndDate}
					isDateInRange={isDateInRange}
					handleDateClick={handleDateClick}
				/>
			</div>

			<div className={styles.calendar_button_container}>
				<CalendarButton
					onClick={handleApply}
					disabled={!selectedStartDate || !selectedEndDate}
					label={locales.calendar.apply}
				/>
				<CalendarButton
					onClick={handleCancel}
					label={locales.calendar.cancel}
				/>
			</div>
		</div>
	);
};
