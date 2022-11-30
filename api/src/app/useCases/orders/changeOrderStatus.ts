import { Request, Response } from "express";
import { Order } from "../../models/order";

export async function changeOrderStatus(req: Request, res: Response) {
	const { orderId } = req.params;
	const { status } = req.body;

	if (!["WAITING", "IN_PRODUCTION", "DONE"].includes(status)) {
		return res.status(400).json({
			error: "ta errado, maluco",
		});
	}

	await Order.findByIdAndUpdate(orderId, { status });

	res.sendStatus(204);
}
