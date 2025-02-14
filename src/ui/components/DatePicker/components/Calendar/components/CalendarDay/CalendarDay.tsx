import type { FC } from "react";
import styles from "./CalendarDay.module.css";

type CalendarDayProps = {
	calendarDays: (Date | null)[];
	selectedStartDate: Date | undefined;
	selectedEndDate: Date | undefined;
	isDateInRange: (date: Date) => boolean;
	handleDateClick: (date: Date) => void;
};

export const CalendarDay: FC<CalendarDayProps> = ({
	calendarDays,
	selectedStartDate,
	selectedEndDate,
	isDateInRange,
	handleDateClick,
}) => {
	return calendarDays.map((date) => {
		if (!date) return;

		const isSelected =
			date &&
			(date.getTime() === selectedStartDate?.getTime() ||
				date.getTime() === selectedEndDate?.getTime());
		const isInRange = isDateInRange(date);

		return (
			<button
				type="button"
				key={date?.getTime()}
				onClick={() => handleDateClick(date)}
				disabled={!date}
				className={`${styles.day_button} ${isSelected ? styles.day_button_selected : ""} ${isInRange && !isSelected ? styles.day_button_in_range : ""} ${!date ? styles.day_button_hidden : ""}`}
			>
				{date?.getDate()}
			</button>
		);
	});
};
