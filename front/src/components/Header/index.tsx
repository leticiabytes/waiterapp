import logo from "../../assets/images/logo.svg";

import * as S from "./styles";

export function Header() {
	return (
		<S.Container>
			<S.Header>

				<div className="page-details">
					<strong>Pedidos</strong>
					<p>acompanhe os pedidos dos clientes</p>
				</div>
				<img src={logo} alt="logo" />
			</S.Header>
		</S.Container>
	);
}
