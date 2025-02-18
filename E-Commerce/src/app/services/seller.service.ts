import { EventEmitter, inject, Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Login, SignUp } from '../data-type';
import { BehaviorSubject } from 'rxjs';
import { Router } from "@angular/router";
@Injectable({
  providedIn: 'root'
})
export class SellerService {

  isSellerloggedIn = new BehaviorSubject<boolean>(false);
  isLoginError = new EventEmitter<boolean>(false);

  private http = inject(HttpClient);
  private router = inject(Router);
  // constructor(private http:HttpClient, private router: Router) { }

  userSignUp(data: SignUp) {
    this.http
      .post("http://localhost:3000/seller",
        data,
        { observe: "response" }).subscribe((result) => {
          console.warn(result);
          if (result) {

            localStorage.setItem("seller", JSON.stringify(result.body));  // save localstorage
            this.router.navigate(["seller-home"]); // redirect line
          }
        });
  }
  reloadSeller() {
    if (localStorage.getItem("seller")) {
      this.isSellerloggedIn.next(true);
      this.router.navigate(["seller-home"]);
    }
  }

  userLogin(data: Login) {
    console.log(data);
    this.http.get(`http://localhost:3000/seller?email=${data.email}&password=${data.password}`,
      { observe: "response" })
      .subscribe((result: any) => {
        console.warn(result);
        if (result && result.body && result.body.length){
          console.log("user are logged In");

          localStorage.setItem("seller", JSON.stringify(result.body)) // save localstorage
          this.router.navigate(["seller-home"]);  // redirect line
        }
        else {
          console.log("login failed !!");
          this.isLoginError.emit(true);
        }
      })
  }
}
