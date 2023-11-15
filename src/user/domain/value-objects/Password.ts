import { ValueObject } from './ValueObject'
import { validateRegexp, validateRequired } from '../utils/validations'
import { Either } from '../../../core/custom-types/Either'

export interface IPassword {
    value: string
}

const PASSWORD_REGEX = new RegExp(
    /^(?!.*(.)\1{3})((?=.*[^\w\d\s])(?=.*\w)|(?=.*[\d])(?=.*\w)).{8,20}$/
)

export class Password extends ValueObject<IPassword> {
    private constructor(props: IPassword) {
        super(props)
    }

    get value(): string {
        return this.props.value
    }

    public static create(password: string): Either<Error, Password> {
        const requiredError = validateRequired(password)
        const regexpErrors = validateRegexp(password, PASSWORD_REGEX)

        if (requiredError.length > 0) {
            return Either.left(Error(requiredError))
        } else if (regexpErrors.length > 0) {
            return Either.left(Error(regexpErrors))
        } else {
            return Either.right(new Password({ value: password }))
        }
    }
}
