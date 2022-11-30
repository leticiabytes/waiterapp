import { api } from "./api";

export function getCategories() {
	return api.get("/categories");
}

export function getProductsByCategories(categoryId: string) {
	return api.get(`/categories/${categoryId}/products`);
}
