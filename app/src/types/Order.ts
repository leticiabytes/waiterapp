export interface Order {
	table: string;
	products: {
		product: string;
		quantity: number;
	}[];
}
