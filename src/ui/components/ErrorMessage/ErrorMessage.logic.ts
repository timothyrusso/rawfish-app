import { useNavigate } from "react-router";
import { useResetCalendar } from "../DatePicker/utils/resetCalendar";
import { Routes } from "@constants/Routes";

export const useErrorMessageLogic = (isEmptyPage?: boolean) => {
	const navigate = useNavigate();
	const { handleReset } = useResetCalendar(isEmptyPage);

	const handleCancel = () => {
		handleReset();
		navigate(Routes.HOME);
	};
	return { handleCancel };
};
