import { useState } from "react";
import { Modal, Platform } from "react-native";

import { Close } from "../Icons/Close";

import { Button } from "../Button";
import { Text } from "../Text";

import * as S from './styles';

type TableModalProps = {
	visible: boolean;
	onClose: () => void;
	onSave: (table: string) => void;
}

export function TableModal({ visible, onClose, onSave }: TableModalProps) {
	const [table, setTable] = useState('');

	function handleSave() {
		onSave(table);
		setTable('');
		onClose();
	}

	return (
		<Modal transparent
			visible={visible}
			animationType="fade"
		>
			<S.Overlay behavior={Platform.OS === 'android' ? 'height' : 'padding'}>
				<S.Container>
					<S.Header>
						<Text>Informe a mesa</Text>
						<S.ButtonClose onPress={onClose}>
							<Close color="#667" />
						</S.ButtonClose>
					</S.Header>
					<S.Body>
						<S.Form>
							<S.Input
								placeholder="Número da mesa"
								placeholderTextColor="#667"
								keyboardType="number-pad"
								onChangeText={setTable}
							/>
							<Button
								title="Salvar"
								onPress={handleSave}
								disabled={table.length === 0}
							/>
						</S.Form>
					</S.Body>
				</S.Container>
			</S.Overlay>
		</Modal>
	)
}
