
class Password implements ValueObject {
    constructor(password: string) {
        this.value: password;
    }

    public validate(): boolean {
        const regEx = new RegExp(^(?!.*(.)\1{3})((?=.*[^\w\d\s])(?=.*\w)|(?=.*[\d])(?=.*\w)).{8,20}$);

        return this.value.match(regEx);
    }
}