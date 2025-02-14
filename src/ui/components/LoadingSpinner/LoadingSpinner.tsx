import type { FC } from "react";
import style from "./LoadingSpinner.module.css";

export const LoadingSpinner: FC = () => {
	return (
		<div className={style.loading_spinner}>
			<div className={style.spinner} />
		</div>
	);
};
