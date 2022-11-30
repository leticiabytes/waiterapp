import { toast } from "react-toastify";

import * as S from "./styles";

import { Order } from "../../../types/Order";
import { OrderModal } from "../../OrderModal";
import { useState } from "react";
import { cancelOrder, changeOrderStatus } from "../../../services/orders.service";

export type OrdersBoardProps = {
	icon: string;
	title: string;
	orders: Order[];
	onChangeOrderStatus: (orderId: string, status: Order["status"]) => void;
	onCancelOrder: (orderId: string) => void;
};

export function OrdersBoard({ icon, title, orders, onChangeOrderStatus, onCancelOrder }: OrdersBoardProps) {
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const [selectedOrder, setSelectedOrder] = useState<null | Order>(null);

	function handleOpenModalOrder(order: Order) {
		setSelectedOrder(order);
		setIsModalVisible(true);
	}

	function handleCloseModalOrder() {
		setIsModalVisible(false);
		setSelectedOrder(null);
	}

	async function handleCancelOrder() {
		setIsLoading(true);

		if (!selectedOrder) return;
		await cancelOrder(selectedOrder._id);

		toast.success(`O pedido da mesa ${selectedOrder.table} foi cancelado`);

		onCancelOrder(selectedOrder._id);
		setIsLoading(false);
		setIsModalVisible(false);
	}

	async function handleChangeOrderStatus() {
		setIsLoading(true);

		const status = selectedOrder?.status === "WAITING" ? "IN_PRODUCTION" : "DONE";

		if (!selectedOrder) return;
		await changeOrderStatus(selectedOrder._id, { status });

		toast.success(`O pedido da mesa ${selectedOrder.table} teve o status alterado.`);

		onChangeOrderStatus(selectedOrder._id, status);
		setIsLoading(false);
		setIsModalVisible(false);
	}

	return (
		<S.Board>
			<header>
				<span>{icon}</span>
				<strong>{title}</strong>
				<span>({orders.length})</span>
			</header>
			<S.OrdersList>
				{orders.map((order) => (
					<button type="button" key={order._id} onClick={() => handleOpenModalOrder(order)}>
						<strong>Mesa {order.table}</strong>
						<span>{order.products.length} itens</span>
					</button>
				))}
			</S.OrdersList>

			<OrderModal
				visible={isModalVisible}
				order={selectedOrder}
				isLoading={isLoading}
				onChangeOrderStatus={handleChangeOrderStatus}
				onCancelOrder={handleCancelOrder}
				onClose={handleCloseModalOrder}
			/>
		</S.Board>
	);
}
