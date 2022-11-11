// src/mocks/handlers.js
import { rest } from "msw";
export const handlers = [
	rest.post("/data", (req, res, ctx) => {
		return res(
			// Respond with a 200 status code
			ctx.status(200)
		);
	}),
	rest.get("/data", (req, res, ctx) => {
		return res(
			ctx.status(200),
			ctx.json({
				data: ["Ivan", "Plays", "On", "Yoru"],
			})
		);
	}),
];
