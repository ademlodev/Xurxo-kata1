
export class Password {
    value: string;
    
    constructor(password: string) {
        this.value = password;
    }

    public validate(): boolean {
        const regEx = new RegExp(/^(?!.*(.)\1{3})((?=.*[^\w\d\s])(?=.*\w)|(?=.*[\d])(?=.*\w)).{8,20}$/);

        return regEx.test(this.value);
    }
}
