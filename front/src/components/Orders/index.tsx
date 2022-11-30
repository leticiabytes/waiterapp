import { useState, useEffect } from "react";
import socketIo from "socket.io-client";

import { OrdersBoard } from "./OrdersBoard";
import { Order } from "../../types/Order";

import { getOrders } from "../../services/orders.service";

import * as S from "./styles";

export function Orders() {
	const [orders, setOrders] = useState<Order[]>([]);

	async function handleGetOrders() {
		const response = await getOrders();
		setOrders(response.data);
	}

	function handleCancelOrder(orderId: string) {
		setOrders((prevState) => prevState.filter((order => order._id !== orderId)));
	}

	function handleChangeOrderStatus(orderId: string, status: Order["status"]) {
		setOrders((prevState) => prevState.map((order) => (
			order._id === orderId
				? { ...order, status }
				: order
		)));
	}

	const waiting = orders.filter((order) => order.status === "WAITING");
	const inProduction = orders.filter((order) => order.status === "IN_PRODUCTION");
	const done = orders.filter((order) => order.status === "DONE");

	useEffect(() => {
		const socket = socketIo("http://localhost:3001", {
			transports: ["websocket"],
		});

		socket.on("orders@new", () => {
			handleGetOrders();
		});

		handleGetOrders();
	}, []);

	return (
		<S.Container>
			<OrdersBoard
				icon="⏰"
				title="Fila de Espera"
				orders={waiting}
				onChangeOrderStatus={handleChangeOrderStatus}
				onCancelOrder={handleCancelOrder}
			/>
			<OrdersBoard
				icon="🧑‍🍳"
				title="Em Produção"
				orders={inProduction}
				onChangeOrderStatus={handleChangeOrderStatus}
				onCancelOrder={handleCancelOrder}
			/>
			<OrdersBoard
				icon="✅"
				title="Concluído"
				orders={done}
				onChangeOrderStatus={handleChangeOrderStatus}
				onCancelOrder={handleCancelOrder}
			/>
		</S.Container>
	);
}
