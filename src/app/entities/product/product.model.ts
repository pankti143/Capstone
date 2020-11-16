export interface IProduct {
  _id?: string;
  name: string;
  brand: string;
  email:string;
  quantity:string;
  price:string;
  image: string;
}

export class Product implements IProduct {
  constructor(
    public name: string,
    public brand: string,
    public email:string,
    public quantity:string,
    public price:string,
    public image: string,
    public _id?: string
  ) {
    this._id = _id ? _id : null;
    this.name = name;
    this.brand = brand;
    this.email=email;
    this.quantity=quantity;
    this.price=price;
    this.image = image;
  }
}