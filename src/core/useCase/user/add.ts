import { IUser, User } from "../../domain/entities/user";

export default function addUser({ name, password, email }: IUser) {
	if (!name || !password || !email) {
		throw new Error('username, password and email fields cannot be empty');
	}
	
	// TODO
	const createNewUser =  new User({ name, password, email});
	

}
