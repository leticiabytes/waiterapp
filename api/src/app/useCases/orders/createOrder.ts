import { io } from "../../../index";

import { Request, Response } from "express";
import { Order } from "../../models/order";

export async function createOrder(req: Request, res: Response) {
	const { table, products } = req.body;
	const order = await Order.create({ table, products });

	io.emit("orders@new");
	res.status(201).json(order);
}
