import { Email } from '../../../src/user/domain/value-objects/Email'
import { User } from '../../../src/user/domain/entities/User'
import { Password } from '../../../src/user/domain/value-objects/Password'
import { UserRepository } from '../../../src/user/domain/repositories/user.repository'

describe('User Repository Tests', () => {
    let sut: UserRepository
    let userMock: User

    beforeEach(() => {
        userMock = new User({
            name: 'Jorge',
            password: new Password('12345'),
            email: new Email('jorge@example.com'),
        })
    })

    describe('Create User', () => {
        it('should create an User', () => {
            sut.save(userMock)
            expect(userMock).toBeInstanceOf(User)
        })
    })

    describe('Create User validations', () => {
        it('should not be same email when create', () => {
            //TODO
        })
    })
})
