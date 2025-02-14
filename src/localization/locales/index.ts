import { it } from "./it";

const resources = {
	it: {
		translation: it,
	},
};

const mockedLanguage = "it";

export const locales = resources[mockedLanguage].translation;
