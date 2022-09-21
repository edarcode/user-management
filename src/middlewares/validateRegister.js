import { validateEmail } from "./validateEmail.js";
import { validateName } from "./validateName.js";
import { validatePassword } from "./validatePassword.js";
import { validateUsername } from "./validateUsername.js";

export const validateRegister = [
	validateName,
	validatePassword,
	validateEmail,
	validateUsername
];
