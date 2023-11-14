import { beforeEach, describe } from "node:test";
import { Email } from "../../src/core/domain/email";

describe('Email Tests', ()=>{
  
  const EXAMPLE_EMAIL = 'example@example.com';
  let sut;
  
  beforeEach(() => {
    sut = new Email(EXAMPLE_EMAIL);
  });
  
  describe('Create Email', () =>{
    it('should create an instance of Email', ()=> {
      expect(sut).toBeInstanceOf(Email);
    });
  })
  
  describe('Email Validations', () => {
    it('should be valid email address', () => {
      expect(sut.validate()).toBeTruthy();
    })
  })
});
