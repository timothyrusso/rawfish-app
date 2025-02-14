import type { FC } from "react";
import styles from "./CalendarButton.module.css";

type CalendarButtonProps = {
	onClick: () => void;
	disabled?: boolean;
	label: string;
};

export const CalendarButton: FC<CalendarButtonProps> = ({
	onClick,
	disabled,
	label,
}) => {
	return (
		<button
			className={styles.handle_status_button}
			type="button"
			onClick={onClick}
			disabled={disabled}
		>
			{label}
		</button>
	);
};
