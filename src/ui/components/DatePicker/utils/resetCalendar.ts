import {
	type CalendarActionObject,
	CalendarActionTypes,
	useCalendarDispatch,
} from "@ui/context/Calendar/CalendarContextProvider";
import type { Dispatch } from "react";

export const useResetCalendar = (isEmptyPage?: boolean) => {
	const dispatchCalendarData =
		useCalendarDispatch() as unknown as Dispatch<CalendarActionObject>;

	const handleReset = () => {
		if (!isEmptyPage) {
			dispatchCalendarData({ type: CalendarActionTypes.TOGGLE_CALENDAR });
		}
		dispatchCalendarData({
			type: CalendarActionTypes.SET_SELECTED_END_DATE,
			payload: undefined,
		});
		dispatchCalendarData({
			type: CalendarActionTypes.SET_SELECTED_START_DATE,
			payload: undefined,
		});
		dispatchCalendarData({
			type: CalendarActionTypes.SET_FORM_DATA,
			payload: { startDate: undefined, endDate: undefined },
		});
	};

	return {
		handleReset,
	};
};
