import type { FC } from "react";
import styles from "./CalendarHeaderTitle.module.css";

type CalendarHeaderTitleProps = {
	currentMonth: string;
	currentYear: number;
};

export const CalendarHeaderTitle: FC<CalendarHeaderTitleProps> = ({
	currentMonth,
	currentYear,
}) => {
	return (
		<div className={styles.calendar_header}>
			{currentMonth} {currentYear}
		</div>
	);
};
