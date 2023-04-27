class UserDto {
	constructor({ id, name, lastName, address, age, phoneNumber, photo, username, password, admin }) {
		this.id = id;
		this.name = name;
		this.lastName = lastName;
		this.address = address;
		this.age = age;
		this.phoneNumber = phoneNumber;
		this.photo = photo;
		this.username = username;
		this.password = password;
		this.admin = admin;
	}
}

export default function DTO(User) {
	if (Array.isArray(User)) {
		return User.map((U) => new UserDto(U));
	} else {
		return new UserDto(User);
	}
}
