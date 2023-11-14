import test, { beforeEach, describe } from "node:test";
import { Email } from "../../src/core/domain/email";

describe('Email', ()=>{

  const EXAMPLE_EMAIL = 'example@example.com';
  let sut: Email;

  beforeEach(() => {
    sut = new Email(EXAMPLE_EMAIL);
  });

  describe('Create Email', () =>{
    it('should create an instance of Email', ()=> {
      const instante = new Email(EXAMPLE_EMAIL);
      expect(instante).toBeInstanceOf(Email);
    });
  })
});