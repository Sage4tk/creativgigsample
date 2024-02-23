export interface IFirstForm {
    colors: Array<string>
}

export interface IForm {
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