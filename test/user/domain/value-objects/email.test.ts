import { describe } from 'node:test'
import { Email } from '../../../../src/user/domain/value-objects/Email'

describe('Email', () => {
    const EXAMPLE_EMAIL = 'example@example.com'

    it('should return success reponse if email is valid', () => {
        const emailResult = Email.create(EXAMPLE_EMAIL)

        emailResult.fold(
            (error) => fail(error),
            (email) => expect(email.value).toEqual(EXAMPLE_EMAIL)
        )
    })
    it('should return error when email is not valid', () => {
        const emailResult = Email.create('')

        emailResult.fold(
            (error) => expect(error),
            (email) => fail(email)
        )
    })
})
