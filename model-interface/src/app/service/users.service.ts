import { Injectable } from '@angular/core';

interface datatype {
  name: string,
  id: number,
  indian:boolean,
  address:any;
}
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }
  getData(){
    const data : datatype = {
      name : "Anurag sahu",
      id : 0,
      indian : true,
      address : "Ram nagar road"
    }
  }
}
