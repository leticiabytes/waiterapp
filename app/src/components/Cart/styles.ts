import styled from "styled-components/native";

export const Container = styled.View`
	flex-direction: row;
	justify-content: space-between;

	padding: 8px 0;
`;

export const ContainerProduct = styled.View`
	flex-direction: row;
`;

export const Actions = styled.View`
	flex-direction: row;
`;

export const Image = styled.Image`
	width: 48px;
	height: 40px;

	border-radius: 6px;
`;

export const QuantityContainer = styled.View`
	margin-left: 12px;
	min-width: 20px;
`;

export const ProductDetails = styled.View`
	justify-content: space-between;
`;

export const Sumary = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;
export const TotalContainer = styled.View`
	max-width: 140px;
`;
