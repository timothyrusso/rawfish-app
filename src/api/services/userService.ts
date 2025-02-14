import type { UserServiceResponse } from "@entities/user/UserServiceResponse";
import { httpClient } from "../httpClient";
import { UserConfig } from "@constants/UserConfig";

/**
 * Fetches user data from the API using the specified page number and results count.
 *
 * @param page - The page number to retrieve.
 * @param results - The number of results to retrieve per page. Defaults to the value defined in UserConfig.
 * @returns A promise that resolves to a UserServiceResponse containing the user data.
 */
export async function userService(
	page: number,
	results: number = UserConfig.RESULTS,
) {
	return await httpClient<UserServiceResponse>(
		`${UserConfig.BASE_URL}?page=${page}&results=${results}&seed=${UserConfig.SEED}`,
	);
}
