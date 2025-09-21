export interface Signup{
  name : string;
  email : string;
  password : string;
}

export interface Login{
  email : string;
  password : string;
}

export interface product{
  name : string;
  price : number;
  category : string;
  color : string;
  image : string;
  description : string;
  id: number;
  quantity:undefined|number;
}
