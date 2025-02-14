import { useUsersQuery } from "@query/Users/queries/useUsersQuery";
import { useCalendar } from "@ui/context/Calendar/CalendarContextProvider";
import { useEffect, useRef } from "react";

export const useHomePageLogic = () => {
	const calendarData = useCalendar();
	const formData = calendarData?.formData;

	const {
		usersData,
		error,
		fetchNextPage,
		hasNextPage,
		isFetchingNextPage,
		status,
	} = useUsersQuery(formData);

	const observerRef = useRef<IntersectionObserver | null>(null);
	const loadMoreRef = useRef<HTMLDivElement | null>(null);

	/**
	 * Implements an IntersectionObserver to automatically load more users when the
	 * designated element is in view and there are more pages to fetch.
	 */
	useEffect(() => {
		if (isFetchingNextPage) return;

		if (observerRef.current) observerRef.current.disconnect();

		observerRef.current = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting && hasNextPage) {
					fetchNextPage();
				}
			},
			{ threshold: 0.5 },
		);

		if (loadMoreRef.current) observerRef.current.observe(loadMoreRef.current);

		return () => {
			if (observerRef.current) observerRef.current.disconnect();
		};
	}, [isFetchingNextPage, fetchNextPage, hasNextPage, usersData]);

	return {
		error,
		status,
		loadMoreRef,
		usersData,
	};
};
