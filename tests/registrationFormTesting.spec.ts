import {RegistrationForm} from "../pages/registrationForm";

describe("Jest Tests", function () {
   const regForm = new RegistrationForm()

    it("Check min login length of registration form", function () {
        expect(regForm.minLoginLength).toEqual(8)
    })

    it("Check max login length of registration form", function () {
        expect(regForm.maxLoginLength).toEqual(32)
    })

    it("Check max password length of registration form", function () {
        expect(regForm.maxPasswordLength).toEqual(64)
    })

    it("Check min password length of registration form", function () {
        expect(regForm.minPasswordLength).toEqual(8)
    })

    it("Check password and repeatPassword", function () {
        expect(regForm.password).toEqual(regForm.repeatPassword)
    })

    it("Check registerButton", function () {
        expect(regForm.registerButton).toBeDefined()
    })

    it("Check minRepeatPasswordLength", function () {
        expect(regForm.minRepeatPasswordLength).toBe(8)
    })

    it("Negative: passwords do not match", function () {
        if (regForm.password != regForm.repeatPassword)
        {expect(regForm.passworsErrorMessage3).toEqual('Пароли не совпадают')}

    })

    it("Negative: empty login", function () {
        if (regForm.login === null)
        {expect(regForm.loginErrorMessage).toEqual('Некорректный e-mail')}
    })

    it("Negative: short login", function () {
        if (regForm.minLoginLength === 4)
        {expect(regForm.loginErrorMessage).toEqual('Некорректный e-mail')}
    })

    it("Negative; long login", function () {
        if (regForm.maxLoginLength === 33)
        {expect(regForm.loginErrorMessage).toEqual('Некорректный e-mail')}
    })

    it("Negative: long password", function () {
        if (regForm.maxPasswordLength === 65)
        {expect(regForm.passworsErrorMessage2).toEqual('Максимум 64 символа')}
    })

    it("Negative; short password", function () {
        if (regForm.minPasswordLength === 65)
        {expect(regForm.passworsErrorMessage1).toEqual('Минимум 8 символов')}
    })

    it("Negative: empty password", function () {
        if (regForm.password === null)
        {expect(regForm.passworsErrorMessage1).toEqual('Минимум 8 символов')}
    })


})
