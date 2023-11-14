import { beforeEach, describe } from "node:test";
import { Password } from "../../src/core/domain/password";

describe('Password', ()=>{

  const EXAMPLE_PASSWORD = 'pass';
  let pass: any;

  beforeEach(() => {
    pass = new Password(EXAMPLE_PASSWORD);
  });

  describe('Create Password', () =>{
    it('should create an instance of Password', ()=> {
      const instante = new Password(EXAMPLE_PASSWORD);
      expect(instante).toBeInstanceOf(Password);
    });
  })
  
  describe('Email Validations', () => {
    it('should be valid email address', () => {
      expect(pass.validate()).toBeTruthy();
    })
  })
  
});
