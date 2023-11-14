export class Email {
    //TODO implements ValueObject {
    value: string

    constructor(email: string) {
        this.validate(email); //TODO exception o either
        this.value = email
    }

    private validate(email: string): boolean {
        const regexp = new RegExp(
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )

        return regexp.test(email)
    }
}
