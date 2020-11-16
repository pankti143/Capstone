export interface ILogin {
  _id?: string;
  name: string;
  email:string;
  password:string;
}

export class Login implements ILogin {
  constructor(
    public name: string,
    public email:string,
    public password: string,
    public _id?: string
  ) {
    this._id = _id ? _id : null;
    this.name = name;
    this.email=email;
    this.password=password;
  }
}