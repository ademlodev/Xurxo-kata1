export interface IUser {
	name: string;
	password: string;
	email: string;
	id?: string;
}

const userLiteral: IUser = {
	id: '1a',
	name: 'John',
	password: 'theBestPass98word',
	email: 'johndoe@fake.es'
}

export class User implements IUser {
	constructor({name, password, email, id}: IUser) {
		this._name = name;
		this._password = password;
		this._email = email;
		this._id = id;
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
	
	get id() {
		return this._id;
	}
	
	toString() {
		const output = {
			name: this._name,
			password: this._password,
			email: this._email,
			id: this._id
		}
		
		return JSON.stringify(output)
	}
}
