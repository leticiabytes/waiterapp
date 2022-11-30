import { useState, useEffect } from "react";

import { Header } from "../components/Header";
import { Button } from "../components/Button";
import { Menu } from "../components/Menu";
import { Categories } from "../components/Categories";
import { Cart } from "../components/Cart";
import { TableModal } from "../components/TableModal";
import { Footer } from "../components/Footer";
import { Text } from "../components/Text";

import { CartItem } from "../types/Cart";
import { Product } from "../types/Product";
import { Category } from "../types/Category";

import { Empty } from "../components/Icons/Empty";

import { getCategories, getProductsByCategories } from "../services/categories.service";
import { getProducts } from "../services/products.service";

import * as S from './styles';

export function Main() {
	const [isTableModalVisible, setIsTableModalVisible] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	const [selectedTable, setSelectedTable] = useState('');
	const [cartItems, setCartItems] = useState<CartItem[]>([]);

	const [products, setProducts] = useState<Product[]>([]);
	const [categories, setCategories] = useState<Category[]>([]);

	function handleSaveTable(table: string) {
		setSelectedTable(table);
	}

	function handleResetOrder() {
		setSelectedTable('');
		setCartItems([]);
	}

	function handleAddToCart(product: Product) {
		if (!selectedTable) {
			setIsTableModalVisible(true);
		}

		setCartItems((prevState) => {
			const itemIndex = prevState.findIndex(cartItem => cartItem.product._id === product._id);

			if (itemIndex < 0) {
				return prevState.concat({ quantity: 1, product });
			}

			const newCartItems = [...prevState];
			const item = newCartItems[itemIndex];

			newCartItems[itemIndex] = {
				...item,
				quantity: item.quantity + 1,
			}

			return newCartItems;
		});
	}


	function handleRemoveCartItem(product: Product) {
		setCartItems((prevState) => {
			const itemIndex = prevState.findIndex(cartItem => cartItem.product._id === product._id);

			const item = prevState[itemIndex];
			const newCartItems = [...prevState];

			if (item.quantity === 1) {
				newCartItems.splice(itemIndex, 1);

				return newCartItems;
			}

			newCartItems[itemIndex] = {
				...item,
				quantity: item.quantity - 1
			};

			return newCartItems;
		});
	}

	async function handleSelectCategory(categoryId: string) {
		if (!categoryId) {
			return getProducts();
		}

		const { data } = await getProductsByCategories(categoryId);
		setProducts(data);
	}

	useEffect(() => {
		Promise.all([
			getCategories(),
			getProducts(),
		]).then(([categoriesResponse, productsResponse]) => {
			setCategories(categoriesResponse.data);
			setProducts(productsResponse.data);
		}).catch((error) => {
			console.error('❌ ~ file: index.tsx ~ line 97 ~ useEffect ~ error', error);
		}
		).finally(() => {
			setIsLoading(false);
		});
	}, []);


	return (
		<>
			<S.Container>
				<Header selectedTable={selectedTable} onCancelOrder={handleResetOrder} />
				<S.CategoryContainer>
					<Categories
						categories={categories}
						onSelectCategory={handleSelectCategory}
					/>
				</S.CategoryContainer>

				{products.length > 0 ? (
					<S.MenuContainer>
						<Menu
							products={products}
							onAddToCart={handleAddToCart}
						/>
					</S.MenuContainer>
				) : (
					<S.CenteredContainer>
						<Empty />
						<Text color="#667" style={{ marginTop: 24 }}>Nenhum produto encontrado!</Text>
					</S.CenteredContainer>
				)}
			</S.Container>
			<Footer>
				{!selectedTable && (
					<Button
						title="Novo Pedido"
						disabled={isLoading}
						onPress={() => setIsTableModalVisible(true)}
					/>
				)}
				{selectedTable &&
					<Cart
						cartItems={cartItems}
						selectedTable={selectedTable}
						onAdd={handleAddToCart}
						onRemove={handleRemoveCartItem}
						onConfirmedOrder={handleResetOrder}
					/>
				}
			</Footer>

			<TableModal
				visible={isTableModalVisible}
				onSave={handleSaveTable}
				onClose={() => setIsTableModalVisible(false)}
			/>
		</>
	)
}
