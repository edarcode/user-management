import { regex } from "../constants/regex.js";

export const validateUsername = async (req, res, next) => {
	try {
		const { username } = req.body;
		if (!regex.USERNAME.test(username))
			return res.status(400).json({ msg: "username invalido" });
		next();
	} catch (error) {
		next(error);
	}
};
