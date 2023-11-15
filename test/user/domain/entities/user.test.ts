import { User } from '../../../../src/user/domain/entities/User'

describe('User', () => {
    it('should return success reponse if User is valid', () => {
        const userResult = User.create(
            'Javier',
            'example@example.com',
            '12345678'
        )

        userResult.fold(
            (error) => fail(error),
            (user) => expect(user).toEqual(userResult)
        )
    })
})
