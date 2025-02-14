import style from "./UserPage.module.css";
import { UserData } from "@ui/components/UserData/UserData";
import { Routes } from "@constants/Routes";
import { locales } from "@localization/locales";
import { useUserPageLogic } from "./UserPage.logic";

export const UserPage = () => {
	const { navigate, registrationDate, user } = useUserPageLogic();

	return (
		<div className={style.container}>
			<img
				className={style.image}
				src={user.picture.large}
				alt={locales.user_page.user_profile}
			/>
			<h1>{`${user.name.first} ${user.name.last}`}</h1>

			<UserData label={locales.user_page.email} value={user.email} />
			<UserData label={locales.user_page.phone} value={user.phone} />
			<UserData label={locales.user_page.location} value={user.location.city} />
			<UserData
				label={locales.user_page.registration}
				value={registrationDate}
			/>

			<button
				className={style.button}
				type="button"
				onClick={() => navigate(Routes.HOME)}
			>
				{locales.user_page.back_to_home}
			</button>
		</div>
	);
};
