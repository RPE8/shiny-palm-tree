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
	rest.get("/listData", (req, res, ctx) => {
		return res(
			ctx.status(200),
			ctx.json({
				data: [
					{ "key": "0", "value": "First" },
					{ "key": 1, "value": "Second" },
					{ "key": "2", "value": "Third" }
				]
			})
		);
	}),
	rest.get("/breadcrumbsData", (req, res, ctx) => {
		return res(
			ctx.status(200),
			ctx.json({
				data: [
					{ "key": "0", "value": "MUI" },
					{ "key": 1, "value": "Core" },
					{ "key": "2", "value": "Breadcrumb" }
				]
			})
		);
	}),
];
