import styled from "styled-components/native";

export const Overlay = styled.KeyboardAvoidingView`
	flex: 1;
	justify-content: center;
	align-items: stretch;

	padding: 0 24px;

	background: rgba(0, 0, 0, 0.6);
`;

export const Container = styled.View`
	padding: 24px;

	border-radius: 8px;
	background: #fafafa;
`;

export const Header = styled.View`
	flex-direction: row;
	justify-content: space-between;
`;

export const ButtonClose = styled.TouchableOpacity``;

export const Body = styled.View``;

export const Form = styled.View`
	margin-top: 32px;
`;

export const Input = styled.TextInput`
	padding: 16px;
	margin-bottom: 24px;

	background: #ffffff;
	border: 1px solid rgba(204, 204, 204, 0.5);
	border-radius: 8px;
`;
