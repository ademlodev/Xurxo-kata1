import { beforeEach, describe } from "node:test";
import { Password } from "../../src/core/domain/password";

describe('Password', ()=>{

  const EXAMPLE_PASSWORD_WRONG = 'pass';const EXAMPLE_PASSWORD_OK = 'pass123word';
  let passWrong: any;
  let passOK: any;

  beforeEach(() => {
    passWrong = new Password(EXAMPLE_PASSWORD_WRONG);
    passOK = new Password(EXAMPLE_PASSWORD_OK);
  });

  describe('Create Password', () =>{
    it('should create an instance of Password', ()=> {
      const instante = new Password(EXAMPLE_PASSWORD_OK);
      expect(instante).toBeInstanceOf(Password);
    });
  })
  
  describe('Email Validations', () => {
    it('should be valid email address', () => {
      expect(passOK.validate()).toBeTruthy();
    })
    
    it('should be valid email address', () => {
      expect(passWrong.validate()).toBeFalsy();
    })
  })
  
});
