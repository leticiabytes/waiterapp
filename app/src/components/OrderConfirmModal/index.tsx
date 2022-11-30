import { StatusBar } from "expo-status-bar";
import { Modal } from "react-native";

import { Text } from "../Text";

import { CheckCircle } from "../Icons/CheckCircle";
import * as S from './styles';

type OrderConfirmModalProps = {
	visible: boolean;
	onOk: () => void;
}

export function OrderConfirmModal({ visible, onOk }: OrderConfirmModalProps) {
	return (
		<Modal
			visible={visible}
			animationType="fade"
		>
			<StatusBar backgroundColor="#d73035" style="light" />
			<S.Container>
				<CheckCircle />
				<Text size={20} weight="600" color="#fff">Pedido confirmado</Text>
				<Text weight="400" color="#fff">O pedido já entrou na fila de produção!</Text>
				<S.OkButton onPress={onOk}>
					<Text weight="600" color="#d73035">OK</Text>
				</S.OkButton>
			</S.Container>
		</Modal>
	)
}
