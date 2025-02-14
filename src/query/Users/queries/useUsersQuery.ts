import { userService } from "@api/services/userService";
import { useInfiniteQuery } from "@tanstack/react-query";
import { UsersQueryKeys } from "../UsersQueryKeys";
import type { FormData } from "@ui/context/Calendar/CalendarContextProvider";

/**
 * Custom hook to fetch and manage paginated user data using an infinite query.
 *
 * @param {FormData} [formData] - Optional form data containing start and end dates
 * to filter users based on their registration date.
 * @returns {Object} An object containing user data, query status, and pagination controls.
 * - usersData: The fetched user data.
 * - error: Any error encountered during the query.
 * - fetchNextPage: Function to fetch the next page of data.
 * - hasNextPage: Boolean indicating if there are more pages to fetch.
 * - isFetching: Boolean indicating if the query is currently fetching data.
 * - isFetchingNextPage: Boolean indicating if the next page is being fetched.
 * - status: The current status of the query.
 * - isLoading: Boolean indicating if the query is in a loading state.
 * - isSuccess: Boolean indicating if the query was successful.
 */
export const useUsersQuery = (formData?: FormData) => {
	const {
		data,
		error,
		fetchNextPage,
		hasNextPage,
		isFetching,
		isFetchingNextPage,
		status,
		isLoading,
		isSuccess,
	} = useInfiniteQuery({
		queryKey: [UsersQueryKeys.getUsers, formData?.startDate, formData?.endDate],
		staleTime: 1000 * 60 * 5,
		queryFn: ({ pageParam = 1 }) => userService(pageParam),
		initialPageParam: 1,
		getNextPageParam: (lastPage) =>
			lastPage.success ? lastPage.data.info.page + 1 : undefined,
		select: (data) => ({
			allUsers: data.pages.flatMap((page) =>
				page.success
					? (page.data?.results.filter((user) => {
							if (!formData?.startDate || !formData?.endDate) return true;
							const userDate = new Date(user.registered.date);
							return (
								userDate >= formData?.startDate && userDate <= formData?.endDate
							);
						}) ?? [])
					: [],
			),
		}),
	});

	return {
		usersData: data,
		error,
		fetchNextPage,
		hasNextPage,
		isFetching,
		isFetchingNextPage,
		status,
		isLoading,
		isSuccess,
	};
};
