class CartDto {
	constructor({author: {name, lastName, address, phoneNumber, username}, productos = [], timestamp, }) {
		this.author = {name, lastName, address, phoneNumber, username};
        this.productos = productos;
        this.timestamp = timestamp;
	}
}

export default function DTO(Cart) {
	if (Array.isArray(Cart)) {
		return Cart.map((C) => new CartDto(C));
	} else {
		return new CartDto(Cart);
	}
}
