import { createContext, type Dispatch, useContext } from "react";

export type FormData = {
	startDate: Date | undefined;
	endDate: Date | undefined;
};

export type CalendarDataType = {
	showCalendar: boolean;
	selectedStartDate: Date | undefined;
	selectedEndDate: Date | undefined;
	formData: FormData;
};

export const CalendarActionTypes = {
	TOGGLE_CALENDAR: "TOGGLE_CALENDAR",
	SET_SELECTED_START_DATE: "SET_SELECTED_START_DATE",
	SET_SELECTED_END_DATE: "SET_SELECTED_END_DATE",
	SET_FORM_DATA: "SET_FORM_DATA",
} as const;

export type CalendarActionObject =
	| { type: typeof CalendarActionTypes.TOGGLE_CALENDAR }
	| {
			type: typeof CalendarActionTypes.SET_SELECTED_START_DATE;
			payload: Date | undefined;
	  }
	| {
			type: typeof CalendarActionTypes.SET_SELECTED_END_DATE;
			payload: Date | undefined;
	  }
	| {
			type: typeof CalendarActionTypes.SET_FORM_DATA;
			payload: {
				startDate: Date | undefined;
				endDate: Date | undefined;
			};
	  };

export const CalendarContext = createContext<CalendarDataType | undefined>(
	undefined,
);
export const CalendarDispatchContext = createContext<
	Dispatch<CalendarActionObject> | undefined
>(undefined);

export const initialCalendarState: CalendarDataType = {
	showCalendar: false,
	selectedStartDate: undefined,
	selectedEndDate: undefined,
	formData: {
		startDate: undefined,
		endDate: undefined,
	},
};

export const useCalendar = () => {
	return useContext(CalendarContext);
};

export const useCalendarDispatch = () => {
	return useContext(CalendarDispatchContext);
};

export function calendarReducer(
	initialCalendarState: CalendarDataType,
	action: CalendarActionObject,
): CalendarDataType {
	switch (action.type) {
		case CalendarActionTypes.TOGGLE_CALENDAR: {
			return {
				...initialCalendarState,
				showCalendar: !initialCalendarState.showCalendar,
			};
		}
		case CalendarActionTypes.SET_SELECTED_START_DATE: {
			return { ...initialCalendarState, selectedStartDate: action.payload };
		}
		case CalendarActionTypes.SET_SELECTED_END_DATE: {
			return { ...initialCalendarState, selectedEndDate: action.payload };
		}
		case CalendarActionTypes.SET_FORM_DATA: {
			return { ...initialCalendarState, formData: action.payload };
		}
		default: {
			throw new Error("Unknown action");
		}
	}
}
