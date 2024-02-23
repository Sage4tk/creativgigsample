export interface IFirstForm {
    colors: Array<string>
}

export interface IForm {
    name:string,
    service: string,
    industry: string,
    about: string,
    important: string,
    colors: Array<string>
    additional_info: string
    style: string,
    files: Array<File>,
    option: string,
    cost: number
}

export interface IBasicFormProp {
    form: IForm,
    setForm: (arg:IForm) => void
}