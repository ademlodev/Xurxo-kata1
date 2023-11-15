import { Either } from '../../../core/custom-types/Either'
import { validateRegexp, validateRequired } from '../utils/validations'
import { ValueObject } from './ValueObject'

export interface IEmail {
    value: string
}

const EMAIL_REGEX = new RegExp(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
)

export class Email extends ValueObject<IEmail> {
    public readonly value: string

    private constructor(props: IEmail) {
        super(props)

        this.value = props.value
    }

    public static create(email: string): Either<Error, Email> {
        const requiredError = validateRequired(email)
        const regexpErrors = validateRegexp(email, EMAIL_REGEX)

        if (requiredError.length > 0) {
            return Either.left(Error(requiredError))
        } else if (regexpErrors.length > 0) {
            return Either.left(Error(regexpErrors))
        } else {
            return Either.right(new Email({ value: this.format(email) }))
        }
    }

    private static format(email: string): string {
        return email.trim().toLowerCase()
    }
}
