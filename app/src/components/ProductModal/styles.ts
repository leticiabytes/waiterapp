import styled from "styled-components/native";

export const Container = styled.View``;

export const Image = styled.ImageBackground`
	align-items: flex-end;

	width: 100%;
	height: 200px;
`;

export const CloseButton = styled.TouchableOpacity`
	justify-content: center;
	align-items: center;

	margin: 18px;
	width: 32px;
	height: 32px;

	background: rgba(0, 0, 0, 0.5);
	border-radius: 16px;
`;

export const ModalBody = styled.View`
	flex: 1;
	padding: 32px 24px 0;

	background: #fafafa;
`;

export const Header = styled.View``;

export const IngredientesContainer = styled.View`
	flex: 1;
	margin-top: 32px;
`;

export const Ingredient = styled.View`
	flex-direction: row;
	align-items: center;

	margin-bottom: 4px;
	padding: 16px;

	border: 1px solid rgba(204, 204, 204, 0.3);
	border-radius: 8px;
`;

export const FooterContainer = styled.View`
	flex-direction: row;
	justify-content: space-between;
`;

export const FooterContentText = styled.View``;
