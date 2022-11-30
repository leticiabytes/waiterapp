import { FlatList, Modal } from 'react-native';

import { Product } from '../../types/Product';
import { formatCurrency } from '../../utils/formatCurreny';

import { Button } from '../Button';
import { Footer } from '../Footer';
import { Text } from '../Text';

import { Close } from '../Icons/Close';
import * as S from './styles';

type ProductModalProps = {
	visible: boolean;
	product: null | Product;
	onAddToCart: (product: Product) => void;
	onClose: () => void;
}

export function ProductModal({ visible, product, onAddToCart, onClose }: ProductModalProps) {

	if (!product) {
		return null
	}

	function handleAddToCart() {
		onAddToCart(product!);
		onClose();
	}

	return (
		<Modal
			visible={visible}
			animationType="slide"
			presentationStyle='pageSheet'
			onRequestClose={onClose}
		>
			<S.Image source={{ uri: `http://192.168.10.20:3001/uploads/${product.imagePath}` }}>
				<S.CloseButton onPress={onClose}>
					<Close />
				</S.CloseButton>
			</S.Image>
			<S.ModalBody>
				<S.Header>
					<Text size={24} weight='600'>
						{product.name}
					</Text>
					<Text color='#667'>{product.description}</Text>
				</S.Header>

				{product.ingredients.length > 0 && (
					<S.IngredientesContainer>
						<Text weight='600' color='#667'>
							Ingredientes
						</Text>

						<FlatList
							data={product.ingredients}
							keyExtractor={ingredients => ingredients._id}
							showsVerticalScrollIndicator={false}
							style={{ marginTop: 16 }}
							renderItem={({ item: ingredients }) => (
								<S.Ingredient>
									<Text style={{ marginRight: 20 }}>{ingredients.icon}</Text>
									<Text size={14} color="#667">{ingredients.name}</Text>
								</S.Ingredient>
							)}
						/>
					</S.IngredientesContainer>
				)}
			</S.ModalBody>
			<Footer>
				<S.FooterContainer>
					<S.FooterContentText>
						<Text>Preço</Text>
						<Text size={20} weight='600' color='#333'>{formatCurrency(product.price)}</Text>
					</S.FooterContentText>
					<Button title="Adicionar ao pedido" onPress={handleAddToCart} />
				</S.FooterContainer>
			</Footer>
		</Modal>
	)
}
