import type { FC } from "react";
import styles from "./ErrorMessage.module.css";
import { locales } from "@localization/locales";
import { useErrorMessageLogic } from "./ErrorMessage.logic";

type ErrorMessageProps = {
	message?: string;
	isEmptyPage?: boolean;
};

export const ErrorMessage: FC<ErrorMessageProps> = ({
	message,
	isEmptyPage,
}) => {
	const { handleCancel } = useErrorMessageLogic(isEmptyPage);

	return (
		<div className={styles.error_message}>
			<p>{message ? message : locales.errors.unknown_error}</p>
			<button onClick={handleCancel} type="button">
				{locales.errors.retry}
			</button>
		</div>
	);
};
