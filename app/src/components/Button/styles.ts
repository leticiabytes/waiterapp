import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
	justify-content: center;
	align-items: center;

	padding: 14px 24px;
	border-radius: 28px;

	background: ${({ disabled }) => (disabled ? "#999999" : "#d73035")};
`;
