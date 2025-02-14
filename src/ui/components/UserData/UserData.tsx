import type { FC } from "react";
import style from "./UserData.module.css";

type UserDataProps = {
	label: string;
	value: string;
};

export const UserData: FC<UserDataProps> = ({ label, value }) => {
	return (
		<div className={style.container}>
			<p className={style.title}>{`${label}:`}</p>
			<p>{value}</p>
		</div>
	);
};
