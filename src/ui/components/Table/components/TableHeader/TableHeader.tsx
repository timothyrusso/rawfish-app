import type { FC } from "react";
import style from "./TableHeader.module.css";
import { locales } from "@localization/locales";

export const TableHeader: FC = () => {
	return (
		<thead className={style.container}>
			<tr className={style.header_row}>
				<th className={style.text}>{locales.table.name}</th>
				<th className={style.text}>{locales.table.surname}</th>
				<th className={style.text}>{locales.table.location}</th>
				<th className={`${style.main_col} ${style.text}`}>
					{locales.table.photo}
				</th>
			</tr>
		</thead>
	);
};
