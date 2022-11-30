import styled from "styled-components";

export const Overlay = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	position: fixed;
	width: 100%;
	height: 100%;

	left: 0px;
	top: 0px;

	background: rgba(0, 0, 0, 0.8);
	backdrop-filter: blur(4.5px);
`;

export const Modal = styled.div`
	width: 480px;
	padding: 32px;

	border-radius: 8px;
	background: #ffffff;

	header {
		display: flex;
		align-items: center;
		justify-content: space-between;

		strong {
			font-size: 24px;
		}

		button {
			line-height: 0;
			border: 0;
			background: transparent;
		}
	}

	.status-container {
		margin-top: 32px;

		small {
			font-size: 14px;
			opacity: 0.8;
		}

		div {
			display: flex;
			align-items: center;

			gap: 8px;
			margin-top: 8px;
		}
	}
`;

export const Details = styled.div`
	margin-top: 32px;

	> strong {
		font-weight: 500;
		font-size: 14px;

		color: #333333;

		opacity: 0.8;
	}

	.order-items {
		margin-top: 16px;

		.item {
			display: flex;
			gap: 12px;

			& + .item {
				margin-top: 16px;
			}

			img {
				width: 48px;
				height: 40px;

				object-fit: contain;
				border-radius: 6px;
			}

			.quatity {
				display: block;

				min-width: 20px;
				margin-left: 12px;

				color: #666666;
			}

			.description {
				margin-left: 4px;

				strong {
					display: block;
				}

				span {
					font-size: 14px;
					color: #666666;
				}
			}
		}
	}

	.total {
		display: flex;
		align-items: center;
		justify-content: space-between;

		margin-top: 24px;

		color: #333333;

		> span {
			font-weight: 500;
			font-size: 14px;
			line-height: 150%;

			opacity: 0.8;
		}

		> strong {
			font-weight: 600;
			font-size: 16px;
			line-height: 120%;
		}
	}
`;

export const Actions = styled.footer`
	display: flex;
	flex-direction: column;
	justify-content: center;

	margin-top: 32px;
	gap: 8px;

	> button:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}

	.primary {
		padding: 11px 24px;

		border: 0;
		border-radius: 48px;

		background: #333333;

		font-weight: 600;
		font-size: 16px;
		color: #ffffff;
	}

	.secondary {
		padding: 14px 24px;

		border: 0;
		background: transparent;

		font-weight: 600;
		font-size: 16px;
		color: #d73035;
	}
`;
