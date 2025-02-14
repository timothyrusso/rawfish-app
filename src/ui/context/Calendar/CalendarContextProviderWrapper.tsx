import { useReducer, type FC, type ReactElement } from "react";
import {
	CalendarContext,
	CalendarDispatchContext,
	calendarReducer,
	initialCalendarState,
} from "./CalendarContextProvider";

type CalendarProviderProps = {
	children: ReactElement;
};

export const CalendarProvider: FC<CalendarProviderProps> = ({ children }) => {
	const [calendar, dispatch] = useReducer(
		calendarReducer,
		initialCalendarState,
	);

	return (
		<CalendarContext.Provider value={calendar}>
			<CalendarDispatchContext.Provider value={dispatch}>
				{children}
			</CalendarDispatchContext.Provider>
		</CalendarContext.Provider>
	);
};
