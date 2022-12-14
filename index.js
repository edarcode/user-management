import "dotenv/config";
import { connDb } from "./src/connDb.js";
import { PORT } from "./src/env/server.js";
import { server } from "./src/server.js";

connDb()
	.then(() => console.log("Database connection successful"))
	.then(() => {
		server.listen(PORT, () =>
			console.log(`Server running on port: ${PORT} 😎`)
		);
	})
	.catch(err => console.log(err));
