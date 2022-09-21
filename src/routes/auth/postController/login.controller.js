export const loginController = async (_, res, next) => {
	try {
		res.status(200).json({ msg: "login" });
	} catch (error) {
		next(error);
	}
};
