import type { User } from "@entities/user/User";
import { useNavigate } from "react-router";
import type { KeyboardEvent as ReactKeyboardEvent } from "react";

export const useTableRowLogic = (item: User) => {
	const navigate = useNavigate();

	const handleRowClick = () => {
		navigate(`/user/${item.id.value}`, { state: { user: item } });
	};

	const handleKeyPress = (e: ReactKeyboardEvent<HTMLTableRowElement>) => {
		if (e.key === "Enter" || e.key === " ") {
			handleRowClick();
		}
	};

	return { handleKeyPress, handleRowClick };
};
