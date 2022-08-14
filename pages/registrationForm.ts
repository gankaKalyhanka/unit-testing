
export class RegistrationForm
{


    public login: string
    public minLoginLength: number = 8
    public maxLoginLength: number = 32
    public loginErrorMessage: string = 'Некорректный e-mail'

    public password: string
    public minPasswordLength: number = 8
    public maxPasswordLength: number = 64


    public repeatPassword: string
    public minRepeatPasswordLength: number = 8
    public maxRepeatPasswordLength: number = 64


    public passworsErrorMessage1: string = 'Минимум 8 символов'
    public passworsErrorMessage2: string = 'Максимум 64 символа'
    public passworsErrorMessage3: string = 'Пароли не совпадают'

    public registerButton: string = 'link'


}