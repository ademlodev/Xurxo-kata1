import { ValueObject } from './ValueObject'
import { validateRequired } from '../utils/validations'
import { Either } from '../../../core/custom-types/Either'

export interface IdProps {
    value: string
}

export class Id extends ValueObject<IdProps> {
    private constructor(props: IdProps) {
        super(props)
    }

    get value(): string {
        return this.props.value
    }

    public static generateId(): Id {
        return new Id({ value: crypto.randomUUID() })
    }

    public static createExisted(id: string): Either<Error, Id> {
        const requiredError = validateRequired(id)

        if (requiredError.length > 0) {
            return Either.left(Error(requiredError))
        } else {
            return Either.right(new Id({ value: id }))
        }
    }
}
