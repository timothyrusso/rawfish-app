import type { FC } from "react";
import styles from "./NavButton.module.css";

type NavButtonProps = {
	onClick: () => void;
	label: string;
};

export const NavButton: FC<NavButtonProps> = ({ onClick, label }) => {
	return (
		<button type="button" onClick={onClick} className={styles.nav_button}>
			{label}
		</button>
	);
};
