import {
	CalendarActionTypes,
	useCalendar,
	useCalendarDispatch,
	type CalendarActionObject,
	type CalendarDataType,
} from "@ui/context/Calendar/CalendarContextProvider";
import type { Dispatch } from "react";
import { formatDate } from "./utils/formatDate";
import { locales } from "@localization/locales";

export const useDateRangePickerLogic = () => {
	const calendarData = useCalendar() as unknown as CalendarDataType;
	const dispatchCalendarData =
		useCalendarDispatch() as unknown as Dispatch<CalendarActionObject>;

	const showCalendar = calendarData?.showCalendar ?? false;
	const selectedStartDate = calendarData?.selectedStartDate;
	const selectedEndDate = calendarData?.selectedEndDate;

	const handleShowCalendar = () => {
		dispatchCalendarData({ type: CalendarActionTypes.TOGGLE_CALENDAR });
	};

	const buttonLabel =
		selectedStartDate && selectedEndDate
			? `${locales.calendar.start}: ${formatDate(selectedStartDate)} - ${locales.calendar.end}: ${formatDate(selectedEndDate)}`
			: locales.calendar.select_range;

	return {
		showCalendar,
		handleShowCalendar,
		buttonLabel,
	};
};
