import { ValueObject } from "./ValueObject";
import { validateRegexp, validateRequired } from "../utils/validations";

export interface IPassword {
    value: string;
}

const PASSWORD_REGEX = new RegExp(/^(?!.*(.)\1{3})((?=.*[^\w\d\s])(?=.*\w)|(?=.*[\d])(?=.*\w)).{8,20}$/);


export class Password extends ValueObject<IPassword>{
    private constructor(props: IPassword) {
        super(props);
    }
    
    get value(): string {
        return this.props.value;
    }
    
    public static create(password: string) {
        const requiredError = validateRequired(password);
        const regexpErrors = validateRegexp(password, PASSWORD_REGEX);
        
        if (requiredError.length > 0) {
            throw Error(requiredError);
        } else if (regexpErrors.length > 0) {
            throw Error(regexpErrors);
        } else {
            return new Password({ value: password });
        }
    }
}
