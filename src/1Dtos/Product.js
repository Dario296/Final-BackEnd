class ProductDto {
	constructor({id, timestamp, name, description, code, price, photo, stock }) {
		this.id = id;
		this.timestamp = timestamp;
		this.name = name;
		this.description = description;
		this.code = code;
		this.price = price;
		this.photo = photo;
		this.stock = stock;
	}
}

export default function DTO(Product) {
	if (Array.isArray(Product)) {
		return Product.map((P) => new ProductDto(P));
	} else {
		return new ProductDto(Product);
	}
}
