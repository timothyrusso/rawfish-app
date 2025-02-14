import type { User } from "@entities/user/User";
import { formatDate } from "@ui/components/DatePicker/utils/formatDate";
import { useLocation, useNavigate } from "react-router";

export const useUserPageLogic = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const user: User = location.state?.user;

	const registrationDate = formatDate(new Date(user.registered.date));

	return { navigate, registrationDate, user };
};
