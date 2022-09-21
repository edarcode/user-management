import { regex } from "../constants/regex.js";

export const validateEmail = async (req, res, next) => {
	try {
		const { email } = req.body;
		if (!regex.EMAIL.test(email))
			return res.status(400).json({ msg: "email invalido" });
		next();
	} catch (error) {
		next(error);
	}
};
