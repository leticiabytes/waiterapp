import styled from "styled-components";

export const Board = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;

	padding: 16px;

	border: 1px solid rgba(224, 224, 224, 0.8);
	border-radius: 16px;

	> header {
		display: flex;
		align-items: center;

		gap: 8px;
		padding: 8px;

		font-size: 14px;
	}
`;

export const OrdersList = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;

	width: 100%;
	margin-top: 24px;

	button {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 4px;

		height: 128px;

		background: #ffffff;
		border: 1px solid rgba(224, 224, 224, 0.4);
		border-radius: 8px;

		strong {
			font-weight: 500;
		}

		span {
			font-size: 14px;
			color: #666666;
		}

		& + button {
			margin-top: 24px;
		}
	}
`;
