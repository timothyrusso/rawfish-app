import type { FC } from "react";
import styles from "./DatePickerDateButton.module.css";

type DatePickerDateButtonProps = {
	onClick: () => void;
	label: string;
};

export const DatePickerDateButton: FC<DatePickerDateButtonProps> = ({
	onClick,
	label,
}) => {
	return (
		<button
			className={styles.date_picker_date_button}
			type="button"
			onClick={onClick}
		>
			{label}
		</button>
	);
};
