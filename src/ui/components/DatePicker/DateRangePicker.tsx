import { Calendar } from "./components/Calendar/Calendar";
import { useDateRangePickerLogic } from "./DateRangePicker.logic";
import { DatePickerDateButton } from "./components/DatePickerDateButton/DatePickerDateButton";
import type { FC } from "react";
import style from "./DateRangePicker.module.css";

const DateRangePicker: FC = () => {
	const { showCalendar, handleShowCalendar, buttonLabel } =
		useDateRangePickerLogic();

	return (
		<div className={style.container}>
			<DatePickerDateButton label={buttonLabel} onClick={handleShowCalendar} />
			{showCalendar && <Calendar />}
		</div>
	);
};

export default DateRangePicker;
