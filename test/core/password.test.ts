import { beforeEach, describe } from "node:test";
import { Password } from "../../src/core/domain/value-objects/Password";

describe('Password', ()=>{

  const EXAMPLE_PASSWORD_WRONG = 'pass';const EXAMPLE_PASSWORD_OK = 'pass123word';
  let passWrong: any;
  let passOK: any;

  beforeEach(() => {
    passWrong =  Password.create(EXAMPLE_PASSWORD_WRONG);
    passOK =  Password.create(EXAMPLE_PASSWORD_OK);
  });

  describe('Create Password', () =>{
    it('should create an instance of Password', ()=> {
      const instante = Password.create(EXAMPLE_PASSWORD_OK);
      expect(instante).toBeInstanceOf(Password);
    });
  })
  
  describe('Password Validations', () => {
    it('should be valid passwords', () => {
      expect(Password.create(passOK)).toBeTruthy();
    })
    
    it('should no be valid passwords', () => {
      expect(Password.create(passWrong)).toBeFalsy();
    })
  })
  
});
