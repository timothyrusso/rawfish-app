import type { User } from "@entities/user/User";
import type { FC } from "react";
import { TableHeader } from "./components/TableHeader/TableHeader";
import { TableRow } from "./components/TableRow/TableRow";
import style from "./Table.module.css";

interface TableProps {
	userData?: User[];
}

export const Table: FC<TableProps> = ({ userData }) => {
	return (
		<table className={style.table}>
			<TableHeader />
			<tbody>
				{userData?.map((item, index) => {
					return <TableRow key={item.id.value ?? index} item={item} />;
				})}
			</tbody>
		</table>
	);
};
