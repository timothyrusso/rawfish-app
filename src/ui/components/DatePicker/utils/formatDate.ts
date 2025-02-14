/**
 * Formats a given Date object into a localized string representation.
 *
 * @param date - The Date object to format. If not provided, returns an empty string.
 * @returns A string representing the date in "day month year" format, localized to Italian.
 */
export const formatDate = (date?: Date) => {
	if (!date) return "";
	return date.toLocaleDateString("it-IT", {
		year: "numeric",
		month: "short",
		day: "numeric",
	});
};
