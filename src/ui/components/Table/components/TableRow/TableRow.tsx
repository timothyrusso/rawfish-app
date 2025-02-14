import type { User } from "@entities/user/User";
import type { FC } from "react";
import style from "./TableRow.module.css";
import { useTableRowLogic } from "./TableRow.logic";
import { locales } from "@localization/locales";

type TableRowProps = {
	item: User;
};

export const TableRow: FC<TableRowProps> = ({ item }) => {
	const { handleKeyPress, handleRowClick } = useTableRowLogic(item);

	return (
		<tr
			className={style.table_row}
			onClick={handleRowClick}
			onKeyDown={handleKeyPress}
		>
			<td className={style.text}>{item.name.first}</td>
			<td className={style.text}>{item.name.last}</td>
			<td className={style.text}>{item.location.city}</td>
			<td>
				<img
					className={style.image}
					src={item.picture.large}
					alt={locales.user_page.user_profile}
				/>
			</td>
		</tr>
	);
};
