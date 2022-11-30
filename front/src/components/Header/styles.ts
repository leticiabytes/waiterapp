import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	padding: 48px;

	background: #d73035;
`;

export const Header = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;

	width: 100%;
	max-width: 1216px;

	.page-details {
		font-weight: 600;
		color: #ffffff;

		strong {
			margin-bottom: 6px;

			font-size: 32px;
			line-height: 120%;
		}

		p {
			font-size: 16px;
			line-height: 150%;

			opacity: 0.9;
		}
	}
`;
