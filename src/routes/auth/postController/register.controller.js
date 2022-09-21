export const registerController = async (_, res, next) => {
	try {
		res.status(200).json({ msg: "register" });
	} catch (error) {
		next(error);
	}
};
