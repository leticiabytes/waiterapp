import { useEffect } from "react";

import * as S from "./styles";

import { Order } from "../../types/Order";
import { formatCurrency } from "../../utils/formatCurreny";

import closeIcon from "../../assets/images/close-icon.svg";

type OrderModalProps = {
	visible: boolean;
	order: Order | null;
	isLoading: boolean;
	onChangeOrderStatus: () => void;
	onCancelOrder: () => Promise<void>;
	onClose: () => void;
}

export function OrderModal({
	visible,
	order,
	isLoading,
	onChangeOrderStatus,
	onCancelOrder,
	onClose }: OrderModalProps) {

	useEffect(() => {

		document.addEventListener("keydown", (event) => {
			if (event.key === "Escape") {
				onClose();
			}
		});
	}, []);

	if (!visible || !order) {
		return null;
	}

	console.log(order.products);


	const total = order.products.reduce((total, { product, quantity }) => {
		return total + (product.price * quantity);
	}, 0);

	return (
		<S.Overlay>
			<S.Modal>
				<header>
					<strong>Mesa {order.table}</strong>
					<button type="button" onClick={onClose}>
						<img src={closeIcon} alt="Close icon" />
					</button>
				</header>
				<div className="status-container">
					<small>Status do Pedido</small>
					<div>
						<span>
							{order.status === "WAITING" && "🕐"}
							{order.status === "IN_PRODUCTION" && "🧑‍🍳"}
							{order.status === "DONE" && "✅"}
						</span>
						<span>
							{order.status === "WAITING" && "Fila de Espera"}
							{order.status === "IN_PRODUCTION" && "Em Produção"}
							{order.status === "DONE" && "Pronto"}
						</span>
					</div>
				</div>
				<S.Details>
					<strong>Itens</strong>
					{order.products.map(({ _id, product, quantity }) => (
						<div className="order-items" key={_id}>
							<div className="item">

								<img
									src={`http://localhost:3001/uploads/${product.imagePath}`}
									alt={product.name} />

								<span className="quantity">{quantity}x</span>

								<div className="description">
									<strong>{product.name}</strong>
									<span>{formatCurrency(product.price)}</span>
								</div>
							</div>
						</div>
					))}

					<div className="total">
						<span>Total</span>
						<strong>{formatCurrency(total)}</strong>
					</div>
				</S.Details>

				<S.Actions>
					{order.status !== "DONE" && (
						<>
							<button
								type="button"
								className="primary"
								disabled={isLoading}
								onClick={onChangeOrderStatus}
							>
								<span>
									{order.status === "WAITING" && "🧑‍🍳"}
									{order.status === "IN_PRODUCTION" && "✅"}
								</span>
								<span>
									{order.status === "WAITING" && "Iniciar Produção"}
									{order.status === "IN_PRODUCTION" && "Concluir Pedido"}
								</span>
							</button>
							<button
								type="button"
								className="secondary"
								disabled={isLoading}
								onClick={onCancelOrder}
							>
								Cancelar Pedido
							</button>
						</>
					)}
				</S.Actions>
			</S.Modal>
		</S.Overlay>
	);
}
