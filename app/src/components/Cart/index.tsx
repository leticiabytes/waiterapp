import { useState } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';

import { Text } from '../Text';
import { Button } from '../Button';
import { OrderConfirmModal } from '../OrderConfirmModal';

import { CartItem } from '../../types/Cart';
import { Product } from '../../types/Product';
import { formatCurrency } from '../../utils/formatCurreny';

import { MinusCircle } from '../Icons/MinusCircle';
import { PlusCircle } from '../Icons/PlusCircle';

import { createOrder } from '../../services/orders.service';

import * as S from './styles';
import { Order } from '../../types/Order';

type CartProps = {
	cartItems: CartItem[];
	selectedTable: string;
	onAdd: (product: Product) => void;
	onRemove: (product: Product) => void;
	onConfirmedOrder: () => void;
}

export function Cart({ cartItems, selectedTable, onAdd, onRemove, onConfirmedOrder }: CartProps) {
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const total = cartItems.reduce((acc, cartItem) => {
		return acc + cartItem.quantity * cartItem.product.price;
	}, 0)

	async function handleConfirmOrder() {
		setIsLoading(true);

		await createOrder({
			table: selectedTable,
			products: cartItems.map((cartItem) => ({
				product: cartItem.product._id,
				quantity: cartItem.quantity
			}))
		});

		setIsLoading(false);
		setIsModalVisible(true);
	}

	function handleOk() {
		onConfirmedOrder();
		setIsModalVisible(false);
	}

	return (
		<>
			{cartItems.length > 0 && (
				<FlatList
					data={cartItems}
					keyExtractor={cartItem => cartItem.product._id}
					style={{ marginBottom: 20, maxHeight: 150 }}
					showsVerticalScrollIndicator={false}
					renderItem={({ item: cartItem }) => (
						<S.Container>
							<S.ContainerProduct>
								<S.Image source={{ uri: `http://192.168.10.20:3001/uploads/${cartItem.product.imagePath}` }} />

								<S.QuantityContainer>
									<Text size={14} color="#667">
										{cartItem.quantity}x
									</Text>
								</S.QuantityContainer>
								<S.ProductDetails>
									<Text size={14} weight="600">
										{cartItem.product.name}
									</Text>
									<Text size={14} color="#667">
										{formatCurrency(cartItem.product.price)}
									</Text>
								</S.ProductDetails>
							</S.ContainerProduct>
							<S.Actions>
								<TouchableOpacity
									style={{ marginRight: 16 }}
									onPress={() => onAdd(cartItem.product)}
								>
									<PlusCircle />
								</TouchableOpacity>
								<TouchableOpacity
									onPress={() => onRemove(cartItem.product)}
								>
									<MinusCircle />
								</TouchableOpacity>
							</S.Actions>
						</S.Container>
					)}
				/>
			)}

			<S.Sumary>
				<S.TotalContainer>
					{cartItems.length > 0 ? (
						<>
							<Text color="#667">
								Total
							</Text>
							<Text size={20} weight="600">
								{formatCurrency(total)}
							</Text>
						</>
					)
						: (
							<Text color="#999">
								Nenhum produto adicionado
							</Text>
						)
					}
				</S.TotalContainer>
				<Button
					title="Confirmar Pedido"
					onPress={handleConfirmOrder}
					disabled={cartItems.length === 0}
					loading={isLoading}
				/>
			</S.Sumary>

			<OrderConfirmModal
				visible={isModalVisible}
				onOk={handleOk}
			/>
		</>
	)
}
