import { useState } from "react";
import { FlatList } from "react-native";

import { Product } from "../../types/Product";
import { formatCurrency } from "../../utils/formatCurreny";

import { Text } from "../Text";
import { ProductModal } from "../ProductModal";
import { PlusCircle } from "../Icons/PlusCircle";

import * as S from './styles';

type MenuProps = {
	products: Product[];
	onAddToCart: (product: Product) => void;
}

export function Menu({ products, onAddToCart }: MenuProps) {
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [selectProduct, setSelectProduct] = useState<null | Product>(null);

	function handleOpenModal(product: Product) {
		setIsModalVisible(true);
		setSelectProduct(product);
	}

	return (
		<>
			<FlatList
				data={products}
				style={{ marginTop: 32 }}
				showsVerticalScrollIndicator={false}
				ItemSeparatorComponent={S.Separator}
				keyExtractor={products => products._id}
				renderItem={({ item: product }) => (
					<S.Container onPress={() => handleOpenModal(product)}>
						<S.Image source={{
							uri: `http://192.168.10.20:3001/uploads/${product.imagePath}`,
						}} />

						<S.Details>
							<Text weight="600">{product.name}</Text>
							<Text size={14} color='#667'>{product.description}</Text>
							<Text size={14} weight="600">{formatCurrency(product.price)}</Text>
						</S.Details>

						<S.AddToCartButton onPress={() => onAddToCart(product)}>
							<PlusCircle />
						</S.AddToCartButton>
					</S.Container>
				)}
			/>

			<ProductModal
				visible={isModalVisible}
				onClose={() => setIsModalVisible(false)}
				product={selectProduct}
				onAddToCart={onAddToCart}
			/>
		</>
	)
}
