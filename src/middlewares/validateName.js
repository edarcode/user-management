export const validateName = async (req, res, next) => {
	try {
		const { name } = req.body;
		if (!name || (name < 8 && name > 20))
			return res.status(400).json({ msg: "name invalido" });
		next();
	} catch (error) {
		next(error);
	}
};
