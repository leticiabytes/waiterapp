import { api } from "./api";

import { Order } from "../types/Order";

export function createOrder(order: Order) {
	return api.post("/orders", order);
}
