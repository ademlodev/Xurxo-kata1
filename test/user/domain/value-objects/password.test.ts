import { describe } from 'node:test'
import { Password } from '../../../../src/user/domain/value-objects/Password'

describe('Password', () => {
    const EXAMPLE_PASSWORD_OK = 'pass123word'

    it('should return success reponse if password is valid', () => {
        const passwordResult = Password.create(EXAMPLE_PASSWORD_OK)

        passwordResult.fold(
            (error) => fail(error),
            (password) => expect(password.value).toEqual(EXAMPLE_PASSWORD_OK)
        )
    })
    it('should return error when password is not valid', () => {
        const passwordResult = Password.create('')

        passwordResult.fold(
            (error) => expect(error),
            (password) => fail(password)
        )
    })
})
