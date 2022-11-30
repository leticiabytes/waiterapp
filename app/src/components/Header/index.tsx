
import { TouchableOpacity } from 'react-native';
import { Text } from '../Text';
import * as S from './styles';

type HeaderProps = {
	selectedTable: string;
	onCancelOrder: () => void;
}

export function Header({ selectedTable, onCancelOrder }: HeaderProps) {
	return (
		<S.Container>
			{!selectedTable && (
				<>
					<Text size={15} opacity={0.9}>Bem vindo(a) ao</Text>
					<Text size={24} weight="700">WAITER
						<Text size={24}>APP</Text>
					</Text>
				</>
			)}

			{selectedTable && (
				<S.ContentOrder>
					<S.ContentOrderDescription>
						<Text size={24} weight="600">Pedido</Text>
						<TouchableOpacity onPress={onCancelOrder}>
							<Text size={14} weight="600" color='#d73035' >cancelar pedido</Text>
						</TouchableOpacity>
					</S.ContentOrderDescription>
					<S.Table>
						<Text color='#667'>Mesa {selectedTable}</Text>
					</S.Table>
				</S.ContentOrder>
			)}
		</S.Container>
	)
}
