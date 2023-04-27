class ChatDto {
	constructor({author: {name} , text, fyh }) {
		this.name = name;
		this.text = text;
		this.fyh = fyh;
	}
}

export default function DTO(Chat) {
	if (Array.isArray(Chat)) {
		return Chat.map((C) => new ChatDto(C));
	} else {
		return new ChatDto(Chat);
	}
}
