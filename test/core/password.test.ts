import { beforeEach, describe } from "node:test";
import { Password } from "../../src/core/domain/value-objects/Password";

describe('Password', ()=>{
  const EXAMPLE_PASSWORD_WRONG = 'pass';
  const EXAMPLE_PASSWORD_OK = 'pass123word';
  
  describe('Create Password', () =>{
    it('should create an instance of Password', ()=> {
      const instante = Password.create(EXAMPLE_PASSWORD_OK);
      expect(instante).toBeInstanceOf(Password);
    });
  })
  
  describe('Password Validations', () => {
    it('should be valid passwords', () => {
      expect(Password.create(EXAMPLE_PASSWORD_OK)).toBeTruthy();
    })
  })
  
});
