import { beforeEach, describe } from 'node:test'
import { Email } from '../../src/user/domain/value-objects/Email'

describe('Email Tests', () => {
    const EXAMPLE_EMAIL = 'example@example.com'

    describe('Create Email', () => {
        it('should create an instance of Email', () => {
            expect(Email.create(EXAMPLE_EMAIL)).toBeInstanceOf(Email)
        })
    })

    describe('Email Validations', () => {
        it('should be valid email address', () => {
            expect(Email.create(EXAMPLE_EMAIL)).toBeTruthy()
        })
    })
})
