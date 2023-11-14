interface IUser {
	name: string;
	password: string;
	email: string;
}

const userLiteral: IUser = {
	name: 'John',
	password: 'theBestPass98word',
	email: 'johndoe@fake.es'
}

export class User implements IUser {
	constructor({name, password, email}: IUser) {
		this._name = name;
		this._password = password;
		this._email = email;
	}
	
	get name() {
		return this._name;
	}
	
	get password() {
		return this._password;
	}
	
	get email() {
		return this._email;
	}
}
