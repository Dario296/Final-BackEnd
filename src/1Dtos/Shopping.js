class ShoppingDto {
	constructor({id, compra:{author= {}, productos = []}}) {
		this.author = author;
		this.productos = productos;
		this.id = id;
	}
}

export default function DTO(Shopping) {
	if (Array.isArray(Shopping)) {
		return Shopping.map((S) => new ShoppingDto(S));
	} else {
		return new ShoppingDto(Shopping);
	}
}
