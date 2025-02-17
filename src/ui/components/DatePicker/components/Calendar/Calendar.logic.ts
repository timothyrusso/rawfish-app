import {
	type CalendarActionObject,
	CalendarActionTypes,
	type CalendarDataType,
	useCalendar,
	useCalendarDispatch,
} from "@ui/context/Calendar/CalendarContextProvider";
import { type Dispatch, useEffect, useState } from "react";
import { useResetCalendar } from "../../utils/resetCalendar";
import { locales } from "@localization/locales";

export const useCalendarLogic = () => {
	const [currentDate, setCurrentDate] = useState(new Date());
	const [calendarDays, setCalendarDays] = useState<(Date | null)[]>([]);

	const dispatchCalendarData =
		useCalendarDispatch() as unknown as Dispatch<CalendarActionObject>;

	const { handleReset } = useResetCalendar();

	const calendarData = useCalendar() as unknown as CalendarDataType;
	const selectedStartDate = calendarData?.selectedStartDate;
	const selectedEndDate = calendarData?.selectedEndDate;

	const currentMonth = locales.calendar.month_names[currentDate.getMonth()];
	const currentYear = currentDate.getFullYear();

	useEffect(() => {
		const firstDayOfMonth = new Date(
			currentDate.getFullYear(),
			currentDate.getMonth(),
			1,
		);
		const lastDayOfMonth = new Date(
			currentDate.getFullYear(),
			currentDate.getMonth() + 1,
			0,
		);
		const startingDayOfWeek = firstDayOfMonth.getDay();

		const days: (Date | null)[] = [];

		for (let i = 0; i < startingDayOfWeek; i++) {
			days.push(null);
		}

		for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
			days.push(new Date(currentDate.getFullYear(), currentDate.getMonth(), i));
		}

		setCalendarDays(days);
	}, [currentDate]);

	const handleDateClick = (date: Date) => {
		if (!date) return;

		if (!selectedStartDate || (selectedStartDate && selectedEndDate)) {
			dispatchCalendarData({
				type: CalendarActionTypes.SET_SELECTED_START_DATE,
				payload: date,
			});
			dispatchCalendarData({
				type: CalendarActionTypes.SET_SELECTED_END_DATE,
				payload: undefined,
			});
		} else {
			if (date < selectedStartDate) {
				dispatchCalendarData({
					type: CalendarActionTypes.SET_SELECTED_START_DATE,
					payload: date,
				});
				dispatchCalendarData({
					type: CalendarActionTypes.SET_SELECTED_END_DATE,
					payload: undefined,
				});
			} else {
				dispatchCalendarData({
					type: CalendarActionTypes.SET_SELECTED_END_DATE,
					payload: date,
				});
			}
		}
	};

	const isDateInRange = (date: Date) => {
		if (!date || !selectedStartDate) return false;
		if (!selectedEndDate) return date.getTime() === selectedStartDate.getTime();
		return date >= selectedStartDate && date <= selectedEndDate;
	};

	const changeMonth = (increment: number) => {
		setCurrentDate(
			new Date(
				currentDate.getFullYear(),
				currentDate.getMonth() + increment,
				1,
			),
		);
	};

	const changeYear = (increment: number) => {
		setCurrentDate(
			new Date(
				currentDate.getFullYear() + increment,
				currentDate.getMonth(),
				1,
			),
		);
	};

	const handleCancel = () => {
		handleReset();
	};

	const handleApply = () => {
		dispatchCalendarData({ type: CalendarActionTypes.TOGGLE_CALENDAR });
		dispatchCalendarData({
			type: CalendarActionTypes.SET_FORM_DATA,
			payload: { startDate: selectedStartDate, endDate: selectedEndDate },
		});
	};

	return {
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
		weekNames: locales.calendar.week_names,
	};
};
