import { useState } from 'react';
import { FlatList } from 'react-native';

import { categories } from '../../mocks/categories';
import { Category } from '../../types/Category';
import { Text } from '../Text';

import * as S from './styles';

type CategoryProps = {
	categories: Category[];
	onSelectCategory: (categoryId: string) => void;
}

export function Categories({ categories, onSelectCategory }: CategoryProps) {
	const [selectedCategory, setSelectedCategory] = useState('');

	function handleSelectCategory(catetoryId: string) {
		const category = selectedCategory === catetoryId ? '' : catetoryId;

		onSelectCategory(category);
		setSelectedCategory(category);
	}

	return (
		<FlatList
			data={categories}
			horizontal
			showsHorizontalScrollIndicator={false}
			// contentContainerStyle={{ paddingRight: 24 }}
			keyExtractor={category => category._id}
			renderItem={({ item: category }) => {
				const isSelected = selectedCategory === category._id;

				return (
					<S.Container onPress={() => handleSelectCategory(category._id)}>
						<S.Icon>
							<Text opacity={isSelected ? 1 : 0.5}>{category.icon}</Text>
						</S.Icon>
						<Text size={14} weight="600" >{category.name}</Text>
					</S.Container>
				)
			}}
		/>
	)
}
