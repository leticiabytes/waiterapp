import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
	flex-direction: row;
	align-items: center;
`;

export const Image = styled.Image`
	width: 120px;
	height: 96px;

	border-radius: 8px;
	background: black;
`;

export const Details = styled.View`
	flex: 1;
	margin-left: 16px;
`;

export const Separator = styled.View`
	width: 100%;
	height: 1px;

	margin: 24px 0;

	background: #ccc;
`;

export const AddToCartButton = styled.TouchableOpacity`
	position: absolute;
	bottom: 0;
	right: 0;
`;
