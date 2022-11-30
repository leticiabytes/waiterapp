import styled from "styled-components/native";
import { Platform, StatusBar } from "react-native";

const isAndroid = Platform.OS === "android";

export const Container = styled.SafeAreaView`
	flex: 1;

	padding: 24px;
	margin-top: ${isAndroid ? `${StatusBar.currentHeight}px` : 0};

	background: #fafafa;
`;

export const CategoryContainer = styled.View`
	height: 72px;
	margin-top: 32px;
`;

export const MenuContainer = styled.View`
	flex: 1;
`;

export const CenteredContainer = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
`;
