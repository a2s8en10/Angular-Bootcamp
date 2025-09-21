import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor() { }

  users()
  {
    return [
      {name: "Anurag", email: "anurag.sahu@gmail.com"},
      {name: "Anu", email: "anu.sahu@gmail.com"},
      {name: "Relax", email: "relax.sahu@gmail.com"},
      {name: "Pride", email: "pride.sahu@gmail.com"}
    ]
  }
}
