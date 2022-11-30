import { ActivityIndicator } from 'react-native';
import { Text } from '../Text';
import * as S from './styles';

type ButtonProps = {
	title: string;
	disabled?: boolean;
	loading?: boolean;
	onPress: () => void;
}

export function Button({ title, onPress, disabled, loading }: ButtonProps) {
	return (
		<S.Container onPress={onPress} disabled={disabled || loading}>
			{!loading && (<Text weight='600' color='#fff'>{title}</Text>)}
			{loading && (<ActivityIndicator color="#fff" />)}
		</S.Container>
	)
}
