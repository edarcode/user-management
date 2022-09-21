export const validatePassword = async (req, res, next) => {
	try {
		const { password } = req.body;
		if (!password || password.length < 8 || password.length > 20)
			return res.status(400).json({ msg: "password invalido" });
		next();
	} catch (error) {
		next(error);
	}
};
