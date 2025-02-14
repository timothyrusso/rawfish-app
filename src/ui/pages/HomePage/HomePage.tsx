import { Table } from "@ui/components/Table/Table";
import DateRangePicker from "@ui/components/DatePicker/DateRangePicker";
import { useHomePageLogic } from "./HomePage.logic";
import { LoadingSpinner } from "@ui/components/LoadingSpinner/LoadingSpinner";
import { ErrorMessage } from "@ui/components/ErrorMessage/ErrorMessage";
import styles from "./HomePage.module.css";
import { locales } from "@localization/locales";

export const HomePage = () => {
	const { error, status, loadMoreRef, usersData } = useHomePageLogic();

	if (usersData?.allUsers.length === 0) {
		return <ErrorMessage message={locales.home_page.no_users} isEmptyPage />;
	}

	return status === "pending" ? (
		<LoadingSpinner />
	) : status === "error" ? (
		<ErrorMessage message={error?.message} />
	) : (
		<>
			<DateRangePicker />
			<Table userData={usersData?.allUsers} />
			<div ref={loadMoreRef} className={styles.threshold_height} />
		</>
	);
};
