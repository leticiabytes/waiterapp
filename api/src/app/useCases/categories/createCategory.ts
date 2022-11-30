import { Request, Response } from "express";
import { Category } from "../../models/category";

export async function createCategory(req: Request, res: Response) {
	const { icon, name } = req.body;
	const category = await Category.create({ icon, name });

	res.json(category);
}
