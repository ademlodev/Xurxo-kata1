import { Email } from '../value-objects/Email'
import { Password } from '../value-objects/Password'
import { Entity, EntityData } from "./Entity";
import { Id } from "../value-objects/Id";
import { validateRequired } from "../utils/validations";

export interface IUser extends EntityData {
    name: string
    password: Password
    email: Email
}

export class User extends Entity {
    public readonly name: string;
    public readonly email: Email;
    public readonly password: Password;
    
    constructor(data: IUser) {
        super(data.id);
        
        this.name = data.name;
        this.email = data.email;
        this.password = data.password;
    }
    
    public static create(
      name: string,
      email: string,
      password: string,
      id = Id.generateId().value
    ) {
        return this.validateAndCreate(id, name, email, password);
    }
    
    private static validateAndCreate(
      id: string,
      name: string,
      email: string,
      password: string
    ) {
        const idValidation = Id.createExisted(id);
        const emailValidation = Email.create(email);
        const passwordValidation = Password.create(password);
        
        const errors = [
            this.extractError("id", idValidation, id),
            this.extractError("email", emailValidation, email),
            this.extractError("password", passwordValidation, password),
            { property: "name" as const, errors: validateRequired(name), value: name },
        ].filter(validation => !!validation.errors);
        
        if (errors.length === 0) {
              new User({
                  id: idValidation.get(),
                  name,
                  email: emailValidation.get(),
                  password: passwordValidation.get(),
              })
        } else {
           return errors;
        }
    }
    
    private static extractError(
      property: keyof User,
      validation: Id,
      value: unknown
    ) {
        return {
            property,
            errors: validation || '',
            value,
        };
    }
    
    equals(object?: Entity): boolean {
        return false;
    }
}
