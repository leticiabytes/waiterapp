import { api } from "./api";

type Status = {
	status: "WAITING" | "IN_PRODUCTION" | "DONE";
};

export function getOrders() {
	return api.get("/orders");
}

export function cancelOrder(orderId: string) {
	return api.delete(`/orders/${orderId}`);
}

export function changeOrderStatus(orderId: string, status: Status) {
	return api.patch(`/orders/${orderId}`, status);
}
