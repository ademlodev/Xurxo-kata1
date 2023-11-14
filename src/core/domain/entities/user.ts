import { Email } from '../email'
import { Password } from '../password'

export interface IUser {
    name: string
    password: Password
    email: Email
    id?: string
}

const userLiteral: IUser = {
    id: '1a',
    name: 'John',
    password: new Password('theBestPass98word'),
    email: new Email('johndoe@fake.es'),
}

export class User implements IUser {
    private _name: string
    private _password: Password
    private _email: Email
    private _id: string | undefined

    constructor({ name, password, email, id }: IUser) {
        this._name = name
        this._password = password
        this._email = email
        this._id = id
    }

    get name() {
        return this._name
    }

    get password() {
        return this._password
    }

    get email() {
        return this._email
    }

    get id() {
        return this._id
    }

    toString() {
        const output = {
            name: this._name,
            password: this._password,
            email: this._email,
            id: this._id,
        }

        return JSON.stringify(output)
    }
}
